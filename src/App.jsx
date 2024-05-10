import {useState}from"react"
import './App.css'

function App() {
  const fruits=[
   "Apple",
   "Banana",
   "Mango",
   "Strawberry",
   "Grapes",
   "Orange",
   "Lychee",
   "pineapple",
   "Kiwi",
   "Mangosteen",
   "Blueberry",
   "jack",
];

const[fruitsData,setFruitsData]=useState(fruits);
const[search,setSearch]=useState("");
const fruitsDataFilter= fruitsData.filter((fruit)=>
  fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase())
);

const handleInputChange=(e)=>{
  setSearch(e.target.value)
}

  return(
    <div>
      <input 
      type="text" 
      placeholder='search here..' 
      onChange={handleInputChange}
      />
      {fruitsDataFilter.map((fruit)=>{
         return<p>{fruit}</p>
      })}
    </div>
  )
}

export default App
