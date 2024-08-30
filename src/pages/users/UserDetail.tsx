import { UserProps } from "../../@types/user";
import { fetchUser } from "../../services/apiService";
import { useState } from "react";

const UserDetail = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState("")

  const handleSearch = async () => {
    try {
      const data = await fetchUser(userName);
      const { avatar_url, login, location, followers, following }: UserProps =
        data;
      const userData = { avatar_url, login, location, followers, following };
      setUser(userData);
      setError("");
    } catch (error) {
      setError("Não encontrado")
    }
  };

  return (
    <div>
      <h1>Buscar usuário</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        Buscar
      </button>
      {error && <p style={{color:'red'}}>{error}</p>}
      
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <h2>{user.login}</h2>
          <p>{user.location}</p>
          <h4>Seguidores</h4>
          <p>{user.followers}</p>
          <h4>Seguindo</h4>
          <p>{user.following}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
