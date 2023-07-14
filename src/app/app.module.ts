import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BackendService } from './backend.service';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, PeopleDetailComponent],
  imports: [BrowserModule, InMemoryWebApiModule.forRoot(BackendService)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
