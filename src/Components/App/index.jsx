import User from "../User";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = (delId) => {
    const newUsers = users.filter(({ id }) => id !== delId);
    setUsers(newUsers);
  };

  return (
    <div>
      {users.map(({ id, name, username, email, phone, website, address }) => (
        <User
          key={id}
          id={id}
          name={name}
          username={username}
          email={email}
          phone={phone}
          website={website}
          address={address}
          deleteUser={deleteUser}
        />
      ))}
    </div>
  );
}

export default App;
