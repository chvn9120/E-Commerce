import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Order extends Model { }

Order.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    ship_fee: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
    modelName: 'Orders',
    timestamps: false
});

export default Order;