import TimetableBox from './TimetableBox'

const TimetableCollumn = ({timetablePart}) => {
    //{timetablePart.Times.map((timeData) => <TimetableBox timeData = {timeData}/>)}
    
    return (
        <div className = 'flex-fill'>
            {timetablePart.map((timeData) => <TimetableBox key = {timeData.ID} timeData = {timeData}/>)}
        </div>
    )
}

export default TimetableCollumn
