import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='row w-25'>
      <div className='col-md-12 col-sm-12 text-center mx-auto'>
        <div className='row'>
          <h1>Incrementing Integers As A Service</h1>
        </div>
        <div className='row'>
          <Link to='/login' className='w-100 mt-3'>
            <Button bsStyle="primary" bsSize="large">Login Here</Button>
          </Link>
        </div>
        <div className='row'>
          <Link to='/register' className='w-100 mt-3'>
            <Button bsStyle="primary" bsSize="large">Register Here</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
