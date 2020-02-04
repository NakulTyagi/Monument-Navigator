import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MonumentsComponent } from './monuments/monuments.component';
import { NavComponent } from './nav/nav.component';

import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MonumentsComponent,
    NavComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "user",
        component: UserComponent
      },
      {
        path: "monuments",
        component: MonumentsComponent
      },
      {
        path: "add",
        component: AddComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
