const userdb = require("../models/user");
const { z } = require("zod");
const { secret } = require("../config");
const jwt = require('jsonwebtoken')

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

async function login(req, res) {
  const email = req.body.email;
  const pass = req.body.password;

  const user = await userdb.find({ email, pass });

  try {
    if (user) {
      const token = jwt.sign(
        {
          email,
        },
        secret
      );
      res.json({ token });
    }
  } catch (error) {
    console.log(error);
  }
}


async function signup(req, res) {
  try {
    const { name, password, email } = userSchema.parse(req.body);

    await userdb.create({
      name: name,
      password: password,
      email: email,
    });
    res.json({
      msg: "User created succesfully",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { login, signup };
