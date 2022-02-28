import React, {FC} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import PhotoDetails from './PhotoDetails';


const App:FC = ():JSX.Element => {

  return(
    <div>
      <Router>
        <Routes>
          <Route path = '/' element = {<Main/>}/>
          <Route path = '/photo/:id' element = {<PhotoDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App