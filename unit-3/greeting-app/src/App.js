import React, { useState } from "react";

export default function GreetingApp() {
  const [language, setLanguage] = useState("");  // store user input
  const [greeting, setGreeting] = useState("");  // store final greeting

  // Function to handle button click
  function greetPerson() {
    if (language.toLowerCase() === "english") {
      setGreeting("Hello!");
    } else if (language.toLowerCase() === "hindi") {
      setGreeting("नमस्ते!");
    } else if (language.toLowerCase() === "french") {
      setGreeting("Bonjour!");
    } else if (language.toLowerCase() === "spanish") {
      setGreeting("¡Hola!");
    } else if (language.trim() === "") {
      setGreeting("Please type a language first!");
    } else {
      setGreeting("Sorry, language not recognized 😅");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>🌍 Greeting App</h2>
      <p>Type a language name (like English, Hindi, French, Spanish)</p>

      <input
        type="text"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="Enter language here"
        style={{ padding: "8px", width: "220px", marginRight: "10px" }}
      />

      <button onClick={greetPerson} style={{ padding: "8px 16px" }}>
        Greet Me
      </button>

      <h3 style={{ marginTop: "30px", color: "blue" }}>{greeting}</h3>
    </div>
  );
}
