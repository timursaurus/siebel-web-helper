import fs from "node:fs";
import * as vscode from 'vscode'
import {
  hasRefs,
  INJECTION_KEY_END,
  INJECTION_KEY_START,
  tslibPath,
} from "./utils";

export function removeRefs() {
  return new Promise((resolve, reject) => {
    if (hasRefs()) {
      const tslib = fs.readFileSync(tslibPath, "utf8");
      const start = tslib.indexOf("//" + INJECTION_KEY_START);
      const end = tslib.indexOf(INJECTION_KEY_END) + INJECTION_KEY_END.length;
      const updatedTslib = tslib.slice(0, start) + tslib.slice(end);
      fs.writeFile(tslibPath, updatedTslib, () => resolve(true));
    } else {
      vscode.window.showErrorMessage("No Siebel Open UI types have been injected.");
      reject()
    }
  })
}

export function injectRefs(tsRefs: string) {
  return new Promise((resolve, reject) => {
    if (!hasRefs()) {
      const tslib = fs.readFileSync(tslibPath, "utf8");
      const updatedTslib =
        `//${INJECTION_KEY_START}${tsRefs}\n//${INJECTION_KEY_END}\n` + tslib;
      fs.writeFile(tslibPath, updatedTslib, () => resolve(true));
    } else {
      vscode.window.showErrorMessage("Siebel Open UI types have already been injected.");
      reject()
    }
  });
}
