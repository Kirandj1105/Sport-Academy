package com.cdac.exception;

public class CoachServiceException extends RuntimeException{

	public CoachServiceException() {
		super();
	}

	public CoachServiceException(String message, Throwable cause) {
		super(message, cause);
	}

	public CoachServiceException(String message) {
		super(message);
	}
}
