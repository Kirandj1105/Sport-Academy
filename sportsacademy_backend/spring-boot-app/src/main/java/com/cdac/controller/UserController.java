//package com.cdac.controller;
//
//import com.cdac.dto.LoginStatus;
//
//import com.cdac.dto.RegistrationStatus;
//import com.cdac.entity.User;
//import com.cdac.exception.UserServiceException;
//import com.cdac.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@CrossOrigin
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/register")
//    public RegistrationStatus register(@RequestBody User user) {
//        try {
//            int id = userService.register(user);
//
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(true);
//            status.setStatusMessage("Customer registered successfully!");
//            status.setUserId(id);
//            return status;
//        } catch (UserServiceException e) {
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return status;
//        }
//    }
//
//    @PostMapping("/login")
//    public LoginStatus login(@RequestBody User user) {
//        try {
//            
//            User authenticatedUser = userService.login(user.getEmail(), user.getPassword());
//
//            LoginStatus status = new LoginStatus();
//            status.setStatus(true);
//            status.setStatusMessage("Login successful!");
//            status.setUserId(authenticatedUser.getId());
//            return status;
//        } catch (UserServiceException e) {
//            LoginStatus status = new LoginStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return status;
//        }
//    }
//}


















//
//package com.cdac.controller;
//
//import com.cdac.dto.LoginStatus;
//import com.cdac.dto.RegistrationStatus;
//import com.cdac.entity.User;
//import com.cdac.exception.UserServiceException;
//import com.cdac.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@CrossOrigin
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @PostMapping("/user/register")
//    public ResponseEntity<RegistrationStatus> register(@RequestBody User user) {
//        try {
//            int id = userService.register(user);
//
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(true);
//            status.setStatusMessage("User registered successfully!");
//            status.setUserId(id);
//            return ResponseEntity.status(HttpStatus.CREATED).body(status);
//        } catch (UserServiceException e) {
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
//        }
//    }
//
//    @PostMapping("/user/login")
//    public ResponseEntity<LoginStatus> login(@RequestBody User user) {
//        try {
//            User authenticatedUser = userService.login(user.getEmail(), user.getPassword());
//
//            LoginStatus status = new LoginStatus();
//            status.setStatus(true);
//            status.setStatusMessage("Login successful!");
//            status.setUserId(authenticatedUser.getId());
//            return ResponseEntity.ok(status);
//        } catch (UserServiceException e) {
//            LoginStatus status = new LoginStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(status);
//        }
//    }
//
//    @PostMapping("/user/create")
//    public ResponseEntity<RegistrationStatus> createUser(@RequestBody User user) {
//        try {
//            int id = userService.register(user);
//
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(true);
//            status.setStatusMessage("User created successfully!");
//            status.setUserId(id);
//            return ResponseEntity.status(HttpStatus.CREATED).body(status);
//        } catch (UserServiceException e) {
//            RegistrationStatus status = new RegistrationStatus();
//            status.setStatus(false);
//            status.setStatusMessage(e.getMessage());
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
//        }
//    }
//
//    @GetMapping("/user/all")
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> users = userService.getAllUsers();
//        return ResponseEntity.ok(users);
//    }
//
//    @GetMapping("/user/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) {
//        Optional<User> optionalUser = userService.getUserById(id);
//        return optionalUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @PutMapping("/user/update/{id}")
//    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
//        Optional<User> optionalUser = userService.getUserById(id);
//        if (optionalUser.isPresent()) {
//            User existingUser = optionalUser.get();
//            existingUser.setFirstName(updatedUser.getFirstName());
//            existingUser.setLastName(updatedUser.getLastName());
//            // ... other properties
//
//            userService.updateUser(existingUser);
//
//            return ResponseEntity.ok("User updated successfully");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    @DeleteMapping("/user/delete/{id}")
//    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
//        Optional<User> optionalUser = userService.getUserById(id);
//        if (optionalUser.isPresent()) {
//            userService.deleteUser(id);
//            return ResponseEntity.ok("User deleted successfully");
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
//
//    // Additional methods can be added based on your requirements
//}
















package com.cdac.controller;

import com.cdac.dto.LoginStatus;
import com.cdac.dto.RegistrationStatus;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/register")
    public ResponseEntity<RegistrationStatus> register(@RequestBody User user) {
        try {
            int id = userService.register(user);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("User registered successfully!");
            status.setUserId(id);
            return ResponseEntity.status(HttpStatus.CREATED).body(status);
        } catch (UserServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
        }
    }

    @PostMapping("/user/login")
    public ResponseEntity<LoginStatus> login(@RequestBody User user) {
        try {
            User authenticatedUser = userService.login(user.getEmail(), user.getPassword());

            LoginStatus status = new LoginStatus();
            status.setStatus(true);
            status.setStatusMessage("Login successful!");
            status.setUserId(authenticatedUser.getId());
            return ResponseEntity.ok(status);
        } catch (UserServiceException e) {
            LoginStatus status = new LoginStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(status);
        }
    }

    @PostMapping("/user/create")
    public ResponseEntity<RegistrationStatus> createUser(@RequestBody User user) {
        try {
            int id = userService.register(user);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("User created successfully!");
            status.setUserId(id);
            return ResponseEntity.status(HttpStatus.CREATED).body(status);
        } catch (UserServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(status);
        }
    }

    @GetMapping("/user/all")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> optionalUser = userService.getUserById(id);
        return optionalUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/user/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userService.getUserById(id);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            // ... other properties

            userService.updateUser(id, existingUser);

            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        Optional<User> optionalUser = userService.getUserById(id);
        if (optionalUser.isPresent()) {
            userService.deleteUser(id);
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Additional methods can be added based on your requirements
}

