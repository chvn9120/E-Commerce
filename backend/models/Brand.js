import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Brand extends Model { }

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: 'Brands',
    timestamps: false
});

export default Brand;