import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  API_URL: string = '/api/';
  constructor(private http: HttpClient) {}
  // Get all people.
  getPeople() {
    return this.http.get(this.API_URL + 'people');
  }
  // Get specific person.
  getPerson(personId) {
    return this.http.get(`${this.API_URL}people/${personId} `);
  }
}
