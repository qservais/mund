import { Router, type IRouter } from "express";
import healthRouter from "./health";
import agentationWebhookRouter from "./agentationWebhook";
import contactRouter from "./contact";
import subscribeRouter from "./subscribe";
import journalAdminRouter from "./journalAdmin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(agentationWebhookRouter);
router.use(contactRouter);
router.use(subscribeRouter);
router.use(journalAdminRouter);

export default router;
