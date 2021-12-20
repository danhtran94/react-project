import Processor from "windicss";
import windiConfigSource from "../../windi.config.js";

const windi = new Processor(windiConfigSource);
const windiConfig = windi.allConfig;

console.log(JSON.stringify(windiConfig));
