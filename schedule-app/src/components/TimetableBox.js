const TimetableBox = ({timeData}) => {

    const getTimeText = () => {
        return timeData.TimeHours + ':' + timeData.TimeMinutes
    }

    return (
        <div className = 'card rounded border-white mb-1'>
            <div className = 'card-body'>
                <h3 className = 'text-dark'>{getTimeText()}</h3>
            </div>
        </div>
    )
}

export default TimetableBox
