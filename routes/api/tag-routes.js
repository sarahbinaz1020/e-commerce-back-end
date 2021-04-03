const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const newTag = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    const newTag = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product }],
    });
    res.status(200).json(newTag);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: "sports",
      product_tag: [1, 2, 3]
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
}},

router.put('/:id', async (req, res) => {
  try {
    // update a tag's name by its `id` value
    const newTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }});
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
}),

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
}));

module.exports = router;
