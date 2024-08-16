package com.cdac.service;

import com.cdac.entity.Sport;
import com.cdac.entity.User;
import com.cdac.entity.UserSport;
import com.cdac.repository.UserSportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSportService {

    @Autowired
    private UserSportRepository userSportRepository;

    public void createUserSport(UserSport userSport) {
        userSportRepository.save(userSport);
    }

    public List<Sport> getSelectedSportsByUser(User user) {
        return userSportRepository.findSportsByUser(user);
    }

    // Add other methods for updating and deleting UserSport entities as needed
}
