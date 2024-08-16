//package com.cdac.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.cdac.entity.Coach;
//import com.cdac.entity.User;
//import com.cdac.exception.CoachServiceException;
//import com.cdac.exception.UserServiceException;
//import com.cdac.repository.CoachRepository;
//import com.cdac.repository.UserRepository;
//
//@Service
//public class CoachService {
//
//	private final CoachRepository coachRepository;
//	
//	@Autowired
//	public CoachService(CoachRepository coachRepository) {
//		this.coachRepository = coachRepository;
//	}
//
//	public int register(Coach coach) {
//		
//		Optional<Coach> coachCheck = coachRepository.findByEmail(coach.getEmail());
//		if (coachCheck.isEmpty()) {
//			
//			Coach savedCoach = coachRepository.save(coach);
//			return savedCoach.getId();
//		} else {
//			throw new CoachServiceException("Coach already registered!");
//		}
//	}
//	
//	public Coach login(String email, String password) {
//
//		Optional<Coach> coachOptional = coachRepository.findByEmail(email);
//
//		Coach coach = coachOptional.get();
//		
//		if (coachOptional == null) {
//			throw new CoachServiceException("Coach with this email does not exist");
//		}
//
//		if (!coach.getPassword().equals(password)) {
//			throw new CoachServiceException("Invalid password");
//		}
//
//		return coach;
//	}
//}








package com.cdac.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.Coach;
import com.cdac.exception.CoachServiceException;
import com.cdac.repository.CoachRepository;

@Service
public class CoachService {

    private final CoachRepository coachRepository;

    @Autowired
    public CoachService(CoachRepository coachRepository) {
        this.coachRepository = coachRepository;
    }

    public int register(Coach coach) {
        Optional<Coach> coachCheck = coachRepository.findByEmail(coach.getEmail());
        if (coachCheck.isEmpty()) {
            Coach savedCoach = coachRepository.save(coach);
            return savedCoach.getId();
        } else {
            throw new CoachServiceException("Coach already registered!");
        }
    }

    public Coach login(String email, String password) {
        Optional<Coach> coachOptional = coachRepository.findByEmail(email);

        if (coachOptional.isEmpty()) {
            throw new CoachServiceException("Coach with this email does not exist");
        }

        Coach coach = coachOptional.get();

        if (!coach.getPassword().equals(password)) {
            throw new CoachServiceException("Invalid password");
        }

        return coach;
    }

    public List<Coach> getAllCoaches() {
        return coachRepository.findAll();
    }

    public Optional<Coach> getCoachById(Long id) {
        return coachRepository.findById(id);
    }

    public Optional<Coach> updateCoach(Long id, Coach updatedCoach) {
        Optional<Coach> optionalCoach = coachRepository.findById(id);

        if (optionalCoach.isPresent()) {
            Coach existingCoach = optionalCoach.get();
            existingCoach.setFirstName(updatedCoach.getFirstName());
            // ... other properties

            return Optional.of(coachRepository.save(existingCoach));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteCoach(Long id) {
        Optional<Coach> optionalCoach = coachRepository.findById(id);

        if (optionalCoach.isPresent()) {
            coachRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}