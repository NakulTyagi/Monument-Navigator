import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  }

}
