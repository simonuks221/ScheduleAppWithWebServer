import TimetableCollumn from './TimetableCollumn'

const Timetable = ({timetable}) => {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <ul class="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Longer nav link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
            <div className = 'row'>
                <TimetableCollumn className = 'col' timetable = {timetable}/>
                <TimetableCollumn className = 'col' timetable = {timetable}/>
            </div>
        </div>
    )
}

export default Timetable
