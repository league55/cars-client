/* eslint-disable no-undef */
var Stomp = require('stompjs');



export class StreamUtils {

    subscribe(path, successCallback) {
        this.stompClient = Stomp.client("wss://cars-server.herokuapp.com/gs-guide-websocket");
        this.stompClient.debug = null;
        this.stompClient.connect({}, () => successCallback(this.stompClient));
    }


    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    static sendName(client) {
        client.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
    }
}