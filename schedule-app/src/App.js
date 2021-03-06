import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Timetable from './components/Timetable.js'
import TimetableNav from './components/TimetableNav.js'
import About from './components/About.js'
import Pricing from './components/Pricing.js'

import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import config from './config.js'

function App() {

  const [timetable, setTimetable] = useState([])
  const [currentIndex, setCurrentIndex] = useState(1)
  const [pricingData, setpricingData] = useState([])

  useEffect(() => {
    setMockupData()
      const getDataFromServer = async () =>{
        const dataFromServer = await fetchTimetable()
        if(dataFromServer !== undefined){
          setCurrentIndex(1)
          setTimetable(dataFromServer)
        }else{
          setMockupData()
        }
      }
      getDataFromServer()
  }, [])

  const setMockupData = () => {
    const newRoute = {ID: 1, Title: 'To Klaipėda', backgroundImage: './klaipeda.webp', Description: 'A ferry to Klaipėda from Smiltynė', Times: [{ID: 1, TimeHours: 6, TimeMinutes: 20}, {ID: 2, TimeHours: 7, TimeMinutes: '00'}, {ID: 3, TimeHours: 8, TimeMinutes: 20}, {ID: 4, TimeHours: 9, TimeMinutes: '00'}, {ID: 5, TimeHours: 10, TimeMinutes: 20}, {ID: 6, TimeHours: 11, TimeMinutes: '00'}, {ID: 7, TimeHours: 12, TimeMinutes: 20}, {ID: 8, TimeHours: 13, TimeMinutes: '00'}]}
    const newRoute2 = {ID: 2, Title: 'To Smiltynė', backgroundImage: './smiltyne.jpg', Description: 'A ferry to Smiltynė from Klaipėda', Times: [{ID: 1, TimeHours: 6, TimeMinutes: 20}]}
    setTimetable(times => [newRoute, newRoute2])

    const newPrice1 = {ID: 1, Description: 'Full adult ticket', Price: '8.99'}
    const newPrice2 = {ID: 2, Description: 'Children from 6 to 18 years old', Price: '5.99'}
    const newPrice3 = {ID: 3, Description: 'Students', Price: '5.99'}
    const newPrice4 = {ID: 4, Description: 'Children up to 6 years old', Price: 'Free'}
    setpricingData(pricingData => [newPrice1, newPrice2, newPrice3, newPrice4])
  }

  const fetchTimetable = async () => {
    try{
      const address = 'http://' + config.MY_IP + ':5000/api/timetable'
      const res = await fetch(address)
    if(res.ok){
      const json = await res.json()
      return json
    }else{
      console.log(res.status)
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
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path = '/about' component = {About}/>
        <Route path = '/pricing' render ={(props) => (<Pricing pricing = {pricingData}/>)}/>
        <Route path = '/' exact render = {(props) => (
          <>
            {timetable? <TimetableNav timetable = {timetable} changeTimetable = {ChangeCurrentTimetable} currentIndex = {currentIndex}/>: ''}
            <div className = 'container-fluid'>
              {timetable? timetable.find((part) => part.ID === currentIndex)? <Timetable timetablePart = {timetable.find((part) => part.ID === currentIndex)}/>: '': ''}
            </div>
          </>
        )}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
