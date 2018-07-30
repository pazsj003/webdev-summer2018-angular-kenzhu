export class WidgetServiceClient {
  // url = 'http://localhost:8080';
  url = 'https://webdev-summerfull-2018.herokuapp.com';
  findWidgetsForTopic(topicId) {
    return fetch(this.url + '/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
