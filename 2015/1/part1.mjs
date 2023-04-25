import { loadInput } from "../../utils.mjs";

const inputString = await loadInput();

const initialValue = 0;

const finalValue = [...inputString].reduce((accumulator, current) => {

  return current === "(" ? ++accumulator : --accumulator;

}, initialValue)

console.log(`The ending level is ${finalValue}`);