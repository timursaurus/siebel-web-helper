import fs from "node:fs";
import {
  hasRefs,
  INJECTION_KEY_END,
  INJECTION_KEY_START,
  tslibPath,
  withBothRefs,
} from "./utils";

export function removeRefs() {
  if (hasRefs()) {
    const tslib = fs.readFileSync(tslibPath, "utf8");
    const start = tslib.indexOf("//" + INJECTION_KEY_START);
    const end = tslib.indexOf(INJECTION_KEY_END) + INJECTION_KEY_END.length;
    const updatedTslib = tslib.slice(0, start) + tslib.slice(end);
    fs.writeFileSync(tslibPath, updatedTslib, "utf8");
  }
}

export function prependRefs() {
  if (!hasRefs()) {
    const tslib = fs.readFileSync(tslibPath, "utf8");
    const updatedTslib =
      `//${INJECTION_KEY_START}${withBothRefs}\n//${INJECTION_KEY_END}\n` +
      tslib;
    fs.writeFileSync(tslibPath, updatedTslib);
  }
}
