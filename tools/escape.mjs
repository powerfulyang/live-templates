// escape " , \ and newline characters in a string
export function escape(str) {
    return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n');
}