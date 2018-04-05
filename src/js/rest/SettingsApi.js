import CurrentUrlUtils from "../util/CurrentUrlUtils";

export class SettingsApi {

 static submitProps(prop) {
        return fetch(CurrentUrlUtils.getHost() + "/settings",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "post",
                body: JSON.stringify(prop)
            })
            .then(() => prop)
            .catch(() => prop);
    }

 static loadProperties() {
        return fetch(CurrentUrlUtils.getHost() + "/settings",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "get"
            })
            .then((response) => response.json());
    }
}