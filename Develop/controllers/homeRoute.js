const router = require('express').Router();
const { Post } = require('../../models');
const { Post,User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const userPost = await Post.findAll({
      include
    });

    const users = userData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
