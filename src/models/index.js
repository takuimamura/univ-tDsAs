// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TodoStatus = {
  "WAITING": "WAITING",
  "DONE": "DONE"
};

const { Todo, Inst, Misc, Clrm } = initSchema(schema);

export {
  Todo,
  Inst,
  Misc,
  Clrm,
  TodoStatus
};