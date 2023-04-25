import fs from "fs";

export const loadInput = async () => {
    try {
        const data = fs.readFileSync('input.txt', 'utf8');
        return data;
    } catch (err) {
        console.error(err);
    }
}