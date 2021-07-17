import React, { useState, useRef } from 'react';
import './App.css';
import ReactPlayer from 'react-player'
// import Duration from './Duration'
// import Player from '@vimeo/player'
// '@types/vimeo__player'
// const player = new Player(ReactPlayer);
import Slider from '@material-ui/core/Slider';
import { createTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


interface Props {
  ref: any
  url: string
  width: string
  height: string
  // pip: boolean
  playing: boolean
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
  playbackRate: number
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
    },
    playing: false,
    playbackRate: 1
    // seeking: false
    
  })

  const handlePlayAndPause = () => {
    if(!state.playing){
      setState({ ...state, playing: true })
    } else {
      setState({ ...state, playing: false })
    }
  }

  const handleSeekChange = (e:any) => {
    setState({ 
      ...state,
      played: parseFloat(e.target.value) 
     })
  }

  const handleSeekMouseSlide = (val:any) => {
     inputRange.current.seekTo(parseFloat(val));
  }

  const handleProgress = (progress:any) => {
    setState({
      ...state,
      played: progress
    })
  }
  const AmountSlider = createTheme({
    overrides: {
      MuiSlider: {
        root: {
          height: 20
        },
        thumb: {
          height: 26,
          width: 26
        },
        track: {
          height: 20,
          borderRadius: 10
        },
        rail: {
          height: 20,
          borderRadius: 10
        }
      }
    }
  });

  const handleCommitted = (event: object, value: number | number[]) => {
    if(Array.isArray(value)) return
    const count = value * 0.01
    setState({
      ...state,
      played: {
        played: count
      }
    })
    handleSeekMouseSlide(count)
  }

  const swithPlayIcon = () => {
    if(!state.playing){
      return 'Play'
    } else {
      return 'Stop'
    }
  }

  const handleSpeed = (val:number) => {
    setState({
      ...state,
      playbackRate: val
    })
  }

  const handleReady = () => {

  }

  return (
    <div className="App">
        
      <div className="player">
        <div className='player-wrapper'>
          <ReactPlayer 
          className='react-player' 
          {...state}
          onProgress={handleProgress}
          onReady={handleReady}
          />
        </div>

        <ThemeProvider theme={AmountSlider}>
          <Slider 
            value={state.played.played * 100}
            onChange={handleSeekChange}
            onChangeCommitted={(event, value) => handleCommitted(event, value)}
              // value={value}
              // onChange={handleChange}
              aria-labelledby="continuous-slider"
              // height="50px"
            />
        </ThemeProvider>

        <div className="grid justify-items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => handlePlayAndPause()}>
            {swithPlayIcon()}
          </button>
        </div>

        <div className="grid justify-items-center">
        <button onClick={() => handleSpeed(0.7)}>x0.7</button>
          <button onClick={() => handleSpeed(0.8)}>x0.8</button>
          <button onClick={() => handleSpeed(0.9)}>x0.9</button>
          <button onClick={() => handleSpeed(1)}>x1</button>
        </div>

        <div className="grid justify-items-center">
          <div>Min: <input type="text" /></div>
          <div>Max: <input type="text" /></div>
        </div>
      </div>
    </div>
  )
}
 

export default App;
