import TimetableCollumn from './TimetableCollumn'

const Timetable = ({timetablePart}) => {
    //<TimetableCollumn className = 'col' timetable = {timetable}/>
    return (
        <div className = 'flex-fill' style = {{height: '500px'}}>
            <div className = 'row py-5 mx-3 h-100'>
                <div className = 'card col-2 destination'>
                    <img className = 'card-img' src = {process.env.PUBLIC_URL + timetablePart.backgroundImage}/>
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
