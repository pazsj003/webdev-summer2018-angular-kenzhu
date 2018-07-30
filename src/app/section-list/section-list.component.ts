import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private courseServer: CourseServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe
    (params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  course = '';
  loadSections(courseId) {
    this.courseId = courseId;
    this.
      courseServer
      .findCourseById(courseId)
      .then(course => this.course = course);
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections
      );
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    this.service
      .enrollStudentInSection(section._id)
      .then((back) => {
        this.checkEnroll(back);
      });
  }

  checkEnroll(user) {
    console.log( ' back information ' + user.status);
    if ( user.status === 401) {
      alert('user already enrolled this section') ;
    } else {
      this.router.navigate(['profile']);
    }
  }

  ngOnInit() {
  }

}
