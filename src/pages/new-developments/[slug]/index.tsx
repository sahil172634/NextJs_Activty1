const index = () => {
  return <div>Dynamic area name page</div>;
};

export default index;
export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/conveyancing',
    },
  };
};
