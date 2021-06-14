import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className = 'navbar navbar-expand-lg headerStyle mb-3'>
            <div className = 'd-flex flex-row'>
                <Link className = 'navbar-brand text-dark logoText' to = '/'>Scheduler</Link>
                <ul className = 'navbar-nav me-auto mb-2 mb-lg-0 float-left flex-row'>
                    <li>
                        <Link className = 'button' to = '/'>Schedule</Link>
                    </li>
                    <li>
                        <Link className = 'button' to = '/pricing' >Pricing</Link>
                    </li>
                    <li>
                        <Link className = 'button' to = '/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
