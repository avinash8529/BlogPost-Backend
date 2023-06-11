const { Blog: BlogService } = require('../services');

const writeBlogs = async (req, res) => {
  try {
    const data = { userId: req.user.userId, ...req.body };
    const { doc } = await BlogService.writeBlogs(data);

    if (doc) {
      return res.send({
        message: 'post saved successfully',
      });
    }

    return res.send({ message: ' data missing plss check ' });
  } catch (err) {
    return res.serverError();
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const data = { userId: req.user.userId };
    const { doc } = await BlogService.getAllBlogs(data);

    if (doc) {
      return res.getRequest(doc);
    }

    return res.getRequest([]);
  } catch (err) {
    return res.serverError();
  }
};

const updateBlog = async (req, res) => {
  try {
    const { publicId } = req.params;
    const newData = { ...req.body };
    const data = { userId: req.user.userId, publicId, newData };

    const { ...doc } = await BlogService.updateBlog(data);

    if (doc) {
      return res.send({ message: 'blog updated successfully' });
    }

    return res.send({ message: "some data   missing didn't updated" });
  } catch (err) {
    return res.serverError();
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { publicId } = req.params;
    const data = { publicId, userId: req.user.userId };
    const { doc } = await BlogService.deleteBlog(data);

    if (doc) {
      return res.send({ message: 'deleted successfully' });
    }

    return res.send({ message: 'not deleted successfully' });
  } catch (error) {
    return res.serverError();
  }
};

module.exports = {
  writeBlogs, getAllBlogs, updateBlog, deleteBlog,
};
