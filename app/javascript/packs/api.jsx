import _ from 'underscore'
import axios from 'axios'

class Api {
  getCSRFToken() {
    return _.find(document.getElementsByTagName('meta'), (meta) => {
      return meta.name === 'csrf-token'
    }).content
  }

  request() {
    var instance = axios.create({
      baseURL: 'http://localhost:3333/',
      timeout: 1000,
      headers: {
        'X-CSRF-Token': this.getCSRFToken(),
        'Content-Type': 'application/json'
      }
    });

    return instance
  }

  get = (url) => {
    return request.get(url, params);
  }

  post = (url, params) => {
    return request.post(url, params);
  }
}

export default function() { const api = new Api }
