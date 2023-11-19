import Home from "pages/Home";
import Profile from "pages/Profile";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile/:id",
    element: <Profile />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
