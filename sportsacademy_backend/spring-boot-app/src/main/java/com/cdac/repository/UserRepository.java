//package com.cdac.repository;
//
//import java.util.Optional;
//
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.cdac.entity.User;
//
//public interface UserRepository extends JpaRepository<User, Integer> {
//
//	public Optional<User> findByEmail(String email);
//}





package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cdac.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    // Additional methods for CRUD operations
    List<User> findAll();

    Optional<User> findById(Long id);

    // Add any other specific query methods as needed
}