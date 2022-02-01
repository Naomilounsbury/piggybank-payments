// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define a username column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an email column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isDecimal: true
      }
    },
    // define a password column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    catagory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'catagory',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }

);

module.exports = Product;
