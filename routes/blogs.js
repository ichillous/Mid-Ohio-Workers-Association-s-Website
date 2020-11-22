const { Router } = require('express')
const controllers = require('../controllers/blogs')

const router = Router()

router.get('/blogs', controllers.getBlogs)
router.get('/blogs/:id', controllers.getBlogs)

module.exports = router