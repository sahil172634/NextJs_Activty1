import React from 'react';

const index = () => {
  return <div>Developement details page</div>;
};

export default index;
export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/conveyancing',
    },
  };
};
