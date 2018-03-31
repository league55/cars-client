export class GridCalibration {
    static updateGrid(request) {
        return fetch("/grid",
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