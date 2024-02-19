let myWorker;
const acc = 'GCUD5FVZABMCGS5M5JFT4BZIOBKZC2NN7AEH35OKYFKOW4LY27MXIDT4';

function startWorker() {
    myWorker = new Worker('./worker.js');
    myWorker.postMessage(acc);
    myWorker.onmessage = function(event) {
        postMsg(event.data);
    };
};

function stopWorker() {
  if (myWorker) {
    myWorker.terminate();
    myWorker = undefined;
  };
};

function postMsg(msg) {
  console.log(msg);
  let target = document.getElementById('result');
  let newline = document.createElement('li');
  afrom = msg.from.slice(0,5)+'..'+msg.from.slice(-5);
  atooo = msg.to.slice(0,5)+'..'+msg.to.slice(-5);
  newline.innerHTML = afrom +' sent '+ msg.amount +' to '+ atooo;
  target.appendChild(newline);
};

