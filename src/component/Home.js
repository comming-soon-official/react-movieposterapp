import React from "react";
import { BrowserRouter as Router , Route ,Link,  Switch } from "react-router-dom";
import Search from "./Search"
import "../styles.css"
function Home() {

  return(
    <>
    <Router>
      <Switch>
    <Route path="/" exact>
    <button><Link to="/search">Search</Link></button>
    </Route>
    <Route path="/search" exact>
      <Search />
    </Route>
    </Switch>



    </Router>
    
    
    </>

  )
  
}

export default Home
