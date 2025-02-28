import { useEffect, useState } from "react";
import useRepositorios from "../state/hooks/useRepositorios";
import useUser from "../state/hooks/useUser";

export default function Repositorios() {
  const { buscaRepositorio, repositorios } = useRepositorios();
  const { user } = useUser();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (user?.repos_url) {
      buscaRepositorio(user.repos_url);
      console.log(repositorios);
      setHasFetched(true);
    } // Garantir que a consulta só aconteça uma vez
  }, [hasFetched]);
  return (
    <div>
      <h1>Repositorios</h1>
      {repositorios &&
        repositorios
          .filter((rep) => rep.stargazers_count > 0)
          .map((rep) => (
            <div key={rep.id}>
              <p>{rep.name}</p>
              <p>{rep.stargazers_count}</p>
            </div>
          ))}
    </div>
  );
}
