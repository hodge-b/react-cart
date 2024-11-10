import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";
import sidebarMenuJson from "../../lib/data/menus/sidebarMenu.json";

describe("Sidebar", () => {
  const menu = sidebarMenuJson.data;

  it("renders the Sidebar component", () => {
    render(<Sidebar menu={menu} />);
  });
});
