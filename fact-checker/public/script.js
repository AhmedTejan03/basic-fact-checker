// public/script.js
document.getElementById('fact-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const fact = document.getElementById('fact').value;
    const source = document.getElementById('source').value;

    // Simple validation check
    if (fact && source) {
        await fetch('/facts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fact, source })
        });

        // Reset form fields
        document.getElementById('fact').value = '';
        document.getElementById('source').value = '';

        // Show confirmation message
        alert('Fact submitted successfully!');
        loadFacts();  // Refresh the facts
    } else {
        alert('Please fill in both the fact and source fields.');
    }
});

// Load and display facts from the server
const loadFacts = async () => {
    const response = await fetch('/facts');
    const facts = await response.json();
    const container = document.getElementById('facts-container');
    container.innerHTML = ''; // Clear previous content

    if (facts.length === 0) {
        container.innerHTML = '<p>No facts available. Be the first to submit one!</p>';
    }

    facts.forEach((factObj, index) => {
        const factDiv = document.createElement('div');
        factDiv.className = 'fact-item';
        factDiv.innerHTML = `
            <p>${factObj.fact} <a href="${factObj.source}" target="_blank">[source]</a></p>
            <div class="vote-buttons">
                <button class="vote-btn true" onclick="vote(${index}, 'true')">True (${factObj.votes.true})</button>
                <button class="vote-btn false" onclick="vote(${index}, 'false')">False (${factObj.votes.false})</button>
            </div>
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
    loadFacts();  // Refresh the facts after voting
};

// Initial load
loadFacts();
