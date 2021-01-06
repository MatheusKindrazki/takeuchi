import { Response, Request } from 'express';

declare module 'express' {
  export interface Controller {
    index?: (req: Request, res: Response) => Promise<Response>;
    show?: (req: Request, res: Response) => Promise<Response>;
    store?: (req: Request, res: Response) => Promise<Response>;
    update?: (req: Request, res: Response) => Promise<Response>;
    delete?: (req: Request, res: Response) => Promise<Response>;
  }
}
