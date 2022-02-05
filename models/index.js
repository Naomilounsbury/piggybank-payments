// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// create associations
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
// product_id is in tags so I don't think this is rigth
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //as: 'tagged_product',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  //as: 'product_tagged',
  foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
