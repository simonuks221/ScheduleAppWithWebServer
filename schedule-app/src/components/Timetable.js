import TimetableCollumn from './TimetableCollumn'

const Timetable = ({timetablePart}) => {
    //<TimetableCollumn className = 'col' timetable = {timetable}/>
    return (
        <div className = 'flex-fill' style = {{height: '500px'}}>
            <div className = 'row py-5 px-3 h-100'>
                <div className = 'card col-2'>
                    <div className = 'card-body'>
                        <h2 className = 'card-title'>{timetablePart.Title}</h2>
                        <p className = 'card-text'> {timetablePart.Description}</p>
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
