import { RouterProvider } from "react-router-dom";
import { route } from "./route/route";
import Context from "./utils/Context";

export default function App() {
  return (
    <Context>
      <RouterProvider router={route} />
    </Context>
  );
}
