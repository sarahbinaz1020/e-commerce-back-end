const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categoryData);

  // be sure to include its associated Products



});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  const categoryData = await Category.findByPk(req.params.id).catch((err) => 
  res.json(err)
  );
  res.json(categoryData);

  // be sure to include its associated Products


});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    // 200 status code for request is successful
    res.status(200).json(categoryData);
}
    catch (err) {
      // 400 status code means server couldn't understand request
      res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(categoryData);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(categoryData);
});

module.exports = router;
