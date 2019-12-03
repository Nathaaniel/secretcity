import { renderMainPage, deblur, renderMiddle } from "./reveal_page";
import { renderTabs, clickTab } from "./navigation_tabs";
renderMiddle();
renderTabs();
renderMainPage();
clickTab("puzzle");

