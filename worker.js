console.log('started')
self.onmessage = function(event) {
    console.log('received')
    const acc = event.data;
    const es = new EventSource('https://horizon-testnet.stellar.org/accounts/' + acc + '/payments?cursor=now');
    
    es.onmessage = function(message) {
      const resp = message.data ? JSON.parse(message.data) : message;
      postMessage(resp);
    };
    
    es.onerror = function(error) {
        if (es.readyState === EventSource.CLOSED) {
            return;
        }
        console.log("An error occurred!");
    };
};
  