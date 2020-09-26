package com.MusicApp.Registration.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.MusicApp.Registration.Exception.LoginException;
import com.MusicApp.Registration.Exception.RegistrationException;
import com.MusicApp.Registration.model.User;
import com.MusicApp.Registration.service.RegistrationService;




@CrossOrigin
@RestController
public class RegistrationController {

	@Autowired //injection of service methods from registration service
	private RegistrationService registrationService;
	
	@PostMapping(value = "/registeruser")
	public User  registeruser(@RequestBody User user)   {
		String tempEmailId = user.getEmailId();
		if(tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj =registrationService.fetchUserByEmailId(tempEmailId);
			if(userobj != null) { 
				throw new RegistrationException("user with this EmailId already exist");
			// throw new Exception("user with"+tempEmailId +"is already exist");
			}
		}
		
		return registrationService.saveUser(user);
		
	}
	
	
	  @PostMapping(value = "/login")
	  public User loginUser(@RequestBody User user) { 
	  String tempEmailId = user.getEmailId(); 
	  String tempPass = user.getPassword(); 
	  User userobj = null; 
	  if(tempEmailId != null && tempPass!= null) {
	  userobj=registrationService.fetchUserByEmailIdAndPassword(tempEmailId,tempPass); 
	  } 
	  if(userobj == null) 
	  { 
		  throw new LoginException("BadCredential/UserDosenot Exist");
		  //throw new Exception("BadCredential/UserDosenot Exist"); 
	  } 
	  return userobj; 
 }
	  
	  
	 
}
