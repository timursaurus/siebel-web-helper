import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('hello')
}

export function deactivate() {}