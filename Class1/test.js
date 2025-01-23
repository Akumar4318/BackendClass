// const { default: chalk } = require("chalk");
const   chalk  = require("chalk").default;

var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.yellow(data));
});


