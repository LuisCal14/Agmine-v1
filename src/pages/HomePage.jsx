import '../assets/style/Home.css'
import Nav from '../components/Navbar/Navbar';
import Header from '../container/Header/Header';
import About from '../container/AboutUs/Aboutus';

function HomePage(){
    
    return (
        <>
            <Nav />
            <Header />
            <About />
        </>
    )
}

export default HomePage;        