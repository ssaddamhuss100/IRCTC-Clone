
import Navbar from '../navbar/Navbar';
import './home.css'

const Home = () => {
  const searchTrain = () => { 
    
  };
  return (
    <div className="container">
    <Navbar/>
      <div className="title">
        <p>Book Your Train Tickets</p>
      </div>
      <div className="irctcbody">
          <label>To</label>
            <input type="text" placeholder="Enter Departure Station" />
          <br />

          <label>From</label>
           <input type="text" placeholder="Enter Arrival Station" />
          <br />

          <label>Date</label>
           <input type="date" placeholder="dd/mm/yyyy" />
          <br />
          <button onClick={searchTrain}>Search Trains</button>
      </div>
    </div>
  );
};

export default Home;
