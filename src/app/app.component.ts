import { Component, OnInit } from '@angular/core';

import { AuthService } from "./login/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  userData: boolean;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.userData = this.auth.loggedIn();
  }

}
