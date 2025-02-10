import express from 'express'
import { isAdmin, isAuthenticated } from '../Middleware/AuthUser.js';
import { createBlog, deleteBlog, getAllBlogs, getComment, getMyBlogs, getSingleBlog, giveComment, updateBlog } from '../controller/blog.controller.js';

const router = express.Router();

router.post("/create", isAuthenticated, isAdmin("admin"), createBlog)
router.delete("/delete/:id",isAuthenticated,isAdmin("admin"), deleteBlog);
router.get('/all-blogs',isAuthenticated, getAllBlogs)
router.get('/single-blog/:id', isAuthenticated, getSingleBlog)
router.get('/my-blog', isAuthenticated, isAdmin("admin"), getMyBlogs);
router.put('/update/:id',isAuthenticated, isAdmin("admin"), updateBlog);
router.post('/addComment', giveComment)
router.get('/getComment/:id', getComment)   

export default router;