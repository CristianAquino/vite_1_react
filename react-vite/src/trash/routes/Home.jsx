import { useStore } from "../store/StoreProvider";

export const Home = () => {
  const { user } = useStore();

  return <h1>Home {user.name}</h1>;
};
