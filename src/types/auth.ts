export type LogoutInterface = {
  logout: () => Promise<void>;
  isLoggingOut: boolean;
  hasLoggingOutFailed: boolean;
  dismissLoggingOutFailure: () => void;
};
