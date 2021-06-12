import TimetableNavPart from './TimetableNavPart.js'

const TimetableNav = ({timetable, changeTimetable, currentIndex}) => {
    return (
        <nav aria-label = 'breadcrumb'>
            <ol className = 'breadcrumb'>
                {timetable.map((timeData) => <TimetableNavPart timeData = {timeData} changeTimetable = {changeTimetable} currentIndex = {currentIndex}/>)}
            </ol>
        </nav>
    )
}

export default TimetableNav
