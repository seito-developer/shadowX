import React, { useState, useRef } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
// import Duration from './Duration'
import Player from '@vimeo/player'
// '@types/vimeo__player'

// const player = new Player(ReactPlayer);

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
  seeking: boolean
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
    played: 0,
    seeking: false
  })
  
  
  // player.setCurrentTime(0)

  // inputRange.current.on('play', function() {
  //   console.log('played the video!');
  // });

  // console.log('player:', player)

  const handleSeekMouseDown = (e:any) => {
    setState({ 
      ...state,
      seeking: true 
    })
  }

  const handleSeekChange = (e:any) => {
    setState({ 
      ...state,
      played: parseFloat(e.target.value) 
     })
  }

  const handleSeekMouseUp = (e:any) => {
    setState({ 
      ...state,
      seeking: false 
     })
     inputRange.current.seekTo(parseFloat(e.target.value));
  }

  const handleProgress = (progress:any) => {
    // We only want to update time slider if we are not currently seeking
    // if (!state.seeking) {
    setState({
      ...state,
      played: progress
    })
    // }
    console.log('played', state.played)
    console.log('progress: ', progress)
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

  // const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = state
  const SEPARATOR = ' · '

  return (
    <div className="App">
        
      <div className="player-wrapper">
        <div className='player-wrapper'>
          <ReactPlayer 
          className='react-player' 
          {...state}
          onProgress={handleProgress}
            // url={VIDEO_URL}
            // className='react-player'
            // width='100%'
            // height='100%'
            // loop={true}
          />
        </div>

         <input
          type='range' min={0} max={0.999999} step='any'
          value={state.played.played}
          onMouseDown={handleSeekMouseDown}
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
