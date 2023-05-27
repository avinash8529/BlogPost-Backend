module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define(
    'blogs',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
      title: {
        type: DataTypes.STRING, unique: false, allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING, unique: false, allowNull: false, index: true,
      },
      description: {
        type: DataTypes.STRING, unique: false, allowNull: false,
      },
      picture: {
        type: DataTypes.STRING, unique: false, allowNull: true, default: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
      },
      created_by: { type: DataTypes.UUID },
      updated_by: { type: DataTypes.UUID },
    },
    {
      freezeTableName: true,
      underscored: true,
      timestamps: true,
    },

  );

  return blogs;
};
