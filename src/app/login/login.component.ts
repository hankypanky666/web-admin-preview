import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

// services
import { AuthService } from './services/auth.service';

//models
import { User } from './models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials: User = new User();

  constructor(private auth: AuthService) { }

  bodyClasses: string = "login-page";

  ngOnInit(): void {
    jQuery('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
    document.body.className = '';
    document.body.classList.add(this.bodyClasses);
  }

  ngOnDestroy() {
    document.body.className = 'hold-transition skin-black sidebar-mini';
    document.body.classList.remove(this.bodyClasses);
  }

  onLogin(credentials) {
    console.log(credentials);
    this.auth.login(credentials);
  }

}
