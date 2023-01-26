import User from "../User";
import { useState, useEffect } from "react";
import s from "./style.module.css";

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
      <h1><a href="https://github.com/RedMaxMay/users-react" target="_blank" rel="noreferrer"> Link to GitHub </a></h1>
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
