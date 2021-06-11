import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Timetable from './components/Timetable.js'

import {useState, useEffect} from 'react'

function App() {

  const [timetable, setTimetable] = useState([])

  useEffect(() => {
    const newTime = {ID: 1, TimeHours: 6, TimeMinutes: 20}
    setTimetable(times => [...times, newTime])
    console.log("Start", newTime)
  }, [])



  return (
    <div className="App">
      <Header/>
      <div className = 'container-fluid bg-primary'>
        <Timetable timetable = {timetable}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
