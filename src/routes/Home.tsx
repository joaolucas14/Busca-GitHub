import { useState } from "react";
import IUser from "../Interfaces/IUser";
import Search from "../components/Search";

export default function Home() {
  const [user, setUser] = useState<IUser | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

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
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>Username: {user.login}</p>
          <p>Location: {user.location}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
        </div>
      )}
    </div>
  );
}
