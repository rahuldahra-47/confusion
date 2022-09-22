import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase Button Was Clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
        }
    const handleDnClick=()=>{
        // console.log("UpperCase Button Was Clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
        }
    const handleClearClick=()=>{
        // console.log("UpperCase Button Was Clicked"+ text);
        let newText=("");
        setText(newText);
        props.showAlert("Textbox cleared","success");

        }
    const handleUpChange=(event)=>{
        // console.log("Value Was Changed");
        setText(event.target.value)

        }
    const [text,setText] = useState("")
    return (
        <>
       <div className='container' style={{color: props.mode==="dark"?"white":"#022447"}}>
       <h1>{props.heading}</h1> 
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleUpChange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==="dark"?"white":"black"}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDnClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"#022447"}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minutes read
            </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
        </div>

        </>
    )
}
