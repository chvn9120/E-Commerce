import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import initData from './public/data/seed.js';
// Fix __dirname in ES module
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import routes
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
// Import models 
import sequelize from './database/db.js';
import {Associations} from './models/Associations.js';
import Brand from './models/Brand.js';
import Category from './models/Category.js';
import Order from './models/OrderBase.js';
import OrderItems from './models/OrderItems.js';
import Product from './models/ProductBase.js';
import User from './models/UserBase.js';
import Store from './models/StoreBase.js';
import Voucher from './models/Voucher.js';
import Cart from './models/CartBase.js';
import CartItems from './models/CartItems.js';
// Import associations
// Brand - Product 
Brand.hasMany(Product, {foreignKey: 'brand_id'});
Product.belongsTo(Brand, {foreignKey: 'brand_id'});
// Category - Product
Category.hasMany(Product, {foreignKey: 'category_id'});
Product.belongsTo(Category, {foreignKey: 'category_id'});
// Store - Product
Store.belongsToMany(Product, {through: Associations.StoreProduct});
Product.belongsToMany(Store, {through: Associations.StoreProduct});
// Cart - User
User.hasOne(Cart, {foreignKey: 'cart_of'});
Cart.belongsTo(User, {foreignKey: 'cart_of'});
// Cart - CartItems
Cart.hasMany(CartItems, {foreignKey: 'cart_id'});
CartItems.belongsTo(Cart, {foreignKey: 'cart_id'});
// CartItems - Product
CartItems.hasMany(Product, {foreignKey: 'product_id'});
Product.belongsTo(CartItems, {foreignKey: 'product_id'});
// User - Order
User.hasMany(Order, {foreignKey: 'order_by'});
Order.belongsTo(User, {foreignKey: 'order_by'});
// Order - OrderItems
Order.hasMany(OrderItems, {foreignKey: 'order_id'});
OrderItems.belongsTo(Order, {foreignKey: 'order_id'});
// OrderItems - Product
OrderItems.hasMany(Product, {foreignKey: 'product_id'});
Product.belongsTo(OrderItems, {foreignKey: 'product_id'});
// Product - Voucher
Voucher.belongsToMany(Product, {through: Associations.VoucherProduct});
Product.belongsToMany(Voucher, {through: Associations.VoucherProduct});
// Link all of thems
sequelize.sync().then(() => initData());
// Seed sample data for project

// Start project
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/', indexRouter);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

export default app;
