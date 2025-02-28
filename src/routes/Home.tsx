import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import useUser from "../state/hooks/useUser";
import useErroBusca from "../state/hooks/useErroBusca";

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
      {user && (
        <User
          avatar_url={user.avatar_url}
          followers={user.followers}
          following={user.following}
          location={user.location}
          login={user.login}
          repos_url={user.repos_url}
        />
      )}
      {erro && <Error />}
    </div>
  );
}
