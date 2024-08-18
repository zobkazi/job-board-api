import cors from "cors";
declare const middleware: (((req: cors.CorsRequest, res: {
    statusCode?: number | undefined;
    setHeader(key: string, value: string): any;
    end(): any;
}, next: (err?: any) => any) => void) | import("connect").NextHandleFunction)[];
export default middleware;
