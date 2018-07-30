export class TopicServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  findTopicsForLesson(courseId, moduleId, LessonId) {
    return fetch(this.url + '/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + LessonId + '/topic')
      .then(response => response.json());
  }
}
