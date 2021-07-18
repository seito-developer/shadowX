import React, { useState, useRef } from 'react';
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import './App.css';
import './index.css';
import Top from './Top';
import Video from './Video';

// const VIDEO_URL = '//videm.com'
const VIDEOS = [
  'xxx','xxx','xxx'
]

export interface Props {
  states: any
}

const App = () => {

  const [ videoId, setVideoId ] = useState('')
  const statesVideoId = {
    val: videoId,
    func: setVideoId
  }

  return (
    <div className="App">
      <Router>
				<Switch>
          <Route exact path={'/'}>
						<Top states={statesVideoId} />
					</Route>
          <Route exact path={'/video'}>
            <Video states={statesVideoId} />
          </Route>
        </Switch>
      </Router>  
    </div>
  )
}
 

export default App;
