const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//
const bcrypt = require('bcrypt');

//checking to see if the provided password matches the stored password
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}

User.init(
  {
    //model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6], //length of the string has to be 6 characters
      },
    },
  },
  {
    //using hooks property defined for before create and before update
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 8); //8 is salt rounds!! the mroe salt rounds the more secure
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 8);
        return updatedUserData;
      },
    },
    //model options
    sequelize,
    timestamps: false, // doesnt automatically add created at since we already have a section for it
    freezeTableName: true,
    underscored: true, // taken from sequelize doucmentation "Sequelize provides the underscored option for a model. When true, this option will set the field option on all attributes to the snake_case version of its name."
    modelName: 'user',
  }
);

module.exports = User;