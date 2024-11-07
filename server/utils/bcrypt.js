import bcryptjs from "bcryptjs";

export const hashPassword = (password) => {
  return bcryptjs.hashSync(password, 10);
};

export const comparePassword = (password, hPassword) => {
  return bcryptjs.compareSync(password, hPassword);
};
