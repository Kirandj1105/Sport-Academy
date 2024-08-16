package com.cdac.dto;

public class ApprovalStatus {
    private boolean status;
    private String statusMessage;

    public ApprovalStatus() {
    }

    public ApprovalStatus(boolean status, String statusMessage) {
        this.status = status;
        this.statusMessage = statusMessage;
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
}

