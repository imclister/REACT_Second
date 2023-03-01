import React from 'react';
import { useState } from 'react';
import { User , Gender } from './pages/User';

import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { Provider } from 'react-redux';
import { store } from './store';

import './App.css';

function App() {

  // STATE TYPE
  // STATE TYPE CLISTER FROM BROWSER
  const [number, setNumber] = useState<number>(1)

  const [name, setName] = useState("");

  const getAge =(name:string) : number =>{
    return 19;
  };

  const users = [
      {
        name:'Johm Smith',
        age : 21,
        email: 'smith@gmail.com',
        friends: ["Friend Q" , "Friend P","Friend O"] 
      },
      {
        name:'Johm Doe',
        age : 22,
        email: 'doe@gmail.com',
        friends: ["Friend G" , "Friend T","Friend Y"] 
      },
      {
        name:'Johm Cena',
        age : 23,
        email: 'cena@gmail.com',
        friends: ["Friend A" , "Friend B","Friend C"] ,
        gender: Gender.Male
      }
  ];


  return (
    <div className="App container mt-4">
      <Provider store={store}>
        <Router>
              <Link to="/home" className='btn btn-primary mx-2'>Home</Link>
              <Link to="/login" className='btn btn-primary mx-2'>Login</Link>
              <Link to="/contact" className='btn btn-primary mx-2'>Contact</Link>
          <Routes>
              <Route path='/home' element= { <Home/> }></Route>
              <Route path='/login' element= { <Login/> }></Route>
              <Route path='/contact' element= { <Contact/> }></Route>
          </Routes>
        </Router>
      </Provider>
    

     
        {/* { users.map((user) => {
          return <User name={user.name} email={user.email} age={user.age} friends={user.friends} gender={user.gender}/>;
        })} */}
    </div>
  );
}

export default App;
