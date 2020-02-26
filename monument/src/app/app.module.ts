import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from '../app/auth.service';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MonumentsComponent } from './monuments/monuments.component';
import { NavComponent } from './nav/nav.component';
import { DragDropDirective } from './home/drag-drop.directive';
import { AddComponent } from './add/add.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsService } from './events.service';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    MonumentsComponent,
    NavComponent,
    AddComponent,
    DragDropDirective,
    AuthenticateComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "events",
        component: EventsComponent
      },
    ])
  ],
  providers: [AuthService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
