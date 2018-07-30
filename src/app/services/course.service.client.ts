export class CourseServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  COURSE_URL = this.url + '/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
