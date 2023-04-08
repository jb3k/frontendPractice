import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './footer.css'
import img from '../../assets/Screen Shot 2023-04-08 at 3.04.37 PM.png'

function Footer() {


    return (
        <div className="footer-container">
            <div className='footer-top-container'>
                <div className='footer-top-top'>
                    <div className='left'>
                        <h1 className='footer-header'> Corporate Information</h1>
                        <div className='underline'></div>
                        <div className='footer-text-container'>
                            <span className='footer-text'> About Us</span>
                            <span className='footer-text'> Corporate Overview</span>
                            <span className='footer-text'> Technologies</span>
                            <span className='footer-text'> Research</span>
                            <span className='footer-text'> Investors</span>
                            <span className='footer-text'> Social Responsibility</span>
                            <span className='footer-text'> NVIDIA Foundation</span>
                        </div>
                    </div>
                    <div className='middle'>
                        <h1 className='footer-header'> Get Involved</h1>
                        <div className='underline'></div>
                        <div className='footer-text-container'>
                            <span className='footer-text'> Forums</span>
                            <span className='footer-text'> Careers</span>
                            <span className='footer-text'> Developer Home</span>
                            <span className='footer-text'> NVIDIA Partner Network</span>
                            <span className='footer-text'> Startups and VCs</span>
                            <span className='footer-text'> Technical Training</span>
                            <span className='footer-text'> Training for IT Professionals</span>
                            <span className='footer-text'> Profesional Services for Data Science</span>

                        </div>
                    </div>
                    <div className='right'>
                        <h1 className='footer-header'> News & Events</h1>
                        <div className='underline'></div>
                        <div className='footer-text-container'>
                            <span className='footer-text'> Newsroom</span>
                            <span className='footer-text'> NVIDIA Blog</span>
                            <span className='footer-text'> Webinars</span>
                            <span className='footer-text'> Stay Informed</span>
                            <span className='footer-text'> Events Calendar</span>
                            <span className='footer-text'> NVIDIA GTC</span>
                            <span className='footer-text'> NVIDIA On-Demand</span>
                        </div>
                    </div>
                </div>
                <div className='footer-top-bottom'>
                    <div className='news'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(88, 164, 17)', fontSize: '50px' }} />
                        <div className='news-text'> Sign Up for NVIDIA News</div>
                        <div className='subscribe'> Subscribe </div>
                    </div>
                    <div className='socials'>
                        <div className='socials-text'> Follow NVIDIA</div>
                    </div>
                </div>


            </div>
            <div className='footer-bot'>
                <div className='footer-bot-top'>
                    <img src={img} alt=''></img>
                    <div style={{ color: 'darkgray', fontWeight: 'bolder', fontSize: '20px' }}> United States</div>
                </div>
                <div className='footer-bot-text-container'>
                    <div className='footer-bot-text'> Privacy Policy</div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Manage My Policy</div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Legal </div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Accessibility</div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Corporate Policies</div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Product Security</div>
                    <div className='footer-bot-text'> | </div>
                    <div className='footer-bot-text'> Contact</div>
                </div>
                <div style={{ color: 'darkgray', fontSize: '13px' }}> Copyright © 2023 NVIDIA Corporation</div>

            </div>
        </div>
    )

}

export default Footer
