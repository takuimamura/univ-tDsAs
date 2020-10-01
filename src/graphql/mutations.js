/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      owner
      title
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      owner
      title
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      owner
      title
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createInst = /* GraphQL */ `
  mutation CreateInst(
    $input: CreateInstInput!
    $condition: ModelInstConditionInput
  ) {
    createInst(input: $input, condition: $condition) {
      id
      uid
      date
      daynum
      clockin
      clockout
      clockincorrect
      clockoutcorrect
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateInst = /* GraphQL */ `
  mutation UpdateInst(
    $input: UpdateInstInput!
    $condition: ModelInstConditionInput
  ) {
    updateInst(input: $input, condition: $condition) {
      id
      uid
      date
      daynum
      clockin
      clockout
      clockincorrect
      clockoutcorrect
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteInst = /* GraphQL */ `
  mutation DeleteInst(
    $input: DeleteInstInput!
    $condition: ModelInstConditionInput
  ) {
    deleteInst(input: $input, condition: $condition) {
      id
      uid
      date
      daynum
      clockin
      clockout
      clockincorrect
      clockoutcorrect
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMisc = /* GraphQL */ `
  mutation CreateMisc(
    $input: CreateMiscInput!
    $condition: ModelMiscConditionInput
  ) {
    createMisc(input: $input, condition: $condition) {
      id
      type
      name
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMisc = /* GraphQL */ `
  mutation UpdateMisc(
    $input: UpdateMiscInput!
    $condition: ModelMiscConditionInput
  ) {
    updateMisc(input: $input, condition: $condition) {
      id
      type
      name
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMisc = /* GraphQL */ `
  mutation DeleteMisc(
    $input: DeleteMiscInput!
    $condition: ModelMiscConditionInput
  ) {
    deleteMisc(input: $input, condition: $condition) {
      id
      type
      name
      detail
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createClrm = /* GraphQL */ `
  mutation CreateClrm(
    $input: CreateClrmInput!
    $condition: ModelClrmConditionInput
  ) {
    createClrm(input: $input, condition: $condition) {
      id
      uid
      index
      sortid
      classcount
      classcode
      classnameJ
      studentcode
      studentname
      studentnameJ
      studentnameJKana
      studentnameRev
      dayofweek
      enable
      group
      note
      attn01
      attn02
      attn03
      attn04
      attn05
      attn06
      attn07
      attn08
      attn09
      attn10
      attn11
      attn12
      attn13
      attn14
      attn15
      attn16
      attn17
      attn18
      attn19
      attn20
      attmisc
      homeworkincomplete02
      homeworkincomplete03
      homeworkincomplete04
      homeworkincomplete05
      homeworkincomplete06
      homeworkincomplete07
      homeworkincomplete08
      homeworkincomplete09
      homeworkincomplete10
      homeworkincomplete11
      homeworkincomplete12
      homeworkincomplete13
      homeworkincomplete14
      homeworkincomplete15
      homeworkincomplete16
      homeworkincomplete17
      homeworkincomplete18
      homeworkincomplete19
      homeworkincomplete20
      eval01
      eval02
      eval03
      eval04
      eval05
      eval06
      eval07
      eval08
      eval09
      eval10
      eval11
      eval12
      eval13
      eval14
      eval15
      eval16
      eval17
      eval18
      eval19
      eval20
      ecom01
      ecom02
      ecom03
      ecom04
      ecom05
      ecom06
      ecom07
      ecom08
      ecom09
      ecom10
      ecom11
      ecom12
      ecom13
      ecom14
      ecom15
      ecom16
      ecom17
      ecom18
      ecom19
      ecom20
      cust01
      cust02
      cust03
      cust04
      cust05
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateClrm = /* GraphQL */ `
  mutation UpdateClrm(
    $input: UpdateClrmInput!
    $condition: ModelClrmConditionInput
  ) {
    updateClrm(input: $input, condition: $condition) {
      id
      uid
      index
      sortid
      classcount
      classcode
      classnameJ
      studentcode
      studentname
      studentnameJ
      studentnameJKana
      studentnameRev
      dayofweek
      enable
      group
      note
      attn01
      attn02
      attn03
      attn04
      attn05
      attn06
      attn07
      attn08
      attn09
      attn10
      attn11
      attn12
      attn13
      attn14
      attn15
      attn16
      attn17
      attn18
      attn19
      attn20
      attmisc
      homeworkincomplete02
      homeworkincomplete03
      homeworkincomplete04
      homeworkincomplete05
      homeworkincomplete06
      homeworkincomplete07
      homeworkincomplete08
      homeworkincomplete09
      homeworkincomplete10
      homeworkincomplete11
      homeworkincomplete12
      homeworkincomplete13
      homeworkincomplete14
      homeworkincomplete15
      homeworkincomplete16
      homeworkincomplete17
      homeworkincomplete18
      homeworkincomplete19
      homeworkincomplete20
      eval01
      eval02
      eval03
      eval04
      eval05
      eval06
      eval07
      eval08
      eval09
      eval10
      eval11
      eval12
      eval13
      eval14
      eval15
      eval16
      eval17
      eval18
      eval19
      eval20
      ecom01
      ecom02
      ecom03
      ecom04
      ecom05
      ecom06
      ecom07
      ecom08
      ecom09
      ecom10
      ecom11
      ecom12
      ecom13
      ecom14
      ecom15
      ecom16
      ecom17
      ecom18
      ecom19
      ecom20
      cust01
      cust02
      cust03
      cust04
      cust05
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteClrm = /* GraphQL */ `
  mutation DeleteClrm(
    $input: DeleteClrmInput!
    $condition: ModelClrmConditionInput
  ) {
    deleteClrm(input: $input, condition: $condition) {
      id
      uid
      index
      sortid
      classcount
      classcode
      classnameJ
      studentcode
      studentname
      studentnameJ
      studentnameJKana
      studentnameRev
      dayofweek
      enable
      group
      note
      attn01
      attn02
      attn03
      attn04
      attn05
      attn06
      attn07
      attn08
      attn09
      attn10
      attn11
      attn12
      attn13
      attn14
      attn15
      attn16
      attn17
      attn18
      attn19
      attn20
      attmisc
      homeworkincomplete02
      homeworkincomplete03
      homeworkincomplete04
      homeworkincomplete05
      homeworkincomplete06
      homeworkincomplete07
      homeworkincomplete08
      homeworkincomplete09
      homeworkincomplete10
      homeworkincomplete11
      homeworkincomplete12
      homeworkincomplete13
      homeworkincomplete14
      homeworkincomplete15
      homeworkincomplete16
      homeworkincomplete17
      homeworkincomplete18
      homeworkincomplete19
      homeworkincomplete20
      eval01
      eval02
      eval03
      eval04
      eval05
      eval06
      eval07
      eval08
      eval09
      eval10
      eval11
      eval12
      eval13
      eval14
      eval15
      eval16
      eval17
      eval18
      eval19
      eval20
      ecom01
      ecom02
      ecom03
      ecom04
      ecom05
      ecom06
      ecom07
      ecom08
      ecom09
      ecom10
      ecom11
      ecom12
      ecom13
      ecom14
      ecom15
      ecom16
      ecom17
      ecom18
      ecom19
      ecom20
      cust01
      cust02
      cust03
      cust04
      cust05
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
