import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Order from "../../Pages/Order/Order";
import Sorting from "../../Pages/Sorting/Sorting";
import Stations from "../../Pages/Stations/Stations";
import Categories from "../../Pages/Sorting/Categories"

/* Creating a react component */
const AppRouter = () => {
  return (
    <Routes>
      {/* Defining the home page of the website */}
      <Route index element={<Home />} />
      <Route path="/sortering">
        <Route index element={<Sorting />} />
        <Route path=":section_id" element={<Categories />} />
      </Route>
      <Route path="/stationer" element={<Stations />} />
      <Route path="/bestil" element={<Order />} />
      <Route path="/login" element={<Login />} />
      {/* Routing to a 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
/* Exporting the component to be reused*/
export default AppRouter;
