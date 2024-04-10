import { Model, DataTypes } from 'sequelize';
import Order from './OrderBase.js';
import sequelize from '../database/db.js';

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
    modelName: 'Users',
    timestamps: false
});

export default User;