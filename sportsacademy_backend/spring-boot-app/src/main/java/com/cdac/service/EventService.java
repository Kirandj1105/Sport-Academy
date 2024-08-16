package com.cdac.service;

import com.cdac.entity.Event;
import com.cdac.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    public List<Event> getEventsByTitle(String title) {
        return eventRepository.findByTitle(title);
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Optional<Event> updateEvent(Long id, Event updatedEvent) {
        Optional<Event> optionalEvent = eventRepository.findById(id);

        if (optionalEvent.isPresent()) {
            Event existingEvent = optionalEvent.get();
            existingEvent.setTitle(updatedEvent.getTitle());
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setAddress(updatedEvent.getAddress());
            existingEvent.setTime(updatedEvent.getTime());
            existingEvent.setDate(updatedEvent.getDate());

            return Optional.of(eventRepository.save(existingEvent));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteEvent(Long id) {
        Optional<Event> optionalEvent = eventRepository.findById(id);

        if (optionalEvent.isPresent()) {
            eventRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}