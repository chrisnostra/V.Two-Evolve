import { Router, type IRouter } from "express";
import healthRouter from "./health";
import startNowRouter from "./start-now";

const router: IRouter = Router();

router.use(healthRouter);
router.use(startNowRouter);

export default router;
