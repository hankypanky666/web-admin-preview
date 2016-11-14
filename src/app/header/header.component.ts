import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/services/auth.service';

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ticks: string;

  constructor(private auth: AuthService) { }

  ngOnInit(){
    let timer = Observable.timer(2000,1000);
    timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(tick){
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    this.ticks = `${year}.${month}.${date} <strong>${hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}</strong>`;
  }

  logout() {
    this.auth.logout();
  }

}
