// Types
import { UserProps } from "../@types/user";

const API_URL = "https://api.github.com/users"

export const fetchUser = async (userName: string) => {
  try {
    const response = await fetch(`${API_URL}/${userName}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};