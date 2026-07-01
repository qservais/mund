import { Router, type IRouter } from "express";
import healthRouter from "./health";
import agentationWebhookRouter from "./agentationWebhook";

const router: IRouter = Router();

router.use(healthRouter);
router.use(agentationWebhookRouter);

export default router;
