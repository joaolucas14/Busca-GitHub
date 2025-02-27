import { useState } from "react";
import IUser from "../Interfaces/IUser";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

export default function Home() {
  const [user, setUser] = useState<IUser | null>(null);
  const [erro, setErro] = useState(false);

  const loadUser = async (username: string) => {
    setErro(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status == 404) {
      setErro(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: IUser = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {erro && <Error />}
    </div>
  );
}
