import { useEffect, useState } from "react";
import useRepositorios from "../../state/hooks/useRepositorios";
import useUser from "../../state/hooks/useUser";
import styles from "./Repositorios.module.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <h1>Melhores Projetos de {user?.login}</h1>
      <div className={styles.container}>
        {repositorios &&
          repositorios
            .filter((rep) => rep.stargazers_count > 0)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5)
            .map((rep) => (
              <a href={rep.clone_url} target="_blank">
                <div key={rep.id} className={styles.repositorio}>
                  <p>{rep.name}</p>
                  <p>
                    <span>
                      <FaStar />
                    </span>
                    {rep.stargazers_count.toLocaleString("pt-BR")}
                  </p>
                </div>
              </a>
            ))}
        <Link to={"/"} className={styles.link}>
          Voltar
        </Link>
      </div>
    </div>
  );
}
