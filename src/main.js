import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Ipsum from './js/ipsum-service.js';
// usually when is more things to export import {Triangle} from './triangle.js'

$('#form').submit(function () {
  let letter = $('#letter').val();
  $('#letter').val("");

  let word = Ipsum.getWord(words);
  word.then(function (response) {
    let wordArray = [];
    wordArray = word.split("");
    let resultArray = [];
    //make resultArray with elements equal 0; resultarray=[0, 0, 0, 0]
    for (let i = 0; i < wordArray.length; i++) {
      resultArray[i] = 0;
    }
    const body = JSON.parse(response);
    function checkingWord()
    for(let i = 0; i < resultArray.length; i++){
      if (resultArray[i] === 1) {
        return `Winner!`;
      } else if (word.includes(letter){
        resultArray[wordArray.indexOf(letter)]=1;
      }
    }
      }
      $("#correct").text
    } else $("#incorrect")
    )
})
});


word = "dino"
wordArray = ["d", "i", "n", "o"]
              0    1   2   3
resultArray  [0,   0,  1,  0]

letter = 'n'
letter = "a"
word = "Dino"
_ _ _ a _ _ _ _ _ _ a _ _

// let promise = WeatherService.getWeather(city);
//     promise.then (function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//       }, function (error) {
//         $('.showErrors').text(`There was an error processing your request: ${error}`);