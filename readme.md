# 🎮 The Trivia Game

A browser-based multi-round trivia game built using **HTML, CSS, and Vanilla JavaScript**. The game walks the player through category selection, gameplay rounds, score evaluation, and a final result screen — all without any backend or external libraries.

This project focuses on **core JavaScript logic, DOM manipulation, and clean flow control**, making it ideal for understanding how a real-world interactive app works under the hood.

---

## 🚀 Features

- 🎯 Player entry and game start
- 📚 Category selection before gameplay
- ❓ Dynamic trivia questions with options
- ⏱️ Round-based game flow
- 🧠 Score calculation and decision logic
- 📊 Round summary screen
- 🏁 Final result display
- 💡 Pure JavaScript (no frameworks, no libraries)

---

## 🧩 Project Flow (High Level)

1. Player enters the game
2. Chooses a trivia category
3. Answers questions in a round
4. Game evaluates answers and score
5. Round summary is shown
6. Final result is displayed based on performance

Each step is handled on a **separate HTML + JS page**, keeping logic modular and readable.

---

## 📁 Folder Structure

```
The_trivia_game/
│
├── player.html
├── player.js              # Player setup and game entry logic
│
├── category/
│   ├── category.html      # Category selection UI
│   └── category.js        # Category handling logic
│
├── game/
│   ├── game.html          # Main gameplay screen
│   └── game.js            # Core trivia logic (questions, answers, scoring)
│
├── Round_Summary_and_Decision/
│   ├── round_summary_and_decision.html
│   └── round_summary_and_decision.js  # Round evaluation logic
│
├── final_result/
│   ├── result.html        # Final result screen
│   └── result.js          # Final score and outcome logic
│
└── .git/                  # Git version control
```

---

## ⚙️ How It Works (Logic Overview)

- **State Management**: Game state (score, category, progress) is managed using JavaScript variables and browser navigation between pages.
- **Event Handling**: User interactions are captured using `addEventListener`.
- **DOM Manipulation**: Questions, options, and results are dynamically injected into the DOM.
- **Decision Logic**: Player performance determines the round summary and final outcome.

No backend. No database. Just logic, discipline, and JavaScript doing the heavy lifting.

---

## 🛠️ How to Run the Project

1. Download or clone the repository

   ```bash
   git clone <repository-url>
   ```

2. Open the project folder

3. Start the game by opening:

   ```
   player.html
   ```

   in your browser (Chrome recommended)

That’s it. No setup drama.

---

## 🎯 Learning Outcomes

This project demonstrates:

- Strong grasp of JavaScript fundamentals
- Clean separation of concerns
- Real-world DOM usage
- Event-driven programming
- Game flow and state transitions

Perfect for interviews when asked:

> “Have you built anything using pure JavaScript?”

---

## 🔮 Possible Improvements

- Add a timer per question
- Store scores using `localStorage`
- Add sound effects and animations
- Convert to a single-page app
- Add difficulty levels

---

## 📌 Author

**Sharique Hussain**\
Computer Science & Engineering (NIT Silchar)\
Frontend | JavaScript | Problem Solving

---

## ⭐ Final Note

This project intentionally avoids frameworks to prove one thing:

> Mastering React makes you a library specialist; mastering JavaScript makes you a developer

Enjoy the game. And the logic behind it.

