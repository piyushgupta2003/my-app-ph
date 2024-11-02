import './App.css';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter  ,
  Route,
  Routes
} from "react-router-dom";




function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null); //alert is an object

  const showAlert = (message,type)=>{
    setAlert({
        msg :message,
        typ:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggle = ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3A6D8C';
      showAlert('dark mode has been enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('light mode has been enabled','success')


    }
  }
  return (
    <>
   <BrowserRouter>
      <Navbar  title="AppsPiyush" mode = {mode} toggle = {toggle}/>
      <Alert alert={alert}/>
    <div className="container my-3"mode={mode}>
  
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
          <Route  exact path="/"
            element= { <Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/> 
          }
          /> 
          </Routes>
   
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
