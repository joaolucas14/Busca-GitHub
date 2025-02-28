import { useRecoilState } from "recoil";
import { userState } from "../atom";
import { http } from "../../api/http";
import useErroBusca from "./useErroBusca";

export default function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const { mudarErroPara } = useErroBusca();

  const buscarUser = async (username: string) => {
    try {
      const res = await http.get(username);
      console.log(res.data);
      setUser(res.data);
    } catch (erro) {
      mudarErroPara(true);
      console.log("Erro ao buscar usuário: ", erro);
    }
  };

  return { user, buscarUser, setUser };
}
