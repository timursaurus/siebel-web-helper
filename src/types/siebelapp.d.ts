/// <reference no-default-lib="true"/>

/*
Type definitions for Siebel Open UI by Timur Bolotov <https://github.com/timursaurus>

November, 2022.

*/

declare namespace SiebelApp {
  namespace S_App {
    function CanInvokeMethod();

    function ClearMainView();

    /**
     * The `GenerateSrvrReq` method creates a request string that Siebel Open UI sends to the Siebel Server according to the current context of the application. It returns a string that includes a description of the full request.
     * @param command is a string that identifies the name of the command that Siebel Open UI must request.
     */
    function GenerateSrvrReq(command: string);

    /**
     * The GetAccessibilityEnhanced method determines whether or not accessibility is enabled. It returns a string that includes one of the following values:
     * - `"true"`. Accessibility is enabled.
     * - `"false"`. Accessibility is not enabled.
     */
    function GetAccessibilityEnhanced(): Booleanish;

    /**
     * The `GetActiveBusObj` method returns the name of the business object that is currently active in the client.
     */
    function GetActiveBusObj(): BusObj;

    function GetActiveView(): View;

    /**
     * The `GetAppletControlInstance` method creates a control. It returns the name of the control that it creates.
     * @param name is a string that contains the name that Siebel Open UI assigns to the control.
     * @param uiType is a string that identifies the type of the control.
     * @param displayName is a string that contains the name of the control that Siebel Open UI displays in the client.
     * @param width is a string that contains a number that specifies the width of the control, in pixels.
     * @param height is a string that contains a number that specifies the height of the control, in pixels.
     */
    function GetAppletControlInstance(
      name: string,
      uiType: string,
      displayName: string,
      width: string,
      height: string
    );

    /**
     * The `GetAppTitle` method returns the title of the current Siebel application. It returns this title in a string.
     */
    function GetAppTitle(): string;

    function GetDirection();

    function GetName(): string;

    function GetPageURL(): string;

    function GetProfileAttr(attributeName: string): string | null;

    function GetService(name: string): Service;

    function GotoView(
      view: string,
      viewId?: string,
      strURL?: string,
      strTarget?: string
    ): void;

    function InvokeMethod(
      methodName: string,
      psObject: JSSPropertySet,
      ai: AjaxConfig
    ): void;

    function IsExtendedKeyBoard(): Booleanish;

    function NewPropertySet(): JSSPropertySet;

    class BusObj implements BusObj {}

    class BusComp implements BusComp {}

    class Applet implements Applet {}

    class View implements View {}
  }
}

declare const utils: UtilsMethods;

//FIXME: get all methods
interface UtilsMethods {
  Trim(text: string): string;
  Prompt(message: string): void;
}

//FIXME
declare function theApplication();

declare class JSSPropertySet<C = any, P = any> {
  readonly axObj: any;
  readonly childArray: JSSPropertySet<C>[] | C[];
  readonly childEnum: number;
  readonly propArrayLen: number;
  readonly type: string;
  readonly value: string;
  readonly propEnumArray: any[]; // string extends keyof P
  readonly propArray: P | P[];
}

type JSSPropertySet = JSSPropertySetMethods;

interface JSSPropertySetMethods {
  DecodeFromString(encodedValue: string): boolean;
  DecodeFromStringOld(encodedValue: string): boolean;
  EncodeAsString(): string;
  EncodeAsStringOld(): string;
  GetChild(index: number): JSSPropertySet;
  GetChildByType(type: string, isChildren?: boolean): JSSPropertySet | null;
  GetChildCount(): number;
  RemoveChild(index: number): boolean;
  GetFirstProperty(): string | null;
  GetNextProperty(): string | null;
  GetProperty(name: string): string;
  SetProperty(name: string, value?: string): boolean;
  RemoveProperty(name: string): void;
  GetPropertyCount(): number;
  GetType(): string;
  SetType(type: string): boolean;
  GetValue(): string;
  SetValue(value: string): boolean;
  Clone(): JSSPropertySet;
  IsEmpty(): boolean;
  Reset(): void;
  AddChild(child: JSSPropertySet): void;
}
