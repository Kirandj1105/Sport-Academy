package com.cdac.dto;

public class CoachLoginStatus {
	
	private boolean status;
    private String statusMessage;
    private long coachId;
    
public CoachLoginStatus() {
        
    }

    public CoachLoginStatus(boolean status, String statusMessage, long coachId) {
        this.status = status;
        this.statusMessage = statusMessage;
        this.coachId = coachId;
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

    public long getCoachId() {
        return coachId;
    }

    public void setCoachId(long coachId) {
        this.coachId = coachId;
    }
}
