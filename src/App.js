import { Button, Stack } from '@mui/material';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


function App() {

  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[interest,setInterest]=useState(0)


  const calculateInterest=(e)=>{

    e.preventDefault()
    // console.log(principle,rate,year);

    if(!principle||!rate||!year){
      alert('please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }


  const resetForm=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)
  }


  return (
    <>
      <div className='app'>
        <div className='container'>

          <div className="heading-text">
            <h2 className='title'>SIMPLE INTEREST CALCULATOR</h2>
            <p className='title-para'>Calculate Your Simple Interest Easily</p>
          </div>

          <div className="amount-card">
            <div className="card-text">
              <h3 className="total-amount">₹{interest}</h3>
              <p className="total-para">Total simple interest</p>
            </div>
          </div>

          <form onSubmit={calculateInterest}>

            <div className="text-field">

              {/* principle amount */}
              <div className="output">

                <TextField value={principle||""} onChange={e=>setPrinciple(e.target.value)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />

              </div>

              {/* rate of interest */}

              <div className="output">

                <TextField value={rate||""} onChange={e=>setRate(e.target.value)} id="outlined-basic" label="Rate of Interest (P.A)%" variant="outlined" />

              </div>

              {/* time period */}

              <div className="output">

                <TextField value={year||""} onChange={e=>setYear(e.target.value)} id="outlined-basic" label="Time Period (Year)" variant="outlined" />

              </div>

            </div>

            {/* button div */}
            <div className="btn-group">

              <Stack direction="row" spacing={2}>
                <Button type='submit' className='btn' style={{backgroundColor:'black'}} variant="contained">Calculate</Button>
                <Button onClick={resetForm} className='btn' style={{backgroundColor:'green'}} variant="contained">Reset</Button>
              </Stack>

            </div>

          </form>

        </div>
      </div>
    </>
  );
}

export default App;
