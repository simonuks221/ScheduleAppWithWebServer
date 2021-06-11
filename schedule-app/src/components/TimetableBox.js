const TimetableBox = ({timeData}) => {

    const getTimeText = () => {
        return timeData.TimeHours + ':' + timeData.TimeMinutes
    }

    return (
        <div className = 'card w-100'>
            <div className = 'card-body bg-secondary'>
                <h3 className = 'text-dark bg-secondary'>{getTimeText()}</h3>
            </div>
        </div>
    )
}

export default TimetableBox
