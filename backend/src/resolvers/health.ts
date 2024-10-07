import { Router, Request, Response } from 'express';
import AppDataSource from '../dataSource';

const healthRouter = Router();

healthRouter.get('/health', async (req: Request, res: Response) => {
  try {
    await AppDataSource.getConnection();

    res.status(200).json({
      status: 'healthy',
      version: process.env.npm_package_version || 'unknown',
      uptime: process.uptime(),
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      error: error.message,
    });
  }
});

export default healthRouter;
