package com.MusicApp.Registration.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.MusicApp.Registration.model.User;


@Repository
public interface Registrationdao extends MongoRepository<User, String>  {

	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String emailId,String password);

}
