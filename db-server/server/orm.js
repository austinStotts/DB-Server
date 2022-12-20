const constring = "postgres://ebddjabf:u2RaNK1qawGzXy-xatygoQAI94cdkD2q@fanny.db.elephantsql.com/ebddjabf";
const { Sequelize, DataTypes  } = require('sequelize');
const sequelize = new Sequelize(constring);

const User = sequelize.define("user", {
  userID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  settingsJSON: {
    type: DataTypes.JSON,
    allowNull: false
  },
  displayName: {
    type: DataTypes.STRING,
    allowNull: false
  }
})