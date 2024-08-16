package com.cdac.service;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.cdac.entity.Admin;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

	private final AdminRepository adminRepository;

//	@Autowired
	public AdminService(AdminRepository adminRepository) {
		this.adminRepository = adminRepository;
	}

	public int register(Admin admin) {
		
		Optional<Admin> adminCheck = adminRepository.findByEmail(admin.getEmail());
		if (adminCheck.isEmpty()) {
			
			Admin savedAdmin = adminRepository.save(admin);
			return savedAdmin.getId();
		} else {
			throw new UserServiceException("Admin already registered!");
		}
	}

	public Admin login(String email, String password) {

		Optional<Admin> adminOptional = adminRepository.findByEmail(email);

		Admin admin = adminOptional.get();
		
		if (adminOptional == null) {
			throw new UserServiceException("Admin with this email does not exist");
		}

		if (!admin.getPassword().equals(password)) {
			throw new UserServiceException("Invalid password");
		}

		return admin;
	}
}
