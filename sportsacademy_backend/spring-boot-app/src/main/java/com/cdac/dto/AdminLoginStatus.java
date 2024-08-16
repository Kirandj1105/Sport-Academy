package com.cdac.dto;

public class AdminLoginStatus {

    private boolean status;
    private String statusMessage;
    private long adminId;

    public AdminLoginStatus() {
        
    }

    public AdminLoginStatus(boolean status, String statusMessage, long adminId) {
        this.status = status;
        this.statusMessage = statusMessage;
        this.adminId = adminId;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public long getAdminId() {
        return adminId;
    }

    public void setAdminId(long adminId) {
        this.adminId = adminId;
    }
}
