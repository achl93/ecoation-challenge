import React from 'react';
import { Link } from 'react-router-dom';

// import 'src/assets/stylesheets/base.scss';

const Home = () => {
  return (
    <div>
      <h1>Incrementing Integers As A Service</h1>
      <Link to='/login'>
        <button>Login Here</button>
      </Link>
      <Link to='/register'>
        <button>Register Here</button>
      </Link>
    </div>
  );
};

export default Home;
