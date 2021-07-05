import '../styles/carousel.css'
import PhoneImg1 from '../assets/phn1.png';
import PhoneImg2 from '../assets/phn2.png';
import PhoneImg3 from '../assets/phn3.png';


const Carousel = () => {
    return(
        <>
            <ul className="cards">
                
                <li className="card">
                    <img className="img-fluid" src={PhoneImg1} />
                </li>
                <li className="card">
                    <img className="img-fluid" src={PhoneImg2} />
                </li>
                <li className="card">
                    <img className="img-fluid" src={PhoneImg3} />
                </li>
            </ul>
            <ul className="indicators">
                <li className="indicator "></li> 
                <li className="indicator"></li> 
                <li className="indicator active-indicator"></li> 
            </ul>
            <div className='text'>
                <p>
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim
                </p>
                <p>
                veniam, quis nostrud exercitation ullamco laboris nis
                i ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
                t non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum
                </p>
            </div>
        </>
    )
}

export default Carousel;