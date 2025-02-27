import { KeyboardEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.css";

interface ISearch {
  loadUser: (username: string) => Promise<void>;
}

export default function Search({ loadUser }: ISearch) {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className={styles.search}>
      <h2>Busque por um usuário: </h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button>
          <BsSearch onClick={() => loadUser(userName)} />
        </button>
      </div>
    </div>
  );
}
