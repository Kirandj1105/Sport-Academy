package com.cdac.repository;

import com.cdac.entity.Sport;
import com.cdac.entity.User;
import com.cdac.entity.UserSport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserSportRepository extends JpaRepository<UserSport, Long> {

    @Query("SELECT us.sport FROM UserSport us WHERE us.user = :user")
    List<Sport> findSportsByUser(User user);
}
