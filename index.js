require("dotenv").config();

const args = process.argv;
const nameIndexForArgs = args.indexOf("--name");
const name = nameIndexForArgs >=0 
  ? args[nameIndexForArgs+1] 
  : process.env.NAME || "unknown user";

console.log(`Hello ${name}!`);