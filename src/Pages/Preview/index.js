import './styles.css';

import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'

import Picture from '../../images/pic2.jpg'

const Preview = () => {
    
    return (
      <div className="container">
        <nav>
          <ul>
            <Link to='/'><li><span>--</span>HOME<span>--</span></li></Link>
            <Link to='/hurts-2b-human'><li><span>--</span>HURTS 2B HUMAN<span>--</span></li></Link>
            <Link to='/preview'><li><span>--</span>PREVIEW<span>--</span></li></Link>
          </ul>
        </nav>

        <div className="container-preview">
          <img src={Picture} alt="" />
          <Iframe frameborder="0" src="https://embed.music.apple.com/us/album/hurts-2b-human/1456444580" />;
        </div>

        
      </div>
    )
  }
  
  export default Preview;