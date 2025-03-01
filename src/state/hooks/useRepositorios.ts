import { useRecoilState } from "recoil";
import { repositoriosState } from "../atom";
import axios from "axios";
import useUser from "./useUser";

export default function useRepositorios() {
  const [repositorios, setRepositorios] = useRecoilState(repositoriosState);
  const { user } = useUser();

  const buscaRepositorio = async (linkRepositorio: string) => {
    try {
      if (user?.repos_url) {
        const res = await axios.get(`${linkRepositorio}?per_page=100`);
        setRepositorios(res.data);
      }
    } catch (erro) {
      console.log("Erro ao buscar repositorio", erro);
    }
  };
  return { buscaRepositorio, repositorios };
}
