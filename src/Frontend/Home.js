import './Home.css';
import { Link } from 'react-router-dom';
import va from './image/va.jpg';
function Home() {
  return (
    <>

   <div className='image'>
    <img src= { va} alt=''></img>
   </div>
   
   <div className='name'>
    <h1>HI! i am Viswajith</h1>
    <p>am Full Stack Developer</p>
   </div>

    </>
  );
}

export default Home;
