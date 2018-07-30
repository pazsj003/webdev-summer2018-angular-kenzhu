import { Component, OnInit, AfterContentInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LessonServiceClient} from "../services/lesson.service.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit, AfterContentInit {

  constructor(private service: LessonServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  lessons = null;

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];

    console.log('course 1121 id ' + this.courseId);
    console.log('module 1121 id ' + this.moduleId);
    if (this.moduleId !== undefined) {
      this.loadLessons(this.courseId, this.moduleId);
    }

  }

  loadLessons(courseId, moduleId) {
    // this.moduleId = moduleId;
    console.log('course 321 id ' + courseId);
    console.log('module 321 id ' + moduleId);
    if ( courseId !== undefined || moduleId !==  undefined) {
      this.service.findLessonsForModule(courseId, moduleId)
        .then(lessons => this.lessons = lessons);
    }
  }

  ngOnInit() {
  }
  ngAfterContentInit() {

  }

}
