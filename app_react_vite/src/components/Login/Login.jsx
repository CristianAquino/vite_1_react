import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isLoginLoading, hasLoginError, login, isLogged } = useAuth();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const onSubmit = (values) => {
    login(values);
  };

  return (
    <>
      <h2>Login</h2>
      <Link to={"/register"}>Register</Link>
      {isLoginLoading && <span>Checking credentials...</span>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("email", {
              required: { value: true },
            })}
          />
          <input
            type="password"
            {...register("password", {
              required: { value: true },
            })}
          />
          {errors.password && <span>password es requerido</span>}
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <span>Error</span>}
    </>
  );
};
