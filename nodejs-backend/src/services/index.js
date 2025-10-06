
const studentDetails = require("./studentDetails/studentDetails.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(studentDetails);
    // ~cb-add-configure-service-name~
};
