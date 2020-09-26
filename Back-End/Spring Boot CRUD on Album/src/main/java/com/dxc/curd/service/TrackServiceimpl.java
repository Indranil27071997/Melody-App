package com.dxc.curd.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.curd.dao.TrackDao;
import com.dxc.curd.exception.TrackException;
import com.dxc.curd.model.Track;
import com.sun.el.stream.Optional;

@Service
public class TrackServiceimpl implements TrackService {
	
	@Autowired
	TrackDao trackDao;
	
	@Override
	public void addTrack(Track trk) {
		// TODO Auto-generated method stub
		if(trackDao.findById(trk.getId()).isPresent())
		{
			throw new TrackException("Already exist");
		}
		else
		{
			trackDao.save(trk);
		}
	}
	
	@Override
	public Collection<Track> getAllTracks() {
		// TODO Auto-generated method stub
		return trackDao.findAll();
	}

	
	@Override
	public Track updateTrack(Track trk) {
		// TODO Auto-generated method stub
		return trackDao.save(trk);
	}

	@Override
	public void deleteTrackById(int id) {
		// TODO Auto-generated method stub
		trackDao.deleteById(id);
	}

	


	
	
}
