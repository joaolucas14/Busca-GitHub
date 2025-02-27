import { useState } from "react";
import IUser from "../Interfaces/IUser";
import Search from "../components/Search";

export default function Home() {
  const [user, setUser] = useState<IUser | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
}
