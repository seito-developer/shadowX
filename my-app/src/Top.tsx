import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import './index.css';
import { Props } from './App'


// const VIDEO_URL = '//videm.com'
const VIDEOS = [
  '576424773','576424824','575873877'
]

const Top:React.FC<Props> = ({ states }) => {
  
  let history = useHistory()

  const Transfer = (videoId:string) => {
    states.func(videoId)
    history.push('/video')
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header__name">ShadTik</div>
      </header>

        <br />
        
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          シャドティック
        </h2>

        <br />

        <p>TikTokでコスパよくシャドーイングしよう！</p>
        
        <br />

        <div className="w-96 m-auto">

          <button 
            type="button"
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center my-0.5"
            onClick={() => Transfer(VIDEOS[0])}>
              Level: EASY by ボニー
          </button>
          <br />
          <button 
            type="button"
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center my-0.5"
            onClick={() => Transfer(VIDEOS[1])}>
              Level: NORMAL by Kevin's English
          </button>
          <br />
          <button 
            type="button"
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center my-0.5"
            onClick={() => Transfer(VIDEOS[2])}>
              Level: HARD by Lind
          </button>

        </div>
    </div>
  )
}
 

export default Top;
