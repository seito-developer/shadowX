import React, { useState, useRef } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import './index.css';
import ReactPlayer from 'react-player/youtube'
import Slider from '@material-ui/core/Slider';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Props } from './App'

interface YouTubeProps {
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

const VIDEO_URL = 'https://www.youtube.com/watch?v='

const YouTube:React.FC<Props> = ({ states }) => {

  const inputRange = useRef<any>('');
  const [ state, setState ] = useState<YouTubeProps>({
    ref: inputRange,
    url: VIDEO_URL + states.val,
    width: '100%',
    height: '100%',
    loop: false,
    played: {
      played: 0
    },
    playing: false,
    playbackRate: 1
  })
  const [ duration, setDuration ] = useState<number>(0)
  const [ point, setPoint ] = useState<PointProps>({
    start: 0,
    end: duration
  })
  const [ partialRepeat, setPartialRepeat ] = useState(false)
  const [ delay, setDelay ] = useState(1)

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
    setDuration(inputRange.current.getDuration())
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
        setState({ ...state, playing: true })
      }, 500
    )
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

  const forceRepeat = (current:number) => {
    if(!partialRepeat) return
    
    if(current > point.end){
      console.log('fire!')
      handleReady()
      setState({ ...state, playing: false })
      clearTimeout(timer)
      timer = setTimeout(
        () => { 
          setState({ ...state, playing: true })
        }, 500
      )
    }
  }

  const handleProgress = (progress:any) => {
    setState({
      ...state,
      played: progress
    })
    console.log('now: ', progress.playedSeconds)
    forceRepeat(progress.playedSeconds)
  }
  const AmountSlider = createTheme({
    overrides: {
      MuiSlider: {
        root: {
          height: 10
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

  const handleSpeed = () => {
    const count = delay - 0.1
    if(0.7 < count){
      setDelay(Number((count).toFixed(1)))
    } else {
      setDelay(1)
    }
    setState({ ...state, playbackRate: delay })
  }

  // const handleStartPoint = (e:any) => {
  //   setPoint({ ...point, start: e.target.value })
  // }
  // const handleEndPoint = (e:any) => {
  //   setPoint({ ...point, end: e.target.value })
  // }

  // const handlePartialRepeat = () => {
  //   if(!partialRepeat){
  //     setPartialRepeat(true)
  //   } else {
  //     setPartialRepeat(false)
  //   }
  // }
  // const switchRepeat = () => {
  //   if(partialRepeat){
  //     return 'is-active'
  //   } else {
  //     return ''
  //   }
  // }
  
  let history = useHistory()

  return (
    <div className="App">

      <header className="header">
        <button 
          type="button"
          className="header__button"
          onClick={() => history.push('/')}>＜Back</button>
      </header>
        
      <div className="player">
        <div className='player-wrapper'>
          <ReactPlayer 
          className='react-player' 
          {...state}
          // onProgress={handleProgress} 
          // onReady={handleReady}
          // onEnded={() => handleEnded()}
          // onStart={handleStart}
          // onPlay={handlePlayStart}
          />
        </div>

        <div className="player-ui">
          <ThemeProvider theme={AmountSlider}>
            <div className="px-2">
              <Slider 
                value={state.played.played * 100}
                aria-labelledby="continuous-slider"
                // onChange={handleSeekChange}
                // onChangeCommitted={(event, value) => handleCommitted(event, value)}
                />
            </div>
          </ThemeProvider>

          <div className="main-buttons">
            <button
              className="bg-green-500 border-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-10 rounded-full"
              onClick={() => handlePlayAndPause()}>
              {swithPlayIcon()}
            </button>
            {/*<button 
              className="mx-auto border border-gray-300 rounded-md text-md font-medium py-2 px-2 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              onClick={() => handleSpeed()}>
                SPEED: { state.playbackRate }
            </button>
            <div className="main-buttons__second">{duration}/s</div>*/}
          </div>
        
          {/*<div className={["repeat", switchRepeat()].join(' ')}>
            <div className="repeat__button">
              <button 
              className="mx-auto border border-gray-300 rounded-md text-lg font-medium py-2 px-3 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              onClick={() => handlePartialRepeat()}>{ partialRepeat ? 'R:ON' : 'R:OFF'}</button>  
            </div>
            
            <div className="repeat__inputs">
              <label className="repeat__input">Min: <input type="number" value={point.start} onChange={(e) => handleStartPoint(e)} /></label>
              <label className="repeat__input">Max: <input type="number" max={duration} value={point.end} onChange={(e) => handleEndPoint(e)} /></label>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  )
}
 

export default YouTube;
