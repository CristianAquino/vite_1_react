import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { isLoginLoading, hasLoginError, registerUser, isLogged } = useAuth();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const onSubmit = (values) => {
    registerUser(values);
  };

  return (
    <>
      <h2>Register</h2>
      <Link to={"/login"}>Login</Link>
      {isLoginLoading && <span>Checking credentials...</span>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="username"
            {...register("username", {
              required: { value: "username requerido" },
            })}
          />
          <input
            type="text"
            placeholder="email"
            {...register("email", {
              required: { value: "email requerido" },
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              },
            })}
          />
          <input
            type="password"
            placeholder="password"
            {...register("password", {
              required: { value: "password requerido" },
              minLength: {
                value: 8,
                message: "La longitud tiene que ser como minimo de 8",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message: "Debe incluir un caracter",
              },
            })}
          />
          {errors.password && <span>password es requerido</span>}
          <button>Register</button>
        </form>
      )}
      {hasLoginError && <span>Error</span>}
    </>
  );
};
