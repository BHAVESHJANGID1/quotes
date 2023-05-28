const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`
}, 
{
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
},
 {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
},
 {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
},
 {
    quote: `"In order to write about life first you must live it."`,
    writer: `– Ernest Hemingway`
},
 {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
},
 {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
},
 {
    quote: `"Turn your wounds into wisdom."`,
    writer: `– Oprah Winfrey`
},
 {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
},
 {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, 
]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

    
    writer.innerHTML = quotes[random].writer;
})
