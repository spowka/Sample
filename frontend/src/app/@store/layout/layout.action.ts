import { Action } from '@ngrx/store';

export const RESIZE_WINDOW = '[Layout] Resize window';

export const ENABLE_LAYOUT_SCROLL = '[Layout] Enable scroll on app wrapper';
export const DISABLE_LAYOUT_SCROLL = '[Layout] Disable scroll on app wrapper';

export const OPEN_HEADER_NAVBAR: string = '[Layout] Open HeaderNavbar';
export const CLOSE_HEADER_NAVBAR: string = '[Layout] Close HeaderNavbar';
export const TOGGLE_HEADER_NAVBAR: string = '[Layout] Toggle HeaderNavbar';

export const OPEN_USER_SIDEBAR: string = '[Layout] Open UserSidebar';
export const CLOSE_USER_SIDEBAR: string = '[Layout] Close UserSidebar';
export const TOGGLE_USER_SIDEBAR: string = '[Layout] Toggle UserSidebar';

export const OPEN_FILTER_SIDEBAR: string = '[Layout] Open FilterSidebar';
export const CLOSE_FILTER_SIDEBAR: string = '[Layout] Close FilterSidebar';

export const CHANGE_THEME: string = '[Layout] Change Theme';

export const OPEN_LOGIN_MODAL: string = '[Layout] Open Login Modal';
export const CLOSE_LOGIN_MODAL: string = '[Layout] Close Login Modal';
export const OPEN_SIGN_UP_MODAL: string = '[Layout] Open Sign Up Modal';
export const CLOSE_SIGN_UP_MODAL: string = '[Layout] Close Sign Up Modal';
export const OPEN_FORGOT_MODAL: string = '[Layout] Open Forgot password Modal';
export const CLOSE_FORGOT_MODAL: string = '[Layout] Close Forgot password Modal';

export const OPEN_CHAT: string = '[Layout] Open chat';
export const CLOSE_CHAT: string = '[Layout] Close chat';
export const TOGGLE_CHAT: string = '[Layout] Toggle chat';

export const TOGGLE_LATEST_UPGRADES: string = '[Layout] Toggle Latest Upgrages';

export const THEME_CHECK: string = '[Layout] Theme Check';
export const THEME_CHECK_SUCCESS: string = '[Layout] Theme Check Success';
export const THEME_CHECK_FAIL: string = '[Layout] Theme Check Fail';

export class ResizeWindow implements Action {
  readonly type: string = RESIZE_WINDOW;

  constructor(public payload: { width: number, height: number }) {
  }
}

export class EnableLayoutScroll implements Action {
  readonly type: string = ENABLE_LAYOUT_SCROLL;
}

export class DisableLayoutScroll implements Action {
  readonly type: string = DISABLE_LAYOUT_SCROLL;
}

export class OpenHeaderNavbar implements Action {
  readonly type: string = OPEN_HEADER_NAVBAR;
}

export class CloseHeaderNavbar implements Action {
  readonly type: string = CLOSE_HEADER_NAVBAR;
}

export class ToggleHeaderNavbar implements Action {
  readonly type: string = TOGGLE_HEADER_NAVBAR;
}


export class OpenUserSidebar implements Action {
  readonly type: string = OPEN_USER_SIDEBAR;
}

export class CloseUserSidebar implements Action {
  readonly type: string = CLOSE_USER_SIDEBAR;
}

export class ToggleUserSidebar implements Action {
  readonly type: string = TOGGLE_USER_SIDEBAR;
}

export class OpenFilterSidebar implements Action {
  readonly type: string = OPEN_FILTER_SIDEBAR;
}

export class CloseFilterSidebar implements Action {
  readonly type: string = CLOSE_FILTER_SIDEBAR;
}

export class ChangeTheme implements Action {
  readonly type: string = CHANGE_THEME;
  constructor(public payload: string) { }
}

export class OpenLoginModal implements Action {
  readonly type: string = OPEN_LOGIN_MODAL;
}

export class CloseLoginModal implements Action {
  readonly type: string = CLOSE_LOGIN_MODAL;
}

export class OpenSignUpModal implements Action {
  readonly type: string = OPEN_SIGN_UP_MODAL;
}

export class CloseSignUpModal implements Action {
  readonly type: string = CLOSE_SIGN_UP_MODAL;
}

export class OpenForgotModal implements Action {
  readonly type: string = OPEN_FORGOT_MODAL;
}

export class CloseForgotModal implements Action {
  readonly type: string = CLOSE_FORGOT_MODAL;
}

export class OpenChat implements Action {
  readonly type: string = OPEN_CHAT;
}

export class CloseChat implements Action {
  readonly type: string = CLOSE_CHAT;
}

export class ToggleChat implements Action {
  readonly type: string = TOGGLE_CHAT;
}

export class ToggleLatestUpgrades implements Action {
  readonly type: string = TOGGLE_LATEST_UPGRADES;
}

export class ThemeCheck implements Action {
  readonly type: string = THEME_CHECK;
}

export class ThemeCheckSuccess implements Action {
  readonly type: string = THEME_CHECK_SUCCESS;
  constructor(public payload: string) { }
}

export class ThemeCheckFail implements Action {
  readonly type: string = THEME_CHECK_FAIL;
}

export type LayoutActions = OpenHeaderNavbar
  | CloseHeaderNavbar
  | ToggleHeaderNavbar
  | OpenUserSidebar
  | CloseUserSidebar
  | ToggleUserSidebar
  | ResizeWindow
  | EnableLayoutScroll
  | DisableLayoutScroll
  | ChangeTheme
  | OpenLoginModal
  | CloseLoginModal
  | OpenSignUpModal
  | CloseSignUpModal
  | OpenForgotModal
  | CloseForgotModal
  | OpenChat
  | CloseChat
  | ToggleChat
  | ToggleLatestUpgrades
  | ThemeCheck
  | ThemeCheckSuccess
  | ThemeCheckFail;
