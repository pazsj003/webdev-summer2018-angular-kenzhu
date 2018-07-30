import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  username;
  password;
  firstName;
  lastName;
  email;
  sections = [];
  adminMode = true;
  checkedCourseId = '';

  update() {
    this.service
      .update(this.user)
      .then((user) =>
          this.updateUser(user),
      );
  }
  checkAdmin(user) {
     if ( user.username === 'admin' ) {
       this.adminMode = false ;
     } else {
       this.adminMode = true ;
     }
    this.user =  user;
  }
  enrolledAction(courseId) {
    this.checkedCourseId = courseId + '&1';
  }
  updateUser(user) {
    if ( user.status !== 404)  {
      this.checkAdmin(user);
        setTimeout( alert('update success'), 1000);
      console.log( ' user'  + JSON.stringify(user));
    } else {
      alert('not success!');
    }
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  unenroll(enroll) {
    console.log('in front check enroll find ' + JSON.stringify(enroll));
    this
      .sectionService
      .unenrollSection(enroll)
      .then(() => {
        this.sectionService
          .findSectionsForStudent()
          .then((sections) => {
            console.log('in front check section find ' + JSON.stringify(sections));
            this.sections = sections; });
      });
  }

  ngOnInit() {
    console.log( 'user ' + JSON.stringify(this.user));
      this.service
      .profile()
      .then((user) => {
        console.log( 'user111 ' + JSON.stringify(user));
        if ( user.status !== undefined && user.status === 404 ) {
          alert('you are not login! ');
          this.router.navigate(['login']);
        }
        this.checkAdmin(user);
      });

    this.sectionService
      .findSectionsForStudent()
      .then(sections => {
        this.sections = sections;
      });
  }

}
