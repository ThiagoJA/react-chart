import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import './App.css';
import Home from './scene/Home';


function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleUpdate = (change) => {
    setSubmitting(change)
  }
  return (
    <>
      {submitting ?
      <div className="loader">
        <Loader
        type="Oval"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={3000} //3 secs

     />
     </div> : <Home handleUpdate={handleUpdate}/>}
    </>
  );
}

export default App;
