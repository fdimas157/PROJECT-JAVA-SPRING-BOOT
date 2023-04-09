import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/users/HomePage";
import DataGuru from "./pages/admin/DataGuru";
import DataSiswa from "./pages/admin/DataSiswa";
import LoginAdmin from "./pages/admin/Login";
import DataKelas from "./pages/admin/Datakelas";
import RegisterAccount from "./pages/admin/RegisterAccount";
import DataMapel from "./pages/admin/DataMapel";
import DataAdmin from "./pages/admin/DataAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginAdmin",
    element: <LoginAdmin />,
  },
  {
    path: "/register",
    element: <RegisterAccount />,
  },
  {
    path: "/dataGuru",
    element: <DataGuru />,
  },
  {
    path: "/dataSiswa",
    element: <DataSiswa />,
  },
  {
    path: "/dataKelas",
    element: <DataKelas />,
  },
  {
    path: "/dataMapel",
    element: <DataMapel />,
  },
  {
    path: "/dataAdmin",
    element: <DataAdmin />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
