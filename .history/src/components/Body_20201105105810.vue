<template>
  <div id="app">
    <!-- Authバグ対応、初回のみ -->
    <template v-if="this.authdetail.name === undefined">
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <b-button
              size="title is-1 is-large is-outlined"
              @click="$router.go()"
            >Click to initialize (only for the first use)</b-button>
          </div>
        </div>
      </section>
    </template>
    <template v-if="this.authdetail.name !== undefined">
      <!-- 検証用 -->
      <template v-if="sett.devarea">
        <!-- <template v-if="getStartingUrl === 'localhost'"> -->
        <article class="columns">
          <div class="column is-four-fifths"></div>
          <div class="column">
            <b-field>
              <b-switch v-model="sett.devscreen" size="large">devscreen : {{ sett.devscreen }}</b-switch>
              <b-switch v-model="sett.devarea" size="is-small">devarea : {{ sett.devarea }}</b-switch>
            </b-field>
          </div>
        </article>
        <div v-if="sett.devscreen">
          <b-switch size="is-small" v-model="sett.priorityLS">priorityLS : {{ sett.priorityLS }}</b-switch>
          <b-button size="is-small" @click="datasetManage()">datasetManage()</b-button>
          <!-- <b-button size="is-small" @click="()" size="is-small"></b-button> -->
          <!-- <b-switch size="is-small" v-model=""> : {{  }}</b-switch> -->

          <!-- <b-field>
          <b-modal :active.sync="sett.isModalActive"></b-modal>
          <b-input v-model="ds.crMisc.type" placeholder="type.."></b-input>
          <b-input v-model="ds.crMisc.name" placeholder="name.."></b-input>
          <b-input v-model="ds.crMisc.detail" placeholder="detail"></b-input>
          </b-field>-->
          <!-- <article>misc ret: {{ ds.nMisc.return }} - miscs {{ dataset.Miscs }}</article> -->
          <!-- <b-input v-model="sett.dummy"></b-input> -->
          <!-- {{ sett.dummy }} -->
          <b-icon pack="fas" icon="running" size="is-medium" type="is-bluedark" />
          <b-icon pack="fas" icon="check-circle" size="is-medium" type="is-success" />
          <!-- 上部表示 -->
          <b-icon icon="times-circle" :class="[!app.ready ? 'is-ready' : 'is-normal']"></b-icon>
          <b-icon icon="exclamation-triangle" :class="[!app.network ? 'is-network' : 'is-normal']"></b-icon>
          <b-icon icon="sync-alt" :class="[!app.syncing ? 'is-syncing' : 'is-normal']"></b-icon>
          <!-- app: {{ app }} -->
          <b-modal :active.sync="sett.isModalActive"></b-modal>
          <b-button size="is-small" @click="dataStoreClear()">dataStoreClear()</b-button>
          <b-button size="is-small" @click="dataStoreStart()">dataStoreStart()</b-button>
          <!-- <b-button @click="dataStoreObserve()">dataStoreObserve()</b-button> -->
          <b-button size="is-small" @click="selcchk()">test()</b-button>
          <b-button
            size="is-small"
            @click="
              isClrmNeedAppSync == true;
              isClrmAppSyncUploading == false;
            "
          >isClrmNeedAppSync</b-button>
          <b-button size="is-small" @click="getClrmsinstByday('Mon')">getClrmsinstByday()</b-button>
          <b-button size="is-small" @click="spliceTESTKick()">spliceTESTKick()</b-button>
          <!-- <b-button @click="loadclassRealtimeBackupAll()">loadclassRealtimeBackupAll()</b-button> -->
          <b-button size="is-small" @click="getAttnDoneStateSelClrm()">getAttnDoneStateSelClrm()</b-button>

          <b-button size="is-small" @click="chkfindtest()">chkfindtest</b-button>
          <b-button size="is-small" @click="dummytest">dummytest</b-button>
          ■dummy1:{{ sett.dummy1 }} ■dummy2{{ sett.dummy2 }} ■dummy3{{ sett.dummy3 }} ■dummy4:{{
          sett.dummy4
          }}
          ■dummy5{{ sett.dummy5 }} ■dummy3{{ sett.dummy6 }} authdetail::
          {{ authdetail }} cRoom.showEvalComp {{ cRoom.showEvalComp }}
          <br />
          <b-field>
            <b-numberinput
              v-model="sett.env.devAddDate"
              controls-position="compact"
              size="is-small"
            ></b-numberinput>
            <b-button size="is-small" @click="dateDevAddDate()">dd {{ getDateMDddd(sett.ddate) }}</b-button>
            <b-numberinput
              v-model="sett.env.devAddAcDate"
              controls-position="compact"
              size="is-small"
              type="is-warning"
            ></b-numberinput>
            <b-button size="is-small" @click="setcurrentAcDate()">AC{{ getDateMDddd(sett.ddate) }}</b-button>
            <b-button
              size="is-small"
              @click="
                setcurrentAcDate();
                dateDevAddDate();
              "
            >both</b-button>
            <b-checkbox v-model="sett.env.isTestMode">TestMode:{{ sett.env.isTestMode }}</b-checkbox>
            <b-switch v-model="sett.devcheck">devcheck : {{ sett.devcheck }}</b-switch>
          </b-field>
          <b-button size="is-small" @click="fetchClrms()">fetchClrms()</b-button>
          <b-button size="is-small" @click="instClockOut()">instClockOut()</b-button>
          <b-button size="is-small" @click="instClockIn()">instClockIn</b-button>
          <b-button size="is-small" @click="classBackupTEST()">classBackupTEST</b-button>
          <!-- <b-button @click="testCreateMisc()">testCreateMisc</b-button> -->
          <!-- <b-button @click="getDateYYYYMMDDhHHMMSSTEST()">getDateYYYYMMDDhHHMMSSTEST</b-button> -->
          <b-switch size="is-small" v-model="sett.devsummary">devsummary : {{ sett.devsummary }}</b-switch>
          idle:{{ IdleVueStatus }}
          <template v-if="sett.devsummary">
            <!--■■■開発用 ローカル限定表示■■■-->
            sett.alias {{ sett.alias }} | authdetai {{ authdetail }}
            <br />
            dataIDB {{ dataIDB.Clrms.length }} | dataAPI: {{ dataAPI.Clrms.length }} | dataDS:
            {{ dataDS.Clrms.length }} | dataLS: {{ dataLS.Clrms.length }} | dataset:
            {{ dataset.Clrms.length }} ||| source = {{ dataset.source }} | isClrmLoading:
            {{ isClrmLoading }}
            <br />
            allClasses; {{ dataset.allClasses.length }} | yours | {{ yourClasses.length }}
            <!-- InstByday::{{ dataset.ClrmsInstByday.length }} | Clrms::{{  dataset.Clrms.length}} | ClrmsChk::{{ dataset.ClrmsChk.length }} |-->
            <br />
            class: {{ classmembers.length }} | cRoom.showAttenHist {{ cRoom.showAttenHist }} |
            att.mode {{ att.mode }} |
            <br />
            instructor.yourTodaysClasses {{ instructor.yourTodaysClasses }}
          </template>

          <div class="columns">
            <div class="column">
              <b-input v-model="ds.dev1" placeholder="classcode">A0238</b-input>
              <b-input v-model="ds.dev2" placeholder="name.."></b-input>
              <b-input v-model="ds.dev3" placeholder="detail"></b-input>
            </div>
            <div class="column is-four-fifths">
              <!-- <b-button @click="idbSet(iidbMisc, ds.dev1, ds.dev2)">idbSet</b-button> -->
              <b-button size="is-small" @click="idbStart()">idbStart</b-button>
              <b-button size="is-small" @click="idbRemove(idbSQue, ds.dev1)">remove queue</b-button>
              <b-button size="is-small" @click="idbHandleSQueue()">idbHandleSQueue</b-button>
              <b-button size="is-small" @click="syncLSlocalDB()">syncLSlocalDB</b-button>
              <b-button size="is-small" @click="idbClear(idbCls)">remove ALL</b-button>
              <!-- <b-button @click="getjudge(idbCls, ds.dev1)">getjudge</b-button> -->
              <b-button size="is-small" @click="testlog()">testlog</b-button>
              <br />
              <b-button size="is-small" @click="idbTEST1()">idbTEST 1()</b-button>
              <b-button size="is-small" @click="idbTEST2()">idbTEST 2</b-button>
              <b-button size="is-small" @click="idbTEST3()">idbTEST 3</b-button>
              <b-button size="is-small" @click="idbTEST4()">idbTEST 4</b-button>
              <b-button size="is-small" @click="idbTEST5()">idbTEST 5</b-button>
              <br />
              <b-button size="is-small" @click="dataAPIGetSelClrm()">dataAPIGetSelClrm</b-button>
              <b-button size="is-small" @click="dataIDBGetSelClrm()">dataIDBGetSelClrm</b-button>
              <b-button size="is-small" @click="datasetIDBGetALL()">idbTEST 3</b-button>

              <b-switch sise="is-small" v-model="sett.devshow">devshow : {{ sett.devshow }}</b-switch>
              <template v-if="sett.devshow">
                <b-switch size="is-small" v-model="sett.devshowMem">member</b-switch>
                <template v-if="classmembers.length > 0 && sett.devshowMem">
                  {{
                  classmembers[0]
                  }}
                </template>
                <b-switch v-model="sett.sw1">{{ sett.sw1 }}</b-switch>
                <template v-if="sett.sw1">
                  <div>
                    yourClasses | {{ yourClasses }}
                    <!-- <b-buftton @click="deleteClrms">全削除</b-buftton> -->
                    <!-- -- {{ isAuthenticated }}          <br /> -->
                    <!-- user: {{ authd }} -->
                    <!-- <b-button label="Update" @click="updateClrm(clrm.id, crte)">Update</b-button> -->
                    <!-- <b-button @click="deleteClrm(clrm.id, crte)">Delete</b-button> -->
                    <!-- {{ clrm.index }} - {{ clrm.classcode }} - {{ clrm.studentcode }} -->
                  </div>
                  <!-- tab: {{ $store.state.tabNum }} | peri: {{ $store.state.periodical }} -->
                  <!-- <b-button @click="$store.dispatch('updateTabs', 2)">Update</b-button> -->
                </template>
                <!-- getTodayJSON {{ getTodayJSON }}      <br /> -->
                <!-- sett.alias:: {{ sett.alias }} -->
                <!-- ds.dev1 :::{{ ds.dev1 }}<br /> -->
                <!-- ds.dev2 :::{{ ds.dev2 }}<br /> -->
                <!-- ds.dev3 :::{{ ds.dev3 }}<br /> -->
                clrmShowCol {{ clrmShowCol }} dummy1::::::{{ sett.dummy1 }}
                <br />
                dummy2::::::{{ sett.dummy2 }} ::dummy3::::::{{ sett.dummy3 }}
                <br />
                <!-- <template v-if="classmembers.length>0">{{classmembers}} |</template> -->
                -- classroomIndex {{ classroomIndex }} | selClrm {{ selClrm }} |
                <!-- dataset.allClasses {{dataset.allClasses[0]}} -->
                <br />
                getTodayJSON: {{ getTodayJSON }} |
                <br />
                getTodayJSON今日:
                {{ getTodayJSON.dayofweek + ":" + getThisWeekAttnJSON[getTodayJSON.dayofweek] }} |
                <br />
                getThisWeekAttnJSON: {{ getThisWeekAttnJSON }} | {{ getThisWeekAttnJSON.Mon }}
                <br />
                getThisWeekHwicJSON:{{ getThisWeekHwicJSON }} | {{ getThisWeekHwicJSON["Thu"] }}
                <br />
                getThisWeekHwicJSON[this.selClrm.dayofweek]
                {{ getThisWeekHwicJSON[selClrm.dayofweek] }}| attnHWEditTgt {{ attnHWEditTgt }}
                <br />
                getThisWeekLssnJSON:{{ getThisWeekLssnJSON }} | {{ getThisWeekLssnJSON["Thu"] }}
                <br />
                isEnteredselClrm: {{ isEnteredselClrm }} |
                <br />
                <!-- getEditableUntilJSON: {{ getEditableUntilJSON }} -->
                getThisSaturday {{getThisSaturday}}
                <br />
                getLatestJSON: {{ getLatestJSON.Mon.lessonnum }} - {{ getLatestJSON.Tue.lessonnum }} - {{ getLatestJSON.Wed.lessonnum }} - {{ getLatestJSON.Thu.lessonnum }} -{{ getLatestJSON.Fri.lessonnum }}
                :: {{ getLatestJSON }}
                <br />
                <br />dayChainJSON:
                <b-switch v-model="sett.sw2" size="is-small">{{ sett.sw2 }}</b-switch>
                <template v-if="sett.sw2">{{ dayChainJSON }}</template> |
                <br />
                getDayChainUntilPrevJSON: {{ getDayChainUntilPrevJSON }}|
                <br />
                monthChainUntilCurrentMonthJSON: {{ monthChainUntilCurrentMonthJSON }}
                <br />
                <!-- {{indiRow}} -->
                <!-- <ul>        <li v-for="sm in dataSummary" :key="sm.classcode">{{ sm }}</li>   </ul> -->
                <b-icon pack="fas" icon="star" size="is-large" type="is-syncdone"></b-icon>
                <b-icon pack="fas" icon="star-half-alt" size="is-large" type="is-syncsome"></b-icon>
                <b-icon pack="fas" icon="grin-stars" size="is-large" type="is-attndone"></b-icon>
              </template>A0042_19117001
            </div>
            <!-- <div class="column">            </div> -->
          </div>
          dataIDB {{ dataIDB.Clrms.length }} | dataAPI: {{ dataAPI.Clrms.length }} | dataLS:
          {{ dataLS.Clrms.length }} ||| {{ dataset.Clrms.length }} ||| source = {{ dataset.source }}
          <br />
          allClasses; {{ dataset.allClasses.length }} | yours | {{ yourClasses.length }} | .Smry:{{
          dataset.Smry.length
          }}
          <b-field>
            <b-numberinput v-model="dev.classCLimit" controls-position="compact" size="is-small"></b-numberinput>
            <b-button @click="TESTarr3()" size="is-small">classroomDS</b-button>
          </b-field>
          <ul>
            ---indexedDB
            <li v-for="r in TESTarr1" :key="r.s">
              {{ r.classcode }} - {{ r.studentname }} 1 {{ getAttendSymbol(r.attn01) }} 2
              {{ getAttendSymbol(r.attn02) }} 3 {{ getAttendSymbol(r.attn03) }} 4
              {{ getAttendSymbol(r.attn04) }} -{{ r.homeworkincomplete04 }} - {{ r.ecom01 }} c2:{{
              getDateMDhmmss(r.cust02)
              }}
              c3:{{ getDateMDhmmss(r.cust03) }}- {{ getDateMDhmmss(r._lastChangedAt) }} e1:{{
              getDateMDhmmss(r.eval01)
              }}- {{ getDateMDhmmss(r.ecom01) }}
            </li>----classmembers
            <li v-for="r in TESTarr2" :key="r.s">
              {{ r.classcode }} - {{ r.studentname }} 1 {{ getAttendSymbol(r.attn01) }} 2
              {{ getAttendSymbol(r.attn02) }} 3 {{ getAttendSymbol(r.attn03) }} 4
              {{ getAttendSymbol(r.attn04) }} -{{ r.homeworkincomplete04 }} - {{ r.ecom01 }} c2:{{
              getDateMDhmmss(r.cust02)
              }}
              c3:{{ getDateMDhmmss(r.cust03) }}- {{ getDateMDhmmss(r._lastChangedAt) }} e1:{{
              getDateMDhmmss(r.eval01)
              }}- {{ getDateMDhmmss(r.ecom01) }}
              <!-- {{ $dayjs(r.up).format("M/D H:mm") }} - {{ r }} -->
            </li>----DataStore
            <li v-for="r in sett.dummyClrm" :key="r.s">
              {{ r.classcode }} - {{ r.studentname }} 1 {{ getAttendSymbol(r.attn01) }} 2
              {{ getAttendSymbol(r.attn02) }} 3 {{ getAttendSymbol(r.attn03) }} 4
              {{ getAttendSymbol(r.attn04) }} -{{ r.homeworkincomplete04 }} - {{ r.ecom01 }} c2:{{
              getDateMDhmmss(r.cust02)
              }}
              c3:{{ getDateMDhmmss(r.cust03) }}- {{ getDateMDhmmss(r._lastChangedAt) }} e1:{{
              getDateMDhmmss(r.eval01)
              }}- {{ getDateMDhmmss(r.ecom01) }}
            </li>----dataAPI
            <li v-for="r in TESTarr4" :key="r.s">
              {{ r.classcode }} - {{ r.studentname }} 1 {{ getAttendSymbol(r.attn01) }} 2
              {{ getAttendSymbol(r.attn02) }} 3 {{ getAttendSymbol(r.attn03) }} 4
              {{ getAttendSymbol(r.attn04) }} -{{ r.homeworkincomplete04 }} - {{ r.ecom01 }} c2:{{
              getDateMDhmmss(r.cust02)
              }}
              c3:{{ getDateMDhmmss(r.cust03) }}- {{ getDateMDhmmss(r._lastChangedAt) }} e1:{{
              getDateMDhmmss(r.eval01)
              }}- {{ getDateMDhmmss(r.ecom01) }}
            </li>----dataLS
            <li v-for="r in TESTarr5" :key="r.s">
              {{ r.classcode }} - {{ r.studentname }} 1 {{ getAttendSymbol(r.attn01) }} 2
              {{ getAttendSymbol(r.attn02) }} 3 {{ getAttendSymbol(r.attn03) }} 4
              {{ getAttendSymbol(r.attn04) }} -{{ r.homeworkincomplete04 }} - {{ r.ecom01 }} c2:{{
              getDateMDhmmss(r.cust02)
              }}
              c3:{{ getDateMDhmmss(r.cust03) }}- {{ getDateMDhmmss(r._lastChangedAt) }} e1:{{
              getDateMDhmmss(r.eval01)
              }}- {{ getDateMDhmmss(r.ecom01) }}
            </li>
          </ul>
        </div>
      </template>
      <!-- 管理用 -->
      <!-- ABリスト -->
      <template v-if="cRoom.showABList">
        <section v-if="cRoom.showABList">
          <div class="columns">
            <div class="column is-half" v-show="cRoom.showABListShowA">
              <div class="has-text-centered f40">Group A</div>
              <div class="f26" style="margin: 0px 40px;">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th v-show="cRoom.showABListStudentCode">Code</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="itemA in classmembersA" :key="itemA.classcount">
                      <td>{{ itemA.classcount }}</td>
                      <td v-show="cRoom.showABListStudentCode">({{ itemA.studentcode }})</td>
                      <td>{{ itemA.studentname }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="column is-half is-centered" v-show="cRoom.showABListShowB">
              <div class="has-text-centered f40">Group B</div>
              <div class="f26" style="margin: 0px 40px;">
                <table class="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th v-show="cRoom.showABListStudentCode">Code</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="itemB in classmembersB" :key="itemB.classcount">
                      <td>{{ itemB.classcount }}</td>
                      <td v-show="cRoom.showABListStudentCode">({{ itemB.studentcode }})</td>
                      <td>{{ itemB.studentname }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <!-- <b-button size="is-large" @click="cRoom.showABListCaptionChange" expanded>{{cRoom.showABListCaption}}</b-button> -->
          <b-button
            icon-left="people-arrows"
            size="is-medium"
            @click="cRoom.showABList = !cRoom.showABList"
            expanded
          >A / B</b-button>
          <!-- <b-tooltip label="Visibility change" size="is-large" always>
        <b-switch size="is-large" v-model="cRoom.showABListStudentCode">Student Code</b-switch>
          </b-tooltip>-->
        </section>
      </template>
      <!-- 上部表示 -->
      <section v-show="!cRoom.showABList">
        <nav class="level">
          <div class="level-left">
            <div class="column upper-left-corner is-one-quater">
              {{ sett.actime }}
              <!-- {{ dayACjsHmm }} -->
              <span style="font-size: 22px;">{{ dayACjsA }}</span>
              {{ dayACjsdddMMMD }}
            </div>
          </div>
          <div class="level-item">
            <div class="column upper-top">
              <b-tag rounded v-show="!ifYouClockIn" class="is-pinkishclear">not clocked in</b-tag>
              {{ " " + authdetail.name }}
            </div>
          </div>
        </nav>
      </section>
      <!-- ここから -->
      <section>
        <b-tabs
          v-model="sett.activeTab"
          size="is-large"
          position="is-right"
          v-show="!cRoom.showABList"
          @change="periodicValidation"
        >
          <!-- 管理用画面 !!!!!!管理者!!!!!--------------------------------- 管理用画面-->
          <b-tab-item label="Info" icon="info-circle">
            <!-- ----- information ----- -->
            <!-- ----- information ----- -->
            <section class="p40">
              <p class="title">Information</p>
              <b-collapse
                class="card"
                animation="slide"
                v-for="(collapse, index) of bBoardArticles"
                :key="index"
                :open="bBoard.isOpen == index"
                @open="bBoard.isOpen = index"
              >
                <div slot="trigger" slot-scope="props" class="card-header" role="button">
                  <p class="card-header-title">{{ collapse.title }}</p>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"></b-icon>
                  </a>
                </div>
                <div class="card-content">
                  <span v-html="collapse.text"></span>
                </div>
              </b-collapse>
            </section>
            <!-- ----- ManageSuper Clock in / Clock out ----- -->
            <!-- ----- ManageSuper Clock in / Clock out ----- -->

            <!-- ----- Clock in / Clock out ----- -->
            <section class="p40">
              <p class="title">Attendance</p>
              <b-collapse
                class="card"
                animation="slide"
                aria-id="contentIdForA11y3"
                @open="periodicValidation"
                @close="periodicValidation"
              >
                <div
                  slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button"
                  aria-controls="contentIdForA11y3"
                >
                  <p class="card-header-title"></p>
                  <a class="card-header-icon">
                    <b-icon :icon="props.open ? 'angle-down' : 'angle-up'"></b-icon>
                  </a>
                </div>
                <transition name="people-fade">
                  <!-- <div class="card-content" v-if="instructor.showPeople">
                    <p class="subtitle-mb10">People now</p>
                  <span v-for="k in instructor.peopleNow" :key="k">
                    <b-tag rounded size="is-large" type="is-smile" class="tagfor">
                      <b-icon icon="smile" size="is-medium"></b-icon>
                      <span>{{ k }}</span>
                    </b-tag>
                    </span>
                  </div>-->
                </transition>
                <div class="card-content">
                  <p class="subtitle">Your record</p>
                  <div class="content">
                    <b-field>
                      <b-radio-button
                        v-for="(m, index) in monthChainUntilCurrentMonthJSON"
                        :key="index"
                        :native-value="m"
                        v-model="instructor.yourattendvisiblemonth"
                      >{{ m }}</b-radio-button>
                    </b-field>
                    <b-table :data="yourattendancesMonth">
                      <template slot-scope="props">
                        <b-table-column
                          field="date"
                          label="Date"
                          width="150"
                        >{{ getDateMDddd(props.row.date) }}</b-table-column>
                        <b-table-column field="clockin" label="In">
                          {{ props.row.clockin
                          }}{{ addParenthesisIfCorrectExists(props.row.clockincorrect) }}
                        </b-table-column>
                        <b-table-column field="clockout" label="Out">
                          {{ props.row.clockout
                          }}{{ addParenthesisIfCorrectExists(props.row.clockoutcorrect) }}
                        </b-table-column>
                        <b-table-column field="detail" label="Note">{{ props.row.detail }}</b-table-column>
                      </template>
                    </b-table>
                  </div>
                  <!-- Submit ClockInOut -->
                  <div class="columns">
                    <div class="column">
                      <b-button
                        icon-left="user-check"
                        size="is-large"
                        @click="instClockIn()"
                        class="is-pulled-right"
                        :disabled="ifYouClockIn"
                      >Clock in</b-button>
                    </div>
                    <div class="column">
                      <b-button
                        icon-left="snowboarding"
                        size="is-large"
                        @click="instClockOut()"
                        :disabled="!ifYouClockInAndStillIn"
                      >Clock out</b-button>
                    </div>
                  </div>
                </div>
                <footer class="card-footer"></footer>
              </b-collapse>
            </section>
            <div class="columns">
              <div class="column is-size-4 has-text-grey-light">Ver. {{ app.version }}</div>
              <div class="column">
                <amplify-sign-out class="is-pulled-right"></amplify-sign-out>
              </div>
            </div>
          </b-tab-item>
          <!-- schedule --------------------------------------------------------------------schedule -->
          <!-- schedule --------------------------------------------------------------------schedule -->
          <b-tab-item label="Schedule" icon="calendar-alt" :disabled="isClrmLoading">
            <section class="columns is-centered" style="font-size: 16px; padding: 20px 10px;">
              <div class="column"></div>
              <div class="column">
                <div class="has-text-centered f40">Classes</div>
              </div>
              <!-- たぶん集計関連 -->
              <div class="column f18 has-text-right" style="padding:40px 0px 0px 0px;">
                <!-- <b-field>
                  <b-switch v-model="cRoom.showClassesSum" @input="chkClassesSum">Total Counts</b-switch>
                  <template v-if="cRoom.showClassesSum"></template>
                </b-field>-->
                <b-switch v-model="cRoom.showDummy">
                  <span v-show="!cRoom.showDummy" style="color:#c5c5c5">Dummy</span>
                  <span v-show="cRoom.showDummy" style="color:#a0e">Dummy</span>
                </b-switch>
              </div>
            </section>
            <!-- /////////////// selClrm -->
            <section class="columns is-centered" style="font-size: 16px; padding: 10px 10px;">
              <div class="column"></div>
              <div
                class="column"
                :class="selClrm.dayofweek === dayjsddd ? 'dayofweekToday' : 'dayofweekTodayNot'"
                v-if="isOpenselClrm"
              >
                <div
                  class="columns"
                  :class="selClrm.dayofweek === dayjsddd ? 'dayofweekToday' : 'dayofweekTodayNot'"
                  style="width:500px;padding:0px 15px;"
                >
                  <div class="content column is-9" style="margin-bottom:0px">
                    <h3>
                      {{ selClrm.id }}
                      {{ selClrm.grade }}({{ selClrm.classnum }})
                      <b-icon
                        v-show="selClrm.sumNg > 0"
                        icon="exclamation-triangle"
                        size="is-medium"
                        type="is-danger"
                      ></b-icon>
                    </h3>
                    <p class="f23">
                      {{ selClrm.dayofweek }}
                      {{ selClrm.slot }}
                      {{ selClrm.timefrom }}-{{ selClrm.timeto }}
                      <span
                        style="font-size:16px;"
                      >room:</span>
                      {{ selClrm.roomnum }}
                      <br />
                      <span style="font-size:20px;">{{ selClrm.title }}</span>
                      <span style="font-size:20px;">{{ selClrm.classtitle }}</span>
                      <br />
                      <span
                        class="is-text-4 has-text-weight-bold"
                      >Lesson No. {{ selClrm.lssnthisweek }}</span>
                    </p>
                  </div>
                  <div class="column is-3">
                    <template v-if="!isClrmLoading">
                      <template v-if="!this.cRoom.fixAwait">
                        <b-button
                          pack="fas"
                          icon-left="hand-point-right"
                          size="is-large"
                          @click="enterClassroom"
                        >Go</b-button>
                      </template>
                      <template v-else>
                        <b-button loading size="is-large" class="w60"></b-button>
                      </template>
                    </template>
                    <template v-else>
                      <span class="subtitle is-3 has-text-black">(Loading...)</span>
                      <b-loading
                        :is-full-page="false"
                        :active.sync="isClrmLoading"
                        :can-cancel="false"
                      >
                        <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
                      </b-loading>
                    </template>
                  </div>
                </div>
                <!-- 追加情報 -->
                <!-- HWIC警告 -->
                <template v-if="checkIfHwic(selClrm.detail)">
                  <div class="columns is-gapless">
                    <div class="column">
                      <b-icon pack="fas" icon="exclamation" size="is-large" type="is-danger"></b-icon>
                      <span class="has-text-danger f23">
                        <b>[Absent - Homework] mismatch exists.</b>
                      </span>
                    </div>
                  </div>
                </template>
                <div
                  class="columns is-gapless"
                  :class="selClrm.dayofweek === dayjsddd ? 'dayofweekToday' : 'dayofweekTodayNot'"
                >
                  <!-- <div class="columns is-gapless"> -->
                  <!-- <div class="column"></div> -->
                  <div class="column">
                    <!-- Sync status -->
                    <template v-if="selClrm.syncdone">
                      <b-icon pack="fas" icon="star" size="is-large" type="is-syncdone"></b-icon>
                    </template>
                    <template v-else-if="selClrm.syncdone === false">
                      <b-icon pack="fas" icon="star-half-alt" size="is-large" type="is-syncsome"></b-icon>
                    </template>
                    <template v-else></template>
                  </div>
                  <div class="column">
                    <!-- Attendance record completion -->
                    <template v-if="selClrm.attndone">
                      <b-icon pack="fas" icon="grin-stars" size="is-large" type="is-attndone"></b-icon>
                    </template>
                    <template v-else-if="selClrm.attndone === false"></template>
                    <template v-else></template>
                    <!-- いまのところfalseもnullも同じ扱い -->
                  </div>
                  <div class="column">
                    <!-- Force Sync 手動アップロード -->
                    <template v-if="isClrmNeedAppSync">
                      <template v-if="!isClrmAppSyncUploading">
                        <b-button
                          pack="fas"
                          icon-left="sync-alt"
                          size="is-large"
                          @click="manageupdateClrmAllAPI"
                        >Force Sync</b-button>
                        <template
                          v-if="ClrmAppSyncBegin != 0 && ClrmAppSyncBegin == ClrmAppSyncEnd"
                        >
                          <!-- <template v-if="ClrmAppSyncStateShow"> -->
                          <template v-if="ClrmAppSyncState">
                            <b-icon
                              pack="fas"
                              icon="check-circle"
                              size="is-large"
                              type="is-success"
                            />
                            <span class="is-text-2 has-text-weight-bold is-syncdone">Sync Success</span>
                          </template>
                          <template v-else>
                            <b-icon
                              pack="fas"
                              icon="times-circle"
                              size="is-large"
                              type="is-danger"
                            />
                            <span
                              class="is-text-2 has-text-weight-bold"
                            >Sync Failed. Please try again.</span>
                          </template>
                        </template>
                      </template>
                      <template v-else>
                        <span class="subtitle is-3 has-text-black">(Uploading...)</span>
                        <b-loading
                          :is-full-page="false"
                          :active.sync="isClrmAppSyncUploading"
                          :can-cancel="false"
                        >
                          <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
                        </b-loading>
                      </template>
                    </template>
                  </div>
                </div>
                <!-- </div> -->
              </div>
              <div class="column f18"></div>
            </section>
            <section
              class="columns is-centered"
              style="font-size: 16px; padding: 0px 10px;"
              v-if="isOpenselClrm"
            >
              <template v-if="cRoom.showClassesSum"></template>
            </section>
            <!-- クラス一覧 -->
            <section class="columns is-centered" style="font-size: 16px; padding: 20px 10px;">
              <table class="table f23">
                <thead>
                  <tr>
                    <!-- <tr style="vertical-align:bottom"> -->
                    <!-- <th colspan="2" class="is-size-6 has-text-grey has-text-light">updates</th> -->
                    <th v-if="sett.devcheck"></th>
                    <th style="vertical-align:bottom">Code</th>
                    <th></th>
                    <!-- <th class="is-size-7 has-text-light">new</th> -->
                    <!-- <th></th> -->
                    <th style="vertical-align:bottom">Day</th>
                    <th style="vertical-align:bottom">Slot</th>
                    <th style="vertical-align:bottom" v-show="!cRoom.showClassesSum">Time</th>
                    <th style="vertical-align:bottom" v-show="!cRoom.showClassesSum">Room</th>
                    <!-- <th v-show="cRoom.showClassesSum">
                      <b-icon icon="user" size="is-small"></b-icon>
                    </th>

                    <th
                      v-for="(k, index) in manage.vforEdit"
                      :key="`first-${index}`"
                      style="padding:5px 5px 0px 15px;"
                      v-show="cRoom.showClassesSum && manage.showNumClassesSum % 2 === 0"
                    >
                      <span class="f18">{{ k.md + 1 }}</span>
                    </th>

                    <th
                      v-for="(l, index) in manage.vforEval"
                      :key="`second-${index}`"
                      style="padding:5px 5px 0px 10px;"
                      v-show="cRoom.showClassesSum && manage.showNumClassesSum > 0"
                    >
                      <span class="f18">{{ l.cap }}</span>
                    </th>-->
                    <th style="vertical-align:bottom">Title</th>
                    <th style="vertical-align:bottom">
                      <span style="font-size:20px">Lesson</span>
                    </th>
                    <th style="vertical-align:bottom">
                      <span style="font-size:18px;">
                        <span style="color:rgb(203, 134, 212)">Sync</span> /
                        <span style="color:#eb546d">Attendance</span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody class="cPointer">
                  <tr v-for="yitem in yourClassesShow" :key="yitem.id">
                    <td v-if="sett.devcheck">
                      {{ yitem.detail }}|
                      <!-- {{ getTimeIfTodayOrDate(yitem.newest) }} -->
                      sy:{{ yitem.syncdone }}
                      <!-- <template v-if="yitem.syncdone">1</template>
                      <template v-else-if="yitem.syncdone === false">2</template>
                      <template v-else>3</template>-->
                      at:{{ yitem.attndone }}
                      <!-- <template
                        v-if="yitem.attndone"
                      >1</template>
                      <template v-else-if="yitem.attndone === false">2</template>
                      <template v-else>3</template>-->
                    </td>
                    <!-- <td
                      style="padding:10px 2px 0px 2px;width:10px"
                      class="has-text-centered is-size-6"
                      :class="getIsDoneToday(yitem.oldest)"
                    >{{ getTimeIfTodayOrDate(yitem.oldest) }}</td>-->

                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.id }}</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.grade }}({{ yitem.classnum }})</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.dayofweek }}</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.slot }}</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >
                      <div class="is-pulled-right">{{ yitem.timefrom }}-{{ yitem.timeto }}</div>
                    </td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >{{ yitem.roomnum }}</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >{{ yitem.classtitle | subStr }}</td>
                    <td
                      :class="{ dayofweekToday: yitem.dayofweek === dayjsddd }"
                      class="is-size-3 has-text-weight-bold"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >
                      <span
                        :class="{ hasTextGreyLighter: yitem.lssnthisweek == null}"
                      >{{ yitem.lssnthisweek }}dddd</span>
                    </td>

                    <td
                      style="padding:10px 2px 0px 2px;width:10px"
                      class="has-text-centered is-size-6"
                    >
                      <!-- :class="getIsDoneToday(yitem.newest)" -->
                      <div class="columns is-gapless">
                        <!-- Sync status -->
                        <div class="column">
                          <template v-if="yitem.syncdone">
                            <b-icon pack="fas" icon="star" size="is-large" type="is-syncdone"></b-icon>
                          </template>
                          <template v-else-if="yitem.syncdone === false">
                            <b-icon
                              pack="fas"
                              icon="star-half-alt"
                              size="is-large"
                              type="is-syncsome"
                            ></b-icon>
                          </template>
                          <template v-else></template>
                        </div>
                        <!-- Attendance record completion -->
                        <div class="column">
                          <template v-if="yitem.attndone">
                            <b-icon pack="fas" icon="grin-stars" size="is-large" type="is-attndone"></b-icon>
                          </template>
                          <template v-else-if="yitem.attndone === false"></template>
                          <template v-else></template>
                        </div>
                        <!-- Attendance record completion -->
                        <div class="column">
                          <template v-if="checkIfHwic(yitem.detail)">
                            <b-icon pack="fas" icon="exclamation" size="is-large" type="is-danger"></b-icon>
                          </template>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <br />
            <br />
            <!-- リセット -->
            <!-- <div class="columns">
              <div class="column">
                <b-switch size="is-small" v-model="app.showClearCache" style="margin:10px">
                  <span style="color:#c5c5c5">Clear cache</span>
                </b-switch>
                <b-button
                  size="is-small"
                  @click="clearAllDataStoreConfirm()"
                  v-if="app.showClearCache"
                  >Clear all local cache data</b-button
                >
              </div>
            </div>-->
          </b-tab-item>
          <!-- classroom --------------------------------------------------------------------classroom -->
          <!-- <b-tab-item> -->
          <b-tab-item label disabled icon="chalkboard-teacher">
            <!-- <template v-if="selClrm.type !== undefined"> -->
            <!-- UI in common among attendance and evaluation view 一段目-->
            <!-- UI in common among attendance and evaluation view 一段目-->
            <nav class="level">
              <div class="level-left">
                <div class="level-item f30" style="margin-bottom: 10px;">
                  <div>
                    <p>
                      {{ selClrm.id }}
                      {{ selClrm.grade }}
                      ({{ selClrm.classnum }})
                      {{ selClrm.dayofweek }}
                      {{ selClrm.slot }}
                      {{ selClrm.timefrom }} -
                      {{ selClrm.timeto }}
                      <!-- room:{{ selClrm.room }} -->
                    </p>
                    <p class="subtitle" style="line-height:0.8em;">
                      {{ selClrm.classtitle }}
                      <b>Lesson {{ selClrm.lssnthisweek }}</b>
                    </p>
                  </div>
                </div>
              </div>
              <!-- UI in evaluation view -->
              <div class="level-right">
                <div class="level-item" v-show="cRoom.showIndividual">
                  <b-switch v-model="cRoom.showIndiList">
                    <div style="margin-right:10px;">List</div>
                  </b-switch>
                  <b-button
                    class="w40"
                    icon-left="chevron-left"
                    size="is-medium"
                    @click="manageIndiNo(-1)"
                  ></b-button>
                  <b-button
                    class="w40"
                    icon-left="chevron-right"
                    size="is-medium"
                    @click="manageIndiNo(1)"
                  ></b-button>
                  <b-button
                    style="margin-left:10px"
                    class="level-item w80"
                    size="is-medium"
                    @click="showEvalCompChange()"
                  >
                    <b-icon pack="fas" icon="map" size="is-medium" />
                    <!-- <b-icon pack="fas" icon="star" size="is-medium" />
                  <span class="has-text-grey-light">{{ " | " }}</span>
                    <b-icon pack="fas" icon="comment" size="is-medium" />-->
                  </b-button>
                </div>
                <b-button
                  v-show="!cRoom.attnEditable"
                  class="level-item w40"
                  icon-left="binoculars"
                  size="is-medium"
                  @click="showIndividualChange"
                ></b-button>
              </div>
            </nav>
            <!-- UI in attendance  view 二段目-->
            <!-- UI in attendance  view 二段目-->
            <nav class="level" v-show="!cRoom.showIndividual">
              <div class="level-left">
                <div class="level-item f30" style="margin-bottom: 10px;">
                  <div style="width: 250px; margin: 20px;" v-show="att.mode != 3">
                    <b-progress
                      :value="att.modeset[`${att.mode}`].pct"
                      size="is-large"
                      :type="att.modeset[`${att.mode}`].colortype"
                      show-value
                    >
                      <span style="font-size: 28px; color: black;">
                        {{
                        att.modeset[`${att.mode}`].barcaption
                        }}
                      </span>
                    </b-progress>
                  </div>
                </div>
                <div class="level-left" style="width: 200px; height: 80px;">
                  <button
                    v-show="att.mode < 2"
                    class="button is-medium"
                    @click="attnModeChangeConfirm"
                  >change</button>
                  <b-button
                    v-show="att.mode === 2"
                    class="button is-medium"
                    @click="attnModeRestartConfirm"
                    icon-left="undo-alt"
                  ></b-button>
                </div>
                <b-button
                  icon-left="people-arrows"
                  size="is-medium"
                  @click="cRoom.showABList = !cRoom.showABList"
                >A / B</b-button>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <!-- 後日修正用 -->
                  <b-button
                    v-show="isdeadlinelenient"
                    class="button is-medium is-beige"
                    @click="attnModeChangeRegardlessOfTheDayConfirm()"
                    icon-left="edit"
                  >
                    <!-- <template v-if="att.mode === 3">previous</template> -->
                    <template v-if="!cRoom.attnEditable">edit</template>
                    <template v-else>exit edit mode</template>
                  </b-button>
                  <!-- 編集モードでは見せない -->
                  <b-button
                    v-show="!cRoom.attnEditable && selClrm.dayofweek === getTodayJSON.dayofweek"
                    icon-left="hand-paper"
                    size="is-medium"
                    @click="showAttenChange"
                    style="margin-right:20px;"
                  >
                    History
                    <!-- / <b-icon icon="pen-nib" size="is-medium" /> Evaluation -->
                  </b-button>
                </div>
              </div>
            </nav>
            <!-- --classroom--------------------------------------------table------------------------------ -->
            <!-- --classroom--------------------------------------------table------------------------------ -->
            <section v-show="!cRoom.showIndividual">
              <!-- {{ classmembers }} -->
              <b-table
                :data="classmembers"
                :mobile-cards="sett.hasMobileCards"
                :sticky-header="stickyHeaders"
              >
                <template slot-scope="props">
                  <b-table-column
                    field="sync"
                    label
                    style="padding:8px 0px 0px 0px;width:10px"
                    class="has-text-centered"
                    width="10"
                    sticky
                  >
                    <template
                      v-if="sett.devcheck"
                    >{{ $dayjs(props.row._lastChangedAt).format("M/D H:mm") }}</template>
                  </b-table-column>
                  <b-table-column
                    field="sortid"
                    label="No."
                    width="15"
                    numeric
                    sortable
                    sticky
                    :class="getAttendStatusClass(props.row[selClrm.attnthisweek])"
                  >
                    <span class="f23">{{ props.row.classcount }}</span>
                  </b-table-column>
                  <b-table-column
                    field="group"
                    label="Group"
                    width="20"
                    sticky
                    sortable
                    :class="getAttendStatusClass(props.row[selClrm.attnthisweek])"
                  >
                    <div class="f30">
                      <b-tag
                        size="is-small"
                        rounded
                        :class="props.row.group == 'A' ? 'ab-a' : 'ab-b'"
                      >
                        <span class="f23 fb">{{ props.row.group }}</span>
                      </b-tag>
                    </div>
                  </b-table-column>
                  <b-table-column
                    field="studentcode"
                    label="Code"
                    width="50"
                    sortable
                    sticky
                    :class="getAttendStatusClass(props.row[selClrm.attnthisweek])"
                  >{{ props.row.studentcode }}</b-table-column>
                  <b-table-column
                    field="studentname"
                    label="Name"
                    sortable
                    width="220"
                    sticky
                    :class="getAttendStatusClass(props.row[selClrm.attnthisweek])"
                  >
                    <span class="f23">{{ props.row.studentname }}</span>
                  </b-table-column>
                  <!-- v-for attendance loop -->
                  <b-table-column
                    v-for="(aa, index) in manage.vforAttn"
                    :key="`attv-${index}`"
                    :field="aa.at"
                    :label="aa.lb"
                    :visible="clrmShowCol[aa.sc]"
                    :class="getAttendStatusClassHist(props.row[aa.at])"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      <template v-if="cRoom.attnEditable">
                        <div class="f23">
                          {{ column.label }}
                          <b-radio-button
                            size="is-medium"
                            v-model="cRoom.attnEditTgt"
                            :native-value="aa.at"
                            style="border:solid 1px #666; border-radius: 0.3em;"
                            inverted
                            outlined
                          >
                            <span class="f23">{{ getDateMD(aa.md) }}</span>
                          </b-radio-button>
                        </div>
                      </template>
                      <template v-else>
                        {{ column.label }}
                        <br />
                        <span class="f18">{{ getDateMD(aa.md) }}</span>
                      </template>
                    </template>
                    {{ getAttendSymbol(props.row[aa.at]) }}
                  </b-table-column>
                  <!-- UI for create Attendance record -->
                  <b-table-column
                    field="attendrec"
                    :visible="cRoom.showAttenHist === 0"
                    label="Attendance"
                    width="200"
                  >
                    <!-- 2020-10-15 tile削除。padding邪魔してた。全く不要 -->
                    <!-- <div class="tile is-ancestor" style="z-index: 1;">
                      <div class="tile is-parent">
                    <div class="tile is-child">-->
                    <!-- <b-button @click="updateClrmAPI(props.row, cRoom.attnEditTgt, att.modeset[att.mode].title)">present ClrmAPI</b-button>
                    <b-button @click=" updateClrmAPI(props.row, cRoom.attnEditTgt, att.modeset[att.mode].title2)">absent API</b-button>-->
                    <b-field v-show="att.mode < 2">
                      <b-radio-button
                        size="is-medium"
                        v-model="props.row[cRoom.attnEditTgt]"
                        :native-value="att.modeset[att.mode].title"
                        :type="att.modeset[att.mode].colortype"
                        @input="
                          updateClrm(props.row, cRoom.attnEditTgt, att.modeset[att.mode].title)
                        "
                      >
                        <div :class="att.modeset[att.mode].colortype">
                          <b-icon icon="check"></b-icon>
                          <span>{{ att.modeset[att.mode].title }}</span>
                        </div>
                      </b-radio-button>
                      <b-radio-button
                        size="is-medium"
                        v-model="props.row[cRoom.attnEditTgt]"
                        :native-value="att.modeset[att.mode].title2"
                        type="is-danger"
                        @input="
                          updateClrm(props.row, cRoom.attnEditTgt, att.modeset[att.mode].title2)
                        "
                      >
                        <b-icon icon="times"></b-icon>
                        <span>{{ att.modeset[att.mode].title2 }}</span>
                      </b-radio-button>
                    </b-field>
                    <!-- </div>
                      </div>
                    </div>-->
                  </b-table-column>
                  <!-- Homework Incomplete -->
                  <b-table-column field="homeworkincomplete" label="Homework Incomplete" width="30">
                    <div class="tile is-ancestor">
                      <div>
                        <div class="tile is-child">
                          <b-field>
                            <!--  第一回目は宿題が無い -->
                            <span class="hwtotal" v-show="attnHWEditTgt !== 'homeworkincomplete01'">
                              <!-- {{ props.row.homeworkincomplete20 + (props.row[attnHWEditTgt] === false ? 1 : 0) }} -->
                              {{ getHWTotal(props.row) }}
                            </span>
                            <span style="color:#fff">-</span>
                            <b-checkbox-button
                              v-model="props.row[attnHWEditTgt]"
                              type="is-danger"
                              rounded
                              :disabled="att.mode === 3 || attnHWEditTgt == 'homeworkincomplete01'"
                              @input="
                                updateClrm(props.row, attnHWEditTgt, props.row[attnHWEditTgt])
                              "
                            >
                              <b-icon icon="book-open"></b-icon>HW
                            </b-checkbox-button>
                          </b-field>
                        </div>
                      </div>
                    </div>
                  </b-table-column>
                  <!-- --------------------------------------evaluation -->
                  <!-- --------------------------------------evaluation -->
                  <!-- --------------------------------------evaluation history-->
                </template>
              </b-table>
            </section>
            <!-- individual view-->
            <template v-if="classmembers.length > 0">
              <section v-show="cRoom.showIndividual">
                <div class="tile is-ancestor is-marginless is-paddingless">
                  <div :class="getIndiPaneClass('left')">
                    <div class="tile is-parent is-vertical">
                      <div class="tile is-child box">
                        <nav class="level">
                          <!-- <nav class="level" :class="getIsDoneToday(indiRow._lastChangedAt)"> -->
                          <div class="level-left title">
                            {{ indiRow.classcount + ". " }}
                            <div style="margin:0px 3px;"></div>
                            <span class="has-text-grey-light">{{ indiRow.studentcode + " " }}</span>
                            <div style="margin:0px 3px;"></div>
                            {{ " " + indiRow.studentname }}
                            <div style="margin:0px 10px;"></div>
                            <span class="is-size-5 has-text-grey-light"></span>
                            <!-- タイムスタンプあとまわし表示<span class="is-size-5 has-text-grey">
                              {{ getTimeIfTodayOrDate(indiRow._lastChangedAt) }}
                            </span>-->
                          </div>
                          <div class="level-right title is-4">
                            <!-- 期末対応 -->
                            <!-- <b-switch
                              size="is-medium"
                              v-model="cRoom.showAttnEval"
                              v-show="cRoom.showEvalComp === 2"
                            >
                              <div style="margin-right:20px;">Attendance</div>
                            </b-switch>-->
                            <!-- 期末対応 -->
                            <b-tag
                              rounded
                              :class="getAttendStatusClass(indiRow[selClrm.attnthisweek])"
                              style="font-size:25px"
                            >
                              {{
                              indiRow[selClrm.attnthisweek] === null
                              ? "(attendance unconfirmed)"
                              : indiRow[selClrm.attnthisweek]
                              }}
                            </b-tag>
                          </div>
                        </nav>
                        <article v-show="!cRoom.showEvalSingle">
                          <!-- indi ---------- [ view showEvalComp 0 ] -->
                          <section class="columns" v-show="cRoom.showEvalComp === 0">
                            <div class="column" v-for="(j, index) in cRoom.indirep" :key="index">
                              <table class="table">
                                <tr v-for="(k, index) in cRoom.evalCriItems" :key="k.index">
                                  <template v-if="j.includes(index)">
                                    <template v-if="k.title !== 'ALC Adademy NEXT'">
                                      <template v-if="k.title !== 'Homework'">
                                        <td class="subtitle">
                                          <button
                                            class="button is-fullwidth"
                                            @click="manageEvalSingle(index)"
                                          >
                                            <span class="subtitle is-6">{{ k.title }}</span>
                                          </button>
                                        </td>
                                      </template>
                                      <template v-else>
                                        <td class="subtitle" colspan="4" height="106">
                                          {{ k.title }}
                                          <span style="color:#ce1836;">
                                            ( incomplete
                                            {{ getHWTotal(indiRow) }}
                                            )
                                          </span>
                                          <!-- {{getHWTotal(indiRow) -->
                                          <!-- {{getHWr(indiRow.homeworkincomplete02) +
                                            getHWr(indiRow.homeworkincomplete03) +
                                            getHWr(indiRow.homeworkincomplete04) +
                                          getHWr(indiRow.homeworkincomplete05)}}-->

                                          <!-- {{ indiRow.homeworkincomplete20 + (indiRow[attnHWEditTgt] === false ? 1 : 0) }}) -->
                                        </td>
                                      </template>
                                      <!-- 欠、０ボタンいっこめ -->
                                      <template v-if="k.title !== 'Homework'">
                                        <td style="padding-left:30px">
                                          <a @click="minusEvalUpTarget(indiRow, k.evl)">
                                            <b-icon
                                              pack="fas"
                                              icon="user-slash"
                                              size="is-medium"
                                              :type="
                                                indiRow[k.evl] == -1 ? 'is-slashab' : 'is-slashok'
                                              "
                                              @click="minusEvalUpTarget(indiRow, k.evl)"
                                            />
                                          </a>
                                        </td>
                                        <td style="padding-left:15px">
                                          <a @click="zeroEvalUpTarget(indiRow, k.evl)">
                                            <b-icon
                                              pack="fas"
                                              icon="ban"
                                              size="is-medium"
                                              type="is-bluedark"
                                              @click="zeroEvalUpTarget(indiRow, k.evl)"
                                            />
                                          </a>
                                        </td>
                                        <td
                                          :class="[
                                            indiRow[k.evl] == -1
                                              ? 'title is-3 is-pinkishalert'
                                              : '',
                                          ]"
                                        >
                                          <span v-show="indiRow[k.evl] == -1">absent</span>
                                          <span v-show="indiRow[k.evl] !== -1">
                                            <star-rating
                                              v-model="indiRow[k.evl]"
                                              v-show="k.p1ptshow"
                                              :show-rating="false"
                                              :star-size="k.ssize[cRoom.showEvalComp]"
                                              :max-rating="k.pt"
                                              :star-points="cRoom.customstarShape"
                                              @rating-selected="goEvalUpTarget"
                                              @current-rating="
                                                setEvalUpTarget(
                                                  $event,
                                                  indiRow,
                                                  k.evl,
                                                  cRoom.indiNo
                                                )
                                              "
                                            ></star-rating>
                                          </span>
                                          <template v-if="!k.p1ptshow">
                                            <div
                                              class="level has-text-grey f20 has-text-centered"
                                            >( tap left button to edit )</div>
                                          </template>
                                        </td>
                                        <td class="title is-4">
                                          <span v-show="indiRow[k.evl] !== -1">{{ indiRow[k.evl] }}</span>
                                        </td>
                                        <td v-show="cRoom.showEvalComp === 2">
                                          <b-button
                                            icon-left="comment"
                                            size="is-middle"
                                            @click="
                                              updateClrmEvalsIndi(indiRow, k.comm, indiRow[k.comm])
                                            "
                                          >
                                            <span
                                              v-show="!cRoom.showComEv[k.comm]"
                                              class="has-text-grey-light"
                                            >{{ indiRow[k.comm] | description(6) }}</span>
                                            <span v-show="cRoom.showComEv[k.comm]">Save</span>
                                          </b-button>
                                          <b-input
                                            type="textarea"
                                            size="is-medium"
                                            v-show="cRoom.showComEv[k.comm]"
                                            custom-class="is-hovered"
                                            style="min-width: 200px;"
                                            expanded
                                            v-model="indiRow[k.comm]"
                                          ></b-input>
                                        </td>
                                      </template>
                                    </template>
                                  </template>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td colspan="2" style="text-align:right">
                                    <span class="has-text-grey-light title is-4">Sub Total :</span>
                                    <span
                                      :class="[
                                        cRoom.showEvalComp === 0 ? 'title is-3' : 'title is-3',
                                      ]"
                                    >{{ " " + indiSc["subtotal" + index] }}</span>
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </section>
                          <!-- indi ---------- [ view showEvalComp 1 ] -->
                          <!--               indi eval left -->
                          <section class="columns" v-show="cRoom.showEvalComp === 1">
                            <table class="table is-fullwidth">
                              <tr v-for="(k, index) in cRoom.evalCriItems" :key="k.index">
                                <template v-if="cRoom.indirep[0].includes(index)">
                                  <template v-if="k.title !== 'ALC Adademy NEXT'">
                                    <template v-if="k.title !== 'Homework'">
                                      <td>
                                        <button
                                          class="button is-fullwidth"
                                          @click="manageEvalSingle(index)"
                                        >
                                          <span class="subtitle is-3">{{ k.title }}</span>
                                        </button>
                                      </td>
                                    </template>
                                    <template v-else>
                                      <td class="subtitle is-3" colspan="4" height="86">
                                        {{ k.title }}
                                        <span
                                          style="color:#ce1836;"
                                        >( incomplete {{ getHWTotal(indiRow) }})</span>
                                        <!-- {{ indiRow.homeworkincomplete20 + (indiRow[attnHWEditTgt] === false ? 1 : 0) }}) -->
                                      </td>
                                    </template>
                                    <!-- 欠、０ボタン２つめ -->
                                    <template v-if="k.title !== 'Homework'">
                                      <td style="padding-left:30px">
                                        <a @click="minusEvalUpTarget(indiRow, k.evl)">
                                          <b-icon
                                            pack="fas"
                                            icon="user-slash"
                                            size="is-medium"
                                            :type="
                                              indiRow[k.evl] == -1 ? 'is-slashab' : 'is-slashok'
                                            "
                                            @click="minusEvalUpTarget(indiRow, k.evl)"
                                          />
                                        </a>
                                      </td>
                                      <td style="padding-left:20px">
                                        <a @click="zeroEvalUpTarget(indiRow, k.evl)">
                                          <b-icon
                                            pack="fas"
                                            icon="ban"
                                            size="is-medium"
                                            type="is-bluedark"
                                            @click="zeroEvalUpTarget(indiRow, k.evl)"
                                          />
                                        </a>
                                      </td>
                                      <td
                                        :class="[
                                          indiRow[k.evl] == -1 ? 'title is-3 is-pinkishalert' : '',
                                        ]"
                                      >
                                        <span v-show="indiRow[k.evl] == -1">absent</span>
                                        <span v-show="indiRow[k.evl] !== -1">
                                          <star-rating
                                            v-model="indiRow[k.evl]"
                                            :show-rating="false"
                                            :star-size="k.ssize[cRoom.showEvalComp]"
                                            :max-rating="k.pt"
                                            :star-points="cRoom.customstarShape"
                                            @rating-selected="goEvalUpTarget"
                                            @current-rating="
                                              setEvalUpTarget($event, indiRow, k.evl, cRoom.indiNo)
                                            "
                                          ></star-rating>
                                        </span>
                                      </td>
                                      <td class="title is-4">
                                        <span
                                          :class="[
                                            indiRow[k.evl] === 0
                                              ? 'has-pink-strong'
                                              : 'has-text-black',
                                          ]"
                                          v-show="indiRow[k.evl] !== -1"
                                        >{{ indiRow[k.evl] }}</span>
                                      </td>
                                      <td>
                                        <b-button
                                          icon-left="comment"
                                          size="is-middle"
                                          @click="
                                            updateClrmEvalsIndi(indiRow, k.comm, indiRow[k.comm])
                                          "
                                        >
                                          <span
                                            v-show="!cRoom.showComEv[k.comm]"
                                            class="has-text-grey-light"
                                          >{{ indiRow[k.comm] | description(6) }}</span>
                                          <span v-show="cRoom.showComEv[k.comm]">Save</span>
                                        </b-button>
                                        <b-input
                                          type="textarea"
                                          size="is-medium"
                                          v-show="cRoom.showComEv[k.comm]"
                                          custom-class="is-hovered"
                                          style="min-width: 200px;"
                                          expanded
                                          v-model="indiRow[k.comm]"
                                        ></b-input>
                                      </td>
                                    </template>
                                  </template>
                                </template>
                              </tr>
                              <tr>
                                <td></td>
                                <td></td>
                                <td colspan="2" style="text-align:right">
                                  <span class="has-text-grey-light title is-4">Sub Total :</span>
                                  <span
                                    :class="[
                                      cRoom.showEvalComp === 0 ? 'title is-3' : 'title is-3',
                                    ]"
                                  >{{ " " + indiSc.subtotal0 }}</span>
                                </td>
                              </tr>
                            </table>
                          </section>
                          <!-- indi ---------- [ view showEvalComp 2 ] -->
                          <!--               indi eval right -->
                          <!-- ※Presentation Finalだけ星が出ない-->
                          <section class="columns" v-show="cRoom.showEvalComp === 2">
                            <table class="table">
                              <tr v-for="(k, index) in cRoom.evalCriItems" :key="k.index">
                                <template v-if="cRoom.indirep[1].includes(index)">
                                  <td>
                                    <button
                                      class="button is-fullwidth"
                                      @click="manageEvalSingle(index)"
                                    >
                                      <template v-if="!cRoom.showAttnEval">
                                        <span class="subtitle is-3">{{ k.title }}</span>
                                      </template>
                                      <template v-else>
                                        <span class="subtitle is-4">
                                          {{ k.title }}
                                          <span
                                            class="has-text-grey"
                                            v-if="cRoom.showAttnEval"
                                          >
                                            - (
                                            <span class="subtitle is-6">week</span>
                                            {{ k.week }})
                                          </span>
                                        </span>
                                      </template>
                                    </button>
                                  </td>
                                  <td style="padding-left:30px">
                                    <a @click="minusEvalUpTarget(indiRow, k.evl)">
                                      <b-icon
                                        pack="fas"
                                        icon="user-slash"
                                        size="is-medium"
                                        :type="indiRow[k.evl] == -1 ? 'is-slashab' : 'is-slashok'"
                                        @click="minusEvalUpTarget(indiRow, k.evl)"
                                      />
                                    </a>
                                  </td>
                                  <td style="padding-left:30px">
                                    <a @click="zeroEvalUpTarget(indiRow, k.evl)">
                                      <b-icon
                                        pack="fas"
                                        icon="ban"
                                        size="is-medium"
                                        type="is-bluedark"
                                        @click="zeroEvalUpTarget(indiRow, k.evl)"
                                      />
                                    </a>
                                  </td>
                                  <template v-if="k.p1ptshow">
                                    <template v-if="!checkifAbsent(indiRow[k.comm])">
                                      <!-- 通常の場合 -->
                                      <td
                                        :class="[
                                          indiRow[k.evl] == -1 ? 'title is-3 is-pinkishalert' : '',
                                        ]"
                                      >
                                        <span v-show="indiRow[k.evl] == -1">absent</span>
                                        <span v-show="indiRow[k.evl] !== -1">
                                          <star-rating
                                            v-model="indiRow[k.evl]"
                                            :show-rating="false"
                                            :star-size="k.ssize[cRoom.showEvalComp]"
                                            :max-rating="k.pt"
                                            :star-points="cRoom.customstarShape"
                                            @rating-selected="goEvalUpTarget"
                                            @current-rating="
                                              setEvalUpTarget($event, indiRow, k.evl, cRoom.indiNo)
                                            "
                                          ></star-rating>
                                        </span>
                                      </td>
                                      <!-- <td
                                      class="title is-4"
                                      :class="
                                        indiRow[k.evl] === null ? 'has-background-grey-light' : ''
                                      "
                                      >{{ indiRow[k.evl] }}</td>-->
                                      <td class="title is-4">
                                        <span v-show="indiRow[k.evl] !== -1">{{ indiRow[k.evl] }}</span>
                                      </td>
                                      <!-- indiRow[k.evl] === null ? 'has-background-orange' : '' -->
                                    </template>
                                    <template v-else>
                                      <!-- Absentの場合 -->
                                      <td colspan="2">
                                        <b-tag
                                          rounded
                                          class="is-pulled-right attend-hist-absent"
                                          style="font-size:25px"
                                        >Absent</b-tag>
                                      </td>
                                    </template>
                                  </template>
                                  <template v-else>
                                    <!-- Presentation Finalの場合 -->
                                    <td>
                                      <span class="has-text-grey">( tap left button to edit )</span>
                                    </td>
                                    <!-- <td
                                    class="title is-4"
                                    :class="indiRow[k.evl] === null ? 'has-background-grey-light' : ''"
                                    >{{ indiRow[k.evl] }}</td>-->
                                    <!-- :class="indiRow[k.evl] === null ? 'has-background-orange' : ''" -->
                                    <td class="title is-4">{{ indiRow[k.evl] }}</td>
                                  </template>
                                  <!-- </td>
                                <td
                                  class="title is-4"
                                  :class="indiRow[k.evl] === null ? 'has-background-orange' : ''"
                                  >{{ indiRow[k.evl] }}</td>-->
                                  <!-- 期末対応 -->
                                  <td
                                    class="title is-4"
                                    :class="getAttendStatusClassHist(indiRow['attn' + k.week])"
                                    v-if="cRoom.showAttnEval"
                                  >{{ getAttendSymbol(indiRow["attn" + k.week]) }}</td>
                                  <!-- 期末対応 -->
                                  <td>
                                    <b-button
                                      icon-left="comment"
                                      size="is-middle"
                                      @click="updateClrmEvalsIndi(indiRow, k.comm, indiRow[k.comm])"
                                    >
                                      <span
                                        v-show="!cRoom.showComEv[k.comm]"
                                        class="has-text-grey-light"
                                      >{{ indiRow[k.comm] | description(6) }}</span>
                                      <span v-show="cRoom.showComEv[k.comm]">Save</span>
                                    </b-button>
                                    <b-input
                                      type="textarea"
                                      size="is-medium"
                                      v-show="cRoom.showComEv[k.comm]"
                                      custom-class="is-hovered"
                                      style="min-width: 200px;"
                                      expanded
                                      v-model="indiRow[k.comm]"
                                    ></b-input>
                                  </td>
                                </template>
                              </tr>
                              <!-- 期末対応 -->
                              <tr v-if="cRoom.showAttnEval">
                                <td></td>
                                <td colspan="5">
                                  <table class="table f23">
                                    <tr>
                                      <td
                                        v-for="(k, index) in manage.vforEdit"
                                        :key="`endsemesterhead-${index}`"
                                        style="padding:5px 5px 0px 15px;"
                                      >
                                        <span class="f18">{{ k.md + 1 }}</span>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        v-for="(m, index) in manage.vforEdit"
                                        :key="`endsemester-${index}`"
                                        style="padding:0px 10px 0px 15px;"
                                        :class="getAttendStatusClassHist(indiRow[m.at])"
                                      >{{ getAttendSymbol(indiRow[m.at]) }}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <!-- 期末対応 -->
                              <tr>
                                <td></td>
                                <td></td>
                                <td colspan="2" style="text-align:right">
                                  <span class="has-text-grey-light title is-4">Sub Total :</span>
                                  <span
                                    :class="[
                                      cRoom.showEvalComp === 0 ? 'title is-3' : 'title is-3',
                                    ]"
                                  >{{ " " + indiSc.subtotal1 }}</span>
                                </td>
                                <td v-if="cRoom.showAttnEval"></td>
                                <td></td>
                              </tr>
                            </table>
                          </section>
                        </article>
                        <!-- indi ---------- [ view showEvalSingle ] -->
                        <article v-show="cRoom.showEvalSingle">
                          <section class="columns">
                            <div class="colum">
                              <b-button
                                class="w40"
                                icon-left="angle-left"
                                size="is-large"
                                style="height:65px"
                                @click="manageIndiSingleCriteria(-1)"
                              ></b-button>
                              <b-button
                                class="w40"
                                icon-left="angle-right"
                                size="is-large"
                                style="height:65px"
                                @click="manageIndiSingleCriteria(1)"
                              ></b-button>
                            </div>
                            <div class="colum">
                              <b-button
                                @click="cRoom.showEvalSingle = !cRoom.showEvalSingle"
                                class="title is-3 is-fullwidth"
                                style="height:60px"
                              >{{ cRoom.evalCriItems[cRoom.tgtEvalSingle].title }}</b-button>
                            </div>
                            <div class="colum"></div>
                          </section>
                          <!-- rating -->
                          <section class="columns">
                            <div class="column is-pulled-right" style="width:70px;margin-left:20px">
                              <a
                                @click="
                                  minusEvalUpTarget(
                                    indiRow,
                                    cRoom.evalCriItems[cRoom.tgtEvalSingle].evl
                                  )
                                "
                              >
                                <b-icon
                                  pack="fas"
                                  icon="user-slash"
                                  size="is-medium"
                                  :type="
                                    indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] == -1
                                      ? 'is-slashab'
                                      : 'is-slashok'
                                  "
                                  @click="
                                    minusEvalUpTarget(
                                      indiRow,
                                      cRoom.evalCriItems[cRoom.tgtEvalSingle].evl
                                    )
                                  "
                                />
                              </a>
                            </div>
                            <div class="column">
                              <a
                                @click="
                                  zeroEvalUpTarget(
                                    indiRow,
                                    cRoom.evalCriItems[cRoom.tgtEvalSingle].evl
                                  )
                                "
                              >
                                <b-icon
                                  pack="fas"
                                  icon="ban"
                                  size="is-medium"
                                  type="is-bluedark"
                                  @click="
                                    zeroEvalUpTarget(
                                      indiRow,
                                      cRoom.evalCriItems[cRoom.tgtEvalSingle].evl
                                    )
                                  "
                                />
                              </a>
                            </div>
                            <!-- あとまわし★なぜか赤にならない -->
                            <div
                              class="column"
                              :class="[
                                indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] == -1
                                  ? 'title is-3 is-pinkishalert'
                                  : '',
                              ]"
                            >
                              <div
                                style="background-color:#ce1836;color:#fae3ec;padding:5px"
                                v-show="indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] == -1"
                              >absent</div>
                              <span
                                v-show="indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] !== -1"
                              >
                                <star-rating
                                  class="level-item"
                                  v-model="indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl]"
                                  :show-rating="false"
                                  :star-size="cRoom.evalCriItems[cRoom.tgtEvalSingle].ssize[4]"
                                  :max-rating="cRoom.evalCriItems[cRoom.tgtEvalSingle].pt"
                                  :star-points="cRoom.customstarShape"
                                  @rating-selected="goEvalUpTarget"
                                  @current-rating="
                                    setEvalUpTarget(
                                      $event,
                                      indiRow,
                                      cRoom.evalCriItems[cRoom.tgtEvalSingle].evl,
                                      cRoom.indiNo
                                    )
                                  "
                                ></star-rating>
                              </span>
                            </div>
                            <div
                              class="column title is-2"
                              v-show="indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] !== -1"
                            >{{ indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].evl] }}</div>
                          </section>

                          <!-- indi comment -->
                          <section class="columns">
                            <div class="column">
                              <b-button
                                icon-left="comment"
                                size="is-middle"
                                style="min-width:200px"
                                @click="
                                  updateClrmEvalsIndiAny(
                                    indiRow,
                                    cRoom.evalCriItems[cRoom.tgtEvalSingle].comm,
                                    indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].comm]
                                  )
                                "
                              >
                                <span v-show="!cRoom.showComEv.ecomAny" class="has-text-grey-light">
                                  {{
                                  indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].comm]
                                  | description(50)
                                  }}
                                </span>
                                <span v-show="cRoom.showComEv.ecomAny" class="subtitle is-5">Save</span>
                              </b-button>
                              <b-input
                                type="textarea"
                                size="is-medium"
                                v-show="cRoom.showComEv.ecomAny"
                                custom-class="is-hovered"
                                style="min-width: 400px;"
                                expanded
                                v-model="indiRow[cRoom.evalCriItems[cRoom.tgtEvalSingle].comm]"
                              ></b-input>
                            </div>
                          </section>
                        </article>
                        <article>
                          <footer>
                            <div class="column">
                              <div class="is-pulled-right">
                                <span class="has-text-grey-light title is-4">Grand Total :</span>
                                <span
                                  :class="[cRoom.showEvalComp === 0 ? 'title is-1' : 'title is-4']"
                                >{{ " " + indiSc.total }}</span>
                              </div>
                            </div>
                          </footer>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div :class="getIndiPaneClass('right')" v-show="cRoom.showIndiList">
                    <article class="tile is-child">
                      <b-tabs
                        v-model="cRoom.indiNo"
                        vertical
                        class="is-marginless"
                        @change="clearIndi()"
                      >
                        <b-tab-item v-for="st in classmembers" :key="st.index">
                          <template slot="header">
                            <!-- :label="st.classcount + ' ' + st.studentname" -->
                            <!-- ><template slot="header" slot-scope="{ column }"> -->
                            <span
                              :class="getIndiAttendClass(st[selClrm.attnthisweek])"
                            >{{ st.classcount + " " + st.studentname }}</span>
                          </template>
                        </b-tab-item>
                      </b-tabs>
                    </article>
                  </div>
                </div>
              </section>
            </template>
          </b-tab-item>
        </b-tabs>
      </section>
      <!-- <span style="visibility: hidden;">
        <v-idle @idle="doTask()" :duration="3" />
      </span>-->
    </template>
  </div>
</template>

<script>
import Vue from "vue";
// import { DataStore, Predicates, Hub, Auth } from "aws-amplify";
import { DataStore, Hub, Auth } from "aws-amplify";
// import { Hub, Auth } from "aws-amplify";

// import testJSON from "../assets/test.json";
// import testJSON from "../assets/test.json";
// import AutumnNewClssJSON from "../assets/AutumnNewClss.json";
import ClssJSON from "../assets/Clss.json";
import SchdJSON from "../assets/Schd.json";
import UsersJSON from "../assets/Users.json";
import EnvJSON from "../assets/env.json";
// import { Clrm, Inst, Misc } from "../models";
// import { Clrm, Misc } from "../models";
import { Clrm } from "../models";

import API, { graphqlOperation } from "@aws-amplify/api";
// import { onCreateAttend } from "../graphql/subscriptions";
// listMiscs
// listMiscXs
// listLogs
// getClrmY
// instructor
// bydayX
// bydayY

import {
  // listClrms,
  instByday,
  listInsts,
  listSmrys,
  listMngs
  // listClrmYs
  // listClrmXs
  // listMngs
} from "../graphql/queries";
import {
  createInst,
  createMisc,
  updateClrm,
  updateInst,
  createLog,
  updateLog,
  createMiscX,
  updateMiscX,
  // createSmry,
  updateSmry
} from "../graphql/mutations";
// import { onCreateInst, onCreateMisc,  onUpdateInst, onUpdateMisc } from "../graphql/subscriptions";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.locale("ja");
// dayjs.locale("en");
dayjs.extend(relativeTime);
Vue.prototype.$dayjs = dayjs;
//import { formatDate, description } from "./plugins/filters.js";
Vue.use(dayjs);

import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

// import Vidle from "v-idle";
// Vue.use(Vidle);
import IdleVue from "idle-vue";
const eventsHub = new Vue();
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 1000 * 60
});

// 本文のトリミング
Vue.filter("description", function(value, num) {
  if (value) {
    return value.slice(0, num) + "...";
  }
});

export default {
  components: {
    // FullCalendar, // make the <FullCalendar> tag available
  },
  onIdle() {
    this.IdleVueStatus = "ZZZ";
    this.idbHandleSQueue();
    // 授業中で当日出欠OKなら再送信、バックアップ送信
    // this.isEnteredselClrm
    // this.idbHandleSQueue();
    if (this.selClrm !== null) {
      if (this.classmembers.length > 0) {
        //何かしら出欠編集してて未送信なら
        if (
          this.selClrm.attnModified === true &&
          this.selClrm.attnDoneReported === false &&
          this.getAttnDoneStateSelClrm() === true
        ) {
          this.salvageclassRealtimeBackup(" attn done");
          this.selClrm.attnDoneReported = true;
          this.selClrm.attnModified = false;
        }
        //  クラス毎のサマリDB 更新
        this.reflectClassSummary(this.selClrm);
      } else {
        //異常
        this.writeNoteLS("onIdle selClrm but no classmembers");
      }
    }
  },
  onActive() {
    this.IdleVueStatus = "Hello";
  },
  data() {
    return {
      IdleVueStatus: "",
      app: {
        ready: false,
        network: false,
        syncing: false,
        log: { nw: "", act: "" },
        version: "2.0",
        rev: "D_ForceDL_C_FilledAreaUp_AuthError no throw",
        showClearCache: false,
        chrAPI: "API",
        chrDS: "DataStore",
        noteName: "appNoteTmu",
        noteNameAPI: "appNoteTmuAPI",
        noteNameNW: "appNoteTmuNW",
        noteNameIDB: "appNoteTmuIDB",
        noteNameUP: "appNoteTmuUP",
        device: "deviceTmu",
        startWhen: null
      },
      state: {
        APIfetch: false,
        dataLS: false,
        idbSetup: false
      },
      ds: {
        clrms: null,
        clrmUp: null,
        clrmDl: null,
        clrmItems: null,
        dev1: null,
        dev2: null,
        dev3: null,
        devarr1: null,
        devarr2: null,
        devarr3: null,
        crMisc: { type: null, name: null, detail: null },
        nMisc: { id: null, type: null, name: null, detail: null, return: null },
        typeMisc: { classSum: "classSummary", appNwLog: "DataStoreConnection" } //定数
      },
      setval1: null,
      setval2: null,
      stTable: { pagenationPosition: "both" },
      proc: {
        success: [],
        fail: []
      },
      dev: {
        classCLimit: 3,
        dummy: null
      },
      sett: {
        env: EnvJSON,
        devscreen: false,
        devarea: false,
        devcheck: false,
        devshow: false,
        devshowMem: false,
        devsummary: false,
        isModalActive: false,
        acdate: null, // 実際の日
        actime: null,
        actimeIntId: undefined,
        actimeIntId10: undefined,
        ddate: null, // 処理につかう日付
        today: null, // YYYY/MM/DD
        hasMobileCards: false, //buefy
        dummy: "hoge", //null,
        dummy1: null,
        dummy2: null,
        dummy3: null,
        dummy4: null,
        dummy5: null,
        dummy6: null,
        dummyClrm: [],
        sw1: false,
        sw2: false,
        activeTab: 0,
        activeTabManage: 0,
        isLoadingClrmManage: false,
        priorityLS: false,
        // isLoadingClrmsChk: false,
        pageStyle: {
          "--background-color": "#ffff4f"
        },
        classSelected: null,
        alias: { usename: null, name: "all" },
        intId0: undefined, // setInterval
        intId1: undefined, // setInterval
        intId2: undefined // setInterval
      },
      authdetail: {
        username: "unknown",
        nickname: "unknown",
        name: "unknown",
        role: "unknown"
      }, //ログインユーザー情報
      /////
      bBoard: {
        isOpen: 0,
        collapses: [
          {
            title: "login info",
            text: `<p>Google Drive</p>
              <div class="columns">
                <div class="column is-one-third">tmu-inst@alc-class.jp</div>
                <div class="column is-one-third">Zaqwsxcderfvbgtyhnmjuik,.lop</div>
                <div class="column is-one-third"></div>
              </div><p>Office hour Zoom account info</p>
              <div class="columns">
                <div class="column is-one-third">tmu-nse19@alc-class.jp</div>
                <div class="column is-one-third">Gr8lesson19!</div>
                <div class="column is-one-third"></div>
              </div>
              <div class="columns">
                <div class="column is-one-third">tmu-nse20@alc-class.jp</div>
                <div class="column is-one-third">Gr8lesson20!</div>
                <div class="column is-one-third"></div>
              </div>`
          },
          {
            title: "to students",
            text: `
            <p>email for textbook inquiries:</p>
            <div class="columns">
              <div class="column is-one-third">kyoukasho@tmucoop.jp</div>
              <div class="column is-one-third"></div>
              <div class="column is-one-third"></div>
            </div>`
          },
          {
            title: "(title)",
            text: "(detail)"
          }
        ],
        collapsesSample: [
          {
            title: "info",
            text: `<p>abcdefg abcdefg</p>
              <div class="columns">
                <div class="column is-one-third">abcdefg abcdefg</div>
                <div class="column is-one-third">abcdefg abcdefg</div>
                <div class="column is-one-third"></div>
              </div><p>abcdefg info</p>
              <div class="columns">
                <div class="column is-one-third">abcdefg</div>
                <div class="column is-one-third">abcdefg</div>
                <div class="column is-one-third"></div>
              </div>
              <div class="columns">
                <div class="column is-one-third">abcdefg</div>
                <div class="column is-one-third">abcdefg</div>
                <div class="column is-one-third"></div>
              </div>`
          },
          {
            title: "to students",
            text: `
            <p>email for textbook inquiries:</p>
            <div class="columns">
              <div class="column is-one-third">123456@abcdefg.jp</div>
              <div class="column is-one-third"></div>
              <div class="column is-one-third"></div>
            </div>`
          },
          {
            title: "(title)",
            text: "(detail)"
          }
        ]
      },
      instructor: {
        showPeople: false,
        peopleNow: [
          "George",
          "John",
          "George1",
          "John1",
          "George2",
          "John3",
          "George3",
          "John4"
        ],
        // yourhistory: [],
        // youactive: 0, // 0 before in / 1 clock in / 2 clock out
        you: { name: "Jane Doe", firstName: "Jane", userid: "j-buckley" },
        creInst: [],
        upInst: [],
        attendances: [],
        yourattendances: [],
        yourTodaysClasses: [],
        yourattendvisiblemonth: null,
        attendvisiblemonth: null,
        nameConv: UsersJSON
      },
      lbls: {
        clCols: [
          {
            field: "uid",
            label: "ID",
            width: "100",
            numeric: true,
            sortable: true
          },
          {
            field: "classtitle",
            label: "title",
            sortable: true
          },
          {
            field: "classnum",
            label: "num",
            sortable: true
          },
          {
            field: "roomnum",
            label: "Room",
            centered: true
          },
          {
            field: "grade",
            label: "grade"
          }
        ],
        clrmCols: [
          {
            field: "uid",
            label: "Instructor",
            sortable: true,
            searchable: true
          },
          {
            field: "group",
            label: "Group",
            centered: true
          },
          {
            field: "dayofweek",
            label: "Day",
            searchable: true
          },
          {
            field: "classcode",
            label: "ClassCode",
            searchable: true
          },
          {
            field: "studentcode",
            label: "Code",
            searchable: true
          },
          {
            field: "studentname",
            label: "name",
            searchable: true
          }
        ]
      },
      selClrm: { id: "" }, //null,
      idbClrm: { id: "" }, //null,
      // AppSyncUp
      isClrmAppSyncUploading: false,
      ClrmAppSyncStateShow: false,
      ClrmAppSyncState: true,
      ClrmAppSyncBegin: 0,
      ClrmAppSyncEnd: 0,
      attendMng: { status: ["ok", "maybe", "ng"], dummy: 2 },
      att: {
        mode: 0,
        note: ["", "No phone", "Login issue", "Sign-in Mismatch "],
        modeset: [
          {
            num: 1,
            barcaption: "attend",
            title: "here",
            title2: "not here",
            pct: 33,
            colortype: "is-success",
            transitmsg: "open classroom"
          },
          {
            num: 2,
            barcaption: "late",
            title: "late",
            title2: "not here",
            pct: 66,
            colortype: "is-warning",
            transitmsg: "accepting late students"
          },
          {
            num: 4,
            barcaption: "absent",
            title: "absent",
            title2: "absent",
            pct: 100,
            colortype: "is-danger",
            transitmsg: "attendance closed"
          },
          // 出欠取れないモード（当日以外）
          {
            num: 999,
            barcaption: "-",
            title: "-",
            title2: "-",
            pct: 0,
            colortype: "is-light",
            transitmsg: "-"
          }
        ]
      },
      cRoom: {
        fixAwait: false,
        showIndividual: false,
        indiNo: 0,
        indiNoPrev: 0,
        attnEditable: false, // 出欠編集可否
        attnEditTgt: "", // 出欠編集 "attn01"とか
        showAttenNote: false,
        showAttenHist: 0, // 0 当日 1 履歴 2 非表示
        showDummy: false, // false,
        // showEval: false, // false,
        // showEvalHist: true, // false,
        showEvalComp: 0, // Evaluationの画面切り替え
        showEvalSingle: false,
        tgtEvalSingle: 0,
        showIndiList: true,
        showClassesSum: false,
        // showEvalGlance: false,
        showABList: false,
        showABListCaption: "Group A - Group B",
        showABListShowA: true,
        showABListShowB: true,
        showABListStudentCode: false,
        showComment: false,
        showCommEval: [false, false, false, false, false, false, false],
        showComEv: {
          ecom01: false,
          ecom02: false,
          ecom03: false,
          ecom04: false,
          ecom05: false,
          ecom06: false,
          ecom07: false,
          ecom08: false,
          ecom09: false,
          ecom10: false,
          ecom11: false,
          ecom12: false,
          ecomAny: false
          // eval01: false,
          // eval02: false,
          // eval03: false,
          // eval04: false,
          // eval05: false,
          // eval06: false,
          // eval07: false,
          // eval08: false,
          // eval09: false,
          // eval10: false,
          // eval11: false,
        },
        evalUpTarget: null,
        evalUpTargetRow: null,
        evalUpTargetRowId: null,
        evalUpTargetCol: null,
        evalUpTargetIndex: null,
        customstarShape: [
          23,
          2,
          14,
          17,
          0,
          19,
          10,
          34,
          7,
          50,
          23,
          43,
          38,
          50,
          36,
          34,
          46,
          19,
          31,
          17
        ],
        // ctype: null,
        evalCriteriaSelect: null, // ??保留 "writing", // presentationでも、どちらでも。Criteriaをデフォルト値で
        evalCriItems: [
          {
            title: "Participation 1",
            sub: "",
            evl: "eval01",
            comm: "ecom01",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 0, 0, 50],
            week: 0 // 実施週
          },
          {
            title: "Participation 2",
            sub: "",
            evl: "eval02",
            comm: "ecom02",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 0, 0, 50],
            week: 0 // 実施週
          },
          {
            title: "Improvement 1",
            sub: "",
            evl: "eval03",
            comm: "ecom03",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 0, 0, 50],
            week: 0 // 実施週
          },
          {
            title: "Improvement 2",
            sub: "",
            evl: "eval04",
            comm: "ecom04",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 0, 0, 50],
            week: 0 // 実施週
          },
          {
            title: "Homework",
            sub: "",
            evl: "---",
            comm: "---",
            pt: 5,
            p1ptshow: false,
            ssize: [0, 0, 0, 0, 0],
            week: 0 // 実施週
          },
          {
            title: "ALC Adademy NEXT",
            sub: "",
            evl: "eval05",
            comm: "---",
            pt: 5,
            p1ptshow: false,
            ssize: [0, 0, 0, 0, 0],
            week: 0 // 実施週
          },
          {
            title: "Speech 1",
            sub: "Message, Structure, Language, Verbal/Nonverbal Delivery",
            evl: "eval06",
            comm: "ecom06",
            pt: 10,
            p1ptshow: true,
            ssize: [20, 40, 40, 0, 50],
            week: "06" // 実施週
          },
          {
            title: "Speech 2",
            sub: "Message, Structure, Language, Verbal/Nonverbal Delivery",
            evl: "eval07",
            comm: "ecom07",
            pt: 10,
            p1ptshow: true,
            ssize: [20, 40, 40, 0, 50],
            week: "09" // 実施週
          },
          {
            title: "Discussion 1",
            sub: "Fluency, Topic Devel., Language, Logic, Active Comm.",
            evl: "eval08",
            comm: "ecom08",
            pt: 10,
            p1ptshow: true,
            ssize: [20, 40, 40, 0, 50],
            week: "07" // 実施週
          },
          {
            title: "Discussion 2",
            sub: "Fluency, Topic Devel., Language, Logic, Active Comm.",
            evl: "eval09",
            comm: "ecom09",
            pt: 10,
            p1ptshow: true,
            ssize: [20, 40, 40, 0, 50],
            week: "10" // 実施週
          },
          {
            title: "Discussion Final [w11]",
            sub: "Fluency, Topic Devel., Language, Logic, Active Comm.",
            evl: "eval10",
            comm: "ecom10",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 40, 0, 50],
            week: "11" // 実施週
          },
          {
            title: "Discussion Final [w12]",
            sub: "Fluency, Topic Devel., Language, Logic, Active Comm.",
            evl: "eval12",
            comm: "ecom12",
            pt: 5,
            p1ptshow: true,
            ssize: [30, 40, 40, 0, 50],
            week: "12" // 実施週
          },
          {
            title: "Presentation Final",
            sub: "Message, Structure, Language, Verbal/Nonverbal Delivery",
            evl: "eval11",
            comm: "ecom11",
            pt: 20,
            p1ptshow: false,
            ssize: [0, 30, 40, 0, 40],
            week: "14" // 実施週
          }
        ],
        showAttnEval: false,
        evalTypeArea: null, // ["", "", "", "", "", "", ""],
        // evalCriteriaSubSelect: null,
        // showEvalCriSubItemsCaption: true,
        // shNmEvalCri: 0, //生徒一覧ページでのEvaluation項目レベル表示制御
        indirep: [
          [0, 1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10, 11, 12]
        ]
        // evscVa: true,
        // evscVb: false,
        // evscVc: false,
        // evscVd: false,
        // evsc1a: true,
        // evsc1b: false,
        // evsc1c: false,
        // evsc1d: false
      },
      manage: {
        isOpenSummary: false,
        isOpenEdit: false,
        showNumClassesSum: 0,
        classmembersEdit: [], // studentslistjson,
        numAttenHist: 1,
        selClrm: [],
        instname: "all",
        instinstname: "all",
        selAttn: "",
        showSelAttn: true,
        activeTab: 1,
        dow: "All",
        instdow: "All",
        chkStatus: "",
        checkedRows: [],
        checkedRowsInst: [],
        clrmCols: [
          {
            field: "uid",
            label: "Instructor",
            sortable: true,
            searchable: false
          },
          {
            field: "group",
            label: "Group",
            centered: true
          },
          {
            field: "dayofweek",
            label: "Day",
            searchable: false
          },
          {
            field: "classcode",
            label: "ClassCode",
            searchable: true
          },
          {
            field: "studentcode",
            label: "Code",
            searchable: true
          },
          {
            field: "studentname",
            label: "name",
            searchable: true
          }
        ],
        instCols: [
          {
            field: "uid",
            label: "Name",
            sortable: true,
            searchable: true
          },
          {
            field: "date",
            label: "Date",
            sortable: true,
            searchable: true
          },
          {
            field: "clockin",
            label: "In",
            centered: true
          },
          {
            field: "clockincorrect",
            label: "In(Correction)",
            centered: true
          },
          {
            field: "clockout",
            label: "Out",
            searchable: false
          },
          {
            field: "clockoutcorrect",
            label: "Out(Correction)",
            searchable: false
          },
          {
            field: "detail",
            label: "Note",
            searchable: true
          }
        ],
        vforEdit: [
          { at: "attn01", md: 0 },
          { at: "attn02", md: 1 },
          { at: "attn03", md: 2 },
          { at: "attn04", md: 3 },
          { at: "attn05", md: 4 },
          { at: "attn06", md: 5 },
          { at: "attn07", md: 6 },
          { at: "attn08", md: 7 },
          { at: "attn09", md: 8 },
          { at: "attn10", md: 9 },
          { at: "attn11", md: 10 },
          { at: "attn12", md: 11 },
          { at: "attn13", md: 12 },
          { at: "attn14", md: 13 },
          { at: "attn15", md: 14 }
        ],
        vforAttn: [
          { at: "attn01", lb: "1", sc: 1, md: 0 },
          { at: "attn02", lb: "2", sc: 2, md: 1 },
          { at: "attn03", lb: "3", sc: 3, md: 2 },
          { at: "attn04", lb: "4", sc: 4, md: 3 },
          { at: "attn05", lb: "5", sc: 5, md: 4 },
          { at: "attn06", lb: "6", sc: 6, md: 5 },
          { at: "attn07", lb: "7", sc: 7, md: 6 },
          { at: "attn08", lb: "8", sc: 8, md: 7 },
          { at: "attn09", lb: "9", sc: 9, md: 8 },
          { at: "attn10", lb: "10", sc: 10, md: 9 },
          { at: "attn11", lb: "11", sc: 11, md: 10 },
          { at: "attn12", lb: "12", sc: 12, md: 11 },
          { at: "attn13", lb: "13", sc: 13, md: 12 },
          { at: "attn14", lb: "14", sc: 14, md: 13 },
          { at: "attn15", lb: "15", sc: 15, md: 14 }
        ],
        convAttnToDateMDNum: {
          attn01: 0,
          attn02: 1,
          attn03: 2,
          attn04: 3,
          attn05: 4,
          attn06: 5,
          attn07: 6,
          attn08: 7,
          attn09: 8,
          attn10: 9,
          attn11: 10,
          attn12: 11,
          attn13: 12,
          attn14: 13
        }
      },
      showManagementView: false,
      showManagementViewSuper: false,
      classroomIndex: null,
      classmembers: [], // studentslistjson,
      isdeadlinelenient: false, //大目に見る締切
      isOpenselClrm: false,
      isEnteredselClrm: false, //部屋に入ってるか
      stickyHeaders: false,
      dataset: {
        // Cxlrms: ClrmJSON, // [], //学生データ
        Clrms: [], // [], //学生データ
        ClrmsChk: [], //チェック用
        ClrmsInstByday: [],
        allClasses: ClssJSON, // [],
        Cldrs: SchdJSON, //[], //カレンダ
        Miscs: [], //その他便利に使う
        Smry: [],
        source: ""
      },
      dataAPI: {
        Clrms: [], // [], //学生データ
        log: "",
        status: "",
        fetching: false,
        ready: false,
        Mngs: [] // [], //学生データ
      },
      dataIDB: {
        Clrms: [], // [], //学生データ
        log: "",
        status: "",
        ready: false
      },
      dataDS: {
        queryWait: false,
        queryChk: 0,
        Clrms: [] // [], //学生データ
        // ClrmsInstByday: [],
        // Miscs: [], //その他便利に使う
      },
      dataLS: {
        Clrms: [] // [], //学生データ
        // ClrmsInstByday: [],
        // Miscs: [], //その他便利に使う
      }
    };
  },
  methods: {
    //////////講師 勤怠
    //////////講師 勤怠
    instClockIn() {
      this.periodicValidation(); // 日付とユーザー検証
      this.classBackupALLTypesAllClasses(); //全バックアップ吸い上げ
      this.$buefy.dialog.confirm({
        message: "Clock In?",
        size: "is-large",
        onConfirm: () => {
          ////////// APIで
          const add = {
            date: this.$dayjs().format("YYYY-MM-DD"), //.format("M/D ddd"),
            clockin: this.$dayjs().format("HH:mm") //.format("hh:mm:ss.sss"), //.format("h:mm"),
          };
          // this.instructor.yourattendances.push(add); //ローカル配列に追加
          const msgg =
            "<span style='font-size:40px'>Good morning " +
            this.authdetail.nickname +
            "!</span>";
          ////////// APIで
          this.createInstAPI(add, msgg, "is-success", "is-large"); //DBに追加
          this.writeNoteLS(
            "ClockIn { date: " + add.date + ", clockin: " + add.clockin
          );
          // this.instructor.yourhistory.push(add);
          // this.instructor.peopleNow.push(this.instructor.you.firstName);
        }
      });
    },
    async instClockOut() {
      this.periodicValidation(); // 日付とユーザー検証
      await this.listInstsDataAPI(); // 修正があった場合のたに最新にする
      //// localStorageからバックアップ引き揚げ
      this.salvageclassRealtimeBackup();
      this.salvageDaylogs(this.app.noteName);
      this.salvageDaylogs(this.app.noteNameAPI);
      this.salvageDaylogs(this.app.noteNameNW);
      this.salvageDaylogs(this.app.noteNameIDB);
      this.$buefy.dialog.confirm({
        message: "Clock Out?",
        size: "is-large",
        onConfirm: () => {
          ////////// APIで
          const arrr = this.instructor.yourattendances.pop();
          this.instructor.yourattendances.push(arrr);
          const arr = {
            uid: arrr.uid,
            date: arrr.date,
            clockin: arrr.clockin
          };
          // ClockOut前に修正があった場合それも拾う
          if (arrr.clockincorrect !== null) {
            arr.clockincorrect = arrr.clockincorrect;
          }
          if (arrr.detail !== null) {
            arr.detail = arrr.detail;
          }
          arr.clockout = this.$dayjs().format("HH:mm");
          const msgg =
            "<span style='font-size:40px'>Thanks " +
            this.authdetail.nickname +
            ", have a good rest.</span>";
          this.createInstAPI(arr, msgg, "is-pinkish", "is-large"); //DBに追加
          // this.updateInstAPI(arr); // AppSyncを更新 clockoutがNullになってしまう
          ////////// APIで
          this.writeNoteLS(
            "ClockOut { date: " +
              arr.date +
              ", clockin: " +
              arr.clockin +
              ", clockout: " +
              arr.clockout
          );
          // // People nowから削除
          // const idx = this.instructor.peopleNow.findIndex(
          //   v => v == this.instructor.you.firstName
          // );
          // this.instructor.peopleNow.splice(idx, 1);
          // this.instructor.showPeople = false;
        }
      });
    },
    async listInstsDataAPI() {
      const InstsData = await API.graphql(
        graphqlOperation(listInsts, { limit: 5000 })
        // graphqlOperation(listInsts, { input: uname })
      );
      this.instructor.attendances = [];
      // this.instructor.attendances.push(
      //   ...this.instructor.attendances,
      //   ...InstsData.data.listInsts.items
      // );
      const allclin = InstsData.data.listInsts.items
        .sort((a, b) => this.arrayCompare(a.updatedAt, b.updatedAt))
        .sort((a, b) => this.arrayCompare(a.date, b.date))
        .sort((a, b) => this.arrayCompare(a.clockout, b.clockout));
      this.instructor.yourattendances = allclin
        .filter(x => x.uid === this.authdetail.username)
        .reduce((a, v) => {
          if (!a.some(e => e.date === v.date)) {
            a.push(v);
          }
          return a;
        }, [])
        .sort(function(a, b) {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        });
      ////2020Autumn clockinとoutの重複除去
    },
    async createInstAPI(crArr, msgg, typ, siz) {
      crArr.uid = this.authdetail.username;
      try {
        await API.graphql(graphqlOperation(createInst, { input: crArr }));
        this.listInstsDataAPI();
        this.$buefy.toast.open({
          message: msgg,
          type: typ,
          size: siz,
          duration: 3000
        });
        return true;
      } catch (err) {
        this.writeFail("InstCreate", crArr, err);
        this.$buefy.toast.open({
          message:
            "<span style='font-size:60px'>Failed. please try again</span>",
          type: "is-danger",
          size: "is-large",
          duration: 5000
        });
        return err;
      }
    },
    async updateInstAPI(upArr) {
      upArr.uid = this.authdetail.username;
      try {
        await API.graphql(graphqlOperation(updateInst, { input: upArr }));
      } catch (err) {
        this.writeFail("InstUpdate", upArr, err);
      }
    },
    // いろいろログ用： this.writeNoteLS("fetch start");
    /////API GraphQL
    //////////// fetch Clrm
    async APIgetClrmsinstBydayAll() {
      this.dataAPI.status = "Info";
      this.sett.isLoadingClrmManage = true;
      await this.APIgetClrmsinstByday("Mon"); //★test
      await this.APIgetClrmsinstByday("Tue"); //★test
      await this.APIgetClrmsinstByday("Wed"); //★test
      await this.APIgetClrmsinstByday("Thu"); //★test
      await this.APIgetClrmsinstByday("Fri"); //★test
      if (this.showManagementViewSuper === true) {
        await this.APIgetClrmsinstByday("Sat"); //★test
        await this.APIgetClrmsinstByday("Sun"); //★test
      }
      this.Log(this.dataAPI.status, "APIget", "Clrm", "summary", "detail");
      this.writeDayLogs(
        "APIgetClrms done: " + this.dataAPI.status,
        this.app.noteNameAPI
      );

      if (this.dataAPI.status == "Info") {
        this.idbRemove(this.idbSQue, "API");
        this.dataAPI.ready = true;
      }
      this.sett.isLoadingClrmManage = false;
    },
    async APIgetClrmsinstByday(dow) {
      this.dataAPI.fetching = true;
      try {
        const gql = await API.graphql(
          graphqlOperation(instByday, {
            dayofweek: dow,
            limit: 4000,
            uid: { eq: this.sett.alias.name }
          })
        );
        const gqld = gql.data.instByday.items.filter(n => n._deleted !== true);
        // 既に保持していた場合除去
        const fi = this.dataAPI.Clrms.filter(n => n.dayofweek !== dow);
        this.dataAPI.Clrms = fi;
        this.dataAPI.Clrms.push(...gqld);
        this.dataAPI.log += dow + ": " + gqld.length;
        this.dataAPI.status = "done";
        this.dataAPI.fetching = false;
        return true;
      } catch (e) {
        this.dataAPI.status = "Error";
        this.dataAPI.log += "\n[Error]" + dow + ": " + JSON.stringify(e.errors);
        this.dataAPI.fetching = false;
        return false;
      }
    },
    async listMngsAPI() {
      try {
        const dat = await API.graphql(
          graphqlOperation(listMngs, { type: { eq: this.authdetail.username } })
          //// ★フィルタ出来てない
        );
        this.dataAPI.Mngs = dat.data.listMngs.items;
        this.dataAPI.Mngs = this.dataAPI.Mngs.filter(
          n => n.type == this.authdetail.username
        );
        return true;
      } catch (e) {
        // this.dataAPI.status = "Error";
        this.dataAPI.log += "\n[Error] fetch Mngs" + +JSON.stringify(e.errors);
        // this.dataAPI.fetching = false;
        return false;
      }
    },
    async dataAPIGetSelClrm() {
      if (this.selClrm != []) {
        await this.APIgetClrmsinstByday(this.selClrm.dayofweek); //★test
      }
    },
    async dataIDBGetSelClrm() {
      if (this.selClrm != []) {
        this.dataIDB.Clrms = await this.idbGetClassmembers(this.selClrm.id);
      }
    },
    async datasetIDBGetALL() {
      this.dataIDB.Clrms = await this.idbGetALLClassmembers();
    },
    datasetManage() {
      let srcStr = "";
      if (this.sett.priorityLS === true) {
        this.dataset.Clrms = JSON.parse(JSON.stringify(this.dataLS.Clrms));
        srcStr = "LS - priorityLS";
      } else {
        if (this.dataIDB.Clrms.length !== 0) {
          this.dataset.Clrms = this.dataIDB.Clrms;
          srcStr = "indexedDB";
        } else if (this.dataAPI.Clrms.length !== 0) {
          this.dataset.Clrms = this.dataAPI.Clrms;
          srcStr = "API";
        } else {
          this.dataset.Clrms = JSON.parse(JSON.stringify(this.dataLS.Clrms));
          srcStr = "LS";
        }
      }
      this.dataset.source = srcStr;
      this.writeDayLogs("Clrms = " + srcStr, this.app.noteName);
    },
    async setupWait() {
      if (this.dataIDB.ready) {
        await this.datasetManage();
        // JSONからのallClassesを整える
        await this.initallClasses();
        //これ特別対応だけのためのやつ
        // this.listMiscsDataID("alter", this.authdetail.username);
        this.workspaceValication();
        //管理用
        // this.manageSummary();
        this.devHelper();

        clearInterval(this.sett.intId0);
        this.writeNoteLS("clearInterval setupWait", this.app.noteNameAPI);
      }
    },
    async datasetCheck() {
      if (!this.dataAPI.ready && !this.dataAPI.fetching) {
        await this.APIgetClrmsinstBydayAll();
        this.datasetManage();
      } else if (this.dataset.Clrms.length == 0) {
        this.datasetManage();
      } else {
        clearInterval(this.sett.intId1);
        this.writeNoteLS("clearInterval datasetCheck", this.app.noteNameAPI);
      }
    },
    async idbLog(level = "", nam, key = "", val = "", msg) {
      const namStr = this.idbGetStoreName(nam);
      //           level, type, target, desc, detail
      this.writeDayLogs(
        level + " " + namStr + " " + key + " " + val + "," + msg,
        this.app.noteNameIDB,
        false,
        true
      );
      this.salvageDaylogs(this.app.noteNameIDB, true, true); // flash & update
    },
    ///// Misc
    ///// Misc
    async createMiscAPI(crArr, queueKey = "") {
      try {
        await API.graphql(graphqlOperation(createMisc, { input: crArr }));
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "Misc retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
        return true;
      } catch (err) {
        if (queueKey !== "") {
          this.writeDayLogs(
            "Misc retry FAIL: " + queueKey,
            this.app.noteNameAPI
          );
        } else {
          this.idbAddSQueue("Misc", "", crArr);
        }
        return err;
      }
    },
    async createMiscXAPI(crArr, queueKey = "") {
      if (crArr.datestr == null) {
        crArr.datestr = this.getDateYYYYMMDDhHHMMssSSS();
      }
      crArr.name = this.authdetail.username;
      try {
        await API.graphql(graphqlOperation(createMiscX, { input: crArr }));
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "MiscX retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
        return true;
      } catch (err) {
        if (queueKey !== "") {
          this.writeDayLogs(
            "MiscX retry FAIL: " + queueKey,
            this.app.noteNameAPI
          );
        } else {
          this.idbAddSQueue("MiscX", "", crArr);
        }
        return err;
      }
    },
    async updateMiscXAPI(crArr, queueKey = "") {
      try {
        await API.graphql(graphqlOperation(updateMiscX, { input: crArr }));
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "MiscX retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
        return true;
      } catch (err) {
        if (queueKey !== "") {
          this.writeDayLogs(
            "MiscX retry FAIL: " + queueKey,
            this.app.noteNameAPI
          );
        } else {
          this.idbAddSQueue("MiscX", "", crArr);
        }
        return err;
      }
    },
    ///// log
    async createOrUpdateLogAPI(crArr, queueKey = "", ifUpdate = false) {
      try {
        if (ifUpdate) {
          await API.graphql(graphqlOperation(updateLog, { input: crArr }));
        } else {
          await API.graphql(graphqlOperation(createLog, { input: crArr }));
        }
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "Log retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
        return true;
      } catch (err) {
        if (queueKey !== "") {
          this.writeDayLogs(
            "Log retry FAIL: " + queueKey,
            this.app.noteNameAPI
          );
        } else {
          this.idbAddSQueue("Log", "", crArr);
        }
        return err;
      }
    },
    Log(
      level = "unknown",
      type = "",
      target = "",
      desc = "",
      detail = "",
      ifUpdate = false
    ) {
      const datestr = ifUpdate
        ? this.dayjsYYYYMMDDh()
        : this.getDateYYYYMMDDhHHMMssSSS();
      this.writeNoteLS("[" + level + "] " + type + " " + desc);
      this.createOrUpdateLogAPI(
        {
          level: level,
          datestr: datestr,
          name: this.authdetail.username,
          type: type,
          target: target,
          desc: desc,
          detail: detail
        },
        "",
        ifUpdate
      );
    },
    ////////// updateClrm
    ////////// updateClrm
    async updateClrmAPIQueue(qkey, queueKey = "") {
      const obj = await this.idbGet(this.idbCls, qkey);
      // console.warn(qkey, queueKey, obj);
      this.updateClrmAPI(obj, "", "", queueKey);
    },
    async updateClrmAPI(row, fname, fval, queueKey = "") {
      let upArr = {};
      if (queueKey == "") {
        upArr.id = row.id;
        upArr[fname] = fval;
        upArr.cust01 = row.cust01;
        upArr.cust02 = row.cust02;
      } else {
        upArr = row;
      }
      delete upArr._version;
      delete upArr._lastChangedAt;
      delete upArr._deleted;
      delete upArr.updatedAt;
      delete upArr.createdAt;

      // console.warn(upArr);
      upArr.cust03 = this.getDateYYYYMMDDhHHMMSS();
      try {
        await API.graphql(graphqlOperation(updateClrm, { input: upArr }));
        row.cust03 = upArr.cust03;
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "Clrm retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
      } catch (e) {
        row.cust03 = "";
        //// --- SendQueue
        this.idbAddSQueue("Clrm", row.index, row);
        this.writeDayLogs(
          "ClrmAPI Fail: " + row.index + JSON.stringify(e),
          this.app.noteNameAPI
        );
      }
      //// --- localStorage
      this.classRealtimeBackup();
      //// --- indexedDB
      this.idbSet(this.idbCls, row.index, row);
    },
    async updateClrm(row, fname, fval) {
      row.cust03 = "";
      //出欠判
      if (fname.includes("attn") == true) {
        this.selClrm.attnModified = true;
      }
      this.sett.dummy1 = row;
      const ret = await this.idbGet(this.idbSQue, "Clrm," + row.index);
      if (ret) {
        // sendqueueにある場合全カラムを更新し、Queueも消す
        this.updateClrmAPI(row, "", "", "Clrm," + row.index);
      } else {
        // 10/21より最新操作が先頭にくるように変更
        const log = this.getDateYYYYMMDDhHHMMSS() + "," + fname + "," + fval;
        const logHist = log + "\n" + (row.cust01 === null ? "" : row.cust01);
        row.cust01 = logHist;
        row.cust02 = log;
        //// --- localStorage
        this.classRealtimeBackup();
        //// --- indexedDB
        this.idbSet(this.idbCls, row.index, row);
        //// --- dynamoDB
        this.updateClrmAPI(row, fname, fval);
      }
    },
    async updateClrmFilledArea(rw) {
      // 出欠と宿題は該当週のみ、評価はすべて
      const upArr = {
        id: rw.id,
        uid: rw.uid,
        index: rw.index
      };
      //とりあえず安全策で
      const estr = ["01", "02", "03", "04", "06", "07", "08", "09", "10", "11"];
      //評価はすべて ただし値あるやつだけセットする
      estr.forEach(x => {
        if (rw["attn" + x] !== null && rw["attn" + x] !== "") {
          upArr["attn" + x] = rw["attn" + x];
        }
        if (rw["eval" + x] !== null && rw["eval" + x] !== "") {
          upArr["eval" + x] = rw["eval" + x];
        }
        if (rw["ecom" + x] !== null && rw["ecom" + x] !== "") {
          upArr["ecom" + x] = rw["ecom" + x];
        }
      });
      const estr2 = ["02", "03", "04", "06", "07"];
      estr2.forEach(x => {
        if (
          rw["homeworkincomplete" + x] !== null &&
          rw["homeworkincomplete" + x] !== ""
        ) {
          upArr["homeworkincomplete" + x] = rw["homeworkincomplete" + x];
        }
      });
      const log = this.getDateYYYYMMDDhHHMMSS() + ",FilledArea";
      const logHist = log + "\n" + (rw.cust01 === null ? "" : rw.cust01);
      upArr.cust01 = logHist;
      upArr.cust02 = log;
      upArr.cust03 = this.getDateYYYYMMDDhHHMMSS();

      try {
        const callbk = await API.graphql(
          graphqlOperation(updateClrm, { input: upArr })
        );
        return callbk; // returnの先に用途は実はない
      } catch (err) {
        this.idbAddSQueue("Clrm", rw.index, upArr);
        return false;
      }
    },
    ////////// indexedDB
    ////////// indexedDB
    async idbTEST1() {
      this.manageMng();
      // const chk = await this.examSyncDone(this.selClrm, true);
    },
    async idbTEST2() {
      // const chk = await this.examSyncDone(this.selClrm);
    },
    async idbTEST3() {
      this.reflectSmrytoYourclasses();
      // this.idbHandleSQueue();
    },
    async idbTEST4() {
      this.importAPItoIDB();
      // await this.idbRemove(this.idbCls, this.ds.dev1);
    },
    async idbTEST5() {
      this.importLStoIDB();
      // await this.idbRemove(this.idbCls, this.ds.dev1);
    },
    // indexedDB -
    // indexedDB -
    //////// initialize - for very first time 初回のみ
    async idbIfInitialUse(nam) {
      if (await this.idbGet(nam, "init")) {
        return false;
      } else {
        await this.idbSet(nam, "init", this.getDateYYYYMMDDhHHMMSS());
        return true;
      }
    },
    async idbStart() {
      // マスタ存在確認
      // check if already initialized yet
      let logStr = "";
      const ifInitidbCIdx = this.idbIfInitialUse(this.idbCIdx);
      const ifInitidbCls = this.idbIfInitialUse(this.idbCls);
      const ifInitidbSQue = this.idbIfInitialUse(this.idbSQue);
      const ifInitidbMng = this.idbIfInitialUse(this.idbMng);
      const ifInitidbSmry = this.idbIfInitialUse(this.idbSmry);
      const ifInitlenMisc = this.idbIfInitialUse(this.lenMisc);
      logStr += ifInitidbCIdx ? "idb init CIdx\n" : "";
      logStr += ifInitidbCls ? "idb init Cls \n" : "";
      logStr += ifInitidbSQue ? "idb init SQue\n" : "";
      logStr += ifInitidbMng ? "idb init Mng \n" : "";
      logStr += ifInitidbSmry ? "idb init Smry\n" : "";
      logStr += ifInitlenMisc ? "idb init Misc\n" : "";

      await this.idbSet(this.idbCIdx, "hello", this.getDateYYYYMMDDhHHMMSS());
      await this.idbSet(this.idbCls, "hello", this.getDateYYYYMMDDhHHMMSS());
      await this.idbSet(this.idbSQue, "hello", this.getDateYYYYMMDDhHHMMSS());
      await this.idbSet(this.idbMng, "hello", this.getDateYYYYMMDDhHHMMSS());
      await this.idbSet(this.idbSmry, "hello", this.getDateYYYYMMDDhHHMMSS());
      await this.idbSet(this.lenMisc, "hello", this.getDateYYYYMMDDhHHMMSS());
      logStr +=
        "idbStart: Class:" +
        (await this.idbCls.length()) +
        " index:" +
        (await this.idbCIdx.length()) +
        " Queue:" +
        (await this.idbSQue.length()) +
        " Manage:" +
        (await this.idbMng.length()) +
        " Summary" +
        (await this.idbSmry.length()) +
        " Misc:" +
        (await this.idbMisc.length()) +
        "\n";

      //先読みしときたい
      const cLen = await this.idbGetLength(this.idbCls);
      if (cLen > 0) {
        this.sett.dummy2 = "idb first fetching";
        logStr += "idb first fetching";
        this.dataIDB.Clrms = await this.idbGetALLClassmembers();
      }

      //初期実施処理を書込み（成功までリトライ対象）
      await this.idbSet(this.idbSQue, "API", this.getDateYYYYMMDDhHHMMSS());

      // idbInitialSetup;
      this.writeDayLogs("idbStart done: " + logStr, this.app.noteNameAPI);
    },
    // マスタ構築
    async idbSetup() {
      let logStr = "";
      ////////// Clrm
      logStr +=
        "importToIDB - LS: " +
        this.dataLS.Clrms.length +
        " API: " +
        this.dataAPI.Clrms.length;
      // 同期 とりあえずLS優先★
      await this.importToIDB(this.dataLS.Clrms, false);
      // await this.importLStoIDB();

      ////// LSからDynamoDBにブランク以外すべてUpする
      let uplogStr = "";
      this.dataIDB.Clrms = await this.idbGetALLClassmembers();
      for await (const rw of this.dataIDB.Clrms) {
        this.updateClrmFilledArea(rw);
        uplogStr += rw + "\n";
      }
      await this.writeDayLogs(
        "FilledArea done\n" + uplogStr,
        this.app.noteNameUP
      );
      this.salvageDaylogs(this.app.noteNameUP);
      //////

      // DynamoDb同期
      await this.importToIDB(this.dataAPI.Clrms, false);
      // await this.importAPItoIDB();
      this.dataIDB.Clrms = await this.idbGetALLClassmembers();
      ////////// Clrm Index
      logStr += this.updateIndexIDBbyAPI() + "\n";

      ////////// Class Summary
      this.syncSmryAll();

      ////////// YourClasses
      this.reflectSmrytoYourclasses();

      this.dataIDB.ready = true;
      // this.isClrmLoading = false;

      // なにか指令あれば
      this.manageMng();

      this.writeDayLogs("idbSetup done: " + logStr, this.app.noteNameAPI);
    },
    // indexedDB - Clrm
    // indexedDB - Clrm
    async importLStoIDB() {
      const dat = this.dataLS.Clrms;
      this.importToIDB(dat, false);
    },
    async importAPItoIDB() {
      const dat = this.dataAPI.Clrms;
      this.importToIDB(dat, false);
    },
    async manageMng() {
      // check order
      await this.listMngsAPI();
      const trigger = this.dataAPI.Mngs[0].trigger;
      const detail = this.dataAPI.Mngs[0].detail;

      if (trigger == "ClrmW") {
        const classcode = detail;
        let tgtClass = this.yourClasses.find(arr => {
          return arr.id == classcode;
        });
        const dow = tgtClass.dayofweek;
        const rslt = await this.APIgetClrmsinstByday(dow);
        if (rslt == false) {
          await this.idbSet(
            this.idbSQue,
            "manageMng",
            this.getDateYYYYMMDDhHHMMSS()
          );
        } else {
          //// execute order
          await this.importParticularClassAPItoIDB(classcode);
          await this.idbRemove(this.idbSQue, "manageMng");
          this.writeDayLogs(
            "manageMng done: " + trigger + " " + detail,
            this.app.noteNameAPI
          );
        }
      } else {
        this.writeDayLogs(
          "manageMng: nothing in particular",
          this.app.noteNameAPI
        );
      }
    },
    async importParticularClassAPItoIDB(classcode) {
      ///!!!!! overwrite API data !!!!!
      const dat = this.dataset.Clrms.filter(x => x.classcode === classcode);
      this.importToIDB(dat, true);
    },
    async importToIDB(dat, force = false) {
      for await (const x of dat) {
        if (!force) {
          const chk = await this.idbGet(this.idbCls, x.index);
          if (!chk) {
            this.idbSet(this.idbCls, x.index, x);
          }
        } else {
          this.idbSet(this.idbCls, x.index, x);
        }
      }
      this.idbRemove(this.idbCls, "hello");
    },
    async updateIndexIDBbyAPI() {
      let logStr = "";
      const dat = this.dataAPI.Clrms; //APIが正しい前提
      //担当クラス
      const clslist = dat
        .map(m => {
          return m.classcode;
        })
        .sort()
        .reduce((array, item) => {
          if (array.includes(item) === false) {
            array.push(item);
          }
          return array;
        }, []);
      // クラスと所属生徒一覧
      clslist.forEach(x => {
        const stulist = dat
          .filter(y => {
            return y.classcode === x;
          })
          .map(m => {
            return m.index;
          });
        // dict[x] = stulist;
        this.idbSet(this.idbCIdx, x, stulist);
        logStr += x + ":" + stulist.length;
      });
      return logStr;
    },
    //////////// sync
    // indexedDB - SmryのSync
    // indexedDB - SmryのSync
    // todo
    // クラス内でidle時と授業終了時にHWチェック→Smryに反映、DynamoDBにも反映
    // クラス内でidle時と授業終了時にAttnチェック→Smryに反映、DynamoDBにも反映→APIでクラス全員チェック
    //              ちゃんとDoneならSyncDoneに昇格し、S再度反映（失敗してもQueueにあるだけ）
    // idleとか定期的にlocalステータスはAPI確認する
    // idleとか定期的にHWステータスは確認する（事実上は操作時だけでいいけど漏れ防止、できれば漏れでフラグ変わるときエラー出したい）
    // 常にSmryのHWとかDonwをyourClassesに反映
    // クラスのSyncDone判定は判定用にAPI処理して捨てる（捨てずに、撮った時間記録して再利用？今後考えよう）
    //
    // トリガ：idleか、クラス抜け時か、NWConnection復活時
    async updateSmry(key, prop, val) {
      const obj = await this.idbGet(this.idbSmry, key);
      obj[prop] = val;
      await this.idbSet(this.idbSmry, key, obj);
      this.syncSmry(key);
    },
    async syncSmry(key, force = false) {
      // upload to dynamoDB from indexedDB
      if (!force) {
        const obj = await this.idbGet(this.idbSmry, key);
        this.updateSmryAPI(obj);
      } else {
        // overwrite indexedDB from dynamoDB
        if (this.dataset.Smry.length == 0) {
          await this.APIgetSmrys();
        }
        const tgt = this.dataset.Smry.find(m => {
          return m.classcode == key;
        });
        this.idbSet(this.idbSmry, key, tgt);
      }
    },
    async syncSmryAll(force = false) {
      // indexedDBからdynamoDBに上書き(強制書込み時はスキップ)
      if (!force) {
        const keys = await this.idbSmry.keys();
        for await (const k of keys) {
          if (k !== "init" && k !== "hello") {
            const obj = await this.idbGet(this.idbSmry, k);
            await this.updateSmryAPI(obj);
          }
        }
      }
      // dynamoDBから indexedDbに書込み
      if (this.dataset.Smry.length == 0) {
        await this.APIgetSmrys();
      }
      for await (const x of this.dataset.Smry) {
        if (!force) {
          const chk = await this.idbGet(this.idbSmry, x.classcode);
          if (!chk) {
            this.idbSet(this.idbSmry, x.classcode, x);
          }
        } else {
          this.idbSet(this.idbSmry, x.classcode, x);
        }
      }
    },
    async reflectSmrytoYourclasses() {
      const keys = await this.idbSmry.keys();
      for await (const k of keys) {
        if (k !== "init" && k !== "hello") {
          const obj = await this.idbGet(this.idbSmry, k);
          let tgt = this.yourClasses.find(arr => {
            return arr.id == obj.classcode;
          });

          const attnstatus =
            obj[this.getThisWeekAttnJSON[obj.dayofweek] + "done"];
          tgt.attndone = attnstatus !== null ? true : false;
          tgt.syncdone =
            attnstatus === "sync"
              ? true
              : attnstatus === "local"
              ? false
              : null;
          const hwic = obj[this.getThisWeekHwicJSON[obj.dayofweek]];
          if (hwic === true) {
            //// 識別文字列を追加（既にあればそのまま）
            tgt.detail += this.checkIfHwic(tgt.detail) ? "" : "hwic";
          } else {
            tgt.detail = tgt.detail.replace("hwic", "");
          }
          // console.warn(
          //   obj.classcode,
          //   attndone,
          //   syncdone,
          //   hwic,
          //   obj.dayofweek,
          //   this.getThisWeekAttnJSON[obj.dayofweek],
          //   obj[this.getThisWeekAttnJSON[obj.dayofweek] + "done"],
          //   this.getThisWeekHwicJSON[obj.dayofweek],
          //   obj[this.getThisWeekHwicJSON[obj.dayofweek]]
          // );
        }
      }
    },
    async TESTmodifySmry(classcode) {
      // ds.dev1
      // const classcode = "A0042";
      let csmry = await this.idbGet(this.idbSmry, classcode);
      csmry.attn05done = "local"; // null -> local -> sync
      // dynamoにおくるときはsyncに書き換えてTryする
      // Smry書込み
      this.idbSet(this.idbSmry, csmry.classcode, csmry);
      // yourClassに反映

      //DynamoDB
      csmry.attn05done = "local"; // null -> local -> sync
      this.updateSmryAPI(csmry);
    },
    // indexedDB basics
    // indexedDB basics
    async idbSet(nam, key, obj) {
      try {
        const retval = await nam.setItem(key, obj); // get null if unable to find
        if (!retval) {
          this.idbLog("Warn", nam, key, "Set", "no value");
        }
        return retval;
      } catch (e) {
        this.idbLog("Error", nam, key, "Set", e);
        return false;
      }
    },
    async idbGet(nam, key) {
      try {
        const retval = await nam.getItem(key); // get null if unable to find
        if (!retval) {
          this.idbLog("Warn", nam, key, "Get", "no value");
        }
        return retval;
      } catch (e) {
        this.idbLog("Error", nam, key, "Get", e);
        return false;
      }
    },
    async idbGetLength(nam) {
      const keys = await nam.keys();
      let cnt = 0;
      for await (const k of keys) {
        //// カウント対象外
        if (k !== "init" && k !== "hello") {
          cnt += 1;
        }
      }
      return cnt;
    },
    async idbRemove(nam, key) {
      try {
        await nam.removeItem(key); // get null if unable to find
      } catch (e) {
        this.idbLog("Error", nam, key, "Remove", e);
        return false;
      }
    },
    // indexedDB Clrms
    // indexedDB Clrms
    async idbGetClassmembers(classcode) {
      const idbg = await this.idbGet(this.idbCIdx, classcode);
      const mems = [];
      for await (const k of idbg) {
        if (k !== "init" && k !== "hello") {
          const chk = await this.idbGet(this.idbCls, k);
          mems.push(chk);
        }
      }
      return mems.sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
    },
    async idbGetALLClassmembers() {
      const ckeys = await this.idbCls.keys();
      const mems = [];
      for await (const k of ckeys) {
        if (k !== "init" && k !== "hello") {
          const chk = await this.idbGet(this.idbCls, k);
          mems.push(chk);
        }
      }
      return mems;
    },
    async idbGetStoreName(nam) {
      if (nam == this.idbCls) {
        return "Clrm";
      } else if (nam == this.idbCIdx) {
        return "CIndex";
      } else if (nam == this.idbSQue) {
        return "SendQueue";
      } else if (nam == this.idbMng) {
        return "Manage";
      } else if (nam == this.idbSmry) {
        return "Summary";
      } else if (nam == this.idbMisc) {
        return "Miscs";
      } else {
        return "[unknown idb]";
      }
    },
    // indexedDB Summary
    // indexedDB Summary
    async APIgetSmrys() {
      try {
        const gql = await API.graphql(
          graphqlOperation(listSmrys, {
            uid: this.sett.alias.name
          })
        );
        this.dataset.Smry = gql.data.listSmrys.items;
        return true;
      } catch (e) {
        this.Log("Error", "APIget", "Smry", "summary", "detail");
        this.writeDayLogs(
          "[Error]APIgetSmry " + JSON.stringify(e.errors),
          this.app.noteNameAPI
        );
        return false;
      }
    },
    async updateSmryAPI(upArr, queueKey = "") {
      // remove properties which are not in scope of the schema
      delete upArr._version;
      delete upArr._lastChangedAt;
      delete upArr._deleted;
      delete upArr.updatedAt;
      delete upArr.createdAt;
      try {
        await API.graphql(graphqlOperation(updateSmry, { input: upArr }));
        // const ret = await API.graphql(graphqlOperation(updateSmry, { input: upArr }));
        if (queueKey !== "") {
          this.idbRemove(this.idbSQue, queueKey);
          this.writeDayLogs(
            "Smry retry done: " + queueKey,
            this.app.noteNameAPI
          );
        }
        return true;
      } catch (e) {
        // console.warn("updateSmryAPI error", e);
        if (queueKey !== "") {
          this.writeDayLogs(
            "Smry retry FAIL: " + queueKey,
            this.app.noteNameAPI
          );
        } else {
          this.idbAddSQueue("Smry", upArr.classcode, upArr);
        }
        // this.dealQueue(false, msg, queueKey="",queueAddKey, val);
        return e;
      }
    },
    // indexedDB Queue
    // indexedDB Queue
    async idbAddSQueue(key, tailStr = "", val) {
      tailStr = tailStr == "" ? this.getDateYYYYMMDDhHHMMssSSS() : tailStr;
      this.idbSet(this.idbSQue, key + "," + tailStr, val);
    },
    async idbHandleSQueue() {
      const qkeys = await this.idbSQue.keys();
      let qObj = {};
      // let mtcs = [];
      for await (const qk of qkeys) {
        const val = await this.idbGet(this.idbSQue, qk);
        // mtcs.push(val);
        Object.assign(qObj, { [qk]: val });
      }
      for await (const qk of qkeys) {
        // console.warn(qObj[qk]);
        const gql = qk.split(",")[0];
        // init, hello will be ignored
        switch (gql) {
          case "Log":
            this.createOrUpdateLogAPI(qObj[qk], qk);
            break;
          case "Misc":
            this.createMiscAPI(qObj[qk], qk);
            break;
          case "MiscX":
            this.createMiscXAPI(qObj[qk], qk);
            break;
          case "Clrm":
            this.updateClrmAPIQueue(qk.split(",")[1], qk);
            break;
          case "API":
            this.APIgetClrmsinstBydayAll();
            break;
          case "manageMng":
            this.listMngsAPI();
            break;
        }
      }
    },
    //つくりかけQueueの後処理一括請負
    dealQueue(isSuccessed, msg, queueKey = "", queueAddKey, val) {
      if (queueKey !== "") {
        // from SendQueue
        if (isSuccessed) {
          // successed
          this.idbRemove(this.idbSQue, queueKey);
        }
        // successed or error
        this.writeDayLogs(msg + queueKey, this.app.noteNameAPI);
      } else {
        // NOT from SendQueue
        // Initial try but failed => write queue for next try
        this.idbAddSQueue(msg, queueAddKey, val);
      }
    },
    /// indexedDB 開発用
    async idbClear(nam) {
      await nam
        .clear()
        .then(function() {
          this.sett.dummy1 = nam + "idbClear now empty";
        })
        .catch(e => {
          this.sett.dummy1 = nam + "idbClear error" + JSON.stringify(e);
        });
    },
    //// 確認系
    //// 確認系
    //// check クラス全員チェック
    async checkAttnHWConsistency(classcode, dow, alrt = false) {
      ////Lesson 1 is exeption because no hw required yet
      if (this.getThisWeekHwicJSON[dow] == "") {
        return false;
      }
      const atEl = this.getThisWeekAttnJSON[dow];
      const hwEl = this.getThisWeekHwicJSON[dow];
      const chkHW = function(obj, atEl, hwEl) {
        let rslt = false;
        let rsltStr = "";
        for (const rw of obj) {
          const at = rw[atEl];
          const hw = rw[hwEl];
          rsltStr +=
            "\t" +
            at +
            "\t" +
            hw +
            "\t" +
            rw.studentcode +
            "\t" +
            rw.studentname;
          if (at == "not here" && hw !== false) {
            rsltStr += " NG";
            rslt = true;
          }
          rsltStr += "\n";
        }
        return [rsltStr, rslt];
      };
      const classmem = await this.idbGetClassmembers(classcode);
      const retArr = chkHW(classmem, atEl, hwEl);
      ////////ログ
      // HWConsistency
      let tgt = this.yourClasses.find(arr => {
        return arr.id == classcode;
      });
      if (retArr[1] === true) {
        //// 識別文字列を追加（既にあればそのまま）
        tgt.detail += this.checkIfHwic(tgt.detail) ? "" : "hwic";
        if (alrt) {
          //警告
          this.$buefy.dialog.alert({
            title: "Error",
            message:
              "<span class='f30'><b>" +
              this.getCommonClassName(tgt) +
              "</b><br />Absent <-> Homework<br />  mismatch exists." +
              "<br /><br />Please check.</span>",
            type: "is-danger",
            hasIcon: true,
            icon: "times-circle",
            iconPack: "fa",
            size: "is-large",
            ariaRole: "alertdialog",
            ariaModal: true
          });
        }
      } else {
        tgt.detail = tgt.detail.replace("hwic", "");
      }
      // reflect to indexedDB
      const prop = this.getThisWeekHwicJSON[dow];
      await this.updateSmry(classcode, prop, retArr[1]);
    },
    // Force Sync
    // Force Sync
    async manageupdateClrmAllAPI() {
      //別系統で
      // this.salvageclassRealtimeBackup(" forceSync");
      //APIで
      let classmem;
      if (this.classmembers.length == 0) {
        // classmem = this.getClassmembers(this.selClrm.id);
        classmem = await this.idbGetClassmembers(this.selClrm.id);
      } else {
        classmem = this.classmembers;
      }
      // const classmem = await DataStore.query(Clrm, (c) => c.classcode("eq", this.selClrm.id));
      this.ClrmAppSyncStateShow = false;
      // let retmsg;
      this.ClrmAppSyncBegin = this.classmembers.length;
      this.ClrmAppSyncEnd = 0;
      this.ClrmAppSyncState = true;
      for await (const rw of classmem) {
        this.updateClrmFilledArea(rw);
      }
      // 結果表示(API)
      this.reflectClassSummary(this.selClrm, true);
    },
    //初期処理
    initallClasses() {
      this.yourClasses.forEach(m => {
        // レッスン集と出欠が今週どこなのか ※休講はundefined
        m.lssnthisweek = this.getThisWeekLssnJSON[m.dayofweek];
        m.attnthisweek = this.getThisWeekAttnJSON[m.dayofweek];
        // クラスのタイムスタンプを反映
        this.reflectClassSummary(m);
        this.checkAttnHWConsistency(m.id, m.dayofweek);
      });
      this.yourClasses.splice();
    },
    //////////クラスルーム
    //////////クラスルーム
    ///// クラス選択、読み込み、
    ///// クラス選択、読み込み、
    async selectClassroom(arr) {
      // 前回のテスト結果くりあ（非表示）
      this.ClrmAppSyncStateShow = false;
      this.ClrmAppSyncBegin = 0;
      this.ClrmAppSyncEnd = 0;
      this.ClrmAppSyncState = false;
      //セット
      this.selClrm = arr;

      // this.classmembers = this.getClassmembers(this.selClrm.id);
      this.classmembers = await this.idbGetClassmembers(this.selClrm.id);
      //ここまで編集可能
      // this.selClrm.editableUntil = this.getEditableUntilJSON[
      //   this.selClrm.dayofweek
      // ].lessonnum;
      this.selClrm.attnModified = false;
      this.selClrm.attnDoneReported = false;

      //表示
      this.isOpenselClrm = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      this.discrepancyDetectAndFix(this.selClrm, "select");
    },
    async enterClassroom() {
      //★要らない気がする
      this.workspaceValication();

      this.cRoom.showIndividual = false;
      this.enterClassroomInit();
      this.sett.activeTab = 2; //いざタブを切替
      this.isOpenselClrm = false;
    },
    getClassmembers(classcode) {
      return this.dataset.Clrms.filter(
        x => x.classcode === classcode && x.enable === true
      ).sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
    },
    // 今週分の出欠完了判定
    getAttnDoneStateSelClrm() {
      const cmem = this.classmembers;
      let doneNum = 0;
      for (let num = 0; num < cmem.length; num++) {
        const at = cmem[num][this.selClrm.attnthisweek];
        if (at !== null && at !== "") {
          doneNum += 1;
        }
      }
      return doneNum === cmem.length ? true : false;
    },
    // クラスサマリの更新
    //// クラス毎のサマリDB 更新
    async examAttnDone(tgtClrm) {
      const dow = tgtClrm.dayofweek;
      const cmem = this.classmembers;
      if (cmem.length == 0) {
        return false;
      }
      const tst = cmem.some(m => {
        return (
          m[this.getThisWeekAttnJSON[dow]] == null ||
          m[this.getThisWeekAttnJSON[dow]] == ""
        );
      });
      this.writeDayLogs(
        "examAttn: " + tgtClrm.classcode + " " + tst === false
          ? "Done!"
          : "yet",
        this.app.noteName
      );
      return !tst; // done: true
    },
    async examSyncDone(tgtClrm, refresh = false) {
      const dow = tgtClrm.dayofweek;
      if (refresh) {
        //通信する
        const apiRslt = await this.APIgetClrmsinstByday(dow);
        this.writeDayLogs(
          "examSyncDone: refresh " +
            dow +
            (apiRslt == true ? " Succeed" : " failed"),
          this.app.noteNameAPI
        );
      }
      const arrAPI = this.dataAPI.Clrms.filter(x => x.classcode == tgtClrm.id);
      const tst = arrAPI.some(m => {
        return (
          m[this.getThisWeekAttnJSON[dow]] == null ||
          m[this.getThisWeekAttnJSON[dow]] == ""
        );
      });
      this.writeDayLogs(
        "examSync:" + tgtClrm.classcode + " " + tst === false ? "Done!" : "yet",
        this.app.noteName
      );
      return !tst; // done: true
    },
    async reflectClassSummary(tgtClrm, getFromAPI = false) {
      let tgt = this.yourClasses.find(arr => {
        return arr.id == tgtClrm.id;
      });
      //// 出欠もSyncもHWも出来ていたら処理しない
      if (tgt.syncdone == true) {
        return true;
      } else if (tgt.attndone == true) {
        tgt.syncdone = await this.examSyncDone(tgtClrm, getFromAPI);
      } else {
        tgt.attndone = await this.examAttnDone(tgtClrm);
        if (tgt.attndone == true) {
          tgt.syncdone = await this.examSyncDone(tgtClrm, true);
        }
      }
      // indexedDB update
      const val =
        tgt.syncdone == true ? "sync" : tgt.attndone == true ? "local" : null;
      const prop = this.getThisWeekAttnJSON[tgtClrm.dayofweek] + "done";
      await this.updateSmry(tgtClrm.id, prop, val);
      // console.warn("reflect" + tgtClrm.id, prop, val);
      // tgt.attndone = ret.length === attnsum ? true : attnsum > 0 ? false : null;
      // tgt.attndone =
      //   ret.length === attnsum && ret.length !== 0 ? true : attnsum > 0 ? false : null;
      // tgt.syncdone =
      //   ret.length === syncedsum && ret.length !== 0 ? true : syncedsum > 0 ? false : null;
      // tgt.detail = ret.length + "," + syncedsum + "," + attnsum + ",";
    },
    async discrepancyDetectAndFix(tgtClrm, desc) {
      this.cRoom.fixAwait = true;
      // const objLS = localStorage.getItem("classBackupRealtime_" + classcode);
      //localStorageとDSと配列比較して補正
      const attnDest = tgtClrm.attnthisweek;
      // const objDS = await DataStore.query(Clrm, c =>
      //   c.classcode("eq", tgtClrm.id)
      // );
      const objCL = this.classmembers;
      const objLS = this.loadclassRealtimeBackup(tgtClrm.id);
      let resultStr = "";
      let resultAddStr = "";
      //localStorageあるときだけ処理★厳密には対象attnがある状態、なおそう
      if (objLS !== null) {
        // let atDS = "";
        let atLS = "";
        let atCL = "";
        for (let num = 0; num < objCL.length; num++) {
          //localStorage優先、文字アリ優先、判定は出欠、修正はHW含める
          //処理前
          // atDS =
          //   objDS[num][attnDest] == null || objDS[num][attnDest] == ""
          //     ? null
          //     : objDS[num][attnDest];
          atCL =
            objCL[num][attnDest] == null || objCL[num][attnDest] == ""
              ? null
              : objCL[num][attnDest];
          atLS =
            objLS[num][attnDest] == null || objLS[num][attnDest] == ""
              ? null
              : objLS[num][attnDest];
          // resultStr += num + "[" + atDS + ", " + atCL + ", " + atLS + "],\n";
          resultStr += num + "[" + atCL + ", " + atLS + "],\n";

          if (atLS !== null) {
            // if (atLS == null) {
            //   if (atDS == null && atCL !== null) {
            //     this.updateDS(
            //       objCL[num].id,
            //       attnDest,
            //       atCL,
            //       this.attnHWEditTgt,
            //       objCL[num][this.attnHWEditTgt]
            //     );
            //     resultAddStr +=
            //       num +
            //       " " +
            //       objCL[num].studentcode +
            //       " " +
            //       attnDest +
            //       " class -> DS\n";
            //   }
            //   if (atCL == null && atDS !== null) {
            //     this.classmembers[num][attnDest] = atCL;
            //     this.classmembers[num][this.attnHWEditTgt] =
            //       objDS[num][this.attnHWEditTgt];
            //     resultAddStr +=
            //       num +
            //       " " +
            //       objCL[num].studentcode +
            //       " " +
            //       attnDest +
            //       " DS -> class\n";
            //   }
            // } else {
            // if (atDS == null) {
            //   this.updateDS(
            //     objCL[num].id,
            //     attnDest,
            //     atLS,
            //     this.attnHWEditTgt,
            //     objLS[num][this.attnHWEditTgt]
            //   );
            //   resultAddStr +=
            //     num +
            //     " " +
            //     objCL[num].studentcode +
            //     " " +
            //     attnDest +
            //     " local -> DS\n";
            // }
            if (atCL == null) {
              this.classmembers[num][attnDest] = atLS;
              this.classmembers[num][this.attnHWEditTgt] =
                objLS[num][this.attnHWEditTgt];
              resultAddStr +=
                num +
                " " +
                objCL[num].studentcode +
                " " +
                attnDest +
                " local -> class\n";
            }
          }
        }
        resultStr +=
          resultAddStr +
          // JSON.stringify(objDS) +
          // "_@#@#" +
          JSON.stringify(this.classmembers) +
          "_@#@#" +
          JSON.stringify(objLS);
        ////// report
        const crArr = {
          type: "discrepancyDetectAndFix " + tgtClrm.id,
          name: this.authdetail.username,
          detail: desc + " " + attnDest + "\n" + resultStr
        };
        this.createMiscXAPI(crArr);
        // tgtClrm.attnthisweek
        const sumr = resultAddStr.length > 0 ? "some fix" : "no fix";
        this.writeNoteLS("discrepancy " + tgtClrm.id + " " + desc + " " + sumr);
      } else {
        this.writeNoteLS(
          "discrepancy " + tgtClrm.id + " " + desc + " no local data"
        );
      }
      this.cRoom.fixAwait = false;
    },
    // クラス画面切り替え時と編集終了時
    enterClassroomInit() {
      if (this.selClrm.dayofweek === this.dayjsddd) {
        ////// 当日実施クラス （出席記録状況の保持）      this.classroomIndex = this.instructor.yourTodaysClasses.findIndex(
        // if (this.selClrm.dayofweek === this.sett.dayofweek) {
        this.classroomIndex = this.instructor.yourTodaysClasses.findIndex(
          item => item.id === this.selClrm.id
        );
        this.cRoom.showAttenHist = 0;
        // status参照するためにインデックスを格納
        this.att.mode = this.instructor.yourTodaysClasses[
          this.classroomIndex
        ].status;
      } else {
        ////// 当日以外のクラス
        this.att.mode = 3; //当日ではないので出席は取れないようにする
        this.cRoom.showAttenNote = false;
        this.cRoom.showAttenHist = 1;
        ////// 出欠記録の編集許可
        // // 出欠記録の編集許可： 設定した日数だけ
        // if (this.dayjslenient.includes(this.selClrm.dayofweek)) {
        //   this.isdeadlinelenient = true;
        // } else {
        //   this.isdeadlinelenient = false;
        // }
        //// 出欠記録の編集許可： 制限しない
        // this.isdeadlinelenient = true; // ↓当日でも許可するので下に
      }
      this.isdeadlinelenient = true; //編集許可
      this.isEnteredselClrm = true; //状態保持
      this.cRoom.attnEditTgt = this.selClrm.attnthisweek; //出欠ボタンと編集対象週ボタンの初期値
      this.cRoom.attnEditable = false; //入った時点では編集モードにしない

      //HWのnullをTrueにかえたい
      this.classmembers.forEach(
        m =>
          (m[this.attnHWEditTgt] =
            m[this.attnHWEditTgt] == null ? true : m[this.attnHWEditTgt])
      );
    },
    showABListCaptionChange() {
      switch (this.cRoom.showABListCaption) {
        case "Group A":
          this.cRoom.showABListCaption = "Group B";
          this.cRoom.showABListShowA = false;
          this.cRoom.showABListShowB = true;
          break;
        case "Group B":
          this.cRoom.showABListCaption = "Group A - Group B";
          this.cRoom.showABListShowA = true;
          this.cRoom.showABListShowB = true;
          break;
        case "Group A - Group B":
          this.cRoom.showABListCaption = "Group A";
          this.cRoom.showABListShowA = true;
          this.cRoom.showABListShowB = false;
          break;
      }
    },
    attnModeChangeConfirm() {
      // if (this.computedBlank.length == 0) {
      this.$buefy.dialog.confirm({
        title: "Attendance record mode change:",
        message: "mode change?",
        type: this.att.modeset[this.att.mode].colortype,
        size: "is-large",
        onConfirm: () => {
          const attMode = this.att.mode + 1;
          this.att.mode = attMode;
          //当日クラスの場合のみ
          if (this.selClrm.dayofweek === this.dayjsddd) {
            // if (this.selClrm.dayofweek === this.sett.dayofweek) {
            this.instructor.yourTodaysClasses[
              this.classroomIndex
            ].status = attMode;
            // this.updateClassModeChange();
          }
          this.$buefy.toast.open({
            message:
              "<span style='font-size:40px'>mode: " +
              this.att.modeset[attMode].transitmsg +
              "</span>",
            type: this.att.modeset[attMode].colortype,
            size: "is-large"
          });
        }
      });
    },
    attnModeRestartConfirm() {
      this.$buefy.dialog.confirm({
        title: "Attendance record mode change:",
        message:
          "mode back to beginning?<b-icon pack='fas' icon='undo' size='is-medium' />",
        size: "is-large",
        onConfirm: () => {
          const attMode = 0;
          this.att.mode = attMode;
          //当日クラスの場合のみ
          if (this.selClrm.dayofweek === this.dayjsddd) {
            // if (this.selClrm.dayofweek === this.sett.dayofweek) {
            this.instructor.yourTodaysClasses[
              this.classroomIndex
            ].status = attMode;
            // this.updateClassModeChange();
          }
          this.cRoom.showAttenHist = 0;

          this.$buefy.toast.open({
            message:
              "<span style='font-size:40px'>mode: " +
              this.att.modeset[attMode].transitmsg +
              "</span>",
            type: this.att.modeset[attMode].colortype,
            size: "is-large"
          });
        }
      });
    },
    //// switching edit mode
    attnModeChangeRegardlessOfTheDayConfirm() {
      if (!this.cRoom.attnEditable) {
        // if (this.att.mode === 3) {
        //// enable
        this.$buefy.dialog.confirm({
          title: "Attendance: past data edit",
          message: "Edit previous?",
          // "<b>Not today's class.</b> <b-icon pack='fas' icon='dizzy' size='is-medium' /> Need edit previous?",
          size: "is-large",
          type: "is-beige",
          onConfirm: () => {
            this.att.mode = 0;
            // this.updateClassModeChange();
            this.cRoom.showAttenHist = 0;
            this.cRoom.attnEditable = true;
            this.$buefy.toast.open({
              message:
                "<span style='font-size:40px'>Attendance data is now editable. " +
                "</span>",
              // "<span style='font-size:40px'>You can edit. " + "</span>",
              type: "is-beige",
              size: "is-large"
            });
          }
        });
      } else {
        //// disable
        this.enterClassroomInit();
      }
    },
    ///// 表示変更系
    ///// 表示変更系
    showAttenChange() {
      // 0 <- -> 1
      this.cRoom.showAttenHist = this.cRoom.showAttenHist === 0 ? 1 : 0;
      // 0 -> 1 -> 2
      // let mde = this.cRoom.showAttenHist;
      // mde += 1;
      // this.cRoom.showAttenHist = mde > 2 ? 0 : mde;
      // this.cRoom.showEval = mde === 2 ? true : this.cRoom.showEval;
    },
    // 表示切替 binoculars 双眼鏡ボタンから
    showIndividualChange() {
      this.cRoom.showIndividual = !this.cRoom.showIndividual;
    },
    showEvalCompChange() {
      // 行全体保存
      // this.updateClrmAll(this.classmembers[this.cRoom.indiNo]);
      this.cRoom.showEvalSingle = false;
      this.cRoom.showComEv.ecomAny = false;
      let mde = this.cRoom.showEvalComp;
      mde += 1;
      this.cRoom.showEvalComp = mde > 2 ? 0 : mde;
      // 0か1 this.cRoom.showEvalComp = this.cRoom.showEvalComp === 1 ? 0 : 1;
    },
    indiLRVisiblity(idx) {
      switch (idx) {
        case 0:
          return this.cRoom.showEvalComp < 2 ? true : false;
        case 1:
          return this.cRoom.showEvalComp === 0 || this.cRoom.showEvalComp === 2
            ? true
            : false;
      }
    },
    clearIndi() {
      //個人ページが切り替わりまたは離脱の際にリセットしとく
      // 行全体保存 ※直前の行
      // this.updateClrmAll(this.classmembers[this.cRoom.indiNoPrev]);
      this.cRoom.indiNoPrev = this.cRoom.indiNo;
      // this.cRoom.showComEv.forEach(function(m) {
      // });
      // for (let k of Object.keys(this.cRoom.showComEv)) {
      //   if (k !== undefined) {
      //   }
      // }
    },
    manageIndiNo(num) {
      // 行全体保存
      // this.updateClrmAll(this.classmembers[this.cRoom.indiNo]);
      const newval = this.cRoom.indiNo + num;
      this.cRoom.indiNo =
        this.classmembers[newval] === undefined ? this.cRoom.indiNo : newval;
      // const modnum =
      //   bool === true
      //     ? this.classmembers.length > this.cRoom.indiNo
      //       ? 1
      //       : 0
      //     : this.classmembers.length < 1
      //     ? 0
      //     : -1;
      // this.cRooom.indiNo += modnum;
    },
    manageEvalSingle(idx) {
      //単一項目評価画面にいく
      this.cRoom.tgtEvalSingle = idx;
      this.cRoom.showEvalSingle = !this.cRoom.showEvalSingle;
      this.cRoom.showComEv.ecomAny = false;
    },
    manageIndiSingleCriteria(num) {
      //単一項目評価画面で項目移動
      // 行全体保存
      // this.updateClrmAll(this.classmembers[this.cRoom.indiNo]);
      const newval = this.cRoom.tgtEvalSingle + num;
      this.cRoom.tgtEvalSingle =
        this.cRoom.evalCriItems[newval] === undefined
          ? this.cRoom.tgtEvalSingle
          : this.cRoom.evalCriItems[newval].comm === "---"
          ? newval + num + num
          : newval;
    },
    hideComEv() {
      this.cRoom.showComEv.ecom01 = false;
      this.cRoom.showComEv.ecom02 = false;
      this.cRoom.showComEv.ecom03 = false;
      this.cRoom.showComEv.ecom04 = false;
      this.cRoom.showComEv.ecom05 = false;
      this.cRoom.showComEv.ecom06 = false;
      this.cRoom.showComEv.ecom07 = false;
      this.cRoom.showComEv.ecom08 = false;
      this.cRoom.showComEv.ecom09 = false;
      this.cRoom.showComEv.ecom10 = false;
      this.cRoom.showComEv.ecom11 = false;
      this.cRoom.showComEv.ecomAny = false;
    },
    setEvalUpTarget(evt, prow, fname, idx) {
      // this.cRoom.evalUpTarget = evt + "|" + fname + "|" + idx;
      this.cRoom.evalUpTargetRow = prow;
      //      this.cRoom.evalUpTargetRowId = prow.id;
      this.cRoom.evalUpTargetCol = fname;
      this.cRoom.evalUpTargetIndex = idx;
    },
    goEvalUpTarget(val) {
      //スターの確定
      this.updateClrm(
        this.cRoom.evalUpTargetRow,
        this.cRoom.evalUpTargetCol,
        val
      );
    },
    // 評価に満たない（出席
    zeroEvalUpTarget(prow, fname) {
      // zeroEvalUpTarget(prow, fname, idx) {
      prow[fname] = 0;
      //0点にしてUpする
      this.updateClrm(prow, fname, 0);
    },
    // 評価を欠席
    minusEvalUpTarget(prow, fname) {
      const u = prow[fname] == -1 ? null : -1;
      prow[fname] = u;
      this.updateClrm(prow, fname, u);
    },
    updateClrmEvalsIndi(row, fname, fval) {
      // .table(row, fname, fval);
      // コメント欄入力閉じた時にUpする
      this.cRoom.showComEv[fname] = !this.cRoom.showComEv[fname];
      if (!this.cRoom.showComEv[fname]) {
        this.updateClrm(row, fname, fval);
      }
    },
    updateClrmEvalsIndiAny(row, fname, fval) {
      // コメント欄入力閉じた時にUpする
      this.cRoom.showComEv.ecomAny = !this.cRoom.showComEv.ecomAny;
      if (!this.cRoom.showComEv.ecomAny) {
        this.updateClrm(row, fname, fval);
      }
    },
    ////////// css class
    ////////// css class
    getCommonClassName(tgtClrm) {
      return (
        tgtClrm.dayofweek +
        " P" +
        tgtClrm.slot +
        " " +
        tgtClrm.grade +
        "(" +
        tgtClrm.classnum +
        ")"
      );
    },
    getAttendStatusClass(num) {
      switch (num) {
        case 0:
          return "has-background-danger";
        case 1:
        case "here":
          return "attend-present";
        case 2:
        case "late":
          return "attend-late";
        case 3:
        case "early leave":
          return "attend-eleave";
        case 4:
        case "not here":
        case "absent":
          return "attend-absent";
        default:
          return "has-background-light";
      }
    },
    getAttendStatusClassHist(num) {
      switch (num) {
        case 0:
          return "has-background-danger is-size-5";
        case 1:
        case "here":
          return "attend-hist-present is-size-5";
        case 2:
        case "late":
          return "attend-hist-late is-size-5";
        case 3:
        case "early leave":
          return "attend-hist-eleave is-size-5";
        case 4:
        case "not here":
        case "absent":
          return "attend-hist-absent is-size-5";
        default:
          return "has-background-light is-size-5";
      }
    },
    getIndiAttendClass(val) {
      switch (val) {
        case 1:
        case "here":
          return "attend-indi-present";
        case 2:
        case "late":
          return "attend-indi-late";
        case 3:
        case "early leave":
          return "attend-indi-eleave";
        case 4:
        case "not here":
        case "absent":
          return "attend-indi-absent";
        default:
          return "has-background-light";
      }
    },
    getIndiPaneClass(val) {
      switch (val) {
        case "left":
          return this.cRoom.showIndiList
            ? "tile is-vertical is-10"
            : "tile is-vertical is-12";
        case "right":
          return "tile is-parent is-narrow";
      }
    },
    getIndiTableClass(idx) {
      switch (this.cRoom.showEvalComp) {
        case 0:
          return "table is-striped";
        case 1:
          return idx === 0 ? "table is-fullwidth" : "is-hidden";
        case 2:
          return idx === 1 ? "table is-fullwidth" : "is-hidden";
        case 3:
          return "table is-striped";
      }
    },
    // HW inomplete total
    getHWr(val) {
      return val === false ? 1 : 0;
    },
    getHWTotal(row) {
      const chk = function(r, str) {
        return r[str] === false ? 1 : 0;
      };
      return (
        chk(row, "homeworkincomplete02") +
        chk(row, "homeworkincomplete03") +
        chk(row, "homeworkincomplete04") +
        chk(row, "homeworkincomplete05") +
        chk(row, "homeworkincomplete06") +
        chk(row, "homeworkincomplete07") +
        chk(row, "homeworkincomplete08") +
        chk(row, "homeworkincomplete09") +
        chk(row, "homeworkincomplete10") +
        chk(row, "homeworkincomplete11") +
        chk(row, "homeworkincomplete12") +
        chk(row, "homeworkincomplete13") +
        chk(row, "homeworkincomplete14") +
        chk(row, "homeworkincomplete15") +
        chk(row, "homeworkincomplete16") +
        chk(row, "homeworkincomplete17") +
        chk(row, "homeworkincomplete18") +
        chk(row, "homeworkincomplete19") +
        chk(row, "homeworkincomplete20")
      );
    },
    checkIfHwic(val) {
      // return val.includes("hwic");
      return val == undefined || val == null ? false : val.includes("hwic");
    },
    checkifAbsent(comm) {
      if (comm === undefined || comm === null) {
        return false;
      } else {
        return comm.substr(0, 6).toLowerCase() === "absent" ? true : false;
      }
    },
    getAttendSymbol(num) {
      switch (num) {
        case 0:
          return "has-background-danger";
        case 1:
        case "here":
          return "〇";
        case 2:
        case "late":
          return "LA";
        case 3:
        case "early leave":
          return "EL";
        case 4:
        case "not here":
        case "absent":
          return "X";
        default:
          return "-";
      }
    },
    getDateMDEdit(num) {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      return days.includes(this.manage.checkedRows[0].dayofweek)
        ? this.$dayjs(
            this.dayChainJSON[this.manage.checkedRows[0].dayofweek][num].date
          ).format("M/D")
        : "--";
    },
    getDateMDEditTgt() {
      return this.getDateMD(
        this.manage.convAttnToDateMDNum[this.manage.selAttn]
      );
    },
    getDateMD(num) {
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
      return days.includes(this.selClrm.dayofweek)
        ? this.$dayjs(
            this.dayChainJSON[this.selClrm.dayofweek][num].date
          ).format("M/D")
        : "--";
    },
    getDateMDddd(val) {
      return this.$dayjs(val).format("M/D ddd");
    },
    getDateMDhmmss(val) {
      return this.$dayjs(val).format("M/D h:mm:ss");
    },
    getDateYYYYMMDDhHHMMSS() {
      return this.$dayjs().format("YYYY-MM-DD HH:mm:ss");
    },
    getDateYYYYMMDDhHHMMssSSS() {
      return this.$dayjs().format("YYYY-MM-DD HH:mm:ss.SSS");
    },
    // getDateMDhmm(val) {
    //   return this.$dayjs(val).format("M/D H:mm");
    // },
    // getDateMDHHmm(val) {
    //   return this.$dayjs(val).format("HH:mm");
    // },
    // getDateMixYYYYMMDHHmm(d, t) {
    //   return this.$dayjs(d + " " + t).format("YYYY-MM-DD HH:mm");
    // },
    getIsDoneToday(val) {
      //当日更新かどうか
      return this.dayACjsYYYMMDD === this.$dayjs(val).format("YYYYMMDD")
        ? "is-new"
        : "is-old";
    },
    getTimeIfTodayOrDate(val) {
      //当日更新なら時刻、違えば日付
      return this.$dayjs(val).format("H:mm") == "Invalid Date"
        ? null
        : this.dayACjsYYYMMDD === this.$dayjs(val).format("YYYYMMDD")
        ? this.$dayjs(val).format("H:mm")
        : this.$dayjs(val).format("M/D");
    },
    getIfAttnThisWeekNotNull(dow, attn, lastChan) {
      //当日更新なら時刻、違えば日付
      return attn === null
        ? false
        : this.$dayjs(lastChan).format("H:mm") == "Invalid Date"
        ? false
        : this.$dayjs(this.getThisWeekDateJSON[dow]).format("MMDD") <=
          this.$dayjs(lastChan).format("MMDD");
    },
    addParenthesisIfCorrectExists(str) {
      if (str) {
        return "(" + str + ")";
      } else {
        return null;
      }
    },
    // null も評価するソート
    arrayCompare(a, b, desc = true) {
      if (a !== a && b !== b) return 0;
      if (a !== a) return 1;
      if (b !== b) return -1;

      if (a == null && b == null) return 0;
      if (a == null) return 1;
      if (b == null) return -1;

      if (a === "" && b === "") return 0;
      if (a === "") return 1;
      if (b === "") return -1;

      var sig = desc ? 1 : -1;
      return a < b ? sig : a > b ? -sig : 0;
    },
    ///////////////////////////////////// Basics
    ///////////////////////////////////// Basics
    //// 記録系
    async writeDeviceUser() {
      localStorage.setItem(this.app.device, this.sett.alias.name);
    },
    async sendUserAgent() {
      const detObj = {
        app: this.app.version,
        rev: this.app.rev,
        name: this.authdetail.username,
        date: this.getDateYYYYMMDDhHHMMSS(),
        appVersion: navigator.appVersion,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        appCodeName: navigator.appCodeName,
        cookieEnabled: navigator.cookieEnabled,
        language: navigator.language,
        languages: navigator.languages
      };
      let crArr = {
        type: "userAgent",
        name: this.authdetail.username
      };
      try {
        crArr.detail = JSON.stringify({
          ...{ via: this.app.chrAPI },
          ...detObj
        });
        await API.graphql(graphqlOperation(createMisc, { input: crArr }));
      } catch (err) {
        crArr.detail = JSON.stringify({
          ...{ via: this.app.chrDS },
          ...detObj
        });
        this.writeFail("sendUserAgent-sendfail", crArr, err);
        // await this.createMisc(crArr);
      }
    },
    //////// クラスバックアップ
    //////// クラスバックアップ
    async classBackupALLTypesAllClasses() {
      this.yourClasses
        .filter(x => x.id.indexOf("A") !== -1)
        .forEach(m => this.classBackupALLTypes(m));
    },
    async classBackupALLTypes(sClrm) {
      // クラス出たときに単一でバックアップ
      const classobj = await this.classmembers;
      // const clrmobj = await this.getClassmembers(sClrm.id);
      const clrmobj = await this.idbGetClassmembers(sClrm.id);

      const obj = await this.loadclassRealtimeBackup(sClrm.id);
      const LSobj = obj === null ? {} : obj;
      let DSobj = await DataStore.query(Clrm, c => c.classcode("eq", sClrm.id));
      DSobj.sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
      const header = [{ classcode: "classmembers" }];
      const allobj = header.concat(
        classobj,
        { classcode: "idb" },
        clrmobj,
        { classcode: "localStorage" },
        LSobj,
        { classcode: "DataStore" },
        DSobj
      );
      const timestamp = this.getDateYYYYMMDDhHHMMSS();
      const crArr = {
        type: "classBackupALL_" + sClrm.id + " " + timestamp,
        name: this.authdetail.username,
        detail: JSON.stringify(allobj)
      };
      await this.createMiscXAPI(crArr);
    },
    async classRealtimeBackup() {
      // 入力の都度バックアップ ※入力時しか呼び出さない
      const type = "classBackupRealtime_" + this.selClrm.id;
      const parsed =
        this.getDateYYYYMMDDhHHMMSS() +
        "\n" +
        JSON.stringify(this.classmembers);
      localStorage.setItem(type, parsed);
    },
    loadclassRealtimeBackupAll() {
      for (var key in localStorage) {
        if (key.match(/classBackupRealtime/)) {
          const ls = localStorage.getItem(key);
          const lsObj = JSON.parse(ls.substr(ls.indexOf("\n", 0) + 1));
          const classcode = key.substr("classBackupRealtime_".length);
          this.dataLS.Clrms.push(...lsObj);
          this.writeNoteLS("load localStorage: " + classcode);
        }
      }
    },
    loadclassRealtimeBackup(classcode) {
      const ls = localStorage.getItem("classBackupRealtime_" + classcode);
      if (ls !== null) {
        const lsObj = JSON.parse(ls.substr(ls.indexOf("\n", 0) + 1));
        return lsObj;
      } else {
        return null;
      }
    },
    async salvageclassRealtimeBackup(addStr = "") {
      for (var key in localStorage) {
        if (key.match(/classBackupRealtime/)) {
          const crArr = {
            type: key + addStr,
            name: this.authdetail.username,
            detail: localStorage.getItem(key)
          };
          try {
            await this.createMiscXAPI(crArr);
            // for (var key2 in localStorage) {
            //   if (key2.match(/classRealtimeBackup/)) {
            //     localStorage.removeItem(key2);
            //   }
            // }
          } catch (err) {
            this.writeFail("salvageFail", crArr, err);
          }
        }
      }
    },
    async DEVsalvageclassALLBackup(addStr = "") {
      for (var key in localStorage) {
        if (key.match(/classBackup/)) {
          const crArr = {
            type: key + addStr,
            name: this.authdetail.username,
            detail: localStorage.getItem(key)
          };
          try {
            await this.createMiscXAPI(crArr);
            // for (var key2 in localStorage) {
            //   if (key2.match(/classRealtimeBackup/)) {
            //     localStorage.removeItem(key2);
            //   }
            // }
          } catch (err) {
            this.writeFail("salvageFail", crArr, err);
          }
        }
      }
    },
    //     classBackupAll(){
    //       // きりのいいとこで全部
    //     },
    //////// 記録
    writeNoteLS(str, create = false) {
      let parsed = "";
      if (create != false) {
        parsed = JSON.stringify(this.getDateYYYYMMDDhHHMMSS() + " " + str);
      } else {
        const noteHist = this.fetchNoteLS(this.app.noteName);
        parsed = JSON.stringify(
          noteHist + "\n" + this.getDateYYYYMMDDhHHMMSS() + " " + str
        );
      }
      localStorage.setItem(this.app.noteName, parsed);
    },
    writeDayLogs(str, noteName, create = false, reverse = false) {
      let parsed = "";
      if (create != false) {
        parsed = JSON.stringify(this.getDateYYYYMMDDhHHMMSS() + " " + str);
      } else {
        const noteHist = this.fetchNoteLS(noteName);
        parsed =
          reverse == false
            ? JSON.stringify(
                noteHist + "\n" + this.getDateYYYYMMDDhHHMMSS() + " " + str
              )
            : JSON.stringify(
                this.getDateYYYYMMDDhHHMMSS() + " " + str + "\n" + noteHist
              );
      }
      localStorage.setItem(noteName, parsed);
      if (parsed.split("\n").length > 20000) {
        this.salvageDaylogs(noteName);
      }
    },
    fetchNoteLS(noteName) {
      if (localStorage.getItem(noteName)) {
        try {
          return JSON.parse(localStorage.getItem(noteName));
        } catch (e) {
          localStorage.removeItem(noteName);
          this.writeFail(noteName, "noteBroken", e);
          return false;
        }
      }
    },
    salvageDaylogs(noteName, isFlash = false, ifUpdate = false) {
      const noteHist = this.fetchNoteLS(noteName);
      if (noteHist) {
        try {
          const notelength = noteHist.split("\n").length;
          //           level, type, target, desc, detail
          this.Log("Info", noteName, noteName, notelength, noteHist, ifUpdate);
          if (isFlash == false) {
            this.writeDayLogs("uploaded", noteName, true);
          } else {
            this.writeDayLogs("uploaded flash", noteName);
          }
        } catch (err) {
          this.writeDayLogs("uploaded ERROR", noteName);
        }
      }
    },
    ////////////Fail処理
    async writeFail(dest, arr, ret) {
      const dtl =
        (this.getStartingUrl == "localhost" ? this.getStartingUrl : "web") +
        ", auth:" +
        this.authdetail.name +
        ", dest:" +
        dest +
        ", input:" +
        JSON.stringify(arr) +
        ", result:" +
        JSON.stringify(ret);
      try {
        const crArr = {
          type: "writeFail",
          name: this.authdetail.username,
          detail:
            "appFail:" +
            dest +
            ", date:" +
            this.getDateYYYYMMDDhHHMMSS() +
            "," +
            dtl
        };
        this.createMiscXAPI(crArr);
      } catch (err) {
        localStorage["appFail" + dest + this.getDateYYYYMMDDhHHMMSS()] = dtl;
      }
    },
    listLocalStorage() {
      const crArr = {
        type: "localStorageList",
        name: this.authdetail.username,
        detail: Object.keys(localStorage)
      };
      this.createMiscXAPI(crArr);
    },
    // salvageDev() {
    //   if (this.getStartingUrl !== "localhost") {
    //     if (
    //       // this.sett.alias.name == "Damon Bizzell" ||
    //       this.sett.alias.name == "Leann Tyner" //||
    //       // this.sett.alias.name == "Glenn Torrens"
    //     ) {
    //       this.writeNoteLS("DEVsalvageclassALLBackup");
    //       this.DEVsalvageclassALLBackup("★");
    //     }
    //   }
    // },
    async salvageFail() {
      let arr = [];
      for (var key in localStorage) {
        if (key.match(/appFail/)) {
          var tmp = {};
          tmp.key = key;
          tmp.val = localStorage.getItem(key);
          arr.push(tmp);
        }
      }
      const crArr = {
        type: "appFailSalvage",
        name: this.authdetail.username,
        detail: this.getDateYYYYMMDDhHHMMSS() + ", " + arr
      };
      try {
        this.createMiscXAPI(crArr);
        for (var key2 in localStorage) {
          if (key2.match(/appFail/)) {
            localStorage.removeItem(key2);
          }
        }
      } catch (err) {
        this.writeFail("salvageFail", crArr, err);
      }
    },
    //////////// 設定、Validation
    async periodicValidation() {
      this.idbHandleSQueue();
      // this.initAuthValidation();
      this.workdateValication();
      if (this.sett.activeTab !== 2) {
        // 部屋から出たのか
        if (this.isEnteredselClrm) {
          const sClrm = this.selClrm;
          // バックアップ
          this.classBackupALLTypes(sClrm);
          // this.classBackup(sClrm);
          // fix
          this.discrepancyDetectAndFix(sClrm, "exit");
          //全員、出欠とHWのみ保存
          // this.manageupdateClrmAttnHW();
          //  クラス毎のサマリDB 更新
          this.reflectClassSummary(sClrm);
          //欠席と宿題の齟齬チェック（アラートあり）
          this.checkAttnHWConsistency(sClrm.id, sClrm.dayofweek, true);
          this.isEnteredselClrm = false; // 部屋から出たことを記録
          this.selClrm = { id: "" };
          await this.writeNoteLS("exit room");
          this.salvageDaylogs(this.app.noteName, true);
        } else {
          // 全クラス
          this.initallClasses();
        }
        this.dateDevAddDate();
        // this.workspaceValication(true);
        this.workspaceValication();
      }
      this.salvageFail();
    },
    // workspaceValication(ifUp) {
    workspaceValication() {
      // this.sett.dummy2 += 1;
      //classroomに関係する諸々 日付が変わると必ず
      const todayclass = this.yourClasses
        // .filter((x) => x.dayofweek === this.sett.dayofweek)
        .filter(x => x.dayofweek === this.dayjsddd)
        .map(x => ({
          id: x.id,
          status: 0
        }));
      this.instructor.yourTodaysClasses = todayclass; //本日担当クラス一覧
      // const crArr = {
      //   type: "class" + this.$dayjs().format("YYYY-MM-DD"),
      //   name: this.authdetail.username,
      //   detail: todayclass
      // };
      // if (ifUp) {
      //   //出欠モード保持のレコード
      //   this.updateMisc(crArr);
      // } else {
      //   this.createMisc(crArr);
      // }
      // if (this.instructor.yourTodaysClasses.length < 1) {
      // this.instructor.yourTodaysClasses = tdycls.map(id => )
      // }
    },
    workdateValication() {
      this.salvageDaylogs(this.app.noteNameNW, true, true);
      //日付またぐとリロードする
      if (
        // this.dayjsYYYYMMDDt != this.$dayjs().format("YYYY/MM/DD") &&
        this.dayACjsdddMMMD != this.$dayjs().format("ddd, MMM D") &&
        this.sett.env.isTestMode === false
      ) {
        this.reloadApp("workdateValication");
      }
    },
    async authManage() {
      await Auth.currentAuthenticatedUser()
        .then(user => {
          this.authdetail = {
            username: user.username,
            name: user.attributes.name,
            nickname: user.attributes.nickname,
            role: user.signInUserSession.idToken.payload["custom:role"]
          };
          this.sett.alias = {
            username: user.username,
            name: user.attributes.name
          };
          this.writeDeviceUser();
        })
        .catch(e =>
          // this.Log("Error", "Auth", this.authdetail.username, "catch", JSON.stringify(e))
          this.writeDayLogs("[ERROR] Auth" + e, this.app.noteNameNW)
        );
    },
    async reloadApp(str) {
      await this.writeDayLogs("[Info] reloadApp" + str, this.app.noteName);
      this.$router.go();
    },
    ////////// 日付設定
    setcurrentAcDate() {
      this.sett.acdate = this.$dayjs().add(this.sett.env.devAddAcDate, "d");
    },
    dateDevAddDate() {
      this.sett.ddate = this.$dayjs().add(this.sett.env.devAddDate, "d");
    },
    setcurrentAcTime() {
      this.sett.actime = this.$dayjs().format("H:mm");
      //2. 一定間隔で
      this.sett.actimeIntId = setInterval(() => {
        this.sett.actime = this.$dayjs().format("H:mm");
      }, 1000 * 60); //間隔
    },
    setTESTcreateMisc: function() {
      setInterval(() => {
        // this.testCreateMisc;
        if (this.sett.devcheck !== true) {
          let crArr = {
            type: "test-",
            name: this.authdetail.username,
            detail: "test"
          };
          crArr.type = "testcreateMiscXAPI" + this.getDateYYYYMMDDhHHMMSS();
          this.createMiscXAPI(crArr);
        }
      }, 1000 * 60 * 10);
    },
    setInstMonth() {
      //勤怠用 createdのとき
      this.instructor.yourattendvisiblemonth = this.$dayjs(
        this.sett.acdate
      ).format("YYYY-MM");
    },
    ////////// for dev
    async dataStoreClear() {
      await DataStore.clear();
    },
    spliceTEST() {
      this.classmembers[1].classcount += "TTT";
      // this.classmembers.splice();
      // this.yourxClasses[1].detail += "TTTT";
      // this.yourxClasses.splice();
    },
    spliceTESTKick() {
      // this.classmembers.splice();
      // this.yourxClasses[1].detail += "TTTT";
      this.yourClasses.splice();
    },
    // dosomething() {
    //   console.warn(this.$route.query.id); // URLスキーマ
    // },
    devHelper() {
      if (this.getStartingUrl === "localhost") {
        this.cRoom.showDummy = true;
        this.sett.devcheck = true;
      }
      if (this.authdetail.username === "t-imamura") {
        this.cRoom.showDummy = true;
        this.sett.devarea = true;
        this.sett.devcheck = true;
      }
      // //開発中、全ユーザー許可★★★★★★★★★★★
      // this.cRoom.showDummy = true;
      // this.sett.devarea = true;
      // this.sett.devcheck = true;
    },
    dummytest() {
      this.sett.dummy1 = "val";
    },
    async TESTarr3() {
      if (this.selClrm != []) {
        const data = await DataStore.query(Clrm, c =>
          c.classcode("eq", this.selClrm.id)
        );
        this.sett.dummyClrm = data
          .filter(x => x.classcount <= this.dev.classCLimit)
          .sort(function(a, b) {
            if (a.sortid < b.sortid) return -1;
            if (a.sortid > b.sortid) return 1;
            return 0;
          });
        // console.warn(this.sett.dummyClrm);
      } else {
        this.sett.dummyClrm = [];
      }
    }
  },
  computed: {
    TESTarr1() {
      if (this.selClrm != [] && this.dataIDB.Clrms) {
        return this.dataIDB.Clrms.filter(
          x =>
            x.classcode === this.selClrm.id &&
            x.classcount <= this.dev.classCLimit
        ).sort(function(a, b) {
          if (a.sortid < b.sortid) return -1;
          if (a.sortid > b.sortid) return 1;
          return 0;
        });
      } else {
        return null;
      }
    },
    TESTarr2() {
      if (this.classmembers) {
        return this.classmembers.filter(
          x => x.classcount <= this.dev.classCLimit
        );
      } else {
        return null;
      }
    },
    TESTarr4() {
      if (this.selClrm != [] && this.dataAPI.Clrms) {
        return this.dataAPI.Clrms.filter(
          x =>
            x.classcode === this.selClrm.id &&
            x.classcount <= this.dev.classCLimit
        ).sort(function(a, b) {
          if (a.sortid < b.sortid) return -1;
          if (a.sortid > b.sortid) return 1;
          return 0;
        });
      } else {
        return null;
      }
    },
    TESTarr5() {
      if (this.selClrm != [] && this.dataLS.Clrms) {
        return this.dataLS.Clrms.filter(
          x =>
            x.classcode === this.selClrm.id &&
            x.classcount <= this.dev.classCLimit
        ).sort(function(a, b) {
          if (a.sortid < b.sortid) return -1;
          if (a.sortid > b.sortid) return 1;
          return 0;
        });
      } else {
        return null;
      }
    },

    // JSON.parse(JSON.stringify(this.dataLS.Clrms))

    bBoardArticles() {
      if (this.authdetail.name === "dummy instructor") {
        return this.bBoard.collapsesSample;
      } else {
        return this.bBoard.collapses;
      }
    },
    indiRow() {
      return this.classmembers.length > 0
        ? this.classmembers[this.cRoom.indiNo]
        : "";
    },
    //合計点計算
    indiSc() {
      const jsn = {};
      jsn.hw = 0;
      // Number(this.indiRow.hwicmisc) +
      if (this.classmembers.length > 0) {
        jsn.subtotal0 =
          (this.indiRow.eval01 == -1 ? 0 : this.indiRow.eval01) +
          (this.indiRow.eval02 == -1 ? 0 : this.indiRow.eval02) +
          (this.indiRow.eval03 == -1 ? 0 : this.indiRow.eval03) +
          (this.indiRow.eval04 == -1 ? 0 : this.indiRow.eval04) +
          jsn.hw;
        jsn.subtotal1 =
          (this.indiRow.eval06 == -1 ? 0 : this.indiRow.eval06) +
          (this.indiRow.eval07 == -1 ? 0 : this.indiRow.eval07) +
          (this.indiRow.eval08 == -1 ? 0 : this.indiRow.eval08) +
          (this.indiRow.eval09 == -1 ? 0 : this.indiRow.eval09) +
          (this.indiRow.eval10 == -1 ? 0 : this.indiRow.eval10) +
          (this.indiRow.eval12 == -1 ? 0 : this.indiRow.eval12) +
          (this.indiRow.eval11 == -1 ? 0 : this.indiRow.eval11);
      } else {
        jsn.subtotal0 = 0 + jsn.hw;
        jsn.subtotal1 = 0;
      }
      // Number(this.indiRow.eval02a) +
      jsn.total = jsn.hw + jsn.subtotal0 + jsn.subtotal1;
      return jsn;
    },
    clrmShowCol() {
      //出欠列の表示制御 例:[ true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false ]
      const finalWeek = this.dataset.Cldrs.reduce((a, b) =>
        Number(a.lessonnum) > Number(b.lessonnum) ? a : b
      );
      let arr = [];
      for (var v = 0; v <= Number(finalWeek.lessonnum); v++) {
        switch (this.cRoom.showAttenHist) {
          case 0:
            if (this.cRoom.attnEditable) {
              arr.push(v <= Number(this.selClrm.lssnthisweek) ? true : false); //授業週以前を表示
            } else {
              arr.push(v == Number(this.selClrm.lssnthisweek) ? true : false); //授業週だけ表示
            }
            break;
          case 1:
            arr.push(v <= Number(this.selClrm.lssnthisweek) ? true : false); //授業週以前を表示
            break;

          // case 2:  // 2020-10-15無効化。なんか要らない気がしただけ
          //   arr.push(v == Number(this.selClrm.lssnthisweek) ? true : false);//授業週だけ表示
          // break;

          // case 0:
          //   arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
          //   break;
          // case 1:
          //   arr.push(v <= Number(this.getTodayJSON.lessonnum) ? true : false);
          //   break;
          // case 2:
          //   arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
          //            arr.push(false);
          //   default:
        }
      }
      return arr;
    },
    //////////////////// computed 日付関連 ////////////////////
    dayjslenient() {
      // 出欠履歴許可する日の配列
      return [
        this.$dayjs(this.sett.ddate)
          .add(-1, "d") // 翻る日数
          .format("ddd"),
        this.$dayjs(this.sett.ddate)
          .add(-2, "d")
          .format("ddd")
      ];
    },
    dayACjsHmm() {
      return this.$dayjs(this.sett.acdate).format("H:mm");
    },
    dayACjsdddMMMD() {
      return this.$dayjs(this.sett.acdate).format("ddd, MMM D");
    },
    dayACjsA() {
      return this.$dayjs(this.sett.acdate).format("a");
    },
    dayACjsYYYMMDD() {
      return this.$dayjs(this.sett.acdate).format("YYYYMMDD");
    },
    dayjsYYYYMMDDh() {
      return this.$dayjs(this.sett.ddate).format("YYYY-MM-DD");
    },
    dayjsYYYYMMDDt() {
      return this.$dayjs(this.sett.ddate).format("YYYY/MM/DD");
    },
    dayjsddd() {
      return this.$dayjs(this.sett.ddate).format("ddd");
    },
    getStartingUrl: function() {
      //Localならlocalhostとなる
      return location.origin.split(":")[1].split("/")[2];
    },
    getTodayJSON: function() {
      // 休講日は直近となる
      //本日の情報 // 5/25: 土日に不具合になるので、ピンポイントではなく最大値でだすようにした
      // : { "id": "class", "date": "2020/09/25", "lessonnum": "3", "lessonstr": "Week3", "dayofweek": "Fri", "attendance": "attn03", "hwic": "homeworkincomplete03" } |
      return this.dataset.Cldrs.filter(
        x => x.date <= this.dayjsYYYYMMDDt
      ).reduce((a, b) => (a.date > b.date ? a : b));
    },
    getThisSaturday() {
      const d = new Date();
      const y = d.getFullYear();
      const wn = Number(this.getTodayJSON.weeknum);
      const onejan = new Date(y, 0, 1);
      const offset = onejan.getDay() + 2; // Friday
      const ret = onejan.setDate(onejan.getDate() + wn * 7 - offset);
      return this.$dayjs(ret).format("YYYY/MM/DD");
    },
    getThisWeekDateJSON: function() {
      //今週の授業日を全曜日抽出、無い曜日は無しで
      return this.dataset.Cldrs.filter(
        x => x.weeknum == this.getTodayJSON.weeknum
      )
        .map(m => ({ day: m.dayofweek, date: m.date }))
        .reduce((obj, item) => ({ ...obj, [item.day]: item.date }), {});
    },
    getThisWeekLssnJSON: function() {
      //今週の授業日を全曜日抽出、無い曜日は無しで
      return this.dataset.Cldrs.filter(
        x => x.weeknum == this.getTodayJSON.weeknum
      )
        .map(m => ({ day: m.dayofweek, lssn: m.lessonnum }))
        .reduce((obj, item) => ({ ...obj, [item.day]: item.lssn }), {});
    },
    getThisWeekAttnJSON: function() {
      //今週の授業日を全曜日抽出、無い曜日は無しで
      return this.dataset.Cldrs.filter(
        x => x.weeknum == this.getTodayJSON.weeknum
      )
        .map(m => ({ day: m.dayofweek, attn: m.attendance }))
        .reduce((obj, item) => ({ ...obj, [item.day]: item.attn }), {});
    },
    getThisWeekHwicJSON: function() {
      //今週の授業日を全曜日抽出、無い曜日は無しで
      return this.dataset.Cldrs.filter(
        x => x.weeknum == this.getTodayJSON.weeknum
      )
        .map(m => ({ day: m.dayofweek, hwic: m.hwic }))
        .reduce((obj, item) => ({ ...obj, [item.day]: item.hwic }), {});
    },
    attnHWEditTgt: function() {
      return this.cRoom.attnEditTgt.replace("attn", "homeworkincomplete");
    },
    // 曜日ごとの直近のレッスン回 ※当日含まない
    // getEditableUntilJSON: function() {
    //   const cMon = this.dataset.Cldrs.filter(
    //     x => x.dayofweek === "Mon" && x.date < this.getTodayJSON.date
    //   ).reduce((a, b) => (a.date > b.date ? a : b));
    //   const cTue = this.dataset.Cldrs.filter(
    //     x => x.dayofweek === "Tue" && x.date < this.getTodayJSON.date
    //   ).reduce((a, b) => (a.date > b.date ? a : b));
    //   const cWed = this.dataset.Cldrs.filter(
    //     x => x.dayofweek === "Wed" && x.date < this.getTodayJSON.date
    //   ).reduce((a, b) => (a.date > b.date ? a : b));
    //   const cThu = this.dataset.Cldrs.filter(
    //     x => x.dayofweek === "Thu" && x.date < this.getTodayJSON.date
    //   ).reduce((a, b) => (a.date > b.date ? a : b));
    //   const cFri = this.dataset.Cldrs.filter(
    //     x => x.dayofweek === "Fri" && x.date < this.getTodayJSON.date
    //   ).reduce((a, b) => (a.date > b.date ? a : b));
    //   return { Mon: cMon, Tue: cTue, Wed: cWed, Thu: cThu, Fri: cFri };
    // },
    // 曜日ごとの直近のレッスン回 ※当日含む
    getLatestJSON: function() {
      const cMon = this.dataset.Cldrs.filter(
        x =>
          x.dayofweek === "Mon" &&
          this.$dayjs(x.date).format("YYYY/MM/DD") <= this.getThisSaturday
      ).reduce((a, b) => (a.date > b.date ? a : b));
      const cTue = this.dataset.Cldrs.filter(
        x =>
          x.dayofweek === "Tue" &&
          this.$dayjs(x.date).format("YYYY/MM/DD") <= this.getThisSaturday
      ).reduce((a, b) => (a.date > b.date ? a : b));
      const cWed = this.dataset.Cldrs.filter(
        x =>
          x.dayofweek === "Wed" &&
          this.$dayjs(x.date).format("YYYY/MM/DD") <= this.getThisSaturday
      ).reduce((a, b) => (a.date > b.date ? a : b));
      const cThu = this.dataset.Cldrs.filter(
        x =>
          x.dayofweek === "Thu" &&
          this.$dayjs(x.date).format("YYYY/MM/DD") <= this.getThisSaturday
      ).reduce((a, b) => (a.date > b.date ? a : b));
      const cFri = this.dataset.Cldrs.filter(
        x =>
          x.dayofweek === "Fri" &&
          this.$dayjs(x.date).format("YYYY/MM/DD") <= this.getThisSaturday
      ).reduce((a, b) => (a.date > b.date ? a : b));
      return { Mon: cMon, Tue: cTue, Wed: cWed, Thu: cThu, Fri: cFri };
    },
    dayChainJSON: function() {
      // 曜日の縦の並びで日程を取得
      const cMon = this.dataset.Cldrs.filter(x => x.dayofweek === "Mon");
      const cTue = this.dataset.Cldrs.filter(x => x.dayofweek === "Tue");
      const cWed = this.dataset.Cldrs.filter(x => x.dayofweek === "Wed");
      const cThu = this.dataset.Cldrs.filter(x => x.dayofweek === "Thu");
      const cFri = this.dataset.Cldrs.filter(x => x.dayofweek === "Fri");
      return { Mon: cMon, Tue: cTue, Wed: cWed, Thu: cThu, Fri: cFri };
    },
    getDayChainUntilPrevJSON: function() {
      //return this.dayChainJSON[this.dayjsddd];
      // return this.dayChainJSON.Tue; //[this.dayjsddd];
      //本日の情報
      return this.dataset.Cldrs.filter(
        x =>
          Number(x.lessonnum) < Number(this.getTodayJSON.lessonnum) &&
          x.dayofweek === this.dayjsddd &&
          x.hwic !== undefined
      );
      // ).map(el => {
      //   return el.hwic;
      // });
      // return this.dataset.Cldrs.filter(
      //   z => z.dayofweek === this.dayjsddd
      // ).filter(x => Number(x.lessonnum) < Number(this.getTodayJSON.lessonnum));
    },
    monthChainUntilCurrentMonthJSON: function() {
      // ClockIn/Out用・YYYY-MMで当月まで（勤怠用）  [ "2020-09" ]
      const arr = this.dataset.Cldrs.filter(
        x => Number(x.lessonnum) <= Number(this.getTodayJSON.lessonnum)
      ).map(x => this.$dayjs(x.date).format("YYYY-MM"));
      return Array.from(new Set(arr));
    },
    yourClasses: function() {
      return this.dataset.allClasses.filter(
        x => x.instructor === this.sett.alias.name
      );
    },
    yourClassesShow: function() {
      return this.cRoom.showDummy
        ? this.yourClasses.filter(x => x.id.indexOf("X") !== -1)
        : this.yourClasses.filter(x => x.id.indexOf("A") !== -1);
      // return this.cRoom.showDummy
      //   ? this.dataset.allClasses.filter(
      //       x =>
      //         x.instructor === this.sett.alias.name && x.id.indexOf("X") !== -1
      //     )
      //   : this.dataset.allClasses.filter(
      //       x =>
      //         x.instructor === this.sett.alias.name && x.id.indexOf("A") !== -1
      //     );
      // return this.dataset.allClasses.filter((x) => x.instructor === this.authdetail.name);
    },
    ////////// Clock In / Out
    ////////// Clock In / Out
    ifYouClockIn: function() {
      return this.instructor.yourattendances.some(
        x => x.date === this.$dayjs().format("YYYY-MM-DD")
      );
    },
    ifYouClockInAndStillIn: function() {
      const fnd = this.instructor.yourattendances.find(
        x => x.date === this.$dayjs().format("YYYY-MM-DD")
      );
      if (fnd != undefined) {
        return fnd.clockout == null ? true : false; //出社/退社
      } else {
        return false; //出社前
      }
    },
    yourattendancesMonth: function() {
      return this.instructor.yourattendances.filter(
        x => x.date.substr(0, 7) === this.instructor.yourattendvisiblemonth
      );
    },
    computedBlank: function() {
      // データ current が -1 ならすべて
      // それ以外なら current と state が一致するものだけに絞り込む
      return this.classmembers.filter(function(el) {
        return el.col1 == "";
      }, this);
    },
    classmembersA: function() {
      return this.classmembers.filter(x => x.group === "A");
    },
    classmembersB: function() {
      return this.classmembers.filter(x => x.group === "B");
    },
    isClrmLoading: function() {
      return this.dataset.Clrms.length > 0 ? false : true;
    },
    //出席完璧なのに通信のせいでスターがパープルにならない
    isClrmNeedAppSync: function() {
      return this.selClrm.attndone
        ? this.selClrm.syncdone
          ? false
          : true
        : false;
    }
  },
  async beforeCreate() {
    Hub.listen("auth", data => {
      const { payload } = data;
      const { event } = payload;
      switch (event) {
        case "signIn":
          this.authManage();
          break;
        case "signOut":
          this.authManage();
          break;
      }
      this.writeNoteLS(
        "Auth: " + event + localStorage.getItem(this.app.device) + payload
      );
    });
  },
  async created() {
    this.app.startWhen = this.getDateYYYYMMDDhHHMMssSSS();
    //idb
    this.idbStart();
    //日付、基本設定
    this.dateDevAddDate();
    this.setcurrentAcDate();
    await this.authManage(); //beforeCreateの時点でdata()呼ばれてないので一応
    this.setInstMonth();
    this.salvageFail();
    // this.salvageDev();
    this.listLocalStorage();
    this.sendUserAgent();

    // Students data manaement
    await this.APIgetClrmsinstBydayAll(); // API
    await this.loadclassRealtimeBackupAll(); // LocalStorage
    // this.datasetManage();

    this.idbSetup();
    //// InstはAPIで
    this.listInstsDataAPI(); //今のところ全件とる
    // await this.fetchInsts(); //今のところ全件とる
    Hub.listen("datastore", async hubData => {
      const { event, data } = hubData.payload;
      // if (event === "networkStatus") {
      //   .log(`User has a network connection? ${data.active}`);
      // }
      const ctime = this.$dayjs().format("YYYY-MM-DD HH:mm:ss ");
      switch (event) {
        case "networkStatus":
          // .log(`HUB User has a network connection? ${data.active}`);
          // this.$dayjs(this.sett.acdate).format("YYYY-MM-DD H:mm") +
          // .log(`${ctime} HUBlog User has a network connection? ${data.active}`          );
          this.app.network = data.active;
          this.salvageDaylogs(this.app.noteNameNW, true, true);

          // if (data.active === false) {
          //   this.app.network = false;
          // }
          // this.app.log.nw += ctime + event + ": " + data.active + "\n";
          this.writeDayLogs(
            ctime + event + ": " + data.active,
            this.app.noteNameNW,
            false,
            true
          );
          break;
        case "syncQueriesReady":
          // .log(ctime + "HUBlog syncQueriesReady");
          this.app.network = true;
          // this.app.log.nw += ctime + event + ": " + true + "\n";
          this.writeDayLogs(
            ctime + event + ": " + true,
            this.app.noteNameNW,
            false,
            true
          );
          //復帰したときクラス外なら更新する
          if (this.sett.activeTab !== 2) {
            this.initallClasses();
          }
          break;
        // case "storageSubscribed":
        //   log(`HUB storageSubscribed:${data}`);
        //   break;
        // case "subscriptionsEstablished":
        //   log(`HUB subscriptionsEstablished:${data}`);
        //   break;
        // case "syncQueriesStarted":
        //   log(`HUB syncQueriesStarted:${JSON.stringify(data)}`);
        //   break;
        case "modelSynced":
          // .log(`${ctime} HUBlog modelSynced:${JSON.stringify(data)}`);
          // this.app.log.nw += ctime + event + ": " + JSON.stringify(data) + "\n";
          this.writeDayLogs(
            ctime + event + ": " + JSON.stringify(data),
            this.app.noteNameNW,
            false,
            true
          );
          break;
        case "outboxStatus": // 変更ごとに出る
          // log(`HUB outboxStatus:${JSON.stringify(data)}`);
          //  .log(`${ctime} HUBlog outboxStatus:${JSON.stringify(data)}`);
          this.app.syncing = data.isEmpty;
          // this.app.log.nw += ctime + event + ": " + JSON.stringify(data) + "\n";
          break;
        case "ready":
          // .log(ctime + " HUBlog ready");
          this.app.ready = true;
          // this.app.log.nw += ctime + event + "\n";
          this.writeDayLogs(ctime + event, this.app.noteNameNW, false, true);
          this.salvageDaylogs(this.app.noteNameNW, true, true);
          break;
      }
    });

    this.sett.intId0 = setInterval(() => {
      this.setupWait();
    }, 1000 * 0.5); //間隔
    this.sett.intId1 = setInterval(() => {
      this.datasetCheck();
    }, 1000 * 3); //間隔
    this.sett.intId2 = setInterval(() => {
      this.workdateValication();
    }, 1000 * 60 * 30); //間隔

    this.setcurrentAcTime();
    // this.setTESTcreateMisc()
    await this.writeNoteLS("Vue created done");
    this.salvageDaylogs(this.app.noteName, true);
  },
  async mounted() {
    this.app.log.nw +=
      this.$dayjs().format("YYYY-MM-DD HH:mm:ss ") + "mounted \n";
  },
  beforeDestroy() {
    clearInterval(this.sett.actimeIntId);
    clearInterval(this.sett.intId0);
    clearInterval(this.sett.intId1);
    clearInterval(this.sett.intId2);
  },
  filters: {
    subStr: function(string) {
      return string.substring(0, 509) + "...";
    }
  }
};
</script>

<style lang="scss" src="./styles.scss"></style>
<style lang="css" src="./styles.css"></style>
<!-- <style scoped></style>-->
