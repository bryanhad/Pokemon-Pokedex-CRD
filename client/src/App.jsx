import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import AddPokemon from "./pages/AddPokemon"
import PokemonDetail from "./pages/PokemonDetail"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: '/add',
                element: <AddPokemon/>
            },
            {
                path: "/:type?",
                element: <Home />,
            },
            {
                path: "/pokemon/:id",
                element: <PokemonDetail />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
