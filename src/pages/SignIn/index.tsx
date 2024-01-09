import { ReactNode, useState } from "react";
import Lottie from "react-lottie";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material/";
import animationstock from "../../../animation.json";
import { TextField, InputAdornment } from "@mui/material";
import { Notify } from "../../components/index";
import { Toaster } from "react-hot-toast";
import { IAnimationOptionsSingIn, IAnimationState } from "../../@types";

const SignIn: React.FC<ReactNode> = () => {
  const [usuario, setUsuario] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [usuarioError, setUsuarioError] = useState<string>("");
  const [senhaError, setSenhaError] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);

  function validaCampos() {
    let hasError = false;

    if (!usuario) {
      setUsuarioError("Preencha o campo Usuário.");
      hasError = true;
    } else {
      setUsuarioError("");
    }

    if (!senha) {
      setSenhaError("Preencha o campo Senha.");
      hasError = true;
    } else {
      setSenhaError("");
    }
    if (hasError) {
      Notify("info", "Preencha todos os campos.");
    }
    return hasError;
  }

  const verSenha = () => {
    setVisible(!visible);
  };

  const [animation] = useState<IAnimationState>({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions: IAnimationOptionsSingIn = {
    loop: true,
    autoplay: true,
    animationData: animationstock,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Toaster position="top-left" reverseOrder={true} />
      <div
        id="animation-singin"
        className="flex-1 h-full w-full bg-gray-800 justify-center "
      >
        <div className="flex h-screen items-center justify-center z-50 min-h-screen">
          <Lottie
            options={defaultOptions}
            height={"80%"}
            width={"80%"}
            isStopped={animation.isStopped}
            isPaused={animation.isPaused}
          />
        </div>
      </div>
      <div className="flex-1 h-screen w-screen items-center bg-cover bg-no-repeat justify-center relative bg-tijuca-estoque">
        <div className="flex w-9/12 h-5/6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white items-center justify-center opacity-60 flex-col" />
        <div className="flex w-full h-full flex-col items-center justify-evenly">
          <div className="relative flex justify-center items-center w-full pt-1">
            <p className="text-[40px]">Estoque de Produtos</p>
          </div>
          <div className="flex flex-col w-full items-center justify-center">
            <TextField
              className="w-[70%] bg-white"
              label={usuarioError ? `${usuarioError}` : "Nome"}
              onChange={(e) => {
                setUsuario(e.target.value), setUsuarioError("");
              }}
              value={usuario}
              error={!!usuarioError}
              margin="dense"
              type="text"
              variant="outlined"
              InputLabelProps={{
                style: {
                  fontSize: "18px",
                },
              }}
            />
            <br />
            <TextField
              className="w-[70%] bg-white"
              label={senhaError ? `${senhaError}` : "Senha"}
              onChange={(e) => {
                setSenha(e.target.value), setSenhaError("");
              }}
              value={senha}
              error={!!senhaError}
              margin="dense"
              type={visible ? "text" : "password"}
              variant="outlined"
              InputLabelProps={{
                style: {
                  fontSize: "18px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <div
                      className="w-20 h-10 items-center justify-center flex cursor-pointer"
                      onClick={verSenha}
                    >
                      {senha ? <VisibilityOff /> : <RemoveRedEye />}
                    </div>
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <button
              className="relative bg-sky-950 hover:bg-sky-700 text-white w-[70%] font-bold py-2 px-4 rounded"
              onClick={() => validaCampos()}
              type="submit"
            >
              Acessar
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
