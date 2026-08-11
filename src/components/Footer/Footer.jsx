import "./Footer.css"
import twitterIcon from "../../assets/twitter-icon.png"
import facebookIcon from "../../assets/facebook-icon.png"
import instagramIcon from "../../assets/instagram-icon.png"
import githubIcon from "../../assets/github-icon.png"

export default function Footer() {
    return (
        <footer>
            <div>
                <img src={twitterIcon} alt="twitter icon"/>
                <img src={facebookIcon} alt="facebook icon"/>
                <img src={instagramIcon} alt="instagram icon"/>
                <img src={githubIcon} alt="github icon"/>           
            </div>
        </footer>
    )
}