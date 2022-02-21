let paragraph = document.querySelector("p");



function gutenbergFetcher() {
    fetch(`https://gutendex.com/books?ids=11,12,13`)
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

window.addEventListener("click", gutenbergFetcher)