import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/Screen Shot 2023-04-08 at 2.50.02 PM.png'


function NavBar() {


    return (
        <div className="navbar-container">
            <div className='left-navbar'>
                <img src={img} alt="" style={{ marginRight: '25px', cursor: 'pointer' }} />
                <div className='l-navbar-text'> Products </div>
                <div className='l-navbar-text'> Solutions </div>
                <div className='l-navbar-text'> Industries </div>
                <div className='l-navbar-text'> For You </div>
            </div>
            <div className='right-navbar'>
                <div className='r-navbar-text'> Shop </div>
                <div className='r-navbar-text'> Drivers </div>
                <div className='r-navbar-text'> Support </div>
                <div style={{ marginLeft: '40px' }}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='r-navbar-icon' />
                    <FontAwesomeIcon icon={faCircleUser} className='r-navbar-icon' />
                </div>
            </div>

        </div>
    )

}

export default NavBar
