import CurrentUrlUtils from "../util/CurrentUrlUtils";

export class StatusApi {
    static getStatus() {
        return fetch(CurrentUrlUtils.getHost() + "/status",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "get"
            })
            .then((response) => response.text());
    }
}