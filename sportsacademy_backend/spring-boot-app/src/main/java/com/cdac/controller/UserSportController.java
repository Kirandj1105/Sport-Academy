//package com.cdac.controller;
//
//import com.cdac.entity.Sport;
//import com.cdac.entity.User;
//import com.cdac.entity.UserSport;
//import com.cdac.service.SportService;
//import com.cdac.service.UserService;
//import com.cdac.service.UserSportService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@CrossOrigin
//public class UserSportController {
//
//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    private SportService sportService;
//
//    @Autowired
//    private UserSportService userSportService;
//
//    @PostMapping("/selectSport/{userId}/{sportId}")
//    public ResponseEntity<String> selectSport(
//            @PathVariable Long userId,
//            @PathVariable Long sportId
//    ) {
//        try {
//            // Retrieve user and sport entities
//            User user = userService.getUserById(userId);
//            Sport sport = sportService.getSportById(sportId);
//
//            if (user == null || sport == null) {
//                return ResponseEntity.notFound().build();
//            }
//
//            // Create a new UserSport entity
//            UserSport userSport = new UserSport();
//            userSport.setUser(user);
//            userSport.setSport(sport);
//
//            // Save the UserSport entity
//            userSportService.createUserSport(userSport);
//
//            return ResponseEntity.ok("Sport selected successfully");
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error selecting sport");
//        }
//    }
//
//    @GetMapping("/selectedSports/{userId}")
//    public ResponseEntity<List<Sport>> getSelectedSports(@PathVariable Long userId) {
//        try {
//            // Retrieve user entity
//            User user = userService.getUserById(userId);
//
//            if (user == null) {
//                return ResponseEntity.notFound().build();
//            }
//
//            // Retrieve the list of sports selected by the user
//            List<Sport> selectedSports = userSportService.getSelectedSportsByUser(user);
//
//            return ResponseEntity.ok(selectedSports);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }
//}










package com.cdac.controller;

import com.cdac.entity.Sport;
import com.cdac.entity.User;
import com.cdac.entity.UserSport;
import com.cdac.service.SportService;
import com.cdac.service.UserService;
import com.cdac.service.UserSportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserSportController {

    @Autowired
    private UserService userService;

    @Autowired
    private SportService sportService;

    @Autowired
    private UserSportService userSportService;

    @PostMapping("/selectSport/{userId}/{sportId}")
    public ResponseEntity<String> selectSport(
            @PathVariable Long userId,
            @PathVariable Long sportId
    ) {
        try {
            // Retrieve user and sport entities
            Optional<User> optionalUser = userService.getUserById(userId);
            Optional<Sport> optionalSport = sportService.getSportById(sportId);

            if (optionalUser.isEmpty() || optionalSport.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            // Create a new UserSport entity
            UserSport userSport = new UserSport();
            userSport.setUser(optionalUser.get());
            userSport.setSport(optionalSport.get());

            // Save the UserSport entity
            userSportService.createUserSport(userSport);

            return ResponseEntity.ok("Sport selected successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error selecting sport");
        }
    }

    @GetMapping("/selectedSports/{userId}")
    public ResponseEntity<List<Sport>> getSelectedSports(@PathVariable Long userId) {
        try {
            // Retrieve user entity
            Optional<User> optionalUser = userService.getUserById(userId);

            if (optionalUser.isEmpty()) {
                return ResponseEntity.notFound().build();
            }

            // Retrieve the list of sports selected by the user
            List<Sport> selectedSports = userSportService.getSelectedSportsByUser(optionalUser.get());

            return ResponseEntity.ok(selectedSports);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
