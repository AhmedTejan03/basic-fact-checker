# 📰 Fact Checker Platform

A web-based platform where users can post facts or news, and others can vote on their authenticity by selecting either "True" or "False." This is a simple but functional fact-checking tool that can be used for community-driven fact validation.

## Features

- **Fact Submission**: Users can submit a fact or news along with a source URL.
- **Fact Browsing**: Users can view all submitted facts.
- **Voting System**: Users can vote "True" or "False" to verify the authenticity of each fact.
- **Real-time Updates**: The facts and votes are dynamically updated without needing to refresh the page.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS for client-side interactivity)
- Node.js (for backend server)
- Express.js (for API handling)
- JSON (for storing facts and votes)


## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AhmedTejan03/basic-fact-checker.git
2. **Navigate into the project directory**
   '''bash
   cd fact-checker-platform
3. **Install dependencies**
   '''bash
   npm install

  ### Running the platform
1. **Start the server**
   '''bash
   npm start
2. **Open your browser and go to http://localhost:3000.**


### File structure
fact-checker-platform/
├── public/
│   ├── index.html          # The main HTML file
│   ├── style.css           # Styling for the app
│   ├── script.js           # Client-side JavaScript
├── facts.json              # JSON file to store submitted facts and votes
├── server.js               # Node.js server handling API requests
├── LICENSE                 # License file (MIT License)
├── README.md               # This README file
└── package.json            # Project configuration and dependencies
