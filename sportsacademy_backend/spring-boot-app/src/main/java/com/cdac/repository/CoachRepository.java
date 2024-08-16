//package com.cdac.repository;
//
//import com.cdac.entity.Coach;
//
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface CoachRepository extends JpaRepository<Coach, Integer> {
//	public Optional<Coach> findByEmail(String email);
//}





package com.cdac.repository;

import com.cdac.entity.Coach;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoachRepository extends JpaRepository<Coach, Long> {
    Optional<Coach> findByEmail(String email);

    // Additional methods for CRUD operations
    // For example:
    List<Coach> findAll();
    Optional<Coach> findById(Long id);
    // void deleteById(Long id);

    // Add any other specific query methods as needed
}