
const TimetableNavPart = ({timeData, changeTimetable, currentIndex}) => {
    return (
        <li className = {currentIndex === timeData.ID? 'breadcrumb-item active': 'breadcrumb-item'}>
            {currentIndex === timeData.ID? timeData.Name: <a href = '#' onClick={() => {changeTimetable(timeData.ID)}}>{timeData.Name}</a>}
        </li>
    )
}

export default TimetableNavPart
