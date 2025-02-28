import { useState } from "react";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";
import useUser from "../state/hooks/useUser";

export default function Home() {
  const { buscarUser, user, setUser } = useUser();
  const [erro, setErro] = useState(false);

  const loadUser = async (username: string) => {
    setErro(false);
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
        />
      )}
      {erro && <Error />}
    </div>
  );
}
