
import './index.css';

function Contestcard({heading,content}) {
 return (
  <div className='container'>
    <p style={{fontSize:"1.5rem"}}>{heading} {content}</p>
  </div>
 )
}

export default Contestcard;
