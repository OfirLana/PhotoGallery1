var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log("users is working")
  console.log(req.parmas)
  res.send('This responde is working');
});
module.exports = router;











// /* GET users listing. */
// router.use('/:user_ofir', function (req, res, next) {
//   res.render('users', { user_name: req.params.user_ofir });
// });
/* GET users listing. */

// app.get("/image.png", (req, res) => {
//   res.sendFile(path.join(__dirname, "./uploads/image.png"));
// });