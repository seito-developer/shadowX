import React, { useState } from 'react';
import './App.css';

import ReactPlayer from 'react-player'

interface Props {
  url: string | null
  pip: boolean
  playing: boolean
  controls: boolean
  light: boolean
  volume: number
  muted: boolean
  played: number
  loaded: number
  duration: number
  playbackRate: number
  loop: boolean
}

const VIDEO_URL = 'https://vimeo.com/575873877'

function App() {

  const [ state, setState ] = useState<Props>({
    url: null,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  })

  const load = (url:any) => {
    setState({
      ...state,
      url,
      played: 0,
      loaded: 0,
      pip: false
    })
  }

  // ReactPlayer.canPlay('https://vimeo.com/575873877')

  const onClick = {
    play: () => {
      console.log('clicked!');
      setState({ 
        ...state,
        playing: !state.playing 
      })
      // ReactPlayer.canPlay('https://vimeo.com/575873877')
      // if (state.playing) {
      //   setState({ 
      //     ...state,
      //     playing: true
      //   });
      // } else {
      //   setState({ 
      //     ...state,
      //     playing: false
      //   });
      // }
    }
    // pause: () => {
    //   setPlaying: !state.playing
    // }
  }

  const ref = (player:any) => {
    player = player
  }

  const renderLoadButton = (url:string, label:any) => {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => load(url)}>
        {label}
      </button>
    )
  }

  const { url, playing, controls, light, volume, muted, loop, played, loaded, duration, playbackRate, pip } = state

  return (
    <div className="App">
        
      <div className="player-wrapper">
        <ReactPlayer
          ref={ref}
          className='react-player'
          width='100%'
          height='100%'
          url={url}
          pip={pip}
          playing={playing}
          controls={controls}
          light={light}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          // onPlay={handlePlay}
          // onEnablePIP={handleEnablePIP}
          // onDisablePIP={handleDisablePIP}
          // onPause={handlePause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          // onEnded={handleEnded}
          onError={e => console.log('onError', e)}
          // onProgress={handleProgress}
          // onDuration={handleDuration}
        />
        {/*<ReactPlayer
          className="react-player"
          url={'https://vimeo.com/575873877'}
          autoPlay={true}
          width={'100%'}
          height={'100%'}
          playing={state.playing}
        />*/}
       </div>

       <div className="player-ui">
         {renderLoadButton(VIDEO_URL, 'Play')}
         {/*<button 
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
           type="button"
           onClick={onClick.play}>Play</button>*/}

         {/*<button onClick={onClick.pause}>{state ? 'Pause' : 'Play'}</button>*/}
       </div>
    </div>
  );
}

export default App;
