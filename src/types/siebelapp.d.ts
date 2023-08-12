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

    const Utils: UtilsMethods;
  }
  namespace Constants {
    function get(name: string): any | null;
    function set(name: string, value: string): boolean;
    function isDefined(name: string): boolean;
  }

  namespace CommandManager {}

  namespace EventManager {
    //FIXME: check if this is correct (handlers are not functions)
    function addListner(name: string, handler: () => void): void
    function cleanListners(name: string): void
    function fireEvent(name: string, event: any): void
    function removeListner(name: string, handler: (event) => void, scope?: any): void
  }
}

declare const utils: UtilsMethods;

//FIXME: get all methods
interface UtilsMethods {
  Trim(text: string): string;
  Prompt(message: string): void;
}

declare function define(
  moduleName: string,
  dependencies: string[],
  fn: () => string //FIXME merge CR and PM //CR | PM |
): void; //FIXME

//FIXME
declare function theApplication(): TheApplicationMethods;

interface TheApplicationMethods {
  CanInvokeMethod(): boolean;

  ClearMainView(): any;
  // The `GenerateSrvrReq` method creates a request string that Siebel Open UI sends to the Siebel Server according to the current context of the application.

  /**
   * The `GenerateSrvrReq` method creates a request string that Siebel Open UI sends to the Siebel Server according to the current context of the application.
   * @param command - is a string that identifies the name of the command that Siebel Open UI must request.
   */
  GenerateSrvrReq(command: string): string;

  /**
   * The `GetAccessibilityEnhanced` method determines whether or not accessibility is enabled.
   */
  GetAccessibilityEnhanced(): string;

  GetActiveBusObj();

  GetActiveBusObj();
  GetActiveView();
  GetAppletControlInstance();
  GetAppTitle();
  GetDirection();
  // GetName Method for Application Models
  /**
   * The `GetPageURL` method returns the URL that the Siebel application uses. It returns this value without a query string.
   */
  GetPageURL(): string;

  /**
   * The `GetProfileAttr` method returns the value of a user profile attribute.
   */
  GetProfileAttr(attributeName: string): string;

  /**
   * The `GetService` method creates a business service instance that allows Siebel Open UI to call a business service method that this business service instance contains.
   */
  GetService();

  /**
   * The `GotoView` method navigates the user to a view in the client.
   */
  GotoView();

  /**
   * The `InvokeMethod` method that Siebel Open UI uses for application models calls a method.
   */
  InvokeMethod();

  IsExtendedKeyBoard();
  IsMobileApplication(): boolean;
  LogOff();
  LookupString();
  RemoveService();
  NewPropertySet();
  SetDiscardUserState;
}

declare function IsOpenUI(): boolean;
declare const SIEBEL_BUILD: string;
declare function Namespace(name: string): void;
declare function IsOfflineModeEnabled(): boolean;
declare function SWEGotoView(view: string): void;

declare class JSSPropertySet<C = unknown, P = unknown> {
  readonly axObj: unknown;
  readonly childArray: JSSPropertySet<C>[] | C[];
  readonly childEnum: number;
  readonly propArrayLen: number;
  readonly type: string;
  readonly value: string;
  readonly propEnumArray: string[]; // string extends keyof P
  readonly propArray: P | P[];
}

declare const utils: UtilsMethods;

interface JSSPropertySet extends JSSPropertySetMethods {}

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

type PM = (pm: PresentationModel) => void
type CR = () => void

declare namespace SiebelJS {
  function Log(message: string): void
  function Namespace(name: string): void
  function Extend<T = PresentationModel,SC = PresentationModel | ContextRenderer>(target: T, superclass: SC): void
  function Dependency(name: string, dependencies: string[], factory: () => void): void
}

declare const SiebelAppFacade: { [key: string]: (PM & { superclass: PresentationModel }) & CR } & SiebelAppFacade;

interface SiebelAppFacade {
  ComponentMgr: ComponentMgr;
  PhysicalRenderer: PhysicalRenderer;
}

interface PresentationModel {
  AddComponentCommunication()
  AddMethod()
  AddProperty()
  AttachEventHandler ()
  AttachNotificationHandler ()
  AttachPMBinding()
  AttachPostProxyExecuteBinding()
  AttachPreProxyExecuteBinding ()
  ExecuteMethod ()
  Get()
  Init(): void
  OnControlEvent(eventName: string, eventArguments)
  SetProperty(name: string, value)

  /**
   * The `Setup` method extracts the values that a property set contains. Siebel Open UI calls this Setup method when it processes the initial reply from the Siebel Server.
   * @param propertySet identifies the property set that Siebel Open UI uses with the corresponding proxy object. It contains the property set information for the proxy and any custom property set information that Siebel Open UI added through the presentation model that resides on the Siebel Server. If Siebel Open UI must parse a custom property set, then this work must occur in the `Setup` method for the derived presentation model.
   */
  Setup(propertySet)
}