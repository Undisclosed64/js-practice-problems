const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
  const user = {
    username: username,
    password: password,
  };

  //define schema
  const schema = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
  });

  //parse schema
  const response = schema.safeParse(user);

  //check
  if (!response.success) {
    return null;
  } else {
    const token = jwt.sign(username, jwtPassword);
    return token;
  }
}
// console.log(signJwt("abc@gmail.com", "1234567"));
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here
  return new Promise(function (resolve) {
    jwt.verify(token, jwtPassword, function (err) {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
// verifyJwt("hhhhh").then((res) => {
//   console.log(res);
// });

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  const decode = jwt.decode(token);
  if (decode === null) {
    return false;
  } else {
    return decode;
  }
}
decodeJwt(
  "eyJhbGci1NiJ9.YWJjQGdtYWlsLmNvbQ.upY4MtniAA98YNSuR74lps8KOBb8nIBj3_3YrtmrKn0"
);

// module.exports = {
//   signJwt,
//   verifyJwt,
//   decodeJwt,
//   jwtPassword,
// };
