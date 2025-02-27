import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <div>
      <h1>GitHub Profiler</h1>
      <Outlet />
    </div>
  );
}
