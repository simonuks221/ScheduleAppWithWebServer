import TimetableBox from './TimetableBox'

const TimetableCollumn = ({timetable}) => {
    return (
        <div className = 'w-50'>
            {timetable.map((timeData) => <TimetableBox timeData = {timeData}/>)}
            {timetable.map((timeData) => <TimetableBox timeData = {timeData}/>)}
        </div>
    )
}

export default TimetableCollumn
