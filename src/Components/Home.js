import '../styles/home.css'

const Home = () => {
    return(
        <div id='Home' >
            <button className="btn home-btn"><button></button></button>
            <button className="btn login-btn">LOGIN</button>
            <div className="triangle-spin triangle-1"></div>
            <div className="triangle-spin triangle-2"></div>
            <div class="marquee">
                <div class="marquee__inner" aria-hidden="true">
                    <span>PLAY</span>
                    <span>PLAY</span>
                    <span>PLAY</span>
                    <span>PLAY</span>
                </div>
            </div>
            <button className="btn start-btn">START</button>
        </div>
    )
}

export default Home;