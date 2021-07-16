import React from 'react';
import logo from './logo.svg';
import randomCounts from './funcRandomCounts';
import './App.css';

const DELAY = 2000;
const SPEAKER = {
  en: 'Karen',
  jp: 'Kyoko'
}
let timer:any;

// get voice data
let voice = speechSynthesis.getVoices().find(function(voice){
  return voice.name === SPEAKER.en;
});

function speak(speaker:string, text:string){
  const uttr = new SpeechSynthesisUtterance(text);
  
  // Need to call 2 times because of the API's issue
  voice = speechSynthesis.getVoices().find(function(voice){
    return voice.name === speaker;
  });
  
  if(voice){
    uttr.voice = voice;
  }
  speechSynthesis.speak(uttr);
}

const handleClick = () => {
  const script = randomCounts();
  speak(SPEAKER.en, script);
  clearTimeout(timer);
  timer = setTimeout(() => {
    speak(SPEAKER.jp, script)
  }, DELAY);
}

function App() {

  return (
    <div className="App h-full">
      <div className="mx-5 mt-20 grid place-content-center">
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 mx-auto">
          <h1 className="text-3xl mb-3 font-bold">Count JP</h1>
          <p className="text-lg">
            You can try to recognize numbers from English to Japanese by clicking the button!
          </p>
        </div>
        <div className="bg-white py-8 px-8 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 w-3/4 mx-auto">
          <img className="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="User avatar" />
          {/* <p className="capitalize text-xl mt-1">essie walton</p> */}
          <div className="mt-5 w-full">
            <button 
              className="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline"
              type="button" onClick={handleClick}
            >Listten!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
