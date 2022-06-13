import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledJSX } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
export function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJSX />
      <StyledComponents />
    </div>
  );
}
