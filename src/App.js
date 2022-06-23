import logo from './logo.svg';
import './App.css';
// import{BrowserRouter} from 'react-router-dom';
// import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import axios from 'axios';
import {useState} from 'react';
function App() {
  const[movie,setmovie]= useState("movie");
  const[finmovie,finsetmovie]=useState([]);
  // const fetchmovie=()=>{
  //    axios.get("http://www.omdbapi.com/?s=kabhi&apikey=2a0b181e")
  //    .then((response)=>{
  //     console.log(response);
  //     setmovie(response.data.Search);
  //    }
  //    )
    
  // }
  const changetext=(event)=>{
  setmovie(event.target.value);
  }
  const Start=()=>{
    axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=2a0b181e`)
    .then((response)=>{
           console.log(response);
         finsetmovie(response.data.Search);
        }
    )
  }
  return (
    
    <div className="App">
    
    <div className='movie'>
    <input placeholder="Find your favourite Movie"  value={movie} onChange={changetext} className='search'/>
    <>
    <button className='button' onClick={Start}><p>Search</p></button>
     {/* {
      movie.map((value,index)=>{
        return (
        <h1 key={index}>{value.Title}</h1>
        );
      }
      )
    }  */}
   
     </>
     <div className='container'>
     <div className='row'>
      {
        finmovie.map((value,index)=>{
        return(
          <div className='col'>
       <div className="card" style={{width:"18rem"}}>
  <img src={value.Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{value.Title}</h5>
    <p className="card-text">{value.Year}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>  

       </div>
        )
        })
      }
     </div>
     </div>
     </div>
      
   
   
    </div>
    
  );
}

export default App;
