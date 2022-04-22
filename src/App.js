
import './App.css';
import { Kitty } from './component/Kitty';
import { Data } from './component/Data';



function App() {
  let data=[
    {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/62/62',
      },
    },
  
  ]
  let array = []
  let img=[]
  let id
    data.map((i)=>{
      id = Math.random().toString()
      let normDate=i.date.toLocaleDateString()
      
      array.push({getDate: normDate, getText: i.text, newid: id})
      
      img.push({getUrl: i.author.avatarUrl, getName: i.author.name, newid: id})
      return (
        array, img
      )
    
    })
  
  return (
    <div className="App">
      
      <div>
        <Kitty url = {img}  />
      
        <Data getDatatext = {array}/>
      </div>
       
       
    </div>
  )
}

export default App;
