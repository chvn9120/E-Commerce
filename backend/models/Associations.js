import sequelize from "../database/db.js";
import { DataTypes } from "sequelize";

import Product from "./Product.js";
import Store from "./Store.js";
import Voucher from "./Voucher.js";
import Role from "./Role.js";
import Permission from "./Permission.js";

const StoreProduct = sequelize.define('StoreProduct ', {
    StoreId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    ProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: Store,
            key: 'id'
        }
    }
});

const VoucherProduct = sequelize.define('VoucherProduct', {
    VoucherId: {
        type: DataTypes.INTEGER,
        references: {
            model: Voucher,
            key: 'id'
        }
    },
    ProductId: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    }
});

const RolePermission = sequelize.define('RolePermission', {
    RoleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    Permission: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission,
            key: 'id'
        }
    }
});

export const Associations = {
    StoreProduct,
    VoucherProduct, 
    RolePermission
};