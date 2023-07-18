import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  people: any[] = [];

  // peopleService is a parameter in the constructor specifying the dependency being injected. Angular's dependency injection system will automatically create an instance of "PeopleService" class and assign it to the "peopleService" property within this class. The "private" keyword indicates "peopleService" property is only accessible within this class.
  constructor(private peopleService: PeopleService) {}

  // ngOnInit: a lifecycle hook which is called after the component has been initialized and its dependencies have been resolved.
  ngOnInit() {
    this.peopleService.getPeople().subscribe((data: any[]) => {
      this.people = data;
    });
  }
}
