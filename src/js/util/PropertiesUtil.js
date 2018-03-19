
export function getPropValue(streamProps, name) {
    const index = streamProps.findIndex(prop => prop.key === name);

    return index > -1 ? streamProps[index].value : "";
}