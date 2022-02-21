let paragraph = document.querySelector("p");
let form = document.querySelector("form");
let inputTitle = document.getElementById("title");
console.log(inputTitle);

function gutenbergFetcher() {
let inputTitleValue = inputTitle.value;
console.log(inputTitleValue);
fetch(`https://gutendex.com/books?search=${inputTitleValue}`)
.then((response) => {
if(!response.ok) {throw new Error ('problem calling API');}
return response.json();
})
.then((response) => {
console.log(response.results[0]);
let result = response.results[0];
return result;
})
.then((result) => {
let translatorNum = result.translators.length;
console.log(translatorNum);
return translatorNum;
})
.catch((error) => {
console.log(error.message)})
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gutenbergFetcher();
})