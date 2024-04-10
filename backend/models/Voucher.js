import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Voucher extends Model { }

Voucher.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    percent: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    in_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Vouchers',
});

export default Voucher;