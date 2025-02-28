import { useRecoilState } from "recoil";
import { userState } from "../atom";
import { http } from "../../api/http";

export default function useUser() {
  const [user, setUser] = useRecoilState(userState);

  const buscarUser = async (username: string) => {
    try {
      const res = await http.get(username);
      console.log(res.data);
      setUser(res.data);
    } catch (erro) {
      console.log("Erro ao buscar usuário: ", erro);
    }
  };

  return { user, buscarUser, setUser };
}
