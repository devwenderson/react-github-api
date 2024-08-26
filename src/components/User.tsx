import { UserProps } from "../@types/user";
import styles from "./User.module.css";

const User = ({
  login,
  avatar_url,
  location,
  followers,
  following,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      <p>{location}</p>
      <h4>Seguidores</h4>
      <p>{followers}</p>
      <h4>Seguindo</h4>
      <p>{following}</p>
    </div>
  );
};

export default User;
