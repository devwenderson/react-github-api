type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import styles from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
        loadUser(userName);
    };
  };

  return (
    <>
      <div>
        <h1>Digite o nome do usuário</h1>
        <div>
          <input
            type="text"
            placeholder="Digite o nome do usuário"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => loadUser(userName)}>Ok</button>
        </div>
      </div>
    </>
  );
};

export default Search;
