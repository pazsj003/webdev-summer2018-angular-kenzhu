export class LessonServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  findLessonsForModule(courseId, moduleId) {
    return fetch(this.url + '/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
