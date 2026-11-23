// SIGN LIBRARY DATA
// Each object is one road sign.

const signs = [
  {
    name: "Stop",
    category: "Regulatory sign",
    meaning: "You must come to a complete stop.",
    action: "Stop fully at the line, check for traffic, then go when it is clear."
  },
  {
    name: "Yield",
    category: "Regulatory sign",
    meaning: "Other traffic has the right of way.",
    action: "Slow down and be ready to stop for cars and people crossing."
  },
  {
    name: "Speed Limit",
    category: "Regulatory sign",
    meaning: "The fastest speed allowed on this raod.",
    action: "Keep your speed at or below the number on the sign."
  },
  {
    name: "Do Not Enter",
    category: "Regulatory sign",
    meaning: "You are not allowed to drive into this road.",
    action: "Do not turn in. Find another route."
  },
  {
    name: "School Zone",
    category: "Warning sign",
    meaning: "A school is nearby and children may be crossing.",
    action: "Slow down and watch for kids near the road."
  },
  {
    name: "Railroad Crossing",
    category: "Warning sign",
    meaning: "Train tracks across the road ahead.",
    action: "Slow down, look and listen for trains, and be ready to stop."
  }
];

// Get the container from index.hmtl
const container = document.getElementById("content-container");
const quizMessage = document.getElementById("quiz-message");
const count = document.getElementById("count");
const searchInput = document.getElementById("sign-search");

//Week 9 content:
// openSign: new drivers need to guess first, then check one answer at a time
let openSign = "none"; //let: this value changes

//Week 10 content:
// searchText: drivers need to find one sign fast instead of scrolling through all of them
let searchText = "";

// matchesSearch: does this sign's name or category have the search text in it? 
function matchesSearch(sign) {
  const text = (sign.name + " " + sign.category).toLowerCase();
  return text.includes(searchText.trim().toLowerCase());
}

// render: draws the sign cards, shows the answer for openSign only, and updates the message
function render() {
  // Clear the old cards, so nothing is added twice
  container.innerHTML = "";

   let shown = 0;

  // Loop through the signs and build a card for each one
  signs.forEach(sign => {
     // Only build the card if it matches the search
     if (matchesSearch(sign)) {
      // Create Elements
      const itemDiv = document.createElement("div");
      const title = document.createElement("h3");
      const category = document. createElement("p");
      const meaning = document.createElement("p");
      const action = document.createElement("p");
      const button = document.createElement("button");

    // Set attribute
    itemDiv.className = "item"
    category.className = "sign-category"
    button.className = "button-outline"

    // Set content
    title.textContent = sign.name;
    category.textContent = sign.category;
    meaning.textContent = "What it means: " + sign.meaning;
    action.textContent = "What to do: " + sign.action;

    // Append to structure
    itemDiv.appendChild(title);
    itemDiv.appendChild(category);



//Week 8 content:
// Decide if this card shows its answer
    if (sign.name === openSign) {
      itemDiv.appendChild(meaning);
      itemDiv.appendChild(action);
      itemDiv.className = "item is-open";
      button.textContent = "Hide answer";
    } else {
      button.textContent = "Show answer";
    }

    itemDiv.appendChild(button);
    container.appendChild(itemDiv);

    // Change the state, then redraw the page
    button.addEventListener("click", () => {
      if (openSign === sign.name) {
        openSign = "none";
      } else {
        openSign = sign.name;
      }
      console.log("openSign:", openSign);
      render();
    });

     shown = shown + 1;
    }
  });

// If nothing matched, tell the learner what to do next
  if (shown === 0) {
    const empty = document.createElement("p");
    empty.className = "empty"
    empty.textContent = 'No signs match. Try another word like "stop" or "warning", or clear the search box.';
    container.appendChild(empty);
  }

  // Show the count
  count.textContent = "Showing " + shown + " of " + signs.length + " signs";



  // Work out the message from the state
  if (openSign === "none") {
    quizMessage.textContent = "Guess what each sign means, then click Show answer to check.";
  } else {
    quizMessage.textContent = "Checking: " + openSign + ". Did you get it right?";
  }
}

// The "input" event fires every time the driver types or deletes a letter
searchInput.addEventListener("input", (event) => {
  // Change the state...
  searchText = event.target.value;
  openSign = "none"; // close any open answer, so the message never names a card that got hidden
  console.log("searchText:", searchText);

  // ...then redraw the page from it
  render();
});


// Draw the page once at the start
render();