import {Component, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit, OnChanges {

  constructor(private service: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
    this.loadModules(this.courseId);
  }

  courseId;
  moduleId;
  modules = null;

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    console.log('course id ' + this.courseId);
    console.log('moduleId id 22 ' + this.moduleId);
  }

  loadModules(courseId) {
    console.log('course id 22 ' + courseId);
    // this.courseId = courseId;
    if ( courseId !== undefined )
    this.service.findModulesForCourse(courseId)
      .then(modules => {
        this.modules = modules;
      });
  }


  ngOnInit() {
    console.log('oninit moudles id 22 ' + JSON.stringify(this.modules));
  }
  ngOnChanges(changes: SimpleChanges) {
  }



}
