import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import Home from "../views/Home";
import ProductDetail from "../views/ProductDetail";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: ":id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
