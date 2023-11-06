import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import AddPokemon from "./pages/AddPokemon"

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
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
