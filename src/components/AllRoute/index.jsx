import { useRoutes } from "react-router-dom";
import { routes } from "../../routes";

const AllRoute = () => {
  const elements = useRoutes(routes);
  return elements;
};

export default AllRoute;
