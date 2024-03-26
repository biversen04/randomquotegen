function generateQuote() {
    const quotes = [
        {
            quote: "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
            author: "Michael Scott"
        },
        {
            quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
            author: "Michael Scott"
        },
        {
            quote: "Sorry I annoyed you with my friendship.",
            author: "Andy Bernard"
        },
        {
            quote: "If I don't have some cake soon, I might die.",
            author: "Stanley Hudson"
        },
        {
            quote: "I love inside jokes. Id love to be a part of one someday.",
            author: "Michael Scott"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function() {
    generateQuote();
}

// document.getElementById("generate").addEventListener('click', generateQuote());
