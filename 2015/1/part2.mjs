import { loadInput } from "../../utils.mjs";

const inputString = await loadInput();

let level = 0;

for (const [Idx, value] of [...inputString].entries()) {

    value === "(" ? ++level : --level;

    if (level === -1) {
        console.log(`The instuction index at level -1 is ${Idx + 1}`);
        break;
    }

}