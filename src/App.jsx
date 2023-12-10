import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Actividad from './pages/Actividad'
import TopicOne from './pages/TopicOne'
import TopicTwo from './pages/TopicTwo'
import TopicThree from './pages/TopicThree'
import Activity from './pages/Activity'
import Assessment from './pages/Assessment'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/actividad' element={<Actividad/>} />
      <Route exact path='/actividad/topic1' element={<TopicOne/>} />
      <Route exact path='/actividad/topic2' element={<TopicTwo/>} />
      <Route exact path='/actividad/topic3' element={<TopicThree/>} />
      <Route exact path='/actividad/activity' element={<Activity/>} />
      <Route exact path='/actividad/assessment' element={<Assessment/>} />
    </Routes>
  )
}

export default App
