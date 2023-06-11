const {
  writeBlogs, getAllBlogs, updateBlog, deleteBlog,
} = require('../controllers/blogs');
const { verifyJWT } = require('../controllers/auth');

module.exports = (router) => {
  router.post('/writeblog', verifyJWT, writeBlogs);
  router.get('/get', verifyJWT, getAllBlogs);
  router.patch('/blog/:publicId/update', verifyJWT, updateBlog);
  router.delete('/blog/:publicId/delete', verifyJWT, deleteBlog);
};
