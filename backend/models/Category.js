import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/db.js';

class Category extends Model { }

Category.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'Categories',
});

export default Category;