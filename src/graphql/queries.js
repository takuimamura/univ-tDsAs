/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInsts = /* GraphQL */ `
  query SyncInsts(
    $filter: ModelInstFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInsts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMiscs = /* GraphQL */ `
  query SyncMiscs(
    $filter: ModelMiscFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMiscs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClrms = /* GraphQL */ `
  query SyncClrms(
    $filter: ModelClrmFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClrms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
