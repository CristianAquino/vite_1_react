export const LoginForm = ({ handleSubmit, handleChange, login, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={login.username}
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          value={login.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button>Enviar</button>
      </form>
      <p>{error}</p>
    </>
  );
};
