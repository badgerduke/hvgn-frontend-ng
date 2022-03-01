import { Child } from './child';
import { Parent } from "./parent";
import { Union } from "./union";

export interface Family {
  id: string;
  parents: Parent[];
  children?: Child[];
  union?: Union[];
}
