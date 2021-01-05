const router = require("express").Router();
const Plants = require("./plantsModel");

router.get("/:id", (req, res) => {
  Plants.findById(req.params.id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.get("/", (req, res) => {
  Plants.find()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/user/:id", (req, res) => {
  const newPlant = { ...req.body, user_id: req.params.id };
  Plants.insert(newPlant)
    .then((plants) => {
      res.status(201).json(plants);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  Plants.update(req.params.id, req.body)
    .then((plants) => {
      res.status(201).json(plants);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.delete("/:id", (req, res) => {
  Plants.remove(req.params.id)
    .then(() => {
      Plants.findByUserId(req.user.id)
        .then((plants) => {
          res.status(201).json(plants);
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
