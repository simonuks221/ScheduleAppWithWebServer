const TimetableBox = ({timeData}) => {

    const getTimeText = () => {
        return timeData.TimeHours + ':' + timeData.TimeMinutes
    }

    return (
        <div className = 'card rounded timeBox mb-1'>
            <div className = 'card-body bg-primary timeBoxBody'>
                <h4 className = 'text-light text-center'>{getTimeText()}</h4>
            </div>
        </div>
    )
}

export default TimetableBox
