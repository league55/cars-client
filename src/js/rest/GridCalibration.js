export class GridCalibration {
    static updateGrid(request) {
        return fetch("http://localhost:8080/grid",
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