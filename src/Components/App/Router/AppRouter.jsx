import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Order from "../../Pages/Order/Order";
import Sorting from "../../Pages/Sorting/Sorting";
import Stations from "../../Pages/Stations/Stations";
import Categories from "../../Pages/Sorting/Categories";
import Type from "../../Pages/Sorting/Type";
import StationDetails from "../../Pages/Stations/StationDetails";
import ContainerOrder from "../../Pages/Order/ContainerOrder";

/* Creating a react component */
const AppRouter = () => {
  return (
    <Routes>
      {/* Defining the home page of the website */}
      <Route index element={<Home />} />
      <Route path="/sortering">
        <Route index element={<Sorting />} />
        <Route path=":section_id" element={<Categories />} />
        <Route path=":section_id/:category_id" element={<Type />} />
      </Route>
      <Route path="/stationer">
        <Route index element={<Stations />} />
        <Route path=":station_id" element={<StationDetails />} />
      </Route>

      <Route path="/bestil">
        <Route index element={<ContainerOrder />} />
        <Route path=":container_id" element={<Order />} />
      </Route>


      <Route path="/login" element={<Login />} />
      {/* Routing to a 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
/* Exporting the component to be reused*/
export default AppRouter;
