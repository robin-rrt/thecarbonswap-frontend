import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Swap from "../pages/swap/Swap";
import Dashboard from "../pages/dashboard";
import About from "../pages/about";
import Liquidity from "../pages/liquidity";

// Add your routes here.
// Use Link element from react-router to navigate to specific url. --see src/pages/Home/index.jsx (Swap Link)
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        // Render element at the url specified in the parent's path property.
        index: true,
        element: <Home />, // Element to render
      },
      {
        path: "/swap", // Url to render the component in element property.
        element: <Swap />,
      },
      {
        path: "/dashboard", // Url to render the component in element property.
        element: <Dashboard />,
      },

      {
        path: "/about", // Url to render the component in element property.
        element: <About />,
      },

      {
        path: "/liquidity", // Url to render the component in element property.
        element: <Liquidity />,
      },
    ],
  },
]);

export default router;
