function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic"><link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"><link rel="stylesheet" href="/angular-material.min.css"><link rel="stylesheet" href="/font-awesome.css"><link rel="stylesheet" , href="/animate.css">');
  };
}
(module.exports = require("marko").c(__filename)).c(create);