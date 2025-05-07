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

document.getElementById("generate").addEventListener("click", () => {

    const category =document.getElementById("category").value
    
    const quoteDisplay =document.getElementById("quoteDisplay")

    const randomIndex =Math.floor(Math.random()*quotes[category].length)
    quoteDisplay.textContent =quotes[category][randomIndex]
})