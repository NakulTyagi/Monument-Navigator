import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MonumentsComponent } from './monuments/monuments.component';
import { NavComponent } from './nav/nav.component';
import { DragDropDirective } from './home/drag-drop.directive';
import { AddComponent } from './add/add.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MonumentsComponent,
    NavComponent,
    AddComponent,
    DragDropDirective,
    AuthenticateComponent
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
      {
        path: "authenticate",
        component: AuthenticateComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
