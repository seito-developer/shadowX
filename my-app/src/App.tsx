import React, { useState, useRef } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
// import Duration from './Duration'
// import Player from '@vimeo/player'
// '@types/vimeo__player'
// const player = new Player(ReactPlayer);
import Slider from '@material-ui/core/Slider';

interface Props {
  ref: any
  url: string
  width: string
  height: string
  // pip: boolean
  // playing: boolean
  // controls: boolean
  // light: boolean
  // volume: number
  // muted: boolean
  played: any
  // loaded: number
  // duration: number
  // playbackRate: number
  loop: boolean
  // seeking: boolean
}

const VIDEO_URL = 'https://player.vimeo.com/video/575873877'

function App() {

  const inputRange = useRef<any>('');
  const [ state, setState ] = useState<Props>({
    ref: inputRange,
    url: VIDEO_URL,
    width: '100%',
    height: '100%',
    loop: true,
    played: {
      played: 0
    }
    // seeking: false
  })

  // const handleSeekMouseDown = (e:any) => {
  //   setState({ 
  //     ...state,
  //     seeking: true 
  //   })
  // }

  const handleSeekChange = (e:any) => {
    setState({ 
      ...state,
      played: parseFloat(e.target.value) 
     })
  }

  const handleSeekMouseUp = (e:any) => {
    // setState({ 
    //   ...state,
    //   seeking: false 
    //  })
     inputRange.current.seekTo(parseFloat(e.target.value));
  }

  const handleProgress = (progress:any) => {
    setState({
      ...state,
      played: progress
    })
  }
  

  // const renderLoadButton = (url:string, label:any) => {
  //   return (
  //     <button
  //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  //       onClick={() => load(url)}>
  //       {label}
  //     </button>
  //   )
  // }

  return (
    <div className="App">
        
      <div className="player">
        <div className='player-wrapper'>
          <ReactPlayer 
          className='react-player' 
          {...state}
          onProgress={handleProgress}
          />
        </div>

        <Slider 
           value={state.played.played * 100}
           onChange={handleSeekChange}
             // value={value}
             // onChange={handleChange}
             // aria-labelledby="continuous-slider"
             // height="50px"
          />
         <input
          className="progress"
          type='range' min={0} max={0.999999} step='any'
          value={state.played.played}
          // onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp} />
       </div>
    </div>
  )
}
 
       // {<div className="player-ui">
       //    <input id='controls' type='checkbox' checked={controls} onChange={handleToggleControls} />
       //    <em>&nbsp; Requires player reload</em>
       //   {renderLoadButton(VIDEO_URL, 'Play')}
       //   {<button 
       //     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
       //     type="button"
       //     onClick={onClick.play}>Play</button>}

       //   {<button onClick={onClick.pause}>{state ? 'Pause' : 'Play'}</button>}
       
  

export default App;
