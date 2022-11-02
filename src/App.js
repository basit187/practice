import './App.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Menu from './menu';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setData(res.data));
  }, [])

  return (
    <div className="App">
<Menu></Menu>
      <Routes>
        <Route  path='/' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />  
 </Routes>
      {/* <About/>
      <Contact/> */}
      {/* {data.map((post) => {
        const { id, title, body } = post;
        return(
        <div key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        )
      })} */}
    </div>
  );
}

export default App;
