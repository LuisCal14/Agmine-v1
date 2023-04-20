import '../assets/style/Home.css'
import Planet from '../assets/images/planet.svg'

function HomePage(){
    
    return (
        <div className="home-main">
            <div className="home-text">
                <h1 className="upper-text">AGMINE</h1>
                <h1 className="bottom-text">QUIZZ</h1>
            </div>
            <div className="planet-div">
                <img src={Planet} alt="" className='planet-img'/>
            </div>
        </div>
    )
}

export default HomePage;