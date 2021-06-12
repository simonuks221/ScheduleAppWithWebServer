import TimetableBox from './TimetableBox'

const TimetableCollumn = ({timetablePart}) => {
    //{timetablePart.Times.map((timeData) => <TimetableBox timeData = {timeData}/>)}
    
    return (
        <div className = 'w-50'>
            {timetablePart.map((timeData) => <TimetableBox timeData = {timeData}/>)}
        </div>
    )
}

export default TimetableCollumn
