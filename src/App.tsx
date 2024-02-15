import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthPage from "@/pages/AuthPage.tsx";
import TodoPage from "@/pages/TodoPage.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <AuthPage/>
        },
        {
            path: '/todolist',
            element: <TodoPage/>
        }])

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App
