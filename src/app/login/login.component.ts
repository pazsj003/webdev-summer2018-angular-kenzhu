import { Component, OnInit } from '@angular/core';
import {Route, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.service
      .login(username, password)
      .then((code) => {
        this.checkUser(code);
      });
  }

  checkUser(user) {
    console.log( ' back information ' + user.status);
    if ( user.status === 404) {
      alert('username and password is not match ') ;
    } else {
      if ( user.status === 201) {
        alert('admin mode ! ') ;
      }
      this.router.navigate(['profile']);
    }
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
