import { AppShell } from "../components/layout";
import { MaterialTheme } from "./theme";

type AppProviderProps = {} & React.PropsWithChildren;

export function AppProvider({ children }: AppProviderProps) {
  return (
    <MaterialTheme>
      <AppShell>{children}</AppShell>
    </MaterialTheme>
  );
}
