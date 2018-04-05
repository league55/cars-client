import CurrentUrlUtils from "../util/CurrentUrlUtils";

export class CalibrationApi {
 static submitAnchorsGrid(anchorsPosition) {
       return fetch(CurrentUrlUtils.getHost() + "/calibration",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(anchorsPosition)
            })
            .then(result => result.json())
            .catch(e => e.status);
    }


 static resetAnchorsGrid() {
       return fetch(CurrentUrlUtils.getHost() + "/calibration",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "delete"
            })
            .then(result => result.status)
            .catch(e => e.status);
    }
}