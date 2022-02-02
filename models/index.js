// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// create associations
Product.belongsTo(Category, {
  foreignKey: 'catagory_id'
});

// Categories have many Products
// product_id is in tags so I don't think this is rigth
Catagory.hasMany(Product, {
  foreignKey: 'catagory_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //as: 'tagged_product',
  foreignKey: 'tag_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //as: 'product_tagged',
  foreignKey: 'product_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
