import React, {useState}from "react";
import './index.css'

function App() {
  const[weight,setWeight]= useState(0)
  const[height,setHeight]= useState(0)
  const[bmi,setBmi]= useState('')
  const[message,setMessage]= useState('')
 
  let imgSrc= ''
  if(bmi<1){
    imgSrc= null
  }
  else if(bmi<18.5){
    imgSrc= require('../src/assets/underweight.png')
  }
  else if(bmi>=18.5 && bmi<24.9){
    imgSrc= require('../src/assets/healthy.png')
  }
  else if(bmi>=25 && bmi<29.9){
    imgSrc= require('../src/assets/overweight.png')
  }
  else{
    imgSrc= require('../src/assets/giant.png')
  }

  let calcbmi= (event) => {
    event.preventDefault();
    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    } else{
      let bmi= (weight/(height*height)*10000)
      setBmi(bmi.toFixed(1))

      if(bmi<18.5){
        setMessage('You are underweight')
      } else if(bmi>=18.5 && bmi<24.9){
        setMessage("You are healthy")
      }
      else if(bmi>=25 && bmi<29.9){
        setMessage("You are overweight")
      }
      else{
        setMessage("You are a big fat giant")
      }
      
    }
  }

  let reload= () => {
    window.location.reload()
  }
  return (
    <div className="App">
      <div className="container">
        <h2 className="center">BMI CALCULATOR</h2>
        <form onSubmit={calcbmi}>
          <div className="label">
            <label>Weight(kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
            <label>height(cm)</label>
            <input value={height} onChange= {(event) => setHeight(event.target.value)}/>
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline"  onClick={reload} type="submit">Reload</button>
          </div>
        </form>
        <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>{message}</p>
        </div>
        <div className="img-container">
            <img src={imgSrc}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
