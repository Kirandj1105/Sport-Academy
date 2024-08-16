// src/main/java/com/cdac/controller/ContactController.java

package com.cdac.controller;

import com.cdac.dto.ContactFormDTO;
import com.cdac.entity.ContactFormEntity;
import com.cdac.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactFormRepository contactFormRepository;

    @PostMapping
    public ResponseEntity<String> submitContactForm(@RequestBody ContactFormDTO contactFormDTO) {
        // Convert DTO to Entity
        ContactFormEntity contactFormEntity = convertDtoToEntity(contactFormDTO);

        // Save the form data to the database
        contactFormRepository.save(contactFormEntity);

        // For simplicity, just return a success message
        String successMessage = "Form submitted successfully!";

        // You can customize the response based on your application's requirements
        return new ResponseEntity<>(successMessage, HttpStatus.OK);
    }

    @GetMapping
    public List<ContactFormEntity> getAllContactForms() {
        // Retrieve all stored contact forms
        return contactFormRepository.findAll();
    }

    private ContactFormEntity convertDtoToEntity(ContactFormDTO contactFormDTO) {
        ContactFormEntity contactFormEntity = new ContactFormEntity();
        contactFormEntity.setName(contactFormDTO.getName());
        contactFormEntity.setEmail(contactFormDTO.getEmail());
        contactFormEntity.setMessage(contactFormDTO.getMessage());
        return contactFormEntity;
    }
}