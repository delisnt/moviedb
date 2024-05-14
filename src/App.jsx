import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/MovieList";
import MoviePage from "./pages/MoviePage";
import Login from "./pages/Login";
import Root from "./pages/Root";
import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import MovieRoot from "./pages/MovieRoot";
import useFetch from './hooks/useFetch'

function App() {
  const { fetchConfigurationData, FetchData } = useFetch()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <Login /> },
        {
          path: "movies",
          element: <MovieRoot />,
          children: [
            {
              index: true,
              element: <MovieList />,
            },
            {
              path: ":movieid",
              element: <MoviePage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
