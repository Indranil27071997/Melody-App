package com.dxc.curd.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="track")
public class Track {
	
	@Id
	private int id;
	private String trackName;
	private String artist;
	private String album;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
		public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public String getAlbum() {
		return album;
	}
	public void setAlbum(String album) {
		this.album = album;
	}
	
	
	public String getTrackName() {
		return trackName;
	}
	public void setTrackName(String trackName) {
		this.trackName = trackName;
	}
	@Override
	public String toString() {
		return "Track [id=" + id + ", track=" + trackName + ", artist=" + artist + ", album=" + album +"]";
	}

}
