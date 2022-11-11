
let image1 = "url('./assets/goku-pelon.jfif')"
let image2 = "url('./assets/auron.jfif')"
let image3 = "url('./assets/explosion.jpg')"
let image4 = "url('./assets/dora.jfif')"
let image5 = "url('./assets/mrclean.jpg')"
let image6 = "url('./assets/richi-phelps.jfif')"

let cards = document.querySelectorAll('.card');
console.log(cards);


let oddCards = document.querySelectorAll(".odd");
let evenCards = document.querySelectorAll(".even");

const images = [image1, image2, image3, image4, image5, image6];

const randomizeImages = () => {
    //Generate an array of random numbers between 0 and 5

    const randomNumbers = (n) => {
        let arr = [];
        while (arr.length < n) {
            let num = Math.floor(Math.random() * n);
            if (arr.includes(num)) {
                continue
            } else {
                arr.push(num);
            }
        }
        return arr;
    }

    //use randomNumbers() to generate two arrays

    let order1 = randomNumbers(6);
    let order2 = randomNumbers(6);

    //use the arrays' values as indexes of the image's array

    oddCards.forEach(card => {
        let removed1 = order1.splice(0, 1).pop();
        card.style.backgroundImage = images[removed1];
        let newClass1 = removed1.toString();
        card.parentElement.classList.add(newClass1)
    })

    evenCards.forEach(card => {
        let removed2 = order2.splice(0, 1).pop();
        card.style.backgroundImage = images[removed2];
        let newClass2 = removed2.toString();
        card.parentElement.classList.add(newClass2)
    })
}

randomizeImages();

let cardOne;
let cardTwo;

const flipCard = (e) => {
    let clickedCard = e.target;
    if (clickedCard !== cardOne) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        } 
        cardTwo = clickedCard
        
        let cardOneDiv= cardOne.classList[1];
        let cardTwoDiv = cardTwo.classList[1];
        matchCards(cardOneDiv, cardTwoDiv);
    }
}

const matchCards = (img1, img2) => {
    console.log(img1, img2)
    if (img1 == img2) {
        return console.log("Same Cards")
    }
    console.log("Not matched")
}

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})


// const unflipCard = (e) => {
//     let clickedCard = e.target;
//     clickedCard.classList.remove("flip");
//     cardOne = clickedCard;
//     cardTwo = clickedCard;
//     console.log(cardOne, cardTwo);
// }


// flippedCards.forEach(card => {
//     card.addEventListener("click", unflipCard)
// })
