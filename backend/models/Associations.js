import sequelize from "../database/db.js";
import { DataTypes } from "sequelize";

import Product from "./ProductBase.js";
import Store from "./StoreBase.js";
import Voucher from "./Voucher.js";

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

export const Associations = {
    StoreProduct,
    VoucherProduct
};