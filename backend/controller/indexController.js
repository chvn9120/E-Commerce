const GetIndex = async (req, res, next) => {
    res.render('index', { title: 'Express' });
};

const indexController = {
    GetIndex
};

export default indexController;