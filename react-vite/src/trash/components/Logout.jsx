export const Logout = ({ handleLogout, user }) => {
  return (
    <div>
      <p>Bienvenido {user.username}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
