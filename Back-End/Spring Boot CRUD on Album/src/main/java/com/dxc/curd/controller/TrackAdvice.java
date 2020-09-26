package com.dxc.curd.controller;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.dxc.curd.exception.TrackException;
@RestControllerAdvice
public class TrackAdvice {
	
	@ExceptionHandler(value= {TrackException.class})
	public ResponseEntity<String> handleException1(Exception ex)
	{
		return new ResponseEntity<String>(ex.getMessage(),HttpStatus.BAD_REQUEST);
	}

}
