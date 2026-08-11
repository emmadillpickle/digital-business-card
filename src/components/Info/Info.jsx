import headshot from '../../assets/headshot.png'
import emailIcon from '../../assets/mail-icon.png'
import linkedInIcon from '../../assets/linkedin-icon.png'
import './Info.css'

export default function Info() {
  return (
    <>
      <section>
        <img src={headshot} alt="Emma Ong" className="headshot" />
        <h1>Emma Ong</h1>
        <h2>Software Engineer</h2>
        <p>emmaong.website</p>
        
        <div className="button-container">
            <button id="email-btn">
                <img src={emailIcon} alt="Email icon" />

                <span>Email</span>
            </button>

            <button id="linkedin-btn">
                <img src={linkedInIcon} alt="LinkedIn icon" />

                <span>LinkedIn</span>
            </button>
        </div>
      </section>
    </>
  )
}