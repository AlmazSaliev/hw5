import { Input } from './component/Input';
import './App.css';
import { useState } from 'react';


function App() {
  
  let newDate=new Date();
    let month = newDate.toLocaleString('en-US', {month: '2-digit'})
    let day = newDate.toLocaleString('en-US', {day: '2-digit'})
    let year = newDate.getFullYear()
  let allDate=`${day}.${month}.${year}`

  let[arr, newValue]=useState([])

  function createApp(value){
    newValue([...arr,{text: value, newDate: allDate}])
  }
  
  return (
    <div className="App">
      <Input  func={createApp}/>
      <div className='box'>
        {arr.map((i)=><div className='text'><span>{i.newDate}</span><span>{i.text}</span></div>)}
      </div>
       
       
    </div>
  );
}

export default App;
