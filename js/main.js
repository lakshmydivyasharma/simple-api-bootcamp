(async function(){

var apiInfo;

var problemNumber = 0
var answerNumber = 0

const ul = document.querySelector('#addInput')
let itemAdd = document.createElement('li')

getDataFromTrivia()
console.log(await apiInfo)
async function getDataFromTrivia(){
  var url = "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple"
  const res = await fetch(url)
  const response = await res.json()
        itemAdd.src = response.url
        console.log(response.results)
        apiInfo = response.results
        // response.results.forEach(question => {console.log(question)})

        // document.querySelector('p').innerHTML = response.results[0].question
        // document.querySelector('span').innerHTML = response.results[0].correct_answer

        // grab a reference to the questionList ul in the DOM
        const questionList = document.querySelector('#questionList');

        // for every result from our API
        for (let i = 0; i < response.results.length; i++){

          // create a new list item and add it to the questionList
          const listItem = document.createElement('li');
          questionList.appendChild(listItem);

          // create a paragraph ('p') and a span ('span')
          const questionParagraph = document.createElement('p');
          const questionSpan = document.createElement('span');

          // add these to our list item (the 'li')
          listItem.appendChild(questionParagraph);
          listItem.appendChild(questionSpan);

          // set the HTML for the paragraph and the span to the results of the message
          questionParagraph.innerHTML = response.results[i].question
          questionSpan.innerHTML = response.results[i].correct_answer
          ul.appendChild(itemAdd)
        }

}

// button click of questionButton
document.getElementById("questionButton").addEventListener("click", async function() {
// click it up here; create the element, setting the inner html for the element then appending the element to the dom
// focus on line 32 - 46, on click but instead of response results i ? it will be response result and then thevariable i put in question of i

apiInfo[problemNumber].question

  // increment ?#
})
// button click of answerButton


})()


    // .catch(err => {
    //   console.log(`error ${err}`)
    //   // alert("sorry, there are no results for your search")
    // });




    // let count = 0
    //       setInterval(()=>{
    //         if(count >= .length ){
    //           count = 0
    //         }
    //         document.querySelector('p').src = response.results[count].question
    //         count++
    //       },1000)
