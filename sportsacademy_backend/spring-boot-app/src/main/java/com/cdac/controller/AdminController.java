package com.cdac.controller;

import com.cdac.dto.LoginStatus;

import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.Admin;
import com.cdac.entity.Coach;
import com.cdac.entity.User;
import com.cdac.exception.AdminServiceException;
import com.cdac.repository.CoachRepository;
import com.cdac.repository.UserRepository;
import com.cdac.service.AdminService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private CoachRepository coachRepository;

    @PutMapping("/approve/user/{userId}")
    public ResponseEntity<String> approveUser(@PathVariable Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setApprovalStatus("approved");
            userRepository.save(user);
            return ResponseEntity.ok("User approved successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
    
    @PutMapping("/approve/coach/{coachId}")
    public ResponseEntity<String> approveCoach(@PathVariable Long coachId) {
        Optional<Coach> coachOptional = coachRepository.findById(coachId);

        if (coachOptional.isPresent()) {
            Coach coach = coachOptional.get();
            coach.setApprovalStatus("approved");
            coachRepository.save(coach);
            return ResponseEntity.ok("Coach approved successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Coach not found");
        }
    }
  

    @PostMapping("/admin/login")
    public LoginStatus login(@RequestBody Admin admin) {
        try {
            
            Admin authenticatedAdmin = adminService.login(admin.getEmail(), admin.getPassword());

            LoginStatus status = new LoginStatus();
            status.setStatus(true);
            status.setStatusMessage("Login successful!");
            status.setUserId(authenticatedAdmin.getId());
            return status;
        } catch (AdminServiceException e) {
            LoginStatus status = new LoginStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }
}








