/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      owner
      title
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        title
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInst = /* GraphQL */ `
  query GetInst($id: ID!, $uid: String!) {
    getInst(id: $id, uid: $uid) {
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
export const listInsts = /* GraphQL */ `
  query ListInsts(
    $id: ID
    $uid: ModelStringKeyConditionInput
    $filter: ModelInstFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInsts(
      id: $id
      uid: $uid
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMisc = /* GraphQL */ `
  query GetMisc($id: ID!, $type: String!) {
    getMisc(id: $id, type: $type) {
      id
      type
      name
      detail
      createdAt
      updatedAt
    }
  }
`;
export const listMiscs = /* GraphQL */ `
  query ListMiscs(
    $id: ID
    $type: ModelStringKeyConditionInput
    $filter: ModelMiscFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMiscs(
      id: $id
      type: $type
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
        name
        detail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMiscX = /* GraphQL */ `
  query GetMiscX($type: String!, $datestr: String!) {
    getMiscX(type: $type, datestr: $datestr) {
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
export const listMiscXs = /* GraphQL */ `
  query ListMiscXs(
    $type: String
    $datestr: ModelStringKeyConditionInput
    $filter: ModelMiscXFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMiscXs(
      type: $type
      datestr: $datestr
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getLog = /* GraphQL */ `
  query GetLog($type: String!, $datestr: String!) {
    getLog(type: $type, datestr: $datestr) {
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
export const listLogs = /* GraphQL */ `
  query ListLogs(
    $type: String
    $datestr: ModelStringKeyConditionInput
    $filter: ModelLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLogs(
      type: $type
      datestr: $datestr
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSmry = /* GraphQL */ `
  query GetSmry($uid: String!, $classcode: String!) {
    getSmry(uid: $uid, classcode: $classcode) {
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
export const listSmrys = /* GraphQL */ `
  query ListSmrys(
    $uid: String
    $classcode: ModelStringKeyConditionInput
    $filter: ModelSmryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSmrys(
      uid: $uid
      classcode: $classcode
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMng = /* GraphQL */ `
  query GetMng($id: ID!) {
    getMng(id: $id) {
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
export const listMngs = /* GraphQL */ `
  query ListMngs(
    $filter: ModelMngFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMngs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        type
        code
        datestr
        name
        trigger
        detail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClrm = /* GraphQL */ `
  query GetClrm($id: ID!) {
    getClrm(id: $id) {
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
export const listClrms = /* GraphQL */ `
  query ListClrms(
    $filter: ModelClrmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClrms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClrmX = /* GraphQL */ `
  query GetClrmX($id: ID!) {
    getClrmX(id: $id) {
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
export const listClrmXs = /* GraphQL */ `
  query ListClrmXs(
    $filter: ModelClrmXFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClrmXs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getClrmY = /* GraphQL */ `
  query GetClrmY($id: ID!) {
    getClrmY(id: $id) {
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
export const listClrmYs = /* GraphQL */ `
  query ListClrmYs(
    $filter: ModelClrmYFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClrmYs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const smryByDay = /* GraphQL */ `
  query SmryByDay(
    $dayofweek: String
    $uid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSmryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    smryByDay(
      dayofweek: $dayofweek
      uid: $uid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const instByday = /* GraphQL */ `
  query InstByday(
    $dayofweek: String
    $uid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClrmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    instByday(
      dayofweek: $dayofweek
      uid: $uid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const bydayX = /* GraphQL */ `
  query BydayX(
    $dayofweek: String
    $uid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClrmXFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BydayX(
      dayofweek: $dayofweek
      uid: $uid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const bydayY = /* GraphQL */ `
  query BydayY(
    $dayofweek: String
    $uid: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClrmYFilterInput
    $limit: Int
    $nextToken: String
  ) {
    BydayY(
      dayofweek: $dayofweek
      uid: $uid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
