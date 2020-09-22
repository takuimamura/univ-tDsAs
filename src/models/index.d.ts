import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TodoStatus {
  WAITING = "WAITING",
  DONE = "DONE"
}



export declare class Todo {
  readonly id: string;
  readonly owner?: string;
  readonly title?: string;
  readonly status?: TodoStatus | keyof typeof TodoStatus;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class Inst {
  readonly id: string;
  readonly uid: string;
  readonly date: string;
  readonly daynum?: number;
  readonly clockin?: string;
  readonly clockout?: string;
  readonly clockincorrect?: string;
  readonly clockoutcorrect?: string;
  readonly detail?: string;
  constructor(init: ModelInit<Inst>);
  static copyOf(source: Inst, mutator: (draft: MutableModel<Inst>) => MutableModel<Inst> | void): Inst;
}

export declare class Misc {
  readonly id: string;
  readonly type: string;
  readonly name: string;
  readonly detail?: string;
  constructor(init: ModelInit<Misc>);
  static copyOf(source: Misc, mutator: (draft: MutableModel<Misc>) => MutableModel<Misc> | void): Misc;
}

export declare class Clrm {
  readonly id: string;
  readonly uid: string;
  readonly index: string;
  readonly sortid?: string;
  readonly classcount?: string;
  readonly classcode?: string;
  readonly classnameJ?: string;
  readonly studentcode?: string;
  readonly studentname?: string;
  readonly studentnameJ?: string;
  readonly studentnameJKana?: string;
  readonly studentnameRev?: string;
  readonly dayofweek?: string;
  readonly enable?: boolean;
  readonly group?: string;
  readonly note?: string;
  readonly attn01?: string;
  readonly attn02?: string;
  readonly attn03?: string;
  readonly attn04?: string;
  readonly attn05?: string;
  readonly attn06?: string;
  readonly attn07?: string;
  readonly attn08?: string;
  readonly attn09?: string;
  readonly attn10?: string;
  readonly attn11?: string;
  readonly attn12?: string;
  readonly attn13?: string;
  readonly attn14?: string;
  readonly attn15?: string;
  readonly attn16?: string;
  readonly attn17?: string;
  readonly attn18?: string;
  readonly attn19?: string;
  readonly attn20?: string;
  readonly attmisc?: string;
  readonly homeworkincomplete02?: boolean;
  readonly homeworkincomplete03?: boolean;
  readonly homeworkincomplete04?: boolean;
  readonly homeworkincomplete05?: boolean;
  readonly homeworkincomplete06?: boolean;
  readonly homeworkincomplete07?: boolean;
  readonly homeworkincomplete08?: boolean;
  readonly homeworkincomplete09?: boolean;
  readonly homeworkincomplete10?: boolean;
  readonly homeworkincomplete11?: boolean;
  readonly homeworkincomplete12?: boolean;
  readonly homeworkincomplete13?: boolean;
  readonly homeworkincomplete14?: boolean;
  readonly homeworkincomplete15?: boolean;
  readonly homeworkincomplete16?: boolean;
  readonly homeworkincomplete17?: boolean;
  readonly homeworkincomplete18?: boolean;
  readonly homeworkincomplete19?: boolean;
  readonly homeworkincomplete20?: boolean;
  readonly eval01?: number;
  readonly eval02?: number;
  readonly eval03?: number;
  readonly eval04?: number;
  readonly eval05?: number;
  readonly eval06?: number;
  readonly eval07?: number;
  readonly eval08?: number;
  readonly eval09?: number;
  readonly eval10?: number;
  readonly eval11?: number;
  readonly eval12?: number;
  readonly eval13?: number;
  readonly eval14?: number;
  readonly eval15?: number;
  readonly eval16?: number;
  readonly eval17?: number;
  readonly eval18?: number;
  readonly eval19?: number;
  readonly eval20?: number;
  readonly ecom01?: string;
  readonly ecom02?: string;
  readonly ecom03?: string;
  readonly ecom04?: string;
  readonly ecom05?: string;
  readonly ecom06?: string;
  readonly ecom07?: string;
  readonly ecom08?: string;
  readonly ecom09?: string;
  readonly ecom10?: string;
  readonly ecom11?: string;
  readonly ecom12?: string;
  readonly ecom13?: string;
  readonly ecom14?: string;
  readonly ecom15?: string;
  readonly ecom16?: string;
  readonly ecom17?: string;
  readonly ecom18?: string;
  readonly ecom19?: string;
  readonly ecom20?: string;
  readonly cust01?: string;
  readonly cust02?: string;
  readonly cust03?: string;
  readonly cust04?: string;
  readonly cust05?: string;
  constructor(init: ModelInit<Clrm>);
  static copyOf(source: Clrm, mutator: (draft: MutableModel<Clrm>) => MutableModel<Clrm> | void): Clrm;
}