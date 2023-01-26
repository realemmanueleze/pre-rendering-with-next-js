import React from "react";

// Generating user's page  dynamically

function UserPage(props) {
  const { userId } = props;
  return <h1> UserId: {userId}</h1>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: {
      userId,
    },
  };
}

export default UserPage;
