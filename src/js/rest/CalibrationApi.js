export class CalibrationApi {
 static submitAnchorsGrid(anchorsPosition) {
       return fetch("/calibration",
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
       return fetch("/calibration",
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