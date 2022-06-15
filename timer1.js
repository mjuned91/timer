let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  if (typeof Number(args[i]) && Number(args[i]) > 0) {
    setTimeout(() => {
      process.stdout.write(`.`);
      console.log(` after ${args[i]} seconds`);
    }, (args[i]*1000));
  }
};