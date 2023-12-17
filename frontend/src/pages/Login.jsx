import { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [userData, setUserData] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8090/login", formData)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;

        if (!token){
          alert("Login gagal");
          return;
        }

        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("token", token);

        if (sessionStorage.getItem("token")){
          setTimeout(() => {
              axios.post("http://localhost:8090/jobs", sessionStorage.getItem("user"))
                .then((res) => {
                  setUserData(res.data);
                  console.log(res.data);
                })
                .catch((error) => {
                  console.log(error.response);
                });
           return location.href = "/home";
          }, 5000);
        } else {
          setTimeout(() => {
            return location.href = "/login";
          }, 300);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Masuk ke akun Anda
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:text-hover">
                    Lupa password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition ease-in-out delay-50 hover:-translate-y-0.5 duration-300">
                Masuk
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Tidak punya akun?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-primary hover:text-hover">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
