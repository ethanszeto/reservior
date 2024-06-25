import { set } from "./color_terminal.js";

const serverLog = (req, res, next) => {
  console.log(`${set(set(req.method).white).bgGreen} ${set(`${req.baseUrl}${req.path}`).green}`);
  console.log(set(set("Received: ").white).bgMagenta, req.body);
  const json = res.json;
  res.json = (data) => {
    console.log(set(set("Sent: ").white).bgBlue, data);
    return json.call(this, data);
  };
  next();
};

export default serverLog;
