import path from "node:path";
import * as vscode from "vscode";
import fs from "node:fs";

export const appRoot =
  vscode.window.showInformationMessage(vscode.env.appRoot) || "";

export const tslibPath = path.join(
  vscode.env.appRoot,
  "extensions",
  "node_modules",
  "typescript",
  "lib",
  "lib.es5.d.ts"
);

export const INJECTION_KEY_START = "@siebel-web-helper-injection-start";
export const INJECTION_KEY_END = "@siebel-web-helper-injection-end";

export function hasRefs() {
  const tslib = fs.readFileSync(tslibPath, "utf8");
  return (
    tslib.includes(INJECTION_KEY_START) && tslib.includes(INJECTION_KEY_END)
  );
}

export function getLocalDtsPath(name: string, ext = ".d.ts"): string {
  return path.join(__dirname, "..", "src", "types", name + ext);
}

export function getLocalDtsUri(name: string, ext = ".d.ts"): vscode.Uri {
  return vscode.Uri.file(getLocalDtsPath(name, ext));
}

export function toReferencePath(uri: vscode.Uri): string {
  return `\n/// <reference path="${uri.path}" />`;
}

export const jqueryRef = toReferencePath(getLocalDtsUri("jquery"));
export const siebelRef = toReferencePath(getLocalDtsUri("siebelapp"));
export const withBothRefs = jqueryRef + siebelRef;


export function reloadWindow() {
  return new Promise((resolve) =>
    vscode.commands
      .executeCommand("workbench.action.reloadWindow")
      .then(resolve)
  );
}
