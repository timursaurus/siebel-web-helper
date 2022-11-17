import * as vscode from 'vscode'
import path from 'node:path'
import fs from 'node:fs'

export async function activate(context: vscode.ExtensionContext) {

  // .  /// <reference path="/Users/timur/dev/siebel-web-helper/src/types/siebelapp.d.ts" />
  // FIXME: This is a hack to get the path to the .d.ts file. It should be
  // configurable.
  const dtsPath = path.join(__dirname, '..', 'src', 'types', 'siebelapp.d.ts')

  const dtsUri = vscode.Uri.file(dtsPath)

  vscode.Uri.file(dtsPath)

  console.log('dtsUri', dtsUri)
  const siebelAppTypes = vscode.window.showInformationMessage(path.join(__dirname, '..', 'src', 'types', 'siebelapp.d.ts'))

  const tsRef = `\n/// <reference path="${dtsUri.path}" />`
  // get vscode's installation path


  // vscode.workspace.fs.writeFile()

  const appRoot = vscode.window.showInformationMessage(vscode.env.appRoot)

  const tslibPath = path.join(vscode.env.appRoot, 'extensions', 'node_modules', 'typescript', 'lib', 'lib.es5.d.ts')

  vscode.workspace.fs.isWritableFileSystem

  fs.appendFile(tslibPath, tsRef, (err) => {
    if (err) {
      console.log('Error', err)
    }
  })

  console.log(
    appRoot
  )
}

export function deactivate() {}
