package com.cdac.dto;

public class LoginStatus {

    private boolean status;
    private String statusMessage;
    private long userId;

    public LoginStatus() {
        
    }

    public LoginStatus(boolean status, String statusMessage, long userId) {
        this.status = status;
        this.statusMessage = statusMessage;
        this.userId = userId;
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

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }
}
