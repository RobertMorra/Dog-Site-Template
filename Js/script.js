// Event listener for the "Show Me a Dog Fact" button
document.getElementById('factButton').addEventListener('click', displayFact);

function displayFact() {
    const facts = [
        "Dogs have a sense of time and can predict future events, such as regular walk times.",
        "A dog's sense of smell is at least 40x better than ours.",
        "Dogs can learn over 1,000 words and gestures.",
        "The Basenji is the world's only barkless dog.",
        "Three dogs survived the Titanic sinking."
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
}

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
