export class ModuleServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  MODULE_URL = this.url + '/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
