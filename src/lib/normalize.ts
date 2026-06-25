export function normalize(value: string = "") {
    return value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
}