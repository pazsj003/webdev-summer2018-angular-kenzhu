export class TopicServiceClient {
  findTopicsForLesson(courseId, moduleId, LessonId) {
    return fetch('http://localhost:8080/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + LessonId + '/topic')
      .then(response => response.json());
  }
}
