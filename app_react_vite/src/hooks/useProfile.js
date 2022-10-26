import { useContext, useCallback, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { getProfile } from "../https/getProfile";

const useProfile = () => {
  const { profile, token, setProfile } = useContext(authContext);

  const profileUser = useCallback(
    (token) => {
      getProfile(token)
        .then((data) => setProfile(data))
        .catch((error) => console.log(error));
    },
    [token, setProfile]
  );

  return {
    profile,
    profileUser,
  };
};

export default useProfile;
