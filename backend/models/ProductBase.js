import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Product extends Model { }

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    discountedPrice: {
        type: DataTypes.DOUBLE,
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hasVouchers: {
        type: DataTypes.INTEGER,
    },
    hasImages: {
        type: DataTypes.INTEGER,
    },
    breadcumb: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    thumbnail_img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_book_mark: {
        type: DataTypes.INTEGER,
    },
    is_sold: {
        type: DataTypes.INTEGER,
    },
    in_stock: {
        type: DataTypes.INTEGER,
    },
    storesInStock: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    created_by: {
        type: DataTypes.INTEGER
    },
    updated_at: {
        type: DataTypes.DATE
    },
    updated_by: {
        type: DataTypes.INTEGER
    },
    deleted_at: {
        type: DataTypes.DATE
    },
    deleted_by: {
        type: DataTypes.INTEGER
    },
    is_deleted: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'Products',
    timestamps: false
});

export default Product;