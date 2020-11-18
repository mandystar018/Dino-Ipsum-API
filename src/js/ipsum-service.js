export default class Ipsum {
  static getWord(words) {
    let words = 1
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=${words}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response)
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}