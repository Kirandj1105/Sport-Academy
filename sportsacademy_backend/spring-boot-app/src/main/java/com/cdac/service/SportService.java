package com.cdac.service;

import com.cdac.entity.Sport;
import com.cdac.repository.SportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SportService {

    @Autowired
    private SportRepository sportRepository;

    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }

    public Optional<Sport> getSportById(Long id) {
        return sportRepository.findById(id);
    }

    public List<Sport> getSportsByName(String name) {
        return sportRepository.findByTitle(name);
    }

    public Sport createSport(Sport sport) {
        return sportRepository.save(sport);
    }

    public Optional<Sport> updateSport(Long id, Sport updatedSport) {
        Optional<Sport> optionalSport = sportRepository.findById(id);

        if (optionalSport.isPresent()) {
            Sport existingSport = optionalSport.get();
            existingSport.setTitle(updatedSport.getTitle());
            existingSport.setDescription(updatedSport.getDescription());

            return Optional.of(sportRepository.save(existingSport));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteSport(Long id) {
        Optional<Sport> optionalSport = sportRepository.findById(id);

        if (optionalSport.isPresent()) {
            sportRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}




