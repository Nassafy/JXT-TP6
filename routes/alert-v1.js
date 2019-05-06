const express = require("express");
const router = express.Router();

const alerts = require("../model/alert");

router.post("/", (req, res, next) => {
  alerts.add(req.body, err => {
    if (err) {
      res.status(405).json({ message: "Invalid input" });
    } else {
      res.status(200).json({ message: "sucefull operation", alert: req.body });
    }
  });
});


router.get("/search", (req, res, next) => {
  console.log(`body: ${req.body}`)
  alerts.search(req.body, (err, alerts) => {
    if (err) {
      res.status(404).json({ message: "invalid tag value" });
    } else {
      res.status(200).json(alerts);
    }
  });
});

router.get("/:id", (req, res, next) => {
  alerts.get(req.params.id, (err, alerts) => {
    if (err) {
      res.status(404).json({ message: "Alert not found", error: err });
    } else {
      res.status(200).json(alerts[0]);
    }
  });
});

router.patch("/:id", (req, res, next) => {
  alert.update(req.params.id, req.body, (err, raw) => {
    if (err) {
      res.status(404).json({ message: "invalid input" });
    } else {
      res.status(200).json(raw);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  alert.remove(req.params.id, err => {
    if (err) {
      res.status(404).json({ message: "invalid id" });
    } else {
      res.status(200).json({ message: "delete sucessfull"});
    }
  });
});

exports.router = router;
