let paragraph = document.querySelector("p");



function gutenbergFetcher() {
    fetch(`https://gutendex.com/books?ids=11,12,13`)
  .then((response) => {
    if(!response.ok) {throw new Error ('problem calling API');}
    return response.json();
  })
  .then((response) => {
    if (response.translators !== []) {
    return response.translators;
    }
    else{
        console.log('no translators');
    }
})  
    .then((response) => {
    console.log(response);
    })

  .catch((error) => {
    console.log(error.message)})
}

window.addEventListener("click", gutenbergFetcher)