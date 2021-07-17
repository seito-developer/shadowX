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

interface PointProps {
  start: number
  end: number
}

const VIDEO_URL = 'https://player.vimeo.com/video/575873877'

function App() {

  const inputRange = useRef<any>('');
  const [ state, setState ] = useState<Props>({
    ref: inputRange,
    url: VIDEO_URL,
    width: '100%',
    height: '100%',
    loop: false,
    played: {
      played: 0
    },
    playing: false,
    playbackRate: 1
    // seeking: false
  })
  const [ point, setPoint ] = useState<PointProps>({
    start: 0,
    end: 100
  })

  const handleReady = () => {
    console.log(point.start)
    inputRange.current.seekTo(point.start);
  }

  const handlePlayAndPause = () => {
    if(!state.playing){
      handleReady()
      setState({ ...state, playing: true })
    } else {
      setState({ ...state, playing: false })
    }
  }
  
  const handleStart = () => {
    console.log('start!')
    handleReady()
  }

  const handlePlayStart = () => {
    console.log('PlayStart!')
    handleReady()
  }

  let timer:any
  const handleEnded = () => {
    console.log('end!')
    setState({ ...state, playing: false })
    handleReady()
    
    clearTimeout(timer)
    timer = setTimeout(
      () => { 
        // setState({ ...state, playing: true })
        setState({ ...state, playing: true })
        // handlePlayAndPause();
      }, 500
    )
    
  }
  // const handleEnded = () => {
  //   handleReady()
  // }

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

  const handleStartPoint = (e:any) => {
    setPoint({
      ...point,
      start: e.target.value
    })
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
          onEnded={() => handleEnded()}
          onStart={handleStart}
          onPlay={handlePlayStart}
          />
        </div>

        <ThemeProvider theme={AmountSlider}>
          <Slider 
            value={state.played.played * 100}
            aria-labelledby="continuous-slider"
            onChange={handleSeekChange}
            onChangeCommitted={(event, value) => handleCommitted(event, value)}
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
          {state.playbackRate}
        </div>

        <div className="grid justify-items-center">
          <div>Min: <input type="number" value={point.start} onChange={(e) => handleStartPoint(e)} /></div>
          <div>Max: <input type="number" /></div>
        </div>
      </div>
    </div>
  )
}
 

export default App;
