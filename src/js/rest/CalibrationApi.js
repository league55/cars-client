export class CalibrationApi {
 static submitAnchorsGrid(anchorsPosition) {
        const flattened = Object.keys(anchorsPosition).map(key => anchorsPosition[key]);

        fetch("/calibration",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(flattened)
            })
            .then(result => result.json())
            .catch(e => e.status);
    }
}