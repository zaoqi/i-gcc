#!/usr/bin/env node
require("child_process").spawnSync("bash",[__dirname+"/igcc"].concat(process.argv.slice(2)),{stdio:[process.stdin,process.stdout,process.stderr]});
