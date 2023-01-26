import React, { useEffect, useState } from "react";

function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch(" https://test-35fa6-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json(res))
      .then((data) => {
        const userList = [];
        for (const key in data) {
          userList.push({
            id: data[key].id,
            title: data[key].title,
            education: data[key].education,
            height: data[key].height,
            name: data[key].name,
          });
          setUsers(userList)
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.title}</h1>
          <h2>{user.name}</h2>
          <p>{user.height}</p>
          <p>{user.education}</p>
          <p>{user.id}</p>
        </div>
      ))}
    </>
  );
}

export default Users;
