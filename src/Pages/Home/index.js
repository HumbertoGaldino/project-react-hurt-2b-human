import './styles.css';
import Capa from '../../images/capa.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
      <div className="container">
        <nav>
          <ul>
            <Link to='/'><li><span>--</span>HOME<span>--</span></li></Link>
            <Link to='/hurts-2b-human'><li><span>--</span>HURTS 2B HUMAN<span>--</span></li></Link>
            <Link to='/preview'><li><span>--</span>PREVIEW<span>--</span></li></Link>
          </ul>
        </nav>
        <div className='container-main'>
          
          <div className="title-main">
            <h2>ALBUM</h2>
            <h1><span>-----.</span>P!NK<br/><span>---</span>HURTS<br/><span>--------</span>2B<br/><span>--</span>HUMAN</h1>
          </div>
          <div className="img-main">
            <img src={Capa} alt="Capa Album Hurts 2B Human - P!nk" />
          </div>
          
        </div>
      </div>
    )
  }
  
  export default Home;