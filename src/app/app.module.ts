import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BackendService } from './backend.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InMemoryWebApiModule.forRoot(BackendService)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
