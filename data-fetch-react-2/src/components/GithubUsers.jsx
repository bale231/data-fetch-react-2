import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

const GithubUsers = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchTerm = username.trim();
    if (searchTerm) {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      const data = await response.json();
      setUsers(data.items);
    } else {
      setUsers([]);
    }
  };

  return (
    <>
      <form id="form-searching" onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Inserisci username GitHub"
        />
        <button type="submit">Cerca</button>
      </form>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li>
              <GithubUser
                username={user.login}
                key={user.id}
                img={user.avatar_url}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p id="text-initial">
          Cerca un utente GitHub <ion-icon name="logo-github"></ion-icon>!
        </p>
      )}
    </>
  );
};

export default GithubUsers;
