
let image1 = "url('./assets/cr7_balondeoro.jpg')"
let image2 = "url('./assets/cr7_champions.jpeg')"
let image3 = "url('./assets/cr7_juventus.jpg')"
let image4 = "url('./assets/cr7_portugal.jpg')"
let image5 = "url('./assets/Cristiano_Ronaldo_2018.jpg')"
let image6 = "url('./assets/cr7.jpg')"

let cards = document.querySelectorAll('.card');

let youWin = document.getElementById('you-won')


let oddCards = document.querySelectorAll(".odd");
let evenCards = document.querySelectorAll(".even");

const images = [image1, image2, image3, image4, image5, image6];

const shuffleImages = () => {
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

shuffleImages();

let cardOne;
let cardTwo;
let disabledDeck = false;
let counter = 0;

const flipCard = (e) => {
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disabledDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;
        } 
        cardTwo = clickedCard
        disabledDeck = true;
        let cardOneDiv= cardOne.classList[1];
        let cardTwoDiv = cardTwo.classList[1];
        matchCards(cardOneDiv, cardTwoDiv);
        if (counter == 6) {
            setTimeout(() => youWin.style.display = "flex", 600); 
        }
    }
}

const matchCards = (img1, img2) => {
    // console.log(disabledDeck)
    if (img1 === img2) {
        setTimeout (() => {
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            return disabledDeck = true;
        }, 400)
        setTimeout(() => {
            return disabledDeck = false;
        }, 800)
        return counter +=1;
    } else {
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400)

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip")
            cardTwo.classList.remove("shake", "flip")
            cardOne = cardTwo = "";
            console.log(cardOne, cardTwo)
            disabledDeck = false;
            console.log(disabledDeck);
        }, 800)
    }
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
