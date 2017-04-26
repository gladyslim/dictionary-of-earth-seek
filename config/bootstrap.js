module.exports.bootstrap = function(cb) {
  setInterval(function () {
    TEST.increase();
  }, 500);
  cb();
};
