process.stdin.on('data', (data) => {
  const reverseData = [...data.toString()].reverse().join('');
  process.stdout.write(reverseData + '\n\n');
});
