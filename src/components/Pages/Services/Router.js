import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import RepositoriesPage from "../Repositories/repoPage";
import MainPage from "../Main/mainPage";

function RouterApp(){
  const [login, setLogin] = useState();

  const router = createBrowserRouter([

    {
      path: "/",
      element: <MainPage setLogin={setLogin} />,
    },
    {
      path: `/:${login}/repositories`,
      element: <RepositoriesPage login={login}/>
    }

  ])
  return <RouterProvider router={router} />
}

export default RouterApp;