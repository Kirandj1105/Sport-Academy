// src/main/java/com/cdac/repository/ContactFormRepository.java

package com.cdac.repository;

import com.cdac.entity.ContactFormEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactFormRepository extends JpaRepository<ContactFormEntity, Long> {
}