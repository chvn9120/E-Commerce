import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Cart extends Model { }

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cart_of: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
}, {
    sequelize,
    modelName: 'Carts',
    timestamps: false
});

export default Cart;