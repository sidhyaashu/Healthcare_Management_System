// =======================================IMPORT LIBRARIES=======================================
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error-handler-middleware.js";
import { errorLogger } from "./middleware/error-logger-middleware.js";
import { performanceMonitor } from "./middleware/performance-monitor-middleware.js";
import { limiter } from "./middleware/rate-limiter-middleware.js";
import { requestLogger } from "./middleware/request-logger-middleware.js";
import authRoutes from "./routes/auth-routes.js"
import hospitalRoute from "./routes/hospital-routes.js"

// ========================================CONFIGARATIONS========================================
dotenv.config();
const app = express();

// ==========================================MIDDLEWARE==========================================
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//===========================================MONITORING===========================================
app.use(requestLogger)
app.use(performanceMonitor)
app.use(limiter)

// ============================================ROUTES============================================

app.use("/api/auth",authRoutes)
app.use("/api/hospital",hospitalRoute)

// =============================================HANDLERS=============================================
app.use(errorHandler);
app.use(errorLogger);

export default app;
