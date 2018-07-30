export class SectionServiceClient {
   URL = 'http://localhost:4000';
   SECTION_URL = this.URL + '/api/course/COURSEID/section';
   Find = this.URL + '/api/student/section';
   delete = this.URL + '/api/section/sectionId';
   update = this.URL + '/api/section/sectionId';
   unenrollment = this.URL + '/api/student/section/sectionId';
  findSectionsForStudent() {
    return fetch(this.Find, {
      credentials: 'include'
    })
      .then(response => {
        console.log('resoponse 52 ' + JSON.stringify(response));
    if (response.status === 404 ) {
      return response;
    } else {
        return response.json();
    } });
  }

  enrollStudentInSection(sectionId) {
    const url = this.URL + '/api/student/section/' + sectionId ;
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  unenrollSection(enroll) {
    const url = this.unenrollment.replace('sectionId', enroll.section._id )  ;
    return fetch(url, {
      method: 'delete',
      body: JSON.stringify(enroll),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
    }});
  }


  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  updateSection(sectionId, sectionName, seats ) {
    const section = {
      id : sectionId,
      name: sectionName,
      seats: seats
    }
    console.log('update in section 4 insde ' + JSON.stringify(section));
    return fetch(this.delete.replace('sectionId', sectionId),
      {
        method: 'put',
        body: JSON.stringify(section),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }});
  }

  deleteSection(section) {
    console.log('delete in section 4 insde ' + JSON.stringify(section));
    return fetch(this.delete.replace('sectionId', section.id),
    {
      method: 'delete',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
      'content-type': 'application/json'
    }});
  }

}
