import '../styles/faq.css';
import FaqCard from "./FaqCard";

const Faq = () => {
    return(
        <div id="Faq">
            <div className='container'>
                <h3>FAQ</h3>
                <div className="row">
                    <FaqCard question='Question 01' answer='Lorem Ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim' />
                    <FaqCard question='Question 02' answer='Lorem Ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim' />
                    <FaqCard question='Question 03' answer='Lorem Ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim' />
                </div>
            </div>

        </div>
    )
}

export default Faq;