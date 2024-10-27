import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { WrapRootElement } from "./src/provider";
import "./src/apps/styles.css"; 

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
   <WrapRootElement element={element} />
)