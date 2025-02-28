import { useRecoilState } from "recoil";
import { erroBuscaState } from "../atom";

export default function useErroBusca() {
  const [erro, setErro] = useRecoilState(erroBuscaState);

  const mudarErroPara = (estado: boolean) => {
    setErro(estado);
  };
  return { erro, mudarErroPara };
}
