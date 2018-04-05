import CurrentUrlUtils from "../util/CurrentUrlUtils";

export class GridCalibration {
    static updateGrid(request) {
        return fetch(CurrentUrlUtils.getHost() + "/grid",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "post",
                body: JSON.stringify(request)
            })
            .then(result => result.json())
            .catch(e => e.status);
    }
}