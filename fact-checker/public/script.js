// public/script.js
document.getElementById('fact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fact = document.getElementById('fact').value;
    const source = document.getElementById('source').value;

    await fetch('/facts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fact, source })
    });

    document.getElementById('fact').value = '';
    document.getElementById('source').value = '';
    loadFacts();
});

// Load and display facts
const loadFacts = async () => {
    const response = await fetch('/facts');
    const facts = await response.json();
    const container = document.getElementById('facts-container');
    container.innerHTML = '';

    facts.forEach((factObj, index) => {
        const factDiv = document.createElement('div');
        factDiv.innerHTML = `
            <p>${factObj.fact} <a href="${factObj.source}" target="_blank">[source]</a></p>
            <button onclick="vote(${index}, 'true')">True (${factObj.votes.true})</button>
            <button onclick="vote(${index}, 'false')">False (${factObj.votes.false})</button>
        `;
        container.appendChild(factDiv);
    });
};

// Voting function
const vote = async (index, vote) => {
    await fetch('/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index, vote })
    });
    loadFacts();
};

// Initial load
loadFacts();
