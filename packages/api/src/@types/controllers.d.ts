import { Response, Request as Req } from 'express';

declare module 'express' {
  export interface Controller {
    index?: (req: Req, res: Response) => Promise<Response>;
    show?: (req: Req, res: Response) => Promise<Response>;
    store?: (req: Req, res: Response) => Promise<Response>;
    update?: (req: Req, res: Response) => Promise<Response>;
    delete?: (req: Req, res: Response) => Promise<Response>;
  }
}
