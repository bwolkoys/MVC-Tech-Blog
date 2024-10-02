const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // model attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_content: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blog',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    // model options
    sequelize,
    timestamps: false, // doesnt automatically add created at since we already have a section for it
    freezeTableName: true,
    underscored: true, // taken from sequelize doucmentation "Sequelize provides the underscored option for a model. When true, this option will set the field option on all attributes to the snake_case version of its name."
    modelName: 'comment',
  }
);
module.exports = Comment;