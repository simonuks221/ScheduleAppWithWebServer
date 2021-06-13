import TimetableNavPart from './TimetableNavPart.js'

const TimetableNav = ({timetable, changeTimetable, currentIndex}) => {
    return (
        <div className = 'container-fluid timeNav'>
            <nav aria-label = 'breadcrumb'>
                <ol className = 'breadcrumb'>
                    {timetable.map((timeData) => <TimetableNavPart key = {timeData.ID} timeData = {timeData} changeTimetable = {changeTimetable} currentIndex = {currentIndex}/>)}
                </ol>
            </nav>
        </div>
    )
}

export default TimetableNav
