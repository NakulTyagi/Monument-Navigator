import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) {
    // document.getElementById("text").style.display = "none";
  }

  ngOnInit() {

  }


  input() {
    document.getElementById("text").style.display = "block";
  }

}
