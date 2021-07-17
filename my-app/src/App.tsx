import React, { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import Duration from './Duration'

interface Props {
  url: string
  width: string
  height: string
  // pip: boolean
  // playing: boolean
  // controls: boolean
  // light: boolean
  // volume: number
  // muted: boolean
  played: number
  // loaded: number
  // duration: number
  // playbackRate: number
  loop: boolean
}

const VIDEO_URL = '//player.vimeo.com/video/575873877'

function App() {

  const [ state, setState ] = useState<Props>({
    url: VIDEO_URL,
    width: '100%',
    height: '100%',
    loop: true,
    played: 0
  })
  

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
          <ReactPlayer className='react-player' {...state}
            // url={VIDEO_URL}
            // className='react-player'
            // width='100%'
            // height='100%'
            // loop={true}
          />
        </div>

        {/*<input
          type='range' min={0} max={0.999999} step='any'
          value={played}
          onMouseDown={this.handleSeekMouseDown}
          onChange={this.handleSeekChange}
          onMouseUp={this.handleSeekMouseUp}
        />*/}
  
        {/*<ReactPlayer
          className="react-player"
          url={'https://vimeo.com/575873877'}
          autoPlay={true}
          width={'100%'}
          height={'100%'}
          playing={state.playing}
        />*/}
       </div>

 
       {/*<div className="player-ui">
          <input id='controls' type='checkbox' checked={controls} onChange={handleToggleControls} />
          <em>&nbsp; Requires player reload</em>
         {renderLoadButton(VIDEO_URL, 'Play')}
         {<button 
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
           type="button"
           onClick={onClick.play}>Play</button>}

         {<button onClick={onClick.pause}>{state ? 'Pause' : 'Play'}</button>}
       </div>*/}
    </div>
  );
}

export default App;
