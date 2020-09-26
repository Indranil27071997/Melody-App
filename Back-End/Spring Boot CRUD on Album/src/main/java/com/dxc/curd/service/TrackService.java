package com.dxc.curd.service;

import java.util.Collection;
import java.util.List;

import com.dxc.curd.model.Track;
import com.sun.el.stream.Optional;


public interface TrackService {

	public void addTrack(Track trk);

	public Collection<Track> getAllTracks();


	public Track updateTrack(Track trk);

	public void deleteTrackById(int id);

		
	
	

}
