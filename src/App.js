import React, { useState } from "react";
import "./styles.css";

const emojisDix = {
  "🇮🇳": "India",
  "🇦🇪": "United Arab Emirates",
  "🇦🇺": "Australia",
  "🇧🇩": "Bangladesh",
  "🇧🇷": "Brazil",
  "🇧🇬": "Bulgaria",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇨🇳": "China",
  "🇩🇪": "Germany",
  "🇪🇬": "Egypt",
  "🇬🇧": "United Kingdom"
};

let emojisArr = Object.keys(emojisDix);

export default function App() {
  function onclickHandler(index) {
    let value = emojisDix[index];
    setInput(value);
  }

  function checkinput(input) {
    if (input === "") {
      return `Please Enter or Click on the Flag emojis below to know their respective Countries`;
    } else {
      return emojisDix[input];
    }
  }

  const [input, setInput] = useState(
    "Please Enter or Click on the Flag emojis below to know their respective Countries"
  );
  function changeHandler(e) {
    let input = e.target.value;
    if (checkinput(input) === undefined) {
      setInput(`we don't have this in our database`);
    } else {
      setInput(checkinput(input));
    }
  }

  return (
    <div className="App">
      <h1>Flag Emoji Interpreter</h1>

      <input
        placeholder="Enter your flag emoji here"
        style={{ padding: "1rem", width: "40%" }}
        onChange={changeHandler}
      />
      <div style={{ padding: "1rem", fontWeight: "bold", fontSize: "1rem" }}>
        {" "}
        {input}
      </div>
      <hr />
      <h2>Emojis we know</h2>
      <div style={{ width: "50%", margin: "auto" }}>
        <ul>
          {emojisArr.map((item) => {
            return (
              <li
                onClick={() => onclickHandler(item)}
                key={item}
                style={{
                  display: "inline-block",
                  padding: "1rem",
                  fontSize: "2rem",
                  cursor: "pointer"
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
