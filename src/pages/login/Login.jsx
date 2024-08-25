import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import {
  saveUserInfo,
  getUserInfo,
  saveCompanyLogoBase64,
} from "../../utils/localStorage/functions";
import { getBase64ImageFromUrl } from "../../utils/Images/images";
import "./bg.css";
import { motion } from "framer-motion";
import Loading from "../../components/Loading/Loading";
import TextButton from "../../components/Button/TextButton";
import axios from "axios";

import TodayGreeting from "../../components/TodayGreeting/TodayGreeting";
const Login = () => {
  //local
  const [userCredentials, setUserCredentials] = useState({ companyId: 12 });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  //LocalStorage
  const userLocalStorage = getUserInfo();
  function handleData(e) {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  }

  var redirectByRole = (res) => {
    res.data.role === "client"
      ? res.data.user.emailConfirmed
        ? navigate("/home")
        : navigate("/updatepassword")
      : navigate("/admindashboard");
    window.location.reload();
  };
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_DEV}/login`, userCredentials)
      .then(async (res) => {
        setLoading(false);
        saveUserInfo(res.data);
        await getImageByCompany(res.data);
        redirectByRole(res);
      })
      .catch((e) => {
        console.log(e);
        setErrorMessage("Correo o contraseña incorrecta");
        setLoading(false);
      });
  };
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg flex flex-row justify-center items-center h-[100vh]">
        <div className="flex flex-row  justify-center items-center w-[45%] backdrop-blur-3xl  shadow-md shadow-gray-800 rounded-xl p-5">
          <div className=" flex-1 flex flex-col items-center justify-center h-[500px] bg-login-img   rounded-xl"></div>
          <form onSubmit={handleLogin} className="flex flex-col flex-1 ml-5">
            <div className="m-4 flex justify-center items-center flex-col">
              <motion.div
                className="box mb-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                {userLocalStorage && (
                  <img
                    src={
                      userLocalStorage?.branch?.client?.company
                        ?.pictureBusinessName
                    }
                    width="100"
                    alt=""
                  />
                )}
              </motion.div>
            </div>
            <div className="mb-4">
              {/*logos animations*/}
              <div className=" flex flex-row items-center ">
                <div className="tranform-down-up">
                  <img src="orbitas_logo.png" alt="orbitas-log" width={100} />{" "}
                </div>
                <div className="my-1 tranform-up-down">
                  <img width={70} src="./sos_logo_black.png" alt="" />
                </div>
              </div>
              <p className="text-3xl mb-2">Bienvenido a SOS</p>{" "}
              <p className="text-xl mb-4 font-sans">
                Encuentra los mejores mantenimientos para tu negocio
              </p>
              <label
                className="block text-black text-lg font-bold mb-2"
                htmlFor="userName"
              >
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker text-lg "
                id="userName"
                type="text"
                name="userName"
                placeholder="Usuario"
                onChange={handleData}
                required
                autoComplete="off"
              ></input>
            </div>
            <div className="mb-6">
              <label
                className="block text-black  text-lg font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 text-lg "
                id="password"
                type="password"
                name="password"
                placeholder="******"
                onChange={handleData}
                required
                minLength={4}
              ></input>
              <p className="text-red-700 text-lg  italic">{errorMessage}</p>
            </div>
            <div className="flex items-center flex-col ">
              <div className="mb-4">
                <TextButton
                  text={loading ? <Loading /> : "Ingresar"}
                  bgColor={"bg-black"}
                  textColor={"text-white"}
                  disabled={loading ? true : false}
                  type={"submit"}
                  onClick={() => {}}
                />
              </div>

              <p className="flex flex-col">¿Has olvidado tu contraseña?</p>
              <a
                className="inline-block align-baseline text-black  font-bold   text-blue hover:text-blue-darker"
                href="#"
              >
                Presiona aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
