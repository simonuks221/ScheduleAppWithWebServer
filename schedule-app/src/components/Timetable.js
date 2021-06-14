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

    //Set the number 1 lower than of that you want
    const timeBoxesPerCollumn = 4

    const mouseMovement = (e) => {
        const mouseX = e.clientX - imgRef.current.offsetLeft;
        const mouseY = e.clientY - imgRef.current.offsetTop;
        
        const locX = mouseX / imgRef.current.offsetWidth * maxMoveX + offsetX
        const locY = mouseY / imgRef.current.offsetHeight * maxMoveY + offsetY

        changeBPos(locX + 'px ' + locY + 'px')
    }

    const setupCollumns = () => {
        const allCollumns = []
        var i
        var tempTimes = []
        for(i = 0; i < timetablePart.Times.length; i++){
            tempTimes.push(timetablePart.Times[i])
            if(i % timeBoxesPerCollumn === 0 && i !== 0){
                allCollumns.push(<TimetableCollumn key = {i} times = {tempTimes}/>)
                tempTimes = []
            }
            else if(i === timetablePart.Times.length -1){
                allCollumns.push(<TimetableCollumn key = {i} times = {tempTimes}/>)
            }
        }

        return allCollumns;
    }

    return (
        <div className = 'flex-fill rounded timetable' ref = {imgRef} style = {{'backgroundPosition': BPos, 'backgroundImage': `url(${backgroundImage})`}} onMouseMove = {mouseMovement}>
            <div className = 'row py-5 mx-3 h-100'>
                <div className = 'card col-md-3 destination mb-2'>
                    <img className = 'card-img' src = {process.env.PUBLIC_URL + timetablePart.backgroundImage} alt = ''/>
                    <div className = 'card-img-overlay '>
                        <h2 className = 'card-title text-light'>{timetablePart.Title}</h2>
                        <p className = 'card-text text-light'> {timetablePart.Description}</p>
                    </div>
                </div>
                <div className = 'col-md-9'>
                    <div className = 'container'>
                        <div className = 'row'>
                            {setupCollumns()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timetable
