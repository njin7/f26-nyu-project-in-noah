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
  }
  {
    name: "Railroad Crossing",
    category: "Warning sign",
    meaning: "Train tracks across the road ahead.",
    action: "Slow down, look and listen for trains, and be ready to stop."
  }
];

// Get the container from index.hmtl
const container = document.getElementById("content-container");

// Loop through the signs and build a card for each one
signs.forEach(sign => {
  // Create Elements
  const itemDiv = document.createElement("div");
  const title = document.createElement("h3");
  const category = document. createElement("p");
  const meaning = document.createElement("p");
  const action = document.createElement("p");

  // Set attribute
  itemDiv.className = "item"
  category.className = "sign-category"

  // Set content
  title.textContent = sign.name;
  category.textContent = sign.category;
  meaning.textContent = "What it means: " + sign.meaning;
  action.textContent = "What to do: " + sign.action;

  // Append to structure
  itemDiv.appendChild(title);
  itemDiv.appendChild(category);
  itemDiv.appendChild(meaning);
  itemDiv.appendChild(action);
  container.appendChild(itemDiv);
});