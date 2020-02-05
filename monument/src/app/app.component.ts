import { Component } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monument';
  constructor(@Inject(DOCUMENT) document) { }


}
