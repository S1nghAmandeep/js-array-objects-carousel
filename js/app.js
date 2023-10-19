
// creato array di oggetti

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

console.log(images)

const imageCardDomEl = document.querySelector('.images-card');
console.log(imageCardDomEl)

// ciclare l'array di oggetti per poter inserire nel dom

for (let i = 0; i < images.length; i++) {

    const infoCard = images[i];
    // console.log(infoCard);

    const image = infoCard.image;
    const title = infoCard.title;
    const text = infoCard.text;

    const cardString = `
    <div class="hide">
        <img src="./${image}" alt="">
        <div class="description">
            <h3>${title}</h3>
            <p>${text}</p>
        </div>
    </div>
    `
    imageCardDomEl.innerHTML += cardString;
    console.log(imageCardDomEl)
}

const scrollDomEl = document.querySelectorAll('.hide');
console.log(scrollDomEl)

let indexImages = 0;
scrollDomEl[indexImages].classList.add('active');

const downBtnDomEl = document.querySelector('.down');
// console.log(downBtnDomEl)

downBtnDomEl.addEventListener('click', function () {
    console.log(downBtnDomEl)

    scrollDomEl[indexImages].classList.remove('active');
    indexImages ++
    scrollDomEl[indexImages].classList.add('active')
})

const upBtnDomEl = document.querySelector('.up');

upBtnDomEl.addEventListener('click', function () {
    // console.log(upBtnDomEl)

        scrollDomEl[indexImages].classList.remove('active');
       indexImages --
        
    scrollDomEl[indexImages].classList.add('active')
})
