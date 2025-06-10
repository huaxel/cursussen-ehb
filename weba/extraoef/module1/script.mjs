let btn = document.querySelector(".quote-button");
let quote = document.querySelector(".quote-text");
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        person: "Franklin D. Roosevelt",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt",
    },
    {
        quote: "The best way to predict the future is to create it.",
        person: "Peter Drucker",
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        person: "Albert Schweitzer",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau",
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson",
    },
    {
        quote: "The future depends on what you do today.",
        person: "Mahatma Gandhi",
    },
    {
        quote: "You cannot change your future, but you can change your habits, and surely your habits will change your future.",
        person: "Jim Rohn",
    },
    {
        quote: "The secret of success is to be ready when your opportunity comes.",
        person: "Benjamin Disraeli",
    },
    {
        quote: "Success is not in what you have, but who you are.",
        person: "Bo Bennett",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        person: "Winston Churchill",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        person: "Vidal Sassoon",
    },
    {
        quote: "Success is not the absence of failure; it's the persistence through failure.",
        person: "Aisha Tyler",
    },
    {
        quote: "Success is how high you bounce when you hit bottom.",
        person: "George S. Patton",
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        person: "Colin R. Davis",
    },
    {
        quote: "Opportunities don't happen. You create them.",
        person: "Chris Grosser",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        person: "John D. Rockefeller",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "Thomas Jefferson",
    },
];

btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    btn.innerText = "Get another quote";
});

console.log(btn);