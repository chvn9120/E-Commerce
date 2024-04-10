import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Store extends Model { }

Store.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    in_stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Stores',
});

export default Store;