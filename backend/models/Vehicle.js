const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Vehicle = sequelize.define(
  "Vehicle",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    engineCapacity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    vehicleType: {
      type: DataTypes.ENUM(
        "Sedan", "SUV", "Hatchback", "Coupe", "Convertible",
        "Pickup", "Muscle", "Crossover", "Sports Car"
      ),
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.ENUM("Petrol", "Diesel", "Hybrid", "Electric"),
      allowNull: false,
    },
    transmissionType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mileage: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "vehicles",
    timestamps: false,
  }
);

module.exports = Vehicle;
