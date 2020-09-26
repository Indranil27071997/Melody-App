package com.dxc.curd.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.dxc.curd.model.Track;
import com.sun.el.stream.Optional;

@Repository
public interface TrackDao extends MongoRepository<Track, Integer> {

		
	//List<Track> findByTrackName(String trackname);

	//void deleteById(String id);

	//Optional findById(String id);

}
