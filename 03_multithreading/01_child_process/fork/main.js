const { fork } = require('child_process');

const sp1 = fork('child1.js');
const sp2 = fork('child2.js');

sp1.send({ msg: 'Hi From parent process 1' });
sp2.send({ msg: 'Hi From parent process 2' });
