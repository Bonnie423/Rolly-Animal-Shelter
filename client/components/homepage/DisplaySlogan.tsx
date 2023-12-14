import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const DisplaySlogan = () => {
  return (
    <div>
      <div className="main-text">
        <div className="border-box">
          <br></br>

          <p>
            <span className="give-me-home">GIVE ME A HOME</span>
          </p>
          <p className="adoption-word">
            <span >
            <Link to='/adoptions' style={{textDecoration: 'none'}}><span className='red-text'>ADOPT </span></Link> ME! <span className='red-text'>✦ ✧</span>{' '}
              {/* <FontAwesomeIcon icon={faArrowRight} className="arrow" /> */}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DisplaySlogan
