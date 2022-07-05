import React, {FC} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Earth from './Earth';
import Landing from './Landing';
import PhotoDetails from './PhotoDetails';


const App:FC = ():JSX.Element => {

  return(
    <div>
      <Router>
        <Routes>
          <Route path = '/' element = {<Landing/>}/>
          <Route path = '/main' element = {<Main/>}/>
          <Route path = '/earth' element = {<Earth/>}/>
          <Route path = '/photo/:id' element = {<PhotoDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App