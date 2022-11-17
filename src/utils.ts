import path from "node:path";
import * as vscode from "vscode";

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

export function getLocalDtsPath(name: string, ext = ".d.ts"): string {
  return path.join(__dirname, "..", "src", "types", name + ext);
}

export function toReferencePath(uri: vscode.Uri): string {
  return `\n/// <reference path="${uri.path}" />`;
}

export function reloadWindow() {
  return new Promise((resolve) =>
    vscode.commands
      .executeCommand("workbench.action.reloadWindow")
      .then(resolve)
  );
}
