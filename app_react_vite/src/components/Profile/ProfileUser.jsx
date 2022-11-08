import useProfile from "../../hooks/useProfile";

export const ProfileUser = () => {
  const { profile } = useProfile();

  console.log(profile);
  return (
    <>
      <h1>{profile?.username}</h1>
      <h1>{profile?.email}</h1>
      <h1>Roles:</h1>
      <ul>
        {profile?.roles.map((rol) => (
          <li key={rol.name}>{rol.name}</li>
        ))}
      </ul>
    </>
  );
};
