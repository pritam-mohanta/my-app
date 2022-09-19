
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; // import Navbar.js file
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState('light'); // dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (massage,type) => {
      setAlert({
        msg : massage,
        type : type
      })
      //warning automatically gone some time later
      setTimeout(() =>{
        setAlert(null)
      },1500)
  }

  const enableDarkMode = () =>{
      if(darkMode === "light"){
        setDarkMode ('dark');
        document.body.style.backgroundColor = 'grey'; // whode body background color change
        showAlert("Dark Mode hass been Enabled", "success");
        // document.title = "textutils - Dark Mode"; // want to add in title
      }else{
        setDarkMode ('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode hass been Enabled", "success");
      }
  }
  return (
    <>
    <Router>
  <Navbar title="My App" mode={darkMode} enableDarkMode={enableDarkMode}/> 
  <Alert alert = {alert} />
  <div className='container my-3'>
  <Switch>
    <Route exact path="/about">
      <About />
    </Route>
    <Route exact path="/">
    <TextForm showAlert={showAlert} heading="write something"  mode={darkMode} />
    </Route>
  </Switch>
  </div>
  </Router>
    </>
  );
}

export default App;


// Navbar title="My App" pass the value here