import { RouterProvider } from "react-router";
import { router } from "./routes";

export default function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-[#F5F8FF]">
      <RouterProvider router={router} />
    </div>
  );
}