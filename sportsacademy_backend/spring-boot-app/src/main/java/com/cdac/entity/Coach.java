//package com.cdac.entity;
//
//import java.time.LocalTime;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "tbl_coach")
//public class Coach {
//
//	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//
//    private String firstName;
//    private String middleName;
//    private String lastName;
//    private String email;
//    private String contact;
//    private String gender;
//    private String password;
//    private int age;
//    private double experience;
//    private String org;
//    private LocalTime stTime;
//    private LocalTime endTime;
//    private double expSal;
//    
//	public int getId() {
//		return id;
//	}
//	public void setId(int id) {
//		this.id = id;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getMiddleName() {
//		return middleName;
//	}
//	public void setMiddleName(String middleName) {
//		this.middleName = middleName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getContact() {
//		return contact;
//	}
//	public void setContact(String contact) {
//		this.contact = contact;
//	}
//	public String getGender() {
//		return gender;
//	}
//	public void setGender(String gender) {
//		this.gender = gender;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public int getAge() {
//		return age;
//	}
//	public void setAge(int age) {
//		this.age = age;
//	}
//	public double getExperience() {
//		return experience;
//	}
//	public void setExperience(double experience) {
//		this.experience = experience;
//	}
//	public String getOrg() {
//		return org;
//	}
//	public void setOrg(String org) {
//		this.org = org;
//	}
//	public LocalTime getStTime() {
//		return stTime;
//	}
//	public void setStTime(LocalTime stTime) {
//		this.stTime = stTime;
//	}
//	public LocalTime getEndTime() {
//		return endTime;
//	}
//	public void setEndTime(LocalTime endTime) {
//		this.endTime = endTime;
//	}
//	public double getExpSal() {
//		return expSal;
//	}
//	public void setExpSal(double expSal) {
//		this.expSal = expSal;
//	}    
//}












package com.cdac.entity;

import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_coach")
public class Coach {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String contact;
    private String gender;
    private String password;
    private int age;
    private double experience;
    private String previousOrganization;
    private LocalTime startTime;
    private LocalTime endTime;
    private double expSal;
    private String country;
    
    @Column(name = "approval_status")
    private String approvalStatus = "pending"; // Default to "pending"
    
    @Column(name = "approved")
    private Boolean approved = false;
    
    public Boolean getApproved() {
		return approved;
	}
	public void setApproved(Boolean approved) {
		this.approved = approved;
	}
public String getApprovalStatus() {
		return approvalStatus;
	}
	public void setApprovalStatus(String approvalStatus) {
		this.approvalStatus = approvalStatus;
	}
    
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public double getExperience() {
		return experience;
	}
	public void setExperience(double experience) {
		this.experience = experience;
	}
	public String getpreviousOrganization() {
		return previousOrganization;
	}
	public void setpreviousOrganization(String previousOrganization) {
		this.previousOrganization = previousOrganization;
	}
	public LocalTime getStartTime() {
		return startTime;
	}
	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}
	public LocalTime getEndTime() {
		return endTime;
	}
	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}
	public double getExpSal() {
		return expSal;
	}
	public void setExpSal(double expSal) {
		this.expSal = expSal;
	}    
}