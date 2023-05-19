import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = ()=>{
   console.log("Upper was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Upper Case" ,"success")
}

const handleLowClick = ()=>{
     console.log("Lower was clicked" +text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Convert to lower Case" ,"success")
  }

  const handClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Clear all text" ,"success")
  }
const handleOnChange = (event) =>{
    setText(event.target.value);
}

const handleCopy = () => {
  var text = document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
  props.showAlert("Copy to clipboard" ,"success")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Remove extra spaces" ,"success")
}
    const  [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
           <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className="container my-3 "  style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text summary</h1>
            <p>{text.split( " ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
           
         <p> {0.008* text.split ("").filter((element)=> {return element.length!==0}).length} Minutes read</p>
       <h2> Preview</h2>
       <p>{text.length>0?text:"Enter something to text "}</p>
        </div>
        </>
    )

}