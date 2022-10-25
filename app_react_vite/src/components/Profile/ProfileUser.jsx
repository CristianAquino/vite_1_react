import { useContext, useEffect, useState } from "react";
import { getProfile } from "../../https/getProfile";
import { authContext } from "../../provider/AuthProvider";

export const ProfileUser = () => {
  const [profile, setProfile] = useState(null);
  const { token } = useContext(authContext);

  useEffect(() => {
    getProfile(token)
      .then((profile) => setProfile(profile))
      .catch((error) => console.log(error));
  }, []);

  console.log(profile);
  return (
    <>
      <h1>{profile?.username}</h1>
      <h1>{profile?.email}</h1>
    </>
  );
};
