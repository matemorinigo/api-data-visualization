import Navbar from "./components/Navbar.tsx";
import CharactersPage from "./Pages/CharactersPage.tsx";
import HomePage from "./Pages/HomePage.tsx";
import SpellsPage from "./Pages/SpellsPage.tsx";
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
      {path: '/spells', element: <SpellsPage />},
      {path: '/characters/:characterId', element: <CharacterPage />},
    ],
    errorElement: <NotFoundPage/>
  }
])

function App() {

  return (
          <RouterProvider router={router}/>
  )
}

/*
<div className='flex flex-col p-4 gap-4 '>
            <Navbar/>
            <CharactersPage />
          </div>

*/

export default App
