//package com.cdac.service;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import java.util.Optional;
//
//import com.cdac.entity.User;
//import com.cdac.exception.UserServiceException;
//import com.cdac.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//@Service
//public class UserService {
//
//	private final UserRepository userRepository;
//
//	@Autowired
//	public UserService(UserRepository userRepository) {
//		this.userRepository = userRepository;
//	}
//
//	public int register(User user) {
//		
//		Optional<User> userCheck = userRepository.findByEmail(user.getEmail());
//		if (userCheck.isEmpty()) {
//			
//			User savedUser = userRepository.save(user);
//			return savedUser.getId();
//		} else {
//			throw new UserServiceException("User already registered!");
//		}
//	}
//
//	public User login(String email, String password) {
//
//		Optional<User> userOptional = userRepository.findByEmail(email);
//
//		User user = userOptional.get();
//		
//		if (userOptional == null) {
//			throw new UserServiceException("User with this email does not exist");
//		}
//
//		if (!user.getPassword().equals(password)) {
//			throw new UserServiceException("Invalid password");
//		}
//
//		return user;
//	}
//}












package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.entity.User;
import com.cdac.exception.UserServiceException;
import com.cdac.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public int register(User user) {
        Optional<User> userCheck = userRepository.findByEmail(user.getEmail());
        if (userCheck.isEmpty()) {
            User savedUser = userRepository.save(user);
            return savedUser.getId();
        } else {
            throw new UserServiceException("User already registered!");
        }
    }

    public User login(String email, String password) {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if (userOptional.isEmpty()) {
            throw new UserServiceException("User with this email does not exist");
        }

        User user = userOptional.get();
        if (!user.getPassword().equals(password)) {
            throw new UserServiceException("Invalid password");
        }

        return user;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<User> updateUser(Long id, User updatedUser) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstName(updatedUser.getFirstName());
            existingUser.setLastName(updatedUser.getLastName());
            // ... other properties

            return Optional.of(userRepository.save(existingUser));
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteUser(Long id) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()) {
            userRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}