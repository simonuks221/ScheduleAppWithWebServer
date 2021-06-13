import TimetableBox from './TimetableBox'

const TimetableCollumn = ({times}) => {

    return (
        <div className = 'collumn'>
            {times.map((timeData) => <TimetableBox key = {timeData.ID} timeData = {timeData}/>)}
        </div>
    )
}

export default TimetableCollumn
