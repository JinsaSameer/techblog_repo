const router = require('express').Router();
const { Dashboard } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newDashboard = await Dashboard.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDashboard);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dashboardData = await Dashboard.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!dashboardData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(dashboardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
