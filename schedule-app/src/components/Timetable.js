import TimetableCollumn from './TimetableCollumn'

const Timetable = ({timetablePart}) => {
    //<TimetableCollumn className = 'col' timetable = {timetable}/>
    return (
        <div className = 'container-fluid'>
            <div className = 'row'>
                <TimetableCollumn className = 'col' timetablePart = {timetablePart.Times}/>
                <TimetableCollumn className = 'col' timetablePart = {timetablePart.Times}/>
            </div>
        </div>
    )
}

export default Timetable
