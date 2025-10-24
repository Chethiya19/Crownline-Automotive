import React, { useState } from "react";
import "./Header.css";
import { FaUserShield, FaChevronDown } from "react-icons/fa"; // Dropdown icon

const Header = () => {
  const [vehiclesOpen, setVehiclesOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo-link">
        <div className="logo">INTERCAR SOLUTIONS</div>
      </a>

      <nav className="nav">
        <a href="/vehicles" className="link" >
          <div className="link">All Vehicles</div>
        </a>
        {/* Vehicle Type Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setVehiclesOpen(true)}
          onMouseLeave={() => setVehiclesOpen(false)}
        >
          <span className="link">
            Vehicle Type <FaChevronDown className="dropdown-icon" />
          </span>

          {vehiclesOpen && (
            <div className="dropdown-content">
              <a href="/vehicles/type/Sedan" className="dropdown-link">Sedan</a>
              <a href="/vehicles/type/SUV" className="dropdown-link">SUV</a>
              <a href="/vehicles/type/Hatchback" className="dropdown-link">Hatchback</a>
              <a href="/vehicles/type/Coupe" className="dropdown-link">Coupe</a>
              <a href="/vehicles/type/Convertible" className="dropdown-link">Convertible</a>
              <a href="/vehicles/type/Pickup" className="dropdown-link">Pickup</a>
              <a href="/vehicles/type/Muscle" className="dropdown-link">Muscle</a>
              <a href="/vehicles/type/Crossover" className="dropdown-link">Crossover</a>
              <a href="/vehicles/type/Sports%20Car" className="dropdown-link">Sports Car</a>
            </div>
          )}
        </div>

        {/* Brands Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
          <span className="link">
            Brands <FaChevronDown className="dropdown-icon" />
          </span>

          {brandsOpen && (
            <div className="dropdown-content">
              <a href="/vehicles/brand/Rolls Royce" className="dropdown-link">Rolls Royce</a>
              <a href="/vehicles/brand/Bentley" className="dropdown-link">Bentley</a>
              {/* <a href="/vehicles/brand/Maserati" className="dropdown-link">Maserati</a> */}
              <a href="/vehicles/brand/Land Rover" className="dropdown-link">Land Rover</a>
              {/* <a href="/vehicles/brand/Aston Martin" className="dropdown-link">Aston Martin</a>
              <a href="/vehicles/brand/Macleren" className="dropdown-link">Macleren</a> */}
              <a href="/vehicles/brand/BMW" className="dropdown-link">BMW</a>
              <a href="/vehicles/brand/Mercedes Benz" className="dropdown-link">Mercedes Benz</a>
              <a href="/vehicles/brand/Audi" className="dropdown-link">Audi</a>
              <a href="/vehicles/brand/Dodge" className="dropdown-link">Dodge</a>
              {/* <a href="/vehicles/brand/Lincoln" className="dropdown-link">Lincoln</a> */}
              <a href="/vehicles/brand/Jeep" className="dropdown-link">Jeep</a>
              <a href="/vehicles/brand/Ford" className="dropdown-link">Ford</a>
              <a href="/vehicles/brand/Porsche" className="dropdown-link">Porsche</a>
              {/* <a href="/vehicles/brand/Cadillac" className="dropdown-link">Cadillac</a> */}
              <a href="/vehicles/brand/Toyota" className="dropdown-link">Toyota</a>
              <a href="/vehicles/brand/Tesla" className="dropdown-link">Tesla</a>
              <a href="/vehicles/brand/Chevrolet" className="dropdown-link">Chevrolet</a>
              <a href="/vehicles/brand/BYD" className="dropdown-link">BYD</a>
            </div>
          )}
        </div>

        {/* Admin Icon */}
        <a href="/admin/login" className="admin-icon">
          <FaUserShield size={24} />
        </a>
      </nav>
    </header>
  );
};

export default Header;
