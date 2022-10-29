import './styles.css';

import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

import Picture from '../../images/pic1.jpg'

const Hurts = () => {
    
    return (
      <div className="container">
        <nav>
          <ul>
            <Link to='/'><li><span>--</span>HOME<span>--</span></li></Link>
            <Link to='/hurts-2b-human'><li><span>--</span>HURTS 2B HUMAN<span>--</span></li></Link>
            <Link to='/preview'><li><span>--</span>PREVIEW<span>--</span></li></Link>
          </ul>
        </nav>

        <div className="container-hurts">
          <Iframe width="560" height="315" src="https://www.youtube.com/embed/Z25aDKQ7Ojw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          <img src={Picture} alt="" />
        </div>

        
      </div>
    )
  }
  
  export default Hurts;