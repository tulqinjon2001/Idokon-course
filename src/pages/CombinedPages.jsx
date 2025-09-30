import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";

import HomePage from "./HomePage";
import AdminPanelPage from "./AdminPanelPage";
import QuizCom from "../sections/Quiz/QuizCom";
import QurilmalarPage from "./QurilmalarPage";
import SavollarPage from "./SavollarPage";

export default function CombinedPages() {
  const { pathname } = useLocation();

  const PageComponent = useMemo(() => {
    const map = {
      "/": HomePage,
      "/admin": AdminPanelPage,
      "/test": QuizCom,
      "/qurilmalar": QurilmalarPage,
      "/savollar": SavollarPage,
    };
    return map[pathname] || (() => <div>Page not found</div>);
  }, [pathname]);

  return (
    <div className="page-wrapper">
      <PageComponent />
    </div>
  );
}