const config = require("config");
const jwt = require("jsonwebtoken");
const { generateAuthToken } = require("../../models/user-model");
const { UserBusiness } = require("../../models/user-business-model");
const { userBusinessSelect } = require("../../functions/select-function");

const authGuard = async (req, res, next) => {
  // getting x-auth-token for request header

  const token = req.header("x-auth-token");

  // if x-auth-token is not valid

  if (!token)
    return res.status(401).send("Access denied, please provide a valid token");

  try {
    // decoding token

    const decode = jwt.verify(token, config.get("jwtPrivateKey"));

    const currentDate = new Date();

    const expi = new Date(decode.expi);

    if (expi > currentDate) {
      const t = generateAuthToken(decode);
      const newDecode = jwt.verify(t, config.get("jwtPrivateKey"));
      res.set({
        "x-auth-token": JSON.stringify({ token: t, date: newDecode.expi }),
      });
    } else {
      return res
        .status(403)
        .send("login section has expired! kindly login again.");
    }

    // storing it in a request user variable to assist authorization

    req.user = decode;

    if (!req.user.admin && req.query.businessId) {
      const userBusiness = req.user.userBusiness.find(
        (u) => JSON.parse(u.businessId)._id === req.query.businessId
      );

      if (userBusiness) {
        req.userBusiness = userBusiness;
      } else {
        return res
          .status(401)
          .send("You're not authorize to access this business information");
      }
    } else {
      req.userBusiness = undefined;
    }

    // res.set({
    //   "x-auth-user": JSON.stringify(req.user),
    // });

    // if everything is successful passing to the next middleware function
    next();
  } catch (error) {
    // catching errors and sending response to the user

    console.log(error);

    return res.status(401).send("Could not validate token kindly login again.");
  }
};

const authSocketGuard = async (token, businessId) => {
  if (!token) return "Access denied, please provide a valid token";

  try {
    const decode = jwt.verify(token, config.get("jwtPrivateKey"));

    const currentDate = new Date();

    const expi = new Date(decode.expi);

    let result = {};

    if (expi > currentDate) {
      const t = generateAuthToken(decode);
      const newDecode = jwt.verify(t, config.get("jwtPrivateKey"));
      result["x-auth-token"] = JSON.stringify({
        token: t,
        date: newDecode.expi,
      });
    } else {
      return "login section has expired! kindly login again.";
    }

    // storing it in a request user variable to assist authorization

    result.user = decode;

    if (!result.user.admin && businessId) {
      const userBusiness = result.user.userBusiness.find(
        (u) => JSON.parse(u.businessId)._id === businessId
      );

      if (userBusiness) {
        result.userBusiness = userBusiness;
      } else {
        return "You're not authorize to access this business information";
      }
    } else {
      result.userBusiness = undefined;
    }

    result["x-auth-user"] = JSON.stringify(result.user);

    return result;
  } catch (error) {
    // catching errors and sending response to the user

    console.log(error);

    return "Could not validate token kindly login again.";
  }
};

module.exports = { authGuard, authSocketGuard };
