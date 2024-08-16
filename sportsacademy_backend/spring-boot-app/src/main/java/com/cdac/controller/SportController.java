package com.cdac.controller;

import com.cdac.entity.Sport;
import com.cdac.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class SportController {

    @Autowired
    private SportRepository sportRepository;

    @PostMapping("/createSport")
    public ResponseEntity<String> createSport(@RequestBody Sport sport) {
        sportRepository.save(sport);
        return ResponseEntity.status(HttpStatus.CREATED).body("Sport created successfully");
    }

    @GetMapping("/allSports")
    public ResponseEntity<List<Sport>> getAllSports() {
        List<Sport> sports = sportRepository.findAll();
        return ResponseEntity.ok(sports);
    }

    @GetMapping("/sport/{id}")
    public ResponseEntity<Sport> getSportById(@PathVariable Long id) {
        Optional<Sport> optionalSport = sportRepository.findById(id);
        return optionalSport.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/updateSport/{id}")
    public ResponseEntity<String> updateSport(@PathVariable Long id, @RequestBody Sport updatedSport) {
        Optional<Sport> optionalSport = sportRepository.findById(id);
        if (optionalSport.isPresent()) {
            Sport existingSport = optionalSport.get();
            existingSport.setTitle(updatedSport.getTitle());
            existingSport.setDescription(updatedSport.getDescription());

            sportRepository.save(existingSport);

            return ResponseEntity.ok("Sport updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }    

    @DeleteMapping("/deleteSport/{id}")
    public ResponseEntity<String> deleteSport(@PathVariable Long id) {
        Optional<Sport> optionalSport = sportRepository.findById(id);
        if (optionalSport.isPresent()) {
            sportRepository.deleteById(id);
            return ResponseEntity.ok("Sport deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
