import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import RegisterProduct from "./pages/registerProcut";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "/registrar-produto",
          element: <RegisterProduct />, //LEMBRAR DE PRIVAR O ACESSO AQUI
        },
        {
          path: "/cadastrar-usuario",
          element: <div>Cadastrar Usuário</div>,
        },
        {
          path: "/login",
          element: <div>Login</div>,
        }
      ]
    }
  ]
        
)

export {router};