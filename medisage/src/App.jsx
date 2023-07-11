import React from 'react';
import './App.css';
import Countdown from './Components/Countdown';

function App() {

  const handleCallback = () => {
    console.log('clockwise');
  };

  // const handleCallbackone = () => {
  //   console.log('antilockwise');
  // };

  return (
    <>
      <Countdown time={0} reverse={30} direction={"clockwise"} callback={handleCallback} />
      {/* <Countdown time={0} direction={"clockwise"} callback={handleCallback} />
      <Countdown reverse={30} direction={"anticlockwise"} callbackone={handleCallbackone} /> */}
    </>
  );
}

export default App;



