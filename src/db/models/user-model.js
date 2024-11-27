import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize(
  `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const UserModels = sequelize.define(
  "userlist",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: ["user", "admin"],
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    freezeTableName: true,
  }
);

UserModels.beforeCreate((user, options) => {
  if (user.email === "admin@admin.com") {
    // admin 계정 추후 변경 예정
    user.role = "admin";
  } else {
    user.role = "user";
  }
});

export default UserModels;
