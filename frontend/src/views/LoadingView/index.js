import './styles.css';
import { ThreeDots } from 'react-loading-icons'

 
function LoadingView(props)
{


  return (
    <div className="loading-container">
       <ThreeDots stroke="#98ff98" strokeOpacity={.125} fill={'grey'}/>
    </div>
     
  );
}

export default LoadingView;