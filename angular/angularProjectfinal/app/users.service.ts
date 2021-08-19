//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable()

export class UsersService {
	
	size = 8;
	
	constructor(private http: HttpClient) {}
	
	getUsers() {
		
		return this.http.get("https://randomuser.me/api/?inc=gender,name,picture,location&results="+this.size+"&nat=gb")
		.pipe(map(function(response) {
			//return response.json();
			return response;
		}) ) 
		
		.pipe(map(response => response.results) ) 
		
		.pipe(map(users=>{
			return users.map(u => {
				return {
					name: u.name.first + ' ' + u.name.last,
					image: u.picture.large,
					geo: u.location.city + ' ' + u.location.state + ' ' + u.location.street,
				}
			})
		}) )
	}
	
	setSize(size) {
		this.size = size;
	}
	
	users = [		
		{name: 'WFM 1'},
		{name: 'WFM 2'},
		{name: 'WFM 3'},
		{name: 'WFM 4'},
		{name: 'WFM 5'},		
		{name: 'WFM 6'},		
	];
}

