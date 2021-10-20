/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Categories from "views/Pages/Categories.js";
import Product from "views/Pages/Product.js";
import Orders from "views/Pages/Orders.js";
import User from "views/Pages/User.js";
import Slider from "views/Pages/Slider.js";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-planet text-blue",
    component: Categories,
    layout: "/admin",
  },

  {
    path: "/product",
    name: "Products",
    icon: "ni ni-bullet-list-67",
    component: Product,
    layout: "/admin",
  },

  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-bullet-list-67",
    component: Orders,
    layout: "/admin",
  },

  {
    path: "/user",
    name: "Users",
    icon: "ni ni-bullet-list-67",
    component: User,
    layout: "/admin",
  },
  {
    path: "/slider",
    name: "Slider",
    icon: "ni ni-bullet-list-67",
    component: Slider,
    layout: "/admin",
  }
];
export default routes;
