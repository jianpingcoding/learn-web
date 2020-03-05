addEventListener('message', ({data}) => {
  if (data.action === 'countTo2Billion') {
    let count = 0;
    for (let i = 1; i < 200000000; i++) {
      count++;
    }
    postMessage({action: 'countTo2Billion', status: 'done'});
  }
});