import { Component, OnInit } from '@angular/core';
import {Course} from "../models/coruse.model.client";
import {CourseServiceClient} from "../services/course.service.client";
import {SectionServiceClient} from "../services/section.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: CourseServiceClient,
              private Sectionservice: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
  }
  sectionId = '';
  courses = [];
  sectionName = '';
  seats = '';
  courseId = '';
  checkCourseId = '';
  sections = [];
  checkCourse = false;
  updateCheck = true;
  map = new Map();
  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.mapCourse(courses));
  }

  mapCourse(courses) {
    this.courses = courses;
    for (const course of courses) {
      console.log('load map ' + JSON.stringify(course));
       this
        .Sectionservice
        .findSectionsForCourse(course.id)
        .then(sections => {
          console.log('load sections ' + JSON.stringify(sections));
          this.map.set(course.id , sections);
        });
  }
    setTimeout( () => {
      for (const course of courses) {
        console.log('create map ' + JSON.stringify(this.map.get(course.id)));
      }
    }, 2000);
  }

  selectSection( section ) {
    this.updateCheck = false ;
    this.checkCourse = true ;
    this.sectionId = section._id;
    this.courseId = section.courseId;
    this.sectionName = section.name;
    this.seats = section.seats;
  }
  renderSections(courseId) {
    if (this.checkCourseId === '') {
      this.courseId = courseId;
      this.checkCourseId = this.courseId;
      console.log('2 course id ' + courseId);
      return this
        .Sectionservice
        .findSectionsForCourse(courseId)
      .then(sections => {
        if ( sections !== null) {
          this.sections = sections;
          console.log(' section 1 ' + JSON.stringify(sections));
        }
      });
    } else if (this.checkCourseId !== '' && this.checkCourseId !== courseId) {
      this.courseId = courseId;
      this.checkCourseId = '';
      console.log('3 course id ' + courseId);
      return this
        .Sectionservice
        .findSectionsForCourse(courseId)
        .then(sections => {
          if ( sections !== null) {
            this.sections = sections;
            console.log(' section 2 ' + JSON.stringify(sections));
          }
        });
    }
  }
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .Sectionservice
      .findSectionsForCourse(courseId)
      .then(sections =>
        this.map.set(courseId , sections));
  }
  delete(section) {
    this
      .Sectionservice
      .deleteSection(section)
      .then(() => {
        this.loadSections(section.courseId);
      });
  }
  addSection(course) {
    this.updateCheck = true ;
    this.checkCourse = false ;
    this.courseId = course.id;
    this.sectionName = course.title + '  section';
    this.seats = '50' ;
  }
  updateSection(sectionName, seats) {
    this
      .Sectionservice
      .updateSection(this.sectionId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  createSection( sectionName, seats) {
    this
      .Sectionservice
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

}
