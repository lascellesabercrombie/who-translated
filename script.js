
let form = document.querySelector("form");
let inputTitle = document.getElementById("title");
let paragraph = document.querySelector("p");
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
let translators = result.translators;
console.log(translators.length);
if (translators.length < 1) {
paragraph.innerText = "No translator found";
}
else if (translators.length > 1){
    let x = [];
    translators.forEach((translator) => {
        x.push(`${translator.name} (${translator.birth_year}-${translator.death_year})`)
    })
    x = x.join(' and ');
    paragraph.innerText = `The translators of this work are ${x}`;
}
else {
paragraph.innerText = `The translator of this work was: ${translators[0].name} (${translators[0].birth_year}-${translators[0].death_year})`
}
return translators;
})
.catch((error) => {
console.log(error.message)})
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gutenbergFetcher();
})