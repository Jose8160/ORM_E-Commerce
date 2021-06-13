// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongto(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through:  ProductTag,
    as: "product_tag",
    foreignKey: "product_id"
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: ProductTag,
  as: "product_tag",
  foreignKey: "tag_id"
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
