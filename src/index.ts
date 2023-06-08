import * as vscode from "vscode";
import {
  allRefs,
  appRoot,
  askToReloadWindow,
  reloadWindow,
} from "./utils";
import { injectRefs, removeRefs } from "./write";

export async function activate(context: vscode.ExtensionContext) {

  vscode.commands.registerCommand('siebel-web-helper.inject-all', () => {
    injectRefs(allRefs).then(() => askToReloadWindow())
  })

  vscode.commands.registerCommand('siebel-web-helper.remove-all', () => {
    removeRefs().then(() => askToReloadWindow())
  })

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


}

export function deactivate() {
  // if (hasRefs()) {
  //   removeRefs().then(() => vscode.window.showInformationMessage('Siebel Open UI Types have been removed.'))
  // }
}
