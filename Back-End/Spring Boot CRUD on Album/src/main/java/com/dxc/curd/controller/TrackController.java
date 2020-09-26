package com.dxc.curd.controller;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.curd.model.Track;
import com.dxc.curd.service.TrackService;
import com.sun.el.stream.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/mongo/track")
//http://localhost:8123/api/mongo/track

public class TrackController {

	@Autowired
	TrackService trackService;

	//to add data
	@PostMapping(value = "/add")
	public ResponseEntity<String> addTrk(@RequestBody Track trk) {
		trackService.addTrack(trk);
		return new ResponseEntity<String>("New Track is added.", HttpStatus.OK);

	}
//to get all data
	@GetMapping(value = "/getall")
	public Collection<Track> getAll() {

		return trackService.getAllTracks();

	}

	//to update data
	@PutMapping(value = "/update/{track-id}")
	public String update(@PathVariable(value = "track-id") int id, @RequestBody Track trk) {
		trk.setId(id);
		trackService.updateTrack(trk);
		return "Track record for track-id= " + id + " updated.";
	}
	//to delete data
	@DeleteMapping(value = "/delete/{track-id}")
	public String delete(@PathVariable(value = "track-id") int id) {
		trackService.deleteTrackById(id);
		return "Track record for track-id= " + id + " deleted.";
	}

	

}
