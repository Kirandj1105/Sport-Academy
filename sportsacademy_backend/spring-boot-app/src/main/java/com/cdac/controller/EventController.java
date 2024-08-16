package com.cdac.controller;

import com.cdac.entity.Event;
import com.cdac.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    
    @PostMapping("/create")
    public ResponseEntity<String> createEvent(@RequestBody Event event) {
        eventRepository.save(event);
        return ResponseEntity.status(HttpStatus.CREATED).body("Event created successfully");
    }

    
    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        List<Event> events = eventRepository.findAll();
        return ResponseEntity.ok(events);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<Event> getEventById(@PathVariable Long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        return optionalEvent.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            Event existingEvent = optionalEvent.get();
            existingEvent.setTitle(updatedEvent.getTitle());
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setAddress(updatedEvent.getAddress());
            existingEvent.setTime(updatedEvent.getTime());
            existingEvent.setDate(updatedEvent.getDate());

            eventRepository.save(existingEvent);

            return ResponseEntity.ok("Event updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);
        if (optionalEvent.isPresent()) {
            eventRepository.deleteById(id);
            return ResponseEntity.ok("Event deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}