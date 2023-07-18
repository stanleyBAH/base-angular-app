import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
})
export class PeopleDetailComponent implements OnInit {
  person: any;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);

      this.peopleService.getPerson(params['id']).subscribe((data: any) => {
        this.person = data;
      });
    });
  }
}
