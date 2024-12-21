const jokeElement = document.getElementById("joke");

async function getJoke() {
  jokeElement.textContent = "Loading a new joke...";

  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("Failed to fetch the joke.");
    }

    const jokeData = await response.json();
    jokeElement.textContent = `${jokeData.setup} - ${jokeData.punchline}`;
  } catch (error) {
    jokeElement.textContent = "Oops! Unable to load a joke. Try again later.";
    console.error("Error fetching joke:", error);
  }
}

// Load a joke when the page first loads
document.addEventListener("DOMContentLoaded", getJoke);
