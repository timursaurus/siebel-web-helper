import * as vscode from "vscode";
import path from "node:path";
import {
  appRoot,
  reloadWindow,
} from "./utils";
import { prependRefs, removeRefs } from "./write";

export async function activate(context: vscode.ExtensionContext) {
  // .  /// <reference path="/Users/timur/dev/siebel-web-helper/src/types/siebelapp.d.ts" />
  // FIXME: This is a hack to get the path to the .d.ts file. It should be
  // configurable.

  prependRefs()
  // removeRefs()
  // insertInjectionKeys()

  if (!appRoot) {
    vscode.window
      .showErrorMessage(
        "No VS Code root folder to inject types has been found.",
        "Dismiss",
        "Reload",
        "Try Again"
      )
      .then((selection) => {
        if (selection === "Try Again") {
          activate(context);
        }
        if (selection === "Reload") {
          reloadWindow();
        }
        if (selection === "Dismiss") {
          return;
        }
      });
  }

  // console.log("hasTypeInjection", hasTypeInjection());

  const dtsPath = path.join(__dirname, "..", "src", "types", "siebelapp.d.ts");

  const dtsUri = vscode.Uri.file(dtsPath);

  // vscode.Uri.file(dtsPath);

  console.log("dtsUri", dtsUri);
  const siebelAppTypes = vscode.window.showInformationMessage(
    path.join(__dirname, "..", "src", "types", "siebelapp.d.ts")
  );

  // get vscode's installation path

  // vscode.workspace.fs.writeFile()

  // const appRoot = vscode.window.showInformationMessage(vscode.env.appRoot)

  // fs.appendFile(tslibPath, tsRef, (err) => {
  //   if (err) {
  //     console.log('Error', err)
  //   }
  // })

  console.log(appRoot);
}

export function deactivate() {
  //
}
