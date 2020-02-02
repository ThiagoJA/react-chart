import React from 'react';
import Form from '../components/Form/Form';
import PieChart from '../components/PieChart/PieChart';

const Home = ({handleUpdate, updateEmployees}) => {
  return (
    <>
      <Form handleUpdate={handleUpdate}/>
      <PieChart />
    </>
  )
}

export default Home;