
const TimetableNavPart = ({timeData, changeTimetable, currentIndex}) => {
    return (
        <li className = {currentIndex === timeData.ID? 'breadcrumb-item active': 'breadcrumb-item'}>
            {currentIndex === timeData.ID? timeData.Title: <a href = '#' onClick={() => {changeTimetable(timeData.ID)}}>{timeData.Title}</a>}
        </li>
    )
}

export default TimetableNavPart
