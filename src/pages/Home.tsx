import { UserProps } from "../@types/user";
import Search from "../components/Search";
import User from "../components/user";
import { useState } from "react";

function Home() {
  // Estado para armazenar o usuário gerado na resposta da API
  const [user, setUser] = useState<UserProps | null>(null);

  // Função que faz requisição à API
  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, location, followers, following } = data;
    const UserData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    };
    setUser(UserData);
  };

  return (
    <>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}
    </>
  );
}

export default Home;
