/* eslint-disable no-undef */
var Stomp = require('stompjs');



export class StreamUtils {

    connect(path, successCallback) {
        this.stompClient = Stomp.client("ws://localhost:8080/gs-guide-websocket");
        this.stompClient.debug = null;
        this.stompClient.connect({}, () => successCallback(this.stompClient));
    }


    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }
}