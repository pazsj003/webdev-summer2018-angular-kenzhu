export class CourseNavigatorServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  findAllCourses() {
    return fetch(this.url + '/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch(this.url + '/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
