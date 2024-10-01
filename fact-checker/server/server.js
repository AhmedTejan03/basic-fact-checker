// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

// Load facts from the JSON file
const loadFacts = () => {
    if (!fs.existsSync('facts.json')) {
        fs.writeFileSync('facts.json', JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync('facts.json'));
};

// Save facts to the JSON file
const saveFacts = (facts) => {
    fs.writeFileSync('facts.json', JSON.stringify(facts, null, 2));
};

// Get all facts
app.get('/facts', (req, res) => {
    res.json(loadFacts());
});

// Submit a new fact
app.post('/facts', (req, res) => {
    const { fact, source } = req.body;
    const facts = loadFacts();
    facts.push({ fact, source, votes: { true: 0, false: 0 } });
    saveFacts(facts);
    res.status(201).send('Fact submitted!');
});

// Vote on a fact
app.post('/vote', (req, res) => {
    const { index, vote } = req.body;
    const facts = loadFacts();
    if (facts[index]) {
        facts[index].votes[vote]++;
        saveFacts(facts);
        res.send('Vote counted!');
    } else {
        res.status(404).send('Fact not found!');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
