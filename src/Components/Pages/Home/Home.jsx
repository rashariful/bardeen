import React from 'react';
import Articles from '../Articles/Articles';
import Heros from '../Heros/Heros';

const Home = () => {

    return (
      <div className="max-w-screen-2xl mx-auto">
        <section className='mt-10'>
         <Heros></Heros>
        </section>
        <section>
          <Articles></Articles>
        </section>
      </div>
    );
};

export default Home;