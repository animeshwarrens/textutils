import React, {useState} from "react";

export default function TextFrom(props) {

  const upCase = () => {
    console.log("Button was clicked")
    let newText = text.toLocaleUpperCase();
    setText(newText);
  }

  const onChance = (event) => {
    console.log("Change")
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter Text Here')

  return (
    <div>
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChance}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={upCase}>Convert to Uppercase</button>

    </div>
  );
}
