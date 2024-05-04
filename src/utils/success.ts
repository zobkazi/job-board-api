import { create } from "domain";
import { HTTPError, HTTPSuccess } from "./error";
export const createSuccess = (msg = "Success") => {
  return new HTTPSuccess(msg, 200);
};
