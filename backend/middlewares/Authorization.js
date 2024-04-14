import User from "./../models/User.js";
import Role from "./../models/Role.js";
import Permission from "../models/Permission.js";

const Authorization = async (req, res, next) => {
    const username = req.cookies.username;
    const currUser = await User.findOne({ where: { username } });
    // const userRole = await Role.findOne({ where: { id: currUser.role_id } });
    // const userPermissions = await Permission.findAll({ where: { route: userRole.title } });
    if (req.cookies.userAuthorized != username) {
        const role = await Role.findOne({
            where: { id: currUser.role_id },
            include: [{
                model: Permission,
                attributes: ['route']
            }]
        });
        const allowedRoutes = role.Permissions.map(permission => permission.route);
        const currPath = req.originalUrl;
        try {
            if (!(req.cookies.loggedIn && allowedRoutes.includes(currPath))) {
                const message = req.cookies.loggedIn
                    ? `Unauthorized! You don't have permission to access this route!`
                    : 'Unauthorized! Please login to access this route!';
                res.status(401).json(message);
                return;
            }
            res.cookie('userAuthorized', currUser.username);
        } catch (error) {
            // Redirect to error page
            console.log(error);
        }
    }
    next();
};

export default Authorization;
