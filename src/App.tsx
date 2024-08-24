import CharactersPage from "./Pages/CharactersPage.tsx";
import HomePage from "./Pages/HomePage.tsx";
import MainLayout from "./components/MainLayout.tsx";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import CharacterPage from "./Pages/CharacterPage.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/characters', element: <CharactersPage />},
      {path: '/characters/:characterId', element: <CharacterPage />}
    ],
    errorElement: <NotFoundPage/>
  },
  {
    path: '/404',
    element: <NotFoundPage/>
  }
])

function App() {

  return (
          <RouterProvider router={router}/>
  )
}

export default App
