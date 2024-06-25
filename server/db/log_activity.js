import { set } from "../util/color_terminal.js";

export default function logActivity(connection) {
  connection
    .on("open", () => {
      return process.stdout.write(set(set("DATABASE STATE: Connection Open").black).bgGreen + "\n");
    })
    .on("close", () => {
      return process.stdout.write(set(set("DATABASE STATE: Connection Closed").black).bgBlue + "\n");
    })
    .on("error", (error) => {
      return process.stdout.write(set(set(`DATABASE STATE: ${error}`).red + "\n"));
    });
}
