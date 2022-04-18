---
to: <%= `packages/amnis-${type}/src/${Name}/${Name}.schema.ts` %>
---
/**
 * DO NOT EDIT
 * Run the command `yarn gen:schema` in the root project folder to generate the code.
 */
import { JSONSchema7 } from 'json-schema';

export const <%= Name %>Schema: JSONSchema7 = {};

export default <%= Name %>Schema;
