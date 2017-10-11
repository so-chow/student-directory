const db = require('../models');

function getStudents(req, res) {
  db.Student.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

module.exports = {
  getStudent: getStudent;
}
