import { lazy } from "react";

export const MainPage = lazy(() => import("./MainPage/MainPage"));
export const DietDetailPg = lazy(() => import("./DietDetailPg/DietDetailPg"));
export const PlanPg = lazy(() => import("./PlanPg/PlanPg"));
export const DietPg = lazy(() => import("./DietPg/DietPg"));
