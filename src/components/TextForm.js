import React, {useState} from "react"

export default function TextForm(props) {
  const handleupclick = () =>{
    //console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to Upper Case","success");
  }

  const handlelowclick = () =>{
    //console.log("UpperCase was Clicked" + text);
    let newText3 = text.toLowerCase();
    setText(newText3)
  }

  const handleOnChange = (event) =>{
    //console.log("on change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    console.log("I an a Copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style = {{color : props.mode === 'light'?'black':'white'}} >
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey', color : props.mode === 'light'?'black':'white'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleupclick}>convert To UpperCase</button>
      <button className="btn btn-primary" onClick={handlelowclick}>convert To LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>remove Extra Spaces </button>
    </div>
    <div className="container my-3" style ={{color : props.mode === 'light'?'black':'white'}}>
      <h1>Your text Summary</h1>
      <p> {text.split(" ").length} words and {text.length} charecters</p>
      <p> {0.008 * text.split(" ").length} Minite to reed </p>
      <h2> Prevew </h2>
      <p> {text.length>0?text : "enter somthing in textbox"} </p>
    </div>
    </>
  )
}
