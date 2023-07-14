// NgModule: typescript decorator used to create an angular module.
import { NgModule } from '@angular/core';
// Routes and RouterModule: RouterModule provides static methods like RouterModule.forRoot() for passing a configuration object to the Router.
import { Routes, RouterModule } from '@angular/router';

// The constant 'routes' array of type Routes which will be used to hold information for each route.
const routes: Routes = [];

// AppRoutingModule class uses the @NgModule decorator that takes some metadata.
@NgModule({
  // Here, we call the static RouterModule.forRoot(routes) method with the routes array as a parameter.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
