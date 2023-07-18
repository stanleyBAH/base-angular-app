import { NgModule } from '@angular/core';
// Routes and RouterModule: RouterModule provides static methods like RouterModule.forRoot() for passing a configuration object to the Router.
import { Routes, RouterModule } from '@angular/router';

//// Components for the router.
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

// The constant 'routes' array of type Routes which will be used to hold information for each route.
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'people' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
];

@NgModule({
  // Here, we call the static RouterModule.forRoot(routes) method with the routes array as a parameter.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// AppRoutingModule class uses the @NgModule decorator that takes some metadata.
export class AppRoutingModule {}
