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
      createdAt
      updatedAt
    }
  }
`;
export const createMiscX = /* GraphQL */ `
  mutation CreateMiscX(
    $input: CreateMiscXInput!
    $condition: ModelMiscXConditionInput
  ) {
    createMiscX(input: $input, condition: $condition) {
      type
      datestr
      name
      desc
      cust01
      cust02
      cust03
      detail
      createdAt
      updatedAt
    }
  }
`;
export const updateMiscX = /* GraphQL */ `
  mutation UpdateMiscX(
    $input: UpdateMiscXInput!
    $condition: ModelMiscXConditionInput
  ) {
    updateMiscX(input: $input, condition: $condition) {
      type
      datestr
      name
      desc
      cust01
      cust02
      cust03
      detail
      createdAt
      updatedAt
    }
  }
`;
export const deleteMiscX = /* GraphQL */ `
  mutation DeleteMiscX(
    $input: DeleteMiscXInput!
    $condition: ModelMiscXConditionInput
  ) {
    deleteMiscX(input: $input, condition: $condition) {
      type
      datestr
      name
      desc
      cust01
      cust02
      cust03
      detail
      createdAt
      updatedAt
    }
  }
`;
export const createLog = /* GraphQL */ `
  mutation CreateLog(
    $input: CreateLogInput!
    $condition: ModelLogConditionInput
  ) {
    createLog(input: $input, condition: $condition) {
      level
      datestr
      name
      type
      target
      desc
      detail
      createdAt
      updatedAt
    }
  }
`;
export const updateLog = /* GraphQL */ `
  mutation UpdateLog(
    $input: UpdateLogInput!
    $condition: ModelLogConditionInput
  ) {
    updateLog(input: $input, condition: $condition) {
      level
      datestr
      name
      type
      target
      desc
      detail
      createdAt
      updatedAt
    }
  }
`;
export const deleteLog = /* GraphQL */ `
  mutation DeleteLog(
    $input: DeleteLogInput!
    $condition: ModelLogConditionInput
  ) {
    deleteLog(input: $input, condition: $condition) {
      level
      datestr
      name
      type
      target
      desc
      detail
      createdAt
      updatedAt
    }
  }
`;
export const createSmry = /* GraphQL */ `
  mutation CreateSmry(
    $input: CreateSmryInput!
    $condition: ModelSmryConditionInput
  ) {
    createSmry(input: $input, condition: $condition) {
      uid
      classcode
      update
      classtitle
      classtitleJ
      classnum
      roomnum
      dayofweek
      grade
      semester
      slot
      timefrom
      timeto
      type
      students
      note
      state1
      state2
      state3
      newest
      oldest
      detail
      attn01done
      attn02done
      attn03done
      attn04done
      attn05done
      attn06done
      attn07done
      attn08done
      attn09done
      attn10done
      attn11done
      attn12done
      attn13done
      attn14done
      attn15done
      attn16done
      attn17done
      attn18done
      attn19done
      attn20done
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
      createdAt
      updatedAt
    }
  }
`;
export const updateSmry = /* GraphQL */ `
  mutation UpdateSmry(
    $input: UpdateSmryInput!
    $condition: ModelSmryConditionInput
  ) {
    updateSmry(input: $input, condition: $condition) {
      uid
      classcode
      update
      classtitle
      classtitleJ
      classnum
      roomnum
      dayofweek
      grade
      semester
      slot
      timefrom
      timeto
      type
      students
      note
      state1
      state2
      state3
      newest
      oldest
      detail
      attn01done
      attn02done
      attn03done
      attn04done
      attn05done
      attn06done
      attn07done
      attn08done
      attn09done
      attn10done
      attn11done
      attn12done
      attn13done
      attn14done
      attn15done
      attn16done
      attn17done
      attn18done
      attn19done
      attn20done
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteSmry = /* GraphQL */ `
  mutation DeleteSmry(
    $input: DeleteSmryInput!
    $condition: ModelSmryConditionInput
  ) {
    deleteSmry(input: $input, condition: $condition) {
      uid
      classcode
      update
      classtitle
      classtitleJ
      classnum
      roomnum
      dayofweek
      grade
      semester
      slot
      timefrom
      timeto
      type
      students
      note
      state1
      state2
      state3
      newest
      oldest
      detail
      attn01done
      attn02done
      attn03done
      attn04done
      attn05done
      attn06done
      attn07done
      attn08done
      attn09done
      attn10done
      attn11done
      attn12done
      attn13done
      attn14done
      attn15done
      attn16done
      attn17done
      attn18done
      attn19done
      attn20done
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
      createdAt
      updatedAt
    }
  }
`;
export const createMng = /* GraphQL */ `
  mutation CreateMng(
    $input: CreateMngInput!
    $condition: ModelMngConditionInput
  ) {
    createMng(input: $input, condition: $condition) {
      type
      code
      datestr
      name
      trigger
      detail
      createdAt
      updatedAt
    }
  }
`;
export const updateMng = /* GraphQL */ `
  mutation UpdateMng(
    $input: UpdateMngInput!
    $condition: ModelMngConditionInput
  ) {
    updateMng(input: $input, condition: $condition) {
      type
      code
      datestr
      name
      trigger
      detail
      createdAt
      updatedAt
    }
  }
`;
export const deleteMng = /* GraphQL */ `
  mutation DeleteMng(
    $input: DeleteMngInput!
    $condition: ModelMngConditionInput
  ) {
    deleteMng(input: $input, condition: $condition) {
      type
      code
      datestr
      name
      trigger
      detail
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
      createdAt
      updatedAt
    }
  }
`;
export const createClrmX = /* GraphQL */ `
  mutation CreateClrmX(
    $input: CreateClrmXInput!
    $condition: ModelClrmXConditionInput
  ) {
    createClrmX(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateClrmX = /* GraphQL */ `
  mutation UpdateClrmX(
    $input: UpdateClrmXInput!
    $condition: ModelClrmXConditionInput
  ) {
    updateClrmX(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteClrmX = /* GraphQL */ `
  mutation DeleteClrmX(
    $input: DeleteClrmXInput!
    $condition: ModelClrmXConditionInput
  ) {
    deleteClrmX(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createClrmY = /* GraphQL */ `
  mutation CreateClrmY(
    $input: CreateClrmYInput!
    $condition: ModelClrmYConditionInput
  ) {
    createClrmY(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateClrmY = /* GraphQL */ `
  mutation UpdateClrmY(
    $input: UpdateClrmYInput!
    $condition: ModelClrmYConditionInput
  ) {
    updateClrmY(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteClrmY = /* GraphQL */ `
  mutation DeleteClrmY(
    $input: DeleteClrmYInput!
    $condition: ModelClrmYConditionInput
  ) {
    deleteClrmY(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
