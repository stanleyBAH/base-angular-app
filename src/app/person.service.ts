import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  API_URL: string = '/api/';
  constructor(private http: HttpClient) {}
  // Get all people.
  getPeople() {
    return this.http.get(this.API_URL + 'person');
  }
  // Get specific person.
  getPerson(personId) {
    return this.http.get(`${this.API_URL}person/${personId} `);
  }
}
