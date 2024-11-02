import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  // text = "new text"; wrong way
  //setText('new text'); right way
  const handelUpClick = () => {
    // console.log("uper case was clicked" + " "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' To upper-case','success');

  };

  const handelDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' To lower-case','success');

  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(' Clear text','danger');

  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(' Text copied','warning');

  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(' Extra space removed','success');

  };

  const handelOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value); //on writing anything text is conti changing
  };

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'#F2F1F1':'#042743'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.setMode === "dark" ? "black" : "#F2F1F1",
              color: props.setMode === "dark" ? "#F2F1F1" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
        disabled ={text.length===0}
          type="ConvertToUperCase"
          className="btn btn-primary my-3 mx-1"
          onClick={handelUpClick}
        >
          ConvertToUperCase
        </button>
        <button
          disabled ={text.length===0}
          type="ConvertToLowerCase"
          className="btn btn-secondary my-3 mx-1"
          onClick={handelDownClick}
        >
          ConvertToLowerCase
        </button>
        <button
          disabled ={text.length===0}
          type="ConvertToLowerCase"
          className="btn btn-success my-3 mx-1"
          onClick={clear}
        >
          Clear
        </button>
        <button
          disabled ={text.length===0}
          type="ConvertToLowerCase"
          className="btn btn-danger my-3 mx-1"
          onClick={copyText}
        >
          CopyText
        </button>
        <button
          disabled ={text.length===0}
          type="ConvertToLowerCase"
          className="btn btn-dark my-3 mx-1"
          onClick={removeExtraSpace}
        >
          RemoveExtraSpace
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'#F2F1F1':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  );
}
