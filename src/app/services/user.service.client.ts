const Host = 'http://localhost:4000';

const APIUSER = Host + '/api/user/';
const APILOGIN = Host + '/api/login' ;
const APILOGOUT = Host + '/api/profile' ;
const APIPROFILE =  Host + '/api/profile' ;
import {Router} from "@angular/router";
const router = Router;
export class UserServiceClient {

  findUserById(userId) {
    return fetch(APIUSER + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch(APILOGIN, {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch(APILOGOUT, {
      method: 'delete',
      credentials: 'include'
    });
  }

  profile() {
    return fetch(APIPROFILE,
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(function(response) {
        console.log('resoponse22 ' + response);
         if (response.status === 404 ) {
             return response;
         } else {
           console.log('resoponse ' + JSON.stringify(response));
           return response.json();
         }
     }) ;
  }

  update(user) {
    return fetch(APIPROFILE, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(APIUSER, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
