module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable('blogs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    public_id: { type: DataTypes.UUID, unique: true, allowNull: false },
    user_id: {
      type: DataTypes.STRING, unique: false, allowNull: false, index: true,
    },
    title: {
      type: DataTypes.STRING, unique: false, allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, unique: false, allowNull: false, index: true,
    },
    picture: {
      type: DataTypes.STRING, unique: false, allowNull: true, default: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_1280.jpg',
    },
    created_by: { type: DataTypes.UUID },
    updated_by: { type: DataTypes.UUID },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('blogs'),
};
