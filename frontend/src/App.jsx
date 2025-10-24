import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vehicles from "./pages/Vehicles";
import VehicleDetails from "./pages/VehicleDetails";
import ViewVehiclesByType from "./pages/ViewVehiclesByType";
import ViewVehiclesByBrand from "./pages/ViewVehiclesByBrand";

import MainLayout from "./pages/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AddVehicle from "./admin/AddVehicle";
import ViewVehicles from "./admin/ViewVehicles";
import BrandManagement from "./admin/BrandManagement";
import EditVehicle from "./admin/EditVehicle";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public (Customer) Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
          <Route
            path="/vehicles/type/:vehicleType"
            element={<ViewVehiclesByType />}
          />
          <Route
            path="/vehicles/brand/:brand"
            element={<ViewVehiclesByBrand />}
          />
        </Route>

        {/* Admin Login (No Header/Footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Layout (No Header/Footer for Admin Dashboard) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="/admin/vehicles" element={<ViewVehicles />} />
          <Route path="/admin/vehicle/add" element={<AddVehicle />} />
          <Route path="/admin/vehicle/edit/:id" element={<EditVehicle />} />
          <Route path="/admin/brands" element={<BrandManagement />} />
          {/* add more admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
