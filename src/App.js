import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./pages/MainLayout";
import NotFoundError from "./pages/NotFoundError";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundError />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "about", element: <About /> },
    ],
  },
]);

// 2nd way
// const routesAlt = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const routes = createBrowserRouter(routesAlt);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
