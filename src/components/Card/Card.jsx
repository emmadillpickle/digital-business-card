import './Card.css'
import Info from '../Info/Info.jsx'
import About from '../About/About.jsx'
import Interests from '../Interests/Interests.jsx'
import Footer from '../Footer/Footer.jsx'

export default function Card() {
    return (
        <div className="card-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}