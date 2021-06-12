import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Timetable from './components/Timetable.js'
import TimetableNav from './components/TimetableNav.js'

import {useState, useEffect} from 'react'

import config from './config.js'

function App() {

  const [timetable, setTimetable] = useState([])
  const [currentIndex, setCurrentIndex] = useState(1)

  useEffect(() => {
      const getDataFromServer = async () =>{
        const dataFromServer = await fetchTimetable()
        setCurrentIndex(1)
        setTimetable(dataFromServer)
      }
      
      
      getDataFromServer()

      if(timetable !== undefined){
        const newTime = {ID: 1, Name: 'To Klaipėda', Description: 'A ferry to Klaipėda from Smiltynė', Times: [{ID: 1, TimeHours: 6, TimeMinutes: 20}, {ID: 1, TimeHours: 7, TimeMinutes: '00'}]}
        const newTime2 = {ID: 2, Name: 'To Smiltynė', Description: 'A ferry to Smiltynė from Klaipėda', Times: [{ID: 1, TimeHours: 6, TimeMinutes: 20}]}

        //Change this
        setCurrentIndex(1)
        setTimetable(times => [...times, newTime, newTime2])
      }
  }, [])

  const fetchTimetable = async () => {
    try{
      const address = 'http://' + config.MY_IP + ':5000/api/timetable'
      console.log(address)
      const res = await fetch(address)
    if(res.ok){
      console.log(res)
      const json = await res.json()
      return json
    }else{
      throw new Error(res.status)
      return
    }
  }
  catch (err){
    console.log(err)
    return
  }
  }

  const ChangeCurrentTimetable = (newID) => {
    setCurrentIndex(parseInt(newID))
    console.log(newID)
  }

  return (
    <div className="App">
      <Header/>
      {timetable? <TimetableNav timetable = {timetable} changeTimetable = {ChangeCurrentTimetable} currentIndex = {currentIndex}/>: ''}
      <div className = 'container-fluid bg-primary'>
        {timetable? timetable.find((part) => part.ID === currentIndex)? <Timetable timetablePart = {timetable.find((part) => part.ID === currentIndex)}/>: '': ''}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
