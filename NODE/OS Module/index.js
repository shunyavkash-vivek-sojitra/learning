#!/usr/bin/env node
import os from "os";
import chalk from "chalk";
import figlet from "figlet";

const displayTitle = () => {
  return new Promise((resolve, reject) => {
    figlet("OS Info", (err, data) => {
      if (err) {
        reject("Something went wrong with figlet...");
      } else {
        resolve(data);
      }
    });
  });
};

(async () => {
  console.log(chalk.green(await displayTitle()));

  console.log(chalk.yellow("===== Operating System Details ====="));
  console.log(chalk.cyan(`OS Type: ${os.type()}`));
  console.log(chalk.cyan(`OS Platform: ${os.platform()}`));
  console.log(chalk.cyan(`OS Release: ${os.release()}`));
  console.log(
    chalk.cyan(`OS Version: ${os.version ? os.version() : "Not Available"}`)
  );

  console.log(chalk.yellow("\n===== CPU Details ====="));
  console.log(chalk.cyan(`CPU Architecture: ${os.arch()}`));
  console.log(chalk.cyan(`CPU Cores: ${os.cpus().length}`));
  console.log(chalk.cyan("CPU Model: " + os.cpus()[0].model));

  console.log(chalk.yellow("\n===== Memory Details ====="));
  console.log(
    chalk.cyan(
      `Total Memory: ${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
    )
  );
  console.log(
    chalk.cyan(
      `Free Memory: ${(os.freemem() / (1024 * 1024 * 1024)).toFixed(2)} GB`
    )
  );

  console.log(chalk.yellow("\n===== System Uptime ====="));
  console.log(
    chalk.cyan(`System Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`)
  );

  console.log(chalk.yellow("\n===== User & Network Info ====="));
  console.log(chalk.cyan(`Logged-in User: ${os.userInfo().username}`));
  console.log(chalk.cyan(`Home Directory: ${os.homedir()}`));
  console.log(chalk.cyan(`Hostname: ${os.hostname()}`));
  console.log(chalk.cyan(`Default Temp Directory: ${os.tmpdir()}`));

  console.log(chalk.yellow("\n===== Network Interfaces ====="));
  const networkInterfaces = os.networkInterfaces();
  Object.keys(networkInterfaces).forEach((interfaceName) => {
    networkInterfaces[interfaceName].forEach((details) => {
      if (details.family === "IPv4") {
        console.log(chalk.cyan(`${interfaceName}: ${details.address}`));
      }
    });
  });

  console.log(chalk.yellow("\n===== Load Averages (UNIX-based OS) ====="));
  console.log(
    chalk.cyan(
      `1-min: ${os.loadavg()[0].toFixed(2)}, 5-min: ${os
        .loadavg()[1]
        .toFixed(2)}, 15-min: ${os.loadavg()[2].toFixed(2)}`
    )
  );

  console.log(chalk.green("\n✅ OS information displayed successfully!"));
})();
