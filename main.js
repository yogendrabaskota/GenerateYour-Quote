const quotes = {
    science: [
        "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
        "The important thing is to never stop questioning. – Albert Einstein",
        "Somewhere, something incredible is waiting to be known. – Carl Sagan"
    ],
    philosophy: [
        "The unexamined life is not worth living. – Socrates",
        "Happiness depends upon ourselves. – Aristotle",
        "He who thinks great thoughts, often makes great errors. – Martin Heidegger"
    ],
    motivation: [
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "The future depends on what you do today. – Mahatma Gandhi",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill"
    ],
    life: [
        "Life is what happens when you're busy making other plans. – John Lennon",
        "In the end, we only regret the chances we didn’t take.",
        "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde"
    ]
};

let currentCategory = ""
let currentIndex = -1
const quoteDisplay = document.getElementById("quoteDisplay")

function showQuote(category,index){
    const list =quotes[category]
    
    if(!list || list.length == 0){
        quoteDisplay.textContent = 'No Quote available'
        return
    }
    quoteDisplay.textContent = list[index]
}



document.getElementById("generate").addEventListener("click", () => {

    currentCategory =document.getElementById("category").value


    if(!currentCategory || !quotes[currentCategory]){
        quoteDisplay.textContent = 'Please select category to get quote'
        return
    }

    currentIndex =Math.floor(Math.random()*quotes[currentCategory].length)
    showQuote(currentCategory, currentIndex)
})

document.getElementById("random").addEventListener("click", () =>{
    if (!currentCategory || !quotes[currentCategory]) {

        quoteDisplay.textContent = "Please select a category first"
        return
    }

    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length)
    showQuote(currentCategory, currentIndex)
})

document.getElementById("previous").addEventListener("click", () => {

    if (!currentCategory || !quotes[currentCategory]){

        quoteDisplay.textContent = "Please select a category first"
        return
    }

    currentIndex--
    if (currentIndex <0){

        currentIndex =quotes[currentCategory].length -1
    }
    showQuote(currentCategory, currentIndex)
})

document.getElementById("next").addEventListener("click", () =>{
    if (!currentCategory || !quotes[currentCategory]){
        quoteDisplay.textContent ="Please select a category first"
        return;
    }

    currentIndex++
    if (currentIndex >=quotes[currentCategory].length){
        currentIndex =0
    }
    showQuote(currentCategory, currentIndex)
})