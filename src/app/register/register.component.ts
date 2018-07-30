import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  register(username, password, password2) {
    if ( password !== password2 ) {
      alert('password is not match');
    } else {
        this.service
        .createUser(username, password)
        .then(res =>
          this.checkUser(res));
    }
  }

  checkUser(user) {
    console.log( ' back information ' + user.status);
    if ( user.status === 401) {
      alert('user already register') ;
    } else {
      this.router.navigate(['profile']);
    }
  }

  ngOnInit() {
  }

}
