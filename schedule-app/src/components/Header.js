import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className = 'navbar navbar-expand headerStyle mb-3'>
            <div className = 'container-fluid'>
                <Link className = 'text-left navbar-brand text-dark logoText' to = '/'>Scheduler</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className = 'navbar-nav mb-2 text-left mr-auto mb-2 mb-sm-0'>
                        <li className = 'nav-item'>
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
            </div>
        </nav>
    )
}

export default Header
