import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface ISearch {
  loadUser: (username: string) => Promise<void>;
}

export default function Search({ loadUser }: ISearch) {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por um usuário: </h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button>
          <BsSearch onClick={() => loadUser(userName)} />
        </button>
      </div>
    </div>
  );
}
