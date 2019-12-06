const user = require('./user/user.service.js');
const job = require('./job/job.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(job);
};
