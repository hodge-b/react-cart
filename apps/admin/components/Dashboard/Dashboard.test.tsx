import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("renders the Dashboard component", () => {
    render(<Dashboard />);
  });
});