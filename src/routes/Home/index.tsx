import Search from "../../components/Search";
import User from "../../components/User";
import Error from "../../components/Error";
import useUser from "../../state/hooks/useUser";
import useErroBusca from "../../state/hooks/useErroBusca";

export default function Home() {
  const { buscarUser, user, setUser } = useUser();
  const { erro, mudarErroPara } = useErroBusca();

  const loadUser = async (username: string) => {
    mudarErroPara(false);
    setUser(null);
    buscarUser(username);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {erro && <Error />}
    </div>
  );
}
