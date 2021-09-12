import {React, useState,useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles.css"

function Search() {
  const [query,setquery] = useState("");
  const [data,setData] = useState(null)
  const API_URL = `https://www.omdbapi.com/?apikey=d8898664&s=${query}`
 
  useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then((data)=> setData(data))
  // .catch(e=> console.log("error")
  },[query])


  return(
    <div className="container">
    {console.log(query)}
  
    <input type="text"
     placeholder="Search Movie Name"
      onInput={(e)=>{
      setquery(e.target.value)
    }} />{" "}
      
      <br/>
      
      <Link to="/">Home</Link>
      {!data && <p>error</p>}
      {data && data.Response && data.Search ? (data.Search.map((e, i)=> {
        return <div key={i}>
          <p>{ e.Title }</p>
          <img src={e.Poster} alt=""/>
        </div>
      })
      ):(<p>error</p>)
  }
    
    </div>
  )
}

export default Search
