import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Permission extends Model { }

Permission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    route: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
    },
    can_create: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    can_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    can_update: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    can_delete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    description: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE
    },
    is_active: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'Permissions',
    timestamps: false
});

export default Permission;