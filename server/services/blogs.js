const { v1: uuidv1 } = require('uuid');

const {
  blogs: BlogModel,
} = require('../database');
const Helper = require('../utils/helper');

const writeBlogs = async (payload) => {
  const { userId, ...newData } = payload;

  const data = {
    public_id: uuidv1(),
    created_by: uuidv1(),
    updated_by: uuidv1(),
    user_id: userId,
    ...newData,
  };

  const response = await BlogModel.create(data);

  if (response) {
    return { doc: { message: 'saved successfully' } };
  }

  return { doc: { message: 'check all details filled properly' } };
};

const getAllBlogs = async (payload) => {
  try {
    const { userId } = payload;

    const response = await BlogModel.findAll({
      attributes: [ 'public_id', 'title', 'description' ],
      where: { user_id: userId },
    });

    if (response) {
      const data = response.map((i) => {
        const { dataValues } = i;
        const doc = Helper.convertSnakeObjectToCamel(dataValues);

        return doc;
      });

      return { doc: data };
    }

    return { doc: {} };
  } catch (err) {
    return { doc: { message: 'not get data' } };
  }
};

const updateBlog = async (payload) => {
  const {
    userId, publicId, newData,
  } = payload;

  const response = await BlogModel.update(
    newData,
    { where: { user_id: userId, public_id: publicId } },
  );

  if (response) {
    return { response };
  }

  return { doc: { message: "product didn't updated" } };
};

const deleteBlog = async (payload) => {
  const { publicId, userId } = payload;

  const response = await BlogModel.destroy(
    {
      where: {
        public_id: publicId,
        user_id: userId,
      },
    },
  );

  if (response) {
    return { doc: { message: 'delete successfully' } };
  }

  return { doc: { message: "product did'nt deleted" } };
};

module.exports = {
  writeBlogs, getAllBlogs, updateBlog, deleteBlog,
};
