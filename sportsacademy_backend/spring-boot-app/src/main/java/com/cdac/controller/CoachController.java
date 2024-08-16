//package com.cdac.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.cdac.dto.LoginStatus;
//import com.cdac.dto.RegistrationStatus;
//import com.cdac.entity.Coach;
//import com.cdac.entity.User;
//import com.cdac.exception.CoachServiceException;
//import com.cdac.exception.UserServiceException;
//import com.cdac.service.CoachService;
//import com.cdac.service.UserService;
//
//@RestController
//@CrossOrigin
//public class CoachController {
//
//	@Autowired
//    private CoachService coachService;
//	
//    @PostMapping("/coach/register")
//    public RegistrationStatus register(@RequestBody Coach coach) {
//        try {
//            int id = coachService.register(coach);
//
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(true);
//            status.setStatusMessage("Coach registered successfully!");
//            status.setUserId(id);
//            return status;
//        } catch (CoachServiceException e) {
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return status;
//        }
//    }
//    
//    @PostMapping("/coach/login")
//    public LoginStatus login(@RequestBody Coach coach) {
//        try {
//            
//            Coach authenticatedCoach = coachService.login(coach.getEmail(), coach.getPassword());
//
//            LoginStatus status = new LoginStatus();
//            status.setStatus(true);
//            status.setStatusMessage("Login successful!");
//            status.setUserId(authenticatedCoach.getId());
//            return status;
//        } catch (CoachServiceException e) {
//            LoginStatus status = new LoginStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return status;
//        }
//    }
//}








package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.Coach;
import com.cdac.exception.CoachServiceException;
import com.cdac.service.CoachService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class CoachController {

    @Autowired
    private CoachService coachService;

    @PostMapping("/coach/register")
    public ResponseEntity<RegistrationStatus> register(@RequestBody Coach coach) {
        try {
            int id = coachService.register(coach);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("Coach registered successfully!");
            status.setUserId(id);
            return ResponseEntity.status(HttpStatus.CREATED).body(status);
        } catch (CoachServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
        }
    }

    @PostMapping("/coach/login")
    public ResponseEntity<LoginStatus> login(@RequestBody Coach coach) {
        try {
            Coach authenticatedCoach = coachService.login(coach.getEmail(), coach.getPassword());

            LoginStatus status = new LoginStatus();
            status.setStatus(true);
            status.setStatusMessage("Login successful!");
            status.setUserId(authenticatedCoach.getId());
            return ResponseEntity.ok(status);
        } catch (CoachServiceException e) {
            LoginStatus status = new LoginStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(status);
        }
    }

    @PostMapping("/coach/create")
    public ResponseEntity<RegistrationStatus> createCoach(@RequestBody Coach coach) {
        try {
            int id = coachService.register(coach);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("Coach created successfully!");
            status.setUserId(id);
            return ResponseEntity.status(HttpStatus.CREATED).body(status);
        } catch (CoachServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
        }
    }

    @GetMapping("/coach/all")
    public ResponseEntity<List<Coach>> getAllCoaches() {
        List<Coach> coaches = coachService.getAllCoaches();
        return ResponseEntity.ok(coaches);
    }

    @GetMapping("/coach/{id}")
    public ResponseEntity<Coach> getCoachById(@PathVariable Long id) {
        Optional<Coach> optionalCoach = coachService.getCoachById(id);
        return optionalCoach.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/coach/update/{id}")
    public ResponseEntity<String> updateCoach(@PathVariable Long id, @RequestBody Coach updatedCoach) {
        Optional<Coach> optionalCoach = coachService.getCoachById(id);
        if (optionalCoach.isPresent()) {
            Coach existingCoach = optionalCoach.get();
            existingCoach.setFirstName(updatedCoach.getFirstName());
            // ... other properties

            coachService.updateCoach(id, existingCoach);

            return ResponseEntity.ok("Coach updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/coach/delete/{id}")
    public ResponseEntity<String> deleteCoach(@PathVariable Long id) {
        Optional<Coach> optionalCoach = coachService.getCoachById(id);
        if (optionalCoach.isPresent()) {
            coachService.deleteCoach(id);
            return ResponseEntity.ok("Coach deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional methods can be added based on your requirements
}
