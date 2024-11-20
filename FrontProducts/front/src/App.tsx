import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import RegisterProduct from "./pages/registerProcut";
import { Login } from "./pages/login";
import RegisterUser from "./pages/signup";
import { Home } from "./pages/home";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/registrar-produto",
          element: <RegisterProduct />, //LEMBRAR DE PRIVAR O ACESSO AQUI
        },
        {
          path: "/cadastrar-usuario",
          element: <RegisterUser />,
        },
        {
          path: "/login",
          element: <Login />,
        }
      ]
    }
  ]

)

export { router };