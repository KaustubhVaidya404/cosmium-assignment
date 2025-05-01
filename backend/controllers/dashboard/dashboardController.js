const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const logger = require('../../utils/logger');

async function getProductsData(limit = 10, skip = 0) {
  const result = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }
  const data = await result.json();
  return data;
}

async function getUsersData(limit = 10, skip = 0) {
  const result = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }
  const data = await result.json();
  return data;
}

async function getPostsData(limit = 10, skip = 0) {
  const result = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
  if (!result.ok) {
    throw new Error(`HTTP error! Status: ${result.status}`);
  }
  const data = await result.json();
  return data;
}

async function dashboardController(req, res) {
  const { authorization } = req.headers;

  const productsPage = parseInt(req.query.productsPage, 10) || 1;
  const usersPage = parseInt(req.query.usersPage, 10) || 1;
  const postsPage = parseInt(req.query.postsPage, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  const productsSkip = (productsPage - 1) * limit;
  const usersSkip = (usersPage - 1) * limit;
  const postsSkip = (postsPage - 1) * limit;

  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }

    const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : authorization;
    const decoded = jwt.decode(token);

    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userEmail = user.email;

    const [products, users, posts] = await Promise.all([
      getProductsData(limit, productsSkip),
      getUsersData(limit, usersSkip),
      getPostsData(limit, postsSkip),
    ]);

    const pagination = {
      products: {
        currentPage: productsPage,
        totalItems: products.total || 0,
        totalPages: Math.ceil((products.total || 0) / limit),
        limit,
      },
      users: {
        currentPage: usersPage,
        totalItems: users.total || 0,
        totalPages: Math.ceil((users.total || 0) / limit),
        limit,
      },
      posts: {
        currentPage: postsPage,
        totalItems: posts.total || 0,
        totalPages: Math.ceil((posts.total || 0) / limit),
        limit,
      },
    };

    return res.status(200).json({
      user: userEmail,
      pagination,
      products: products.products || [],
      users: users.users || [],
      posts: posts.posts || [],
    });
  } catch (error) {
    logger.error(`Dashboard error: ${error.message}`);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = dashboardController;
