
import './App.css';

import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';



class App extends React.Component{

  render(){
    return (
      <div>
       <NavBar/>
       <News pageSize={6} country="in" category="science" />
     
       
      </div>
    )
  }
}

export default App;