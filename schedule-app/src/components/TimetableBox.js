const TimetableBox = ({timeData}) => {

    const getTimeText = () => {
        return timeData.TimeHours + ':' + timeData.TimeMinutes
    }

    return (
        <div className = 'mb-1 border border-5'>
        <div className = 'card rounded'>
            <div className = 'card-body bg-primary'>
                <h3 className = 'text-dark'>{getTimeText()}</h3>
            </div>
        </div>
        </div>
    )
}

export default TimetableBox
