
import { Link } from 'react-router-dom'

const Volunteer = () => {
  return (
    <div className="volunteer-box">
      <Link to="/volunteer" style={{ textDecoration: 'none' }}>
        <h3> ✧ Volunteer</h3>
      </Link>
      <div className="volunteeer-p">
        <p>
          Our animal shelter is immensely grateful for the invaluable
          contributions of our dedicated volunteers. These compassionate
          individuals play a pivotal role in the well-being of our animals,
          providing essential care, support, and love. From daily tasks such as
          feeding and grooming to organizing adoption events and assisting with
          administrative duties, our volunteers make a significant impact on the
          overall functioning of our shelter. Their selfless commitment not only
          enriches the lives of our furry residents but also strengthens the
          sense of community within our organization.
          <span className="red-text">✧</span>
        </p>

        <br></br>
        <p>
          We deeply appreciate the time and effort our volunteers invest in
          creating a nurturing environment for our animals, fostering a
          compassionate and caring community for all. If you&apos;re passionate about
          making a difference in the lives of animals, we invite you to join our
          volunteer team and be a vital part of our mission.
        </p>
      </div>
    </div>
  )
}

export default Volunteer
