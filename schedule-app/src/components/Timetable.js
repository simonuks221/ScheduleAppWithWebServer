import TimetableCollumn from './TimetableCollumn'

import {useState, useRef} from 'react'

const Timetable = ({timetablePart}) => {
    const imgRef = useRef(null)
    const [BPos, changeBPos] = useState('')

    const maxMoveX = 50
    const maxMoveY = 50
    const offsetX = -50
    const offsetY = -50

    const backgroundImage = './background.jpg'

    const mouseMovement = (e) => {
        const mouseX = e.clientX - imgRef.current.offsetLeft;
        const mouseY = e.clientY - imgRef.current.offsetTop;
        
        const locX = mouseX / imgRef.current.offsetWidth * maxMoveX + offsetX
        const locY = mouseY / imgRef.current.offsetHeight * maxMoveY + offsetY

        changeBPos(locX + 'px ' + locY + 'px')
    }

    return (
        <div className = 'flex-fill bg-primary rounded timetable' ref = {imgRef} style = {{'backgroundPosition': BPos, 'backgroundImage': `url(${backgroundImage})`}} onMouseMove = {mouseMovement}>
            <div className = 'row py-5 mx-3 h-100'>
                <div className = 'card col-2 destination'>
                    <img className = 'card-img' src = {process.env.PUBLIC_URL + timetablePart.backgroundImage} alt = ''/>
                    <div className = 'card-img-overlay'>
                        <h2 className = 'card-title text-light'>{timetablePart.Title}</h2>
                        <p className = 'card-text text-light'> {timetablePart.Description}</p>
                    </div>
                </div>
                <div className = 'col-10'>
                    <TimetableCollumn timetablePart = {timetablePart.Times}/>
                </div>
            </div>
        </div>
    )
}

export default Timetable
