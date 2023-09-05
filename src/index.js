console.log('%c HI', 'color: firebrick')


// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

document.addEventListener('DOMContentLoaded', () => {

const container = document.querySelector('#dog-image-container')
const dogList = document.querySelector('#dog-breeds')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedURL = "https://dog.ceo/api/breeds/list/all";
const dropDown = document.querySelector("#breed-dropdown");
let breeds


function getImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogData => {
        const imgs = dogData.message
        //console.log(imgs)
        imgs.forEach((image) => {
                //console.log(image)
                const imgElement = document.createElement('img')
                imgElement.src = image
                container.appendChild(imgElement)
        
    })
})
}

function loadBreeds() {
    fetch(breedURL)
    .then(res => res.json())
    .then(breedData => {
        breeds = Object.keys(breedData.message) //b/c breedData.message is returning an obj instead of an array
        //Want to create li elements
        
        breeds.forEach((breed) => {
            const breedElement = document.createElement('li')
            breedElement.innerText = breed
            //console.log(breedElement)
            dogList.append(breedElement)
            
  //Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
  //when the user clicks on any one of the <li>s, the font color of that <li> changes. 
      breedElement.addEventListener('click', () => {
        if (breedElement.style.color === 'red') {
            breedElement.style.color = 'black'
        } else {
            breedElement.style.color = 'red'    
                }
            })
            })
        })
        }
        
    
    function filterBreeds(letter) {

    const filteredBreeds =  breeds.filter(breed => breed.startsWith(letter))
    filteredBreeds.forEach((breed) => {
        const breedElement = document.createElement('li')
        breedElement.innerText = breed
        //console.log(breedElement)
        dogList.append(breedElement)
        
//Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
//when the user clicks on any one of the <li>s, the font color of that <li> changes. 
  breedElement.addEventListener('click', () => {
    if (breedElement.style.color === 'red') {
        breedElement.style.color = 'black'
    } else {
        breedElement.style.color = 'red'    
            }
        })
        })
    }
    
    
        
        getImages()
        loadBreeds()

        dropDown.addEventListener('change', (e) => {
            //console.log('hi')
            const letter = e.target.value
            dogList.innerHTML = ''
             filterBreeds(letter)
        })
    })
