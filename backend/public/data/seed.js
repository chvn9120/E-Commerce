import Store from "../../models/StoreBase.js";
import User from "../../models/UserBase.js";
import Product from "../../models/ProductBase.js";
import Brand from "../../models/Brand.js";
import Category from "../../models/Category.js";

const datas = {
    users: [
        {
            fullname: 'Florence Soto',
            address: '45 Bicah Place',
            phoneNo: '(303) 873-5111'
        },
        {
            fullname: 'Frances Coleman',
            address: '1005 Jomo Circle',
            phoneNo: '(488) 939-5206'
        }, {
            fullname: 'Jose Pittman',
            address: '451 Ibvew Center',
            phoneNo: '(830) 393-7104'
        }, {
            fullname: 'Julia Pena',
            address: '1891 Kirtu Avenue',
            phoneNo: '(421) 216-8215'
        }, {
            fullname: 'Aiden Burton',
            address: '819 Zikaw Loop',
            phoneNo: '(516) 773-2194'
        }
    ],
    stores: [
        {
            address: '1577 Apnat Loop',
            in_stock: 4189
        },
        {
            address: '1447 Ketne Pass',
            in_stock: 1040
        },
        {
            address: '1208 Elsod Plaza',
            in_stock: 3978
        },
    ],
    brands: [
        {
            name: 'Converse',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Nike',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Puma',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Adidas',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Vans',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ],
    categories: [
        {
            name: 'Cate 1',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Cate 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Cate 3',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Cate 4',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: 'Cate 5',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ],
    products: [
        {
            name: 'Product 1',
            price: 1_000_000,
            color: 'rgb(18,25,49)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            thumbnail_img: 'http://sis.gt/im'
        },
        {
            name: 'Product 2',
            price: 2_000_000,
            color: 'rgb(89,91,100)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            thumbnail_img: 'http://fapbeh.aq/seb'
        },
        {
            name: 'Product 3',
            price: 3_000_000,
            color: 'rgb(105,44,2)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            thumbnail_img: 'http://ve.mw/vigset'
        },
        {
            name: 'Product 4',
            price: 4_000_000,
            color: 'rgb(234,132,28)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            thumbnail_img: 'http://nor.ge/guj'
        },
        {
            name: 'Product 5',
            price: 5_000_000,
            color: 'rgb(57,236,200)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            thumbnail_img: 'http://mo.sk/hivluwwar'
        },
    ]
};

const initData = async () => {
    await User.findAndCountAll()
        .then(result => {
            if (!(result.count === 0 && result.rows.length === 0)) return;
            const { users } = datas;
            users.map(
                async (user) => await User.create({
                    username: user.fullname.toLowerCase().replace(" ", "_"),
                    fullname: user.fullname,
                    address: user.address,
                    phoneNo: user.phoneNo
                }));
        });
    await Store.findAndCountAll()
        .then(result => {
            if (!(result.count === 0 && result.rows.length === 0)) return;
            const { stores } = datas;
            stores.map(
                async (store) => await Store.create({
                    address: store.address,
                    in_stock: store.in_stock,
                }));
        });
    await Brand.findAndCountAll()
        .then(result => {
            if (!(result.count === 0 && result.rows.length === 0)) return;
            const { brands } = datas;
            brands.map(
                async (brand) => await Brand.create({
                    name: brand.name,
                    description: brand.description,
                }));
        });
    await Category.findAndCountAll()
        .then(result => {
            if (!(result.count === 0 && result.rows.length === 0)) return;
            const { categories } = datas;
            categories.map(
                async (category) => await Category.create({
                    name: category.name,
                    description: category.description,
                }));
        });
    await Product.findAndCountAll()
        .then(async result => {
            if (!(result.count === 0 && result.rows.length === 0)) return;
            const { products } = datas;
            const allBrands = await Brand.findAll();
            const allCategories = await Category.findAll();
            const allStore = await Store.findAll();
            const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
            products.map(async product => await Product.create({
                name: product.name,
                price: product.price,
                brand_id: allBrands[Math.floor(Math.random() * allBrands.length)].id,
                category_id: allCategories[Math.floor(Math.random() * allCategories.length)].id,
                size: sizes[Math.floor(Math.random() * sizes.length)],
                color: product.color,
                description: product.description,
                thumbnail_img: product.thumbnail_img,
                storesInStock: allStore[Math.floor(Math.random() * allStore.length)].id
            }));
        });
};

export default initData;