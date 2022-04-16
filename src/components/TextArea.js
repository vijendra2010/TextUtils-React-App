import React, {useState} from 'react'

export default function TextArea(props) {
    //useState for text area 
    const [text, setText] = useState('Enter text here...');

    //useState for Dark/Light Mode button
    const [btnText, setBtnText] = useState('Enable Dark Mode');

    //useState to handle color and background color while mode switching
    const [myStyles, setMyStyles] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    
    //handler for dark/light mode
    const handleDarkMode = () =>{
        if(myStyles.color === 'black'){
            setMyStyles({
                color: 'white',
                backgroundColor: 'black'     
            });
            setBtnText('Enable Light Mode');
        }else{
            setMyStyles({
                color: 'black',
                backgroundColor: 'white'     
            });
            setBtnText('Enable Dark Mode');
        };
    };

    //handler for converting text into Uppercase
    const handleUpCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    //handler for converting text into Lowercase
    const handleLowCase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    //handler to clear the text area
    const handleClearCase = () =>{
        setText("");
    }

    //listener to listen the updates in text area
    const handleUpOnchange = (event) =>{
        setText(event.target.value);
    }
    
    return (
    <>
    <div className='container my-1' style={myStyles}>
        <label className='label my-1'>{props.label}</label>
        <div className="mb-3">
            <textarea className="form-control my-1"  style={myStyles} value={text} onChange={handleUpOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpCase}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLowCase}>Convert To LowerCase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClearCase}>Clear Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleDarkMode}>{btnText}</button>
    </div>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').length} Words, {text.length} Characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
