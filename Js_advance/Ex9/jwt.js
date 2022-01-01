import jwt from "jsonwebtoken";
const secret = "dsadsadassdsadsa";

export const createToken = function (payload) {
  return new Promise((resolve, reject) => {
    const { password, ...payloadWithoutPassword } = payload;
    jwt.sign(
      payloadWithoutPassword,
      secret,
      { expiresIn: "1m" },
      (err, token) => {
        if (err) {
          return void reject(err);
        }
        resolve(token);
      }
    );
  });
};

export const verify = function (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return void reject(err);
      }
      resolve(decoded);
    });
  });
};
