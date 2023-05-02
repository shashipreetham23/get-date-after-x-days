var addDays = require("date-fns/addDays");
let getDate = (days) => {
  let newDate = addDays(new Date(2020, 7, 22), days);

  console.log(
    `${newDate.getdate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
};
module.exports = getDate;
