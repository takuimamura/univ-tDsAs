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
      <div v-if="getStartingUrl === 'localhost'">
        <b-field>
          <b-button @click="devClassSummary(ds.crMisc.name)">devClassSummary</b-button>
          <b-input v-model="ds.crMisc.type" placeholder="type.."></b-input>
          <b-input v-model="ds.crMisc.name" placeholder="name.."></b-input>
          <b-input v-model="ds.crMisc.detail" placeholder="detail"></b-input>
          <b-button @click="createMisc">Create Misc</b-button>
          <b-button @click="getMiscId">get Misc id</b-button>
        </b-field>
        <article>misc ret: {{ ds.nMisc.return }} - miscs {{ dataset.Miscs }}</article>

        <b-field>
          <b-button @click="DEVcreateMisc">DEVcreateMisc</b-button>
          <b-button @click="DEVcreateMisc2">DEVcreateMisc2</b-button>
          <b-button @click="FIREcreateMisc">FIREcreateMisc</b-button>
          <!-- <b-button @click="FIREcreateMiscCo">FIREcreateMiscCo</b-button> -->
          <b-button @click="FIREQueryMiscCo">FIREQueryMiscCo</b-button>
        </b-field>
        <b-input v-model="sett.dummy"></b-input>
        {{ sett.dummy }}
        <b-icon pack="fas" icon="running" size="is-medium" type="is-bluedark" />
        <!-- 上部表示 -->
        <!-- TESTarr0 -
        <ul>
          <li v-for="r in TESTarr0" :key="r.s">{{ $dayjs(r.up).format("M/D H:mm") }} - {{ r }}</li>
        </ul>TESTarr1
        <ul>
          <li v-for="r in TESTarr1" :key="r.s">{{ $dayjs(r.up).format("M/D H:mm") }} - {{ r }}</li>
        </ul>TESTarr2
        <ul>
          <li v-for="r in TESTarr2" :key="r.s">{{ $dayjs(r.up).format("M/D H:mm") }} - {{ r }}</li>
        </ul>-->
        <!-- TESTarr1 - {{TESTarr1 }}      <br /> -->
        <!-- TESTarr2 - {{TESTarr2 }}      <br /> -->
        <div class="block">
          <b-icon icon="times-circle" :class="[!app.ready ? 'is-ready' : 'is-normal']"></b-icon>
          <b-icon icon="exclamation-triangle" :class="[!app.network ? 'is-network' : 'is-normal']"></b-icon>
          <b-icon icon="sync-alt" :class="[!app.syncing ? 'is-syncing' : 'is-normal']"></b-icon>
          <!-- app: {{ app }} -->
          <br />
        </div>

        <!--■■■開発用 ローカル限定表示■■■-->
        sett {{ sett.alias }} | authdetai {{authdetail}}
        <br />
        manage.dow {{manage.dow}}
        <br />
        <b-switch v-model="sett.sw1">{{ sett.sw1 }}</b-switch>
        <template v-if="sett.sw1">
          <div>
            <!-- selCrlm:{{ $store.state.selCrlm }}          <br /> -->
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

        <b-modal :active.sync="sett.isModalActive"></b-modal>

        <b-button @click="initallClassesDev">initallClassesDev</b-button>
        <b-button @click="initallClasses">initallClasses</b-button>
        <!-- <b-button @click="enterClassroomUp">enterClassroomUp</b-button> -->
        <b-button @click="dummytest">dummytest</b-button>
        sett.dummy1:{{ sett.dummy1 }} ■sett.dummy2{{ sett.dummy2 }} ■sett.dummy3{{ sett.dummy3 }}
        <b-checkbox v-model="sett.env.isTestMode">{{ sett.env.isTestMode }}</b-checkbox>
        authdetail:: {{authdetail}}
        <br />
        cRoom.showEvalComp {{ cRoom.showEvalComp }}
        <br />
        <b-numberinput v-model="sett.env.devAddDate" controls-position="compact"></b-numberinput>
        <b-button
          @click="
          dateDevAddDate();
          dummytest();
          workspaceValication(true);
        "
        >reflect day change</b-button>
        <!-- getTodayJSON {{ getTodayJSON }}      <br /> -->
        <!-- sett.alias:: {{ sett.alias }} -->
        ds.dev1 :::{{ ds.dev1 }}
        <br />
        ds.dev2 :::{{ ds.dev2 }}
        <br />
        ds.dev3 :::{{ ds.dev3 }}
        <br />
        dummy1::::::{{ sett.dummy1 }}
        <br />
        dummy2::::::{{ sett.dummy2 }} ::
        dummy3::::::{{ sett.dummy3 }}
        <br />
        allClasses; {{dataset.allClasses.length}} | yours | {{yourClasses.length}}
        InstByday::{{ dataset.ClrmsInstByday.length }} | Clrms::{{ dataset.Clrms.length }} |
        ClrmsChk::{{ dataset.ClrmsChk.length }} | insts: {{ dataset.Insts.length }} | class:
        {{ classmembers.length }} |
        <br />
        <template v-if="classmembers.length>0">{{classmembers}} |</template>
        -- classroomIndex {{classroomIndex}} | selCrlm {{selCrlm}} |
        <!-- dataset.allClasses {{dataset.allClasses[0]}} -->
        <br />
        getTodayJSON: {{getTodayJSON}} |
        <br />
        getTodayJSON今日: {{getTodayJSON.dayofweek + ':' + getThisWeekAttnJSON[getTodayJSON.dayofweek]}} |
        <br />
        getThisWeekAttnJSON: {{getThisWeekAttnJSON}} | {{getThisWeekAttnJSON.Mon}}
        <br />
        selCrlm {{selCrlm}}
        <!-- dayChainJSON: {{dayChainJSON}}|        <br /> -->
        <!-- getDayChainUntilPrevJSON: {{getDayChainUntilPrevJSON}}|        <br /> -->
        <!-- monthChainUntilCurrentMonthJSON: {{monthChainUntilCurrentMonthJSON}}        <br /> -->
        <!-- {{indiRow}} -->
        <!--
        <br />
        selCrlmDv:: eval{{ manage.selCrlmDv.eval01 }}- {{ manage.selCrlmDv.ecom01 }}
        - eval4:{{ manage.selCrlmDv.eval04 }}- {{ manage.selCrlmDv.ecom04 }}
        - eval11:{{ manage.selCrlmDv.eval11 }}- {{ manage.selCrlmDv.ecom11 }}
        <br />
        indiRow:::{{indiRow}}-->
        <!-- classmembersEdit {{manage.classmembersEdit.length}} -->
        <!-- ::instructor.attendances.length{{instructor.attendances.length}} -->
        <!-- ::instructor.yourTodaysClasses{{ instructor.yourTodaysClasses.length }} ::{{instructor.yourTodaysClasses}}      <br /> -->
        <!-- dataset.Clrms:{{ dataset.Clrms.length }} {{ dataset.Clrms[0] }}<br /> -->
        <!-- <ul>        <li v-for="sm in dataSummary" :key="sm.classcode">{{ sm }}</li>   </ul> -->
        <br />
      </div>

      <!-- 管理用 -->
      <section v-if="getStartingUrl === 'localhost'">
        <article>
          <!-- <p class="subtitle">学期ごと、開講前の設定作業</p>
        allClasses: ClssJSON の 全クラス分をMiscに構築。
          <b-button @click="createMiscClassSummary">createMiscClassSummary</b-button>-->
        </article>
      </section>

      <!-- ABリスト -->
      <section v-show="cRoom.showABList">
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
        <b-switch size="is-large" v-model="cRoom.showABListStudentCode"
          >Student Code</b-switch
        >
        </b-tooltip>-->
      </section>

      <!-- 上部表示 -->
      <section v-show="!cRoom.showABList">
        <nav class="level">
          <div class="level-left">
            <div class="column upper-left-corner is-one-quater">
              {{ dayACjsHmm }}
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
          <div class="level-right">
            <div class="block">
              <!-- <b-icon icon="times-circle" :class="[!app.ready ? 'is-ready' : 'is-normal']"></b-icon> -->
              <!-- icon="exclamation-triangle" -->
              <!-- <b-icon icon="wifi" :class="[!app.network ? 'is-network' : 'is-normal']"></b-icon> -->
              <!-- <b-icon icon="sync-alt" :class="[!app.syncing ? 'is-syncing' : 'is-normal']"></b-icon> -->
              <b-icon icon="wifi" :class="[!app.network ? 'is-network' : 'is-normal']"></b-icon>
              <!-- <b-icon icon="sync-alt" :class="[!app.syncing ? 'is-syncing' : 'is-normal']"></b-icon> -->
            </div>
          </div>
        </nav>
        <!-- <section>
        <div
          class="columns is-half has-text-left"
          style="margin-bottom: -20px;"
          v-show="!cRoom.showABList"
        >
          <div class="column hugetext is-one-quater">
            {{ dayACjsHmm }}
            <span style="font-size: 22px;">{{ dayACjsA }}</span>
            {{ dayACjsdddMMMD }}
          </div>

          <div class="column f23 is-one-quater">
            <b-tag rounded v-show="!ifYouClockIn" class="is-pinkishclear">not clocked in</b-tag>
            {{ " " + authdetail.name }}
          </div>
          <template v-if="sett.env.isTestMode">
            <span class="has-text-primary is-size-1">{{ sett.env.devCaption }}</span>
          </template>
        </div>
        </section>-->
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
            <!-- 管理用画面 --------------------------------------------------------- 管理用画面-->
            <section class="manageview p40" v-if="showManagementView">
              <a href="https://management.d36k1gty6yz9hg.amplifyapp.com/" target="_blank">
                <span class="manageview">
                  Management
                  <b-icon icon="external-link-alt"></b-icon>
                </span>
              </a>
            </section>
            <!-- 管理用画面 --------------------------------------------------------- 管理用画面 ここまで-->
            <!-- 管理用画面 --------------------------------------------------------- 管理用画面 ここまで-->
            <template v-if="!showManagementView">
              <section class="p40">
                <!-- <p class="title">Students</p> -->
                <b-collapse :open="false" aria-id="contentIdForA11y1">
                  <button
                    class="button is-primary"
                    slot="trigger"
                    aria-controls="contentIdForA11y1"
                  >Students search</button>
                  <div class="notification">
                    <template v-if="!sett.isLoadingClrmManage">
                      <div class>
                        <b-table
                          :data="dataset.ClrmsInstByday"
                          :columns="lbls.clrmCols"
                          :paginated="true"
                          :per-page="15"
                          :pagination-simple="false"
                        >
                          <b-input
                            slot="searchable"
                            slot-scope="props"
                            v-model="props.filters[props.column.field]"
                            placeholder="Search..."
                            icon="magnify"
                            size="is-small"
                          />
                        </b-table>
                      </div>
                    </template>
                    <template v-else>
                      <span class="subtitlehas-text-black">(Loading...)</span>
                      <b-loading
                        :is-full-page="false"
                        :active.sync="sett.isLoadingClrmManage"
                        :can-cancel="false"
                      >
                        <b-icon pack="fas" icon="sync-alt" size="is-large" custom-class="fa-spin"></b-icon>
                      </b-loading>
                    </template>
                  </div>
                </b-collapse>

                <!-- <b-collapse class="card" animation="slide"></b-collapse> -->
              </section>
            </template>

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
                  <div class="card-content" v-if="instructor.showPeople">
                    <!-- <p class="subtitle-mb10">People now</p>
                  <span v-for="k in instructor.peopleNow" :key="k">
                    <b-tag rounded size="is-large" type="is-smile" class="tagfor">
                      <b-icon icon="smile" size="is-medium"></b-icon>
                      <span>{{ k }}</span>
                    </b-tag>
                    </span>-->
                  </div>
                </transition>
                <div class="card-content">
                  <div class="columns">
                    <div class="column">
                      <b-button
                        icon-left="user-check"
                        size="is-large"
                        @click="instClockIn"
                        class="is-pulled-right"
                        :disabled="ifYouClockIn"
                      >Clock in</b-button>
                    </div>
                    <div class="column">
                      <b-button
                        icon-left="snowboarding"
                        size="is-large"
                        @click="instClockOut"
                        :disabled="!ifYouClockInAndStillIn"
                      >Clock out</b-button>
                    </div>
                  </div>
                </div>
                <footer class="card-footer"></footer>
              </b-collapse>
            </section>
            <div class="column">
              <amplify-sign-out class="is-pulled-right"></amplify-sign-out>
            </div>
          </b-tab-item>

          <!-- schedule --------------------------------------------------------------------schedule -->
          <!-- <b-tab-item> -->
          <b-tab-item label="Schedule" icon="calendar-alt">
            <!-- <section class="columns is-centered" style="font-size: 16px; padding: 20px 10px;"> -->
            <template v-if="showManagementViewSuper">
              <!-- <template v-if="showManagementView"> -->
              <section class="manageview p40" v-if="showManagementViewSuper">
                <!-- <section class="manageview p40" v-if="showManagementView"> -->
                <div class="has-text-centered f40"></div>
                <b-field class="level-item" type="is-primary">
                  <b-select
                    placeholder="Instructors.."
                    v-model="sett.alias.name"
                    size="is-medium"
                    @input="selectClassroomClear()"
                  >
                    <!-- @input="evalCriteriaSelectChange()" -->
                    <option v-for="n in instructor.nameConv" :key="n.username" :value="n.name">
                      {{
                      n.name
                      }}
                    </option>
                  </b-select>
                  {{ yourClasses.length }} / {{ dataset.allClasses.length }}
                  <!-- <b-button
                icon-right="chevron-right"
                size="is-medium"
                @click="shNmEvalCriChange()"
                style="margin:5px;height:25px"
                >Criteria</b-button
                  >-->
                </b-field>
              </section>
            </template>

            <section
              v-if="false"
              class="columns is-centered"
              style="font-size: 16px; padding: 20px 10px;"
            >
              <div class="column"></div>
              <div class="column">
                <div class="has-text-centered f40">Classes</div>
              </div>
              <div class="column f18" style="padding:20px 0px 0px 0px;">
                <b-field>
                  <b-switch v-model="cRoom.showClassesSum" @input="chkClassesSum">Total Counts</b-switch>
                  <template v-if="cRoom.showClassesSum"></template>
                </b-field>
              </div>
            </section>

            <section class="columns is-centered" style="font-size: 16px; padding: 10px 10px;">
              <div class="column"></div>
              <div class="column">
                <div
                  class="columns"
                  :class="selCrlm.dayofweek === dayjsddd ? 'dayofweekToday' : 'dayofweekTodayNot'"
                  style="width:500px;padding:0px 15px;"
                  v-if="isOpenselCrlm"
                >
                  <div class="content column is-9">
                    <h3>
                      {{ selCrlm.id }}
                      {{ selCrlm.grade }}({{ selCrlm.classnum }})
                      <b-icon
                        v-show="selCrlm.sumNg > 0"
                        icon="exclamation-triangle"
                        size="is-medium"
                        type="is-danger"
                      ></b-icon>
                    </h3>
                    <p class="f23">
                      {{ selCrlm.dayofweek }}
                      {{ selCrlm.slot }}
                      {{ selCrlm.timefrom }}-{{ selCrlm.timeto }}
                      <span
                        style="font-size:16px;"
                      >room:</span>
                      {{ selCrlm.roomnum }}
                      <br />
                      <span style="font-size:20px;">{{ selCrlm.title }}</span>
                      <span style="font-size:20px;">{{ selCrlm.classtitle }}</span>
                      <br />
                      <span
                        class="is-text-5 has-text-weight-bold"
                      >Lesson No. {{ selCrlm.lssnthisweek }}</span>
                    </p>
                  </div>
                  <div class="column is-3">
                    <template v-if="!isClrmLoading">
                      <b-button
                        pack="fas"
                        icon-left="hand-point-right"
                        size="is-large"
                        @click="enterClassroom"
                      >Go</b-button>
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
              </div>
              <div class="column f18">
                <b-notification :closable="false">
                  <template v-if="cRoom.showClassesSum">
                    <button
                      class="button is-primary is-medium"
                      rounded
                      @click="listClrmsDataIDCheck(sett.alias.name)"
                    >Check Uploaded Data</button>
                    <br />
                    <p v-html="manage.chkStatus"></p>
                    <b-loading
                      :is-full-page="true"
                      :active.sync="sett.isLoadingClrmsChk"
                      :can-cancel="true"
                    ></b-loading>
                    <b-field>
                      <b-radio-button
                        :native-value="0"
                        v-model="manage.showNumClassesSum"
                      >Attendance</b-radio-button>
                      <b-radio-button
                        :native-value="1"
                        v-model="manage.showNumClassesSum"
                      >Evaluation</b-radio-button>
                      <b-radio-button :native-value="2" v-model="manage.showNumClassesSum">Both</b-radio-button>
                    </b-field>
                  </template>
                </b-notification>
              </div>
            </section>

            <section
              class="columns is-centered"
              style="font-size: 16px; padding: 0px 10px;"
              v-if="isOpenselCrlm"
            >
              <template v-if="cRoom.showClassesSum">
                <table class="table f23">
                  <thead>
                    <tr>
                      <th style="padding:0px 10px;"></th>
                      <th style="padding:0px 10px;">
                        <b-icon icon="user" size="is-small"></b-icon>
                      </th>

                      <th
                        v-for="(k, index) in manage.vforEdit"
                        :key="`first-${index}`"
                        style="padding:0px 5px 0px 15px;"
                        v-show="cRoom.showClassesSum && manage.showNumClassesSum % 2 === 0"
                      >
                        <span class="f18">{{ k.md + 1 }}</span>
                      </th>

                      <th
                        v-for="(l, index) in manage.vforEval"
                        :key="`second-${index}`"
                        style="padding:0px 5px 0px 10px;"
                        v-show="cRoom.showClassesSum && manage.showNumClassesSum > 0"
                      >
                        <span class="f18">{{ l.cap }}</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="cPointer">
                    <tr>
                      <td style="padding:0px 10px;">Uploaded</td>
                      <td style="padding:0px 10px;">
                        <b>{{ selCrlm.students }}</b>
                      </td>

                      <td
                        v-for="(m, index) in manage.vforEdit"
                        :key="`third-${index}`"
                        style="padding:0px 10px 0px 15px;"
                        :class="[
                        manage.selCrlmDv[m.at] !== selCrlm[m.at]
                          ? 'sumNg'
                          : selCrlm[m.at] === selCrlm.students
                          ? 'sumOk'
                          : selCrlm[m.at] > 0
                          ? 'sumYet'
                          : '',
                      ]"
                        v-show="manage.showNumClassesSum % 2 === 0"
                      >
                        <span class="f18">{{ selCrlm[m.at] }}</span>
                      </td>

                      <td
                        v-for="(n, index) in manage.vforEval"
                        :key="`fourth-${index}`"
                        style="padding:0px 10px 0px 15px;"
                        :class="[
                        manage.selCrlmDv[n.ev] + manage.selCrlmDv[n.cm] !==
                        selCrlm[n.ev] + selCrlm[n.cm]
                          ? 'sumNg'
                          : selCrlm[n.ev] + selCrlm[n.cm] === selCrlm.students * 2
                          ? 'sumOk'
                          : selCrlm[n.ev] + selCrlm[n.cm] > 0
                          ? 'sumYet'
                          : '',
                      ]"
                        v-show="manage.showNumClassesSum > 0"
                      >
                        <span class="f16">{{ selCrlm[n.ev] }}</span>
                        <span class="f14">-{{ selCrlm[n.cm] }}</span>
                      </td>
                    </tr>

                    <tr style="background-color:#eee;">
                      <td style="padding:0px 10px;">Device</td>
                      <td style="padding:0px 10px;">
                        <b>{{ manage.selCrlmDv.students }}</b>
                      </td>

                      <td
                        v-for="(m, index) in manage.vforEdit"
                        :key="`third-${index}`"
                        style="padding:0px 10px 0px 15px;"
                        :class="[
                        manage.selCrlmDv[m.at] !== selCrlm[m.at]
                          ? 'sumNg'
                          : manage.selCrlmDv[m.at] === manage.selCrlmDv.students
                          ? 'sumOk'
                          : manage.selCrlmDv[m.at] > 0
                          ? 'sumYet'
                          : '',
                      ]"
                        v-show="manage.showNumClassesSum % 2 === 0"
                      >
                        <span class="f18">{{ manage.selCrlmDv[m.at] }}</span>
                      </td>

                      <td
                        v-for="(n, index) in manage.vforEval"
                        :key="`fourth-${index}`"
                        style="padding:0px 10px 0px 15px;"
                        :class="[
                        manage.selCrlmDv[n.ev] + manage.selCrlmDv[n.cm] !==
                        selCrlm[n.ev] + selCrlm[n.cm]
                          ? 'sumNg'
                          : manage.selCrlmDv[n.ev] + manage.selCrlmDv[n.cm] ===
                            manage.selCrlmDv.students * 2
                          ? 'sumOk'
                          : manage.selCrlmDv[n.ev] + manage.selCrlmDv[n.cm] > 0
                          ? 'sumYet'
                          : '',
                      ]"
                        v-show="manage.showNumClassesSum > 0"
                      >
                        <span class="f16">{{ manage.selCrlmDv[n.ev] }}</span>
                        <span class="f14">-{{ manage.selCrlmDv[n.cm] }}</span>
                      </td>
                      <td>
                        <b-button @click="manageUpdateClrmDvAll">Upload</b-button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </template>
            </section>

            <!-- クラス一覧 -->
            <section class="columns is-centered" style="font-size: 16px; padding: 20px 10px;">
              <table class="table f23">
                <thead>
                  <tr>
                    <th colspan="2" class="is-size-6 has-text-grey has-text-light">updates</th>
                    <!-- <th class="is-size-7 has-text-light">new</th> -->
                    <th></th>
                    <th></th>
                    <th>Day</th>
                    <th>Slot</th>
                    <th v-show="!cRoom.showClassesSum">Time</th>
                    <th v-show="!cRoom.showClassesSum">Room</th>
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
                    <th>
                      <!--Consistency check-->
                    </th>
                    <th>Lesson No.</th>
                  </tr>
                </thead>
                <tbody class="cPointer">
                  <tr v-for="yitem in yourClasses" :key="yitem.id">
                    <td
                      style="padding:10px 2px 0px 2px;width:10px"
                      class="has-text-centered is-size-6"
                      :class="getIsDoneToday(yitem.oldest)"
                    >{{ getTimeIfTodayOrDate(yitem.oldest) }}</td>
                    <td
                      style="padding:10px 2px 0px 2px;width:10px"
                      class="has-text-centered is-size-6"
                      :class="getIsDoneToday(yitem.newest)"
                    >{{ getTimeIfTodayOrDate(yitem.newest) }}</td>

                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.id }}</td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.grade }}({{ yitem.classnum }})</td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.dayofweek }}</td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                    >{{ yitem.slot }}</td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >
                      <div class="is-pulled-right">{{ yitem.timefrom }}-{{ yitem.timeto }}</div>
                    </td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >{{ yitem.roomnum }}</td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >{{ yitem.classtitle | subStr }}</td>

                    <!-- summary-->
                    <!-- <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      v-show="cRoom.showClassesSum"
                      @click="selectClassroom(yitem)"
                    >
                      <b>{{ yitem.students }}</b>
                    </td>

                    <td
                      v-for="(m, index) in manage.vforEdit"
                      :key="`third-${index}`"
                      style="padding:5px 10px 0px 15px;"
                      :class="[
                      yitem[m.at] === yitem.students ? 'sumOk' : yitem[m.at] > 0 ? 'sumYet' : '',
                    ]"
                      v-show="cRoom.showClassesSum && manage.showNumClassesSum % 2 === 0"
                      @click="selectClassroom(yitem)"
                    >
                      <span class="f18">{{ yitem[m.at] }}</span>
                    </td>

                    <td
                      v-for="(n, index) in manage.vforEval"
                      :key="`fourth-${index}`"
                      style="padding:5px 10px 0px 15px;"
                      :class="[
                      yitem[n.ev] + yitem[n.cm] === yitem.students * 2
                        ? 'sumOk'
                        : yitem[n.ev] + yitem[n.cm] > 0
                        ? 'sumYet'
                        : '',
                    ]"
                      v-show="cRoom.showClassesSum && manage.showNumClassesSum > 0"
                      @click="selectClassroom(yitem)"
                    >
                      <span class="f16">{{ yitem[n.ev] }}</span>
                      <span class="f14">-{{ yitem[n.cm] }}</span>
                    </td>
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      @click="selectClassroom(yitem)"
                    >
                      <b-icon
                        v-show="yitem.sumNg > 0"
                        icon="exclamation-triangle"
                        size="is-small"
                        type="is-danger"
                      ></b-icon>
                    </td>-->
                    <td
                      :class="{dayofweekToday: yitem.dayofweek === dayjsddd,}"
                      class="is-size-3 has-text-weight-bold"
                      @click="selectClassroom(yitem)"
                      v-show="!cRoom.showClassesSum"
                    >{{ yitem.lssnthisweek }}</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <br />
            <br />
          </b-tab-item>

          <!-- classroom --------------------------------------------------------------------classroom -->
          <!-- <b-tab-item> -->
          <b-tab-item label disabled icon="chalkboard-teacher">
            <!-- <template v-if="selCrlm.type !== undefined"> -->
            <nav class="level">
              <div class="level-left">
                <div class="level-item f30" style="margin-bottom: 10px;">
                  <div>
                    <p>
                      {{ selCrlm.id }}
                      {{ selCrlm.grade }}
                      ({{ selCrlm.classnum }})
                      {{ selCrlm.dayofweek }}
                      {{ selCrlm.slot }}
                      {{ selCrlm.timefrom }} -
                      {{ selCrlm.timeto }}
                      <!-- room:{{ selCrlm.room }} -->
                    </p>
                    <p class="subtitle" style="line-height:0.8em;">
                      {{ selCrlm.classtitle }}
                      <b>Lesson {{selCrlm.lssnthisweek}}</b>
                    </p>
                  </div>
                  <!-- <div
                  style="margin-left:10px;"
                  v-show="!cRoom.showIndividual"
                  >{{ selCrlm.classtitle }}</div>-->
                </div>
              </div>
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
                  class="level-item w40"
                  icon-left="binoculars"
                  size="is-medium"
                  @click="showIndividualChange"
                ></b-button>
              </div>
            </nav>
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
                      <span
                        style="font-size: 28px; color: black;"
                      >{{ att.modeset[`${att.mode}`].barcaption }}</span>
                    </b-progress>
                  </div>
                </div>
                <div class="level-left" style="width: 200px; height: 80px;">
                  <button
                    v-show="att.mode < 2"
                    class="button is-large"
                    @click="attnModeChangeConfirm"
                  >change</button>
                  <b-button
                    v-show="att.mode === 2"
                    class="button is-large"
                    @click="attnModeRestartConfirm"
                    icon-left="undo-alt"
                  ></b-button>
                  <!-- 後日修正用 -->
                  <b-button
                    v-show="isdeadlinelenient"
                    class="button is-large is-beige"
                    @click="attnModeChangeRegardlessOfTheDayConfirm"
                    icon-left="edit"
                  >
                    <span v-show="att.mode === 3">edit</span>
                  </b-button>
                </div>
                <b-button
                  icon-left="people-arrows"
                  size="is-large"
                  @click="cRoom.showABList = !cRoom.showABList"
                >A / B</b-button>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <b-button
                    icon-left="hand-paper"
                    size="is-medium"
                    @click="showAttenChange"
                    style="margin-right:20px;"
                  >
                    Attendance
                    <!-- / <b-icon icon="pen-nib" size="is-medium" /> Evaluation -->
                  </b-button>
                </div>
              </div>
            </nav>
            <section v-show="!cRoom.showIndividual">
              <!-- ----------------------------------------------------table------------------------------ -->
              <!-- ----------------------------------------------------table------------------------------ -->
              <!-- --classroom--------------------------------------------table------------------------------ -->
              <!-- {{ classmembers }} -->
              <!-- <template v-if="classmembers[0] !== undefined">{{ classmembers[0] }}</template> -->

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
                    :class="getIsDoneToday(props.row._lastChangedAt)"
                    width="10"
                    sticky
                  >
                    {{ getTimeIfTodayOrDate(props.row._lastChangedAt) }}
                    {{getIfAttnThisWeekNotNull(selCrlm.dayofweek,val)}}
                    {{props.row[getTodayJSON.attendance] == null }}
                    {{getTodayJSON.attendance}}|{{selCrlm.attnthisweek}}
                  </b-table-column>
                  <!-- style="width: 12px; height: 100%; color: #f5f5f5;" -->

                  <b-table-column
                    field="sortid"
                    label="No."
                    width="15"
                    numeric
                    sortable
                    sticky
                    :class="getAttendStatusClass(props.row[getTodayJSON.attendance])"
                  >
                    <span class="f23">{{ props.row.classcount }}</span>
                  </b-table-column>
                  <b-table-column
                    field="group"
                    label="Group"
                    width="20"
                    sticky
                    sortable
                    :class="getAttendStatusClass(props.row[getTodayJSON.attendance])"
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
                    :class="getAttendStatusClass(props.row[getTodayJSON.attendance])"
                  >{{ props.row.studentcode }}</b-table-column>
                  <b-table-column
                    field="studentname"
                    label="Name"
                    sortable
                    width="220"
                    sticky
                    :class="getAttendStatusClass(props.row[getTodayJSON.attendance])"
                  >
                    <!-- <template slot="header" slot-scope="{ column }">
                    <b-button
                      icon-left="people-arrows"
                      size="is-medium"
                      @click="cRoom.showABList = !cRoom.showABList"
                      >A / B</b-button
                    >
                    {{ column.label }}
                    </template>-->

                    <span class="f23">{{ props.row.studentname }}</span>
                  </b-table-column>
                  <b-table-column
                    field="attn01"
                    label="1"
                    :visible="clrmShowCol[1]"
                    :class="getAttendStatusClassHist(props.row.attn01)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(0) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn01) }}
                  </b-table-column>
                  <b-table-column
                    field="attn02"
                    label="2"
                    :visible="clrmShowCol[2]"
                    :class="getAttendStatusClassHist(props.row.attn02)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(1) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn02) }}
                  </b-table-column>
                  <b-table-column
                    field="attn03"
                    label="3"
                    :visible="clrmShowCol[3]"
                    :class="getAttendStatusClassHist(props.row.attn03)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(2) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn03) }}
                  </b-table-column>
                  <b-table-column
                    field="attn04"
                    label="4"
                    :visible="clrmShowCol[4]"
                    :class="getAttendStatusClassHist(props.row.attn04)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(3) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn04) }}
                  </b-table-column>
                  <b-table-column
                    field="attn05"
                    label="5"
                    :visible="clrmShowCol[5]"
                    :class="getAttendStatusClassHist(props.row.attn05)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(4) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn05) }}
                  </b-table-column>
                  <b-table-column
                    field="attn06"
                    label="6"
                    :visible="clrmShowCol[6]"
                    :class="getAttendStatusClassHist(props.row.attn06)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(5) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn06) }}
                  </b-table-column>
                  <b-table-column
                    field="attn07"
                    label="7"
                    :visible="clrmShowCol[7]"
                    :class="getAttendStatusClassHist(props.row.attn07)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(6) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn07) }}
                  </b-table-column>

                  <b-table-column
                    field="attn08"
                    label="8"
                    :visible="clrmShowCol[8]"
                    :class="getAttendStatusClassHist(props.row.attn08)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(7) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn08) }}
                  </b-table-column>
                  <b-table-column
                    field="attn09"
                    label="9"
                    :visible="clrmShowCol[9]"
                    :class="getAttendStatusClassHist(props.row.attn09)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(8) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn09) }}
                  </b-table-column>
                  <b-table-column
                    field="attn10"
                    label="10"
                    :visible="clrmShowCol[10]"
                    :class="getAttendStatusClassHist(props.row.attn10)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(9) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn10) }}
                  </b-table-column>
                  <b-table-column
                    field="attn11"
                    label="11"
                    :visible="clrmShowCol[11]"
                    :class="getAttendStatusClassHist(props.row.attn11)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(10) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn11) }}
                  </b-table-column>
                  <b-table-column
                    field="attn12"
                    label="12"
                    :visible="clrmShowCol[12]"
                    :class="getAttendStatusClassHist(props.row.attn12)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(11) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn12) }}
                  </b-table-column>
                  <b-table-column
                    field="attn13"
                    label="13"
                    :visible="clrmShowCol[13]"
                    :class="getAttendStatusClassHist(props.row.attn13)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(12) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn13) }}
                  </b-table-column>
                  <b-table-column
                    field="attn14"
                    label="14"
                    :visible="clrmShowCol[14]"
                    :class="getAttendStatusClassHist(props.row.attn14)"
                    width="30"
                  >
                    <template slot="header" slot-scope="{ column }">
                      {{ column.label }}
                      <br />
                      <span class="f18">{{ getDateMD(13) }}</span>
                    </template>
                    {{ getAttendSymbol(props.row.attn14) }}
                  </b-table-column>
                  <b-table-column
                    field="attendrec"
                    :visible="cRoom.showAttenHist === 0"
                    label="Attendance"
                    width="200"
                  >
                    <div class="tile is-ancestor" style="z-index: 1;">
                      <div class="tile is-parent">
                        <div class="tile is-child">
                          <b-field v-show="att.mode < 2">
                            <b-radio-button
                              v-model="props.row[getTodayJSON.attendance]"
                              :native-value="att.modeset[att.mode].title"
                              :type="att.modeset[att.mode].colortype"
                              @input="
                              updateClrm(
                                props.row.id,
                                getTodayJSON.attendance,
                                att.modeset[att.mode].title
                              )
                            "
                              size="is-medium"
                            >
                              <div :class="att.modeset[att.mode].colortype">
                                <b-icon icon="check"></b-icon>
                                <span>{{ att.modeset[att.mode].title }}</span>
                              </div>
                            </b-radio-button>
                            <!-- :native-value="att.modeset[2].num" -->
                            <b-radio-button
                              v-model="props.row[getTodayJSON.attendance]"
                              :native-value="att.modeset[att.mode].title2"
                              type="is-danger"
                              @input="
                              updateClrm(
                                props.row.id,
                                getTodayJSON.attendance,
                                att.modeset[att.mode].title2
                              )
                            "
                              size="is-medium"
                            >
                              <b-icon icon="times"></b-icon>
                              <span>{{ att.modeset[att.mode].title2 }}</span>
                            </b-radio-button>
                          </b-field>
                        </div>
                      </div>
                    </div>
                  </b-table-column>
                  <b-table-column field="homeworkincomplete" label="Homework Incomplete" width="30">
                    <div class="tile is-ancestor">
                      <div>
                        <div class="tile is-child">
                          <b-field>
                            <span style="color:#ce1836; font-size:20px;">
                              {{
                              props.row.homeworkincomplete20 +
                              (props.row[getTodayJSON.hwic] === false ? 1 : 0)
                              }}
                            </span>
                            <span style="color:#fff">-</span>
                            <b-checkbox-button
                              v-model="props.row[getTodayJSON.hwic]"
                              type="is-danger"
                              rounded
                              :disabled="att.mode === 3"
                              @input="
                              updateClrm(
                                props.row.id,
                                getTodayJSON.hwic,
                                props.row[getTodayJSON.hwic]
                              )
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
                        <nav class="level" :class="getIsDoneToday(indiRow._lastChangedAt)">
                          <div class="level-left title">
                            {{ indiRow.classcount + ". " }}
                            <div style="margin:0px 3px;"></div>
                            <span class="has-text-grey-light">{{ indiRow.studentcode + " " }}</span>
                            <div style="margin:0px 3px;"></div>
                            {{ " " + indiRow.studentname }}
                            <div style="margin:0px 10px;"></div>
                            <span class="is-size-5 has-text-grey-lighter">
                              {{
                              getTimeIfTodayOrDate(indiRow._lastChangedAt)
                              }}
                            </span>
                          </div>

                          <div class="level-right title is-4">
                            <!-- 期末対応 -->
                            <b-switch
                              size="is-medium"
                              v-model="cRoom.showAttnEval"
                              v-show="cRoom.showEvalComp === 2"
                            >
                              <div style="margin-right:20px;">Attendance</div>
                            </b-switch>
                            <!-- 期末対応 -->

                            <b-tag
                              rounded
                              :class="getAttendStatusClass(indiRow[getTodayJSON.attendance])"
                              style="font-size:25px"
                            >
                              {{
                              indiRow[getTodayJSON.attendance] === null
                              ? "(attendance unconfirmed)"
                              : indiRow[getTodayJSON.attendance]
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
                                            {{
                                            indiRow.homeworkincomplete20 +
                                            (indiRow[getTodayJSON.hwic] === false ? 1 : 0)
                                            }})
                                          </span>
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
                                              type="is-danger"
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
                                          indiRow[k.evl] == -1 ? 'title is-3 is-pinkishalert' : '',
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
                                              setEvalUpTarget($event, indiRow, k.evl, cRoom.indiNo)
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
                                          <span v-show="indiRow[k.evl] !== -1">
                                            {{
                                            indiRow[k.evl]
                                            }}
                                          </span>
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
                                        <span style="color:#ce1836;">
                                          ( incomplete
                                          {{
                                          indiRow.homeworkincomplete20 +
                                          (indiRow[getTodayJSON.hwic] === false ? 1 : 0)
                                          }})
                                        </span>
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
                                            type="is-danger"
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
                                    :class="[cRoom.showEvalComp === 0 ? 'title is-3' : 'title is-3']"
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
                                        type="is-danger"
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
                                        <span v-show="indiRow[k.evl] !== -1">
                                          {{
                                          indiRow[k.evl]
                                          }}
                                        </span>
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
                                    :class="[cRoom.showEvalComp === 0 ? 'title is-3' : 'title is-3']"
                                  >{{ " " + indiSc.subtotal1 }}</span>
                                </td>
                                <td v-if="cRoom.showAttnEval"></td>
                                <td></td>
                              </tr>
                            </table>
                          </section>
                        </article>

                        <article v-show="cRoom.showEvalSingle">
                          <!-- indi ---------- [ view showEvalSingle ] -->
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
                                  type="is-danger"
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
                              :class="getIndiAttendClass(st[getTodayJSON.attendance])"
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
      <v-idle @idle="periodicValidationFromIdol()" :duration="3" />
      </span>-->
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import { DataStore, Predicates, Hub, Auth } from "aws-amplify";

import ClssJSON from "../assets/Clss.json";
import SchdJSON from "../assets/Schd.json";
import UsersJSON from "../assets/Users.json";
// import ClrmJSON from "../assets/Clrm.json";
import EnvJSON from "../assets/env.json";

// import { DataStore, Predicates } from "aws-amplify";
import { Clrm, Inst, Misc } from "../models";

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
  data() {
    return {
      app: {
        ready: false,
        network: false,
        syncing: false,
        log: { nw: "", act: "" }
      },
      ds: {
        clrms: null,
        clrmUp: null,
        clrmDl: null,
        clrmItems: null,
        dev1: null,
        dev2: null,
        dev3: null,
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
      sett: {
        env: EnvJSON,
        isModalActive: false,
        acdate: null, // 実際の日
        ddate: null, // 処理につかう日付
        today: null, // YYYY/MM/DD
        hasMobileCards: false, //buefy
        dummy: "hoge", //null,
        dummy1: null,
        dummy2: null,
        dummy3: null,
        sw1: false,
        activeTab: 0,
        activeTabManage: 0,
        isLoadingClrmManage: false,
        isLoadingClrmsChk: false,
        pageStyle: {
          "--background-color": "#ffff4f"
        },
        classSelected: null,
        alias: { usename: null, name: "all" }
      },
      authdetail: {
        username: null,
        nickname: null,
        name: null,
        role: null
      }, //ログインユーザー情報
      filterABstate: 0,
      vacstate: "",
      crheaders: [
        {
          value: "studentcode",
          text: "code",
          sortable: true
        },
        {
          value: "studentname",
          text: "name",
          sortable: true
        },
        { value: "checkin", text: "check in" },
        { value: "col1", text: "column1" }
      ],
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
        // disableInBtn: false,
        // disableOutBtn: true,
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
      selCrlm: [],
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
        showIndividual: false,
        indiNo: 0,
        indiNoPrev: 0,
        tabIndivitual: 0,
        showAttenNote: false,
        showAttenHist: 0, // 0 当日 1 履歴 2 非表示
        showEval: false, // false,
        showEvalHist: true, // false,
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
        // evalShowSet: {
        //   s0: { pane0: true, pane1: true, sshow: false, ssize: 30, p1ssize: 20, p2ssize: 20 },
        //   s1: { pane0: true, pane1: false, sshow: true, ssize: 50, p1ssize: 30, p2ssize: 50 },
        //   s2: { pane0: false, pane1: true, sshow: true, ssize: 50, p1ssize: 30, p2ssize: 50 },
        //   s3: {
        //     pane0: false,
        //     pane1: false,
        //     sshow: false,
        //     ssize: 30,
        //     p0ssize: 30,
        //     p1ssize: 50,
        //   },
        // },
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
        showCommEval1: false,
        showCommEval2: false,
        showCommEval3: false,
        showCommEval4: false,
        showCommEval5: false,
        showCommEval6: false,
        showCommEval7: false,
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
        evalCriteriaSubSelect: null,
        showEvalCriSubItemsCaption: true,
        shNmEvalCri: 0, //生徒一覧ページでのEvaluation項目レベル表示制御

        evalCriSubIRt: {
          // participation: [
          //   { c0: true, c1: false },
          //   { c0: false, c1: true },
          //   { c0: true, c1: true }
          // ],
          // others: [
          //   { c0: true, c1: false, c2: false, c3: false },
          //   { c0: false, c1: true, c2: false, c3: false },
          //   { c0: false, c1: false, c2: true, c3: false },
          //   { c0: false, c1: false, c2: false, c3: true },
          //   { c0: true, c1: true, c2: true, c3: true }
          // ]
        },
        showPrevHW: false,
        indirep: [
          [0, 1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10, 11, 12]
        ],
        evscVa: true,
        evscVb: false,
        evscVc: false,
        evscVd: false,
        evsc1a: true,
        evsc1b: false,
        evsc1c: false,
        evsc1d: false
      },
      manage: {
        isOpenSummary: false,
        isOpenEdit: false,
        showNumClassesSum: 0,
        classmembersEdit: [], // studentslistjson,
        numAttenHist: 1,
        selCrlm: [],
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
            field: "id",
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
          { at: "attn14", md: 13 }
        ],
        vforEval: [
          {
            ev: "eval01",
            cm: "eval01",
            cap: "P 1",
            caption: "Participation 1",
            md: 0
          },
          {
            ev: "eval02",
            cm: "eval02",
            cap: "P 2",
            caption: "Participation 2",
            md: 1
          },
          {
            ev: "eval03",
            cm: "eval03",
            cap: "Im 1",
            caption: "Improvement 1",
            md: 2
          },
          {
            ev: "eval04",
            cm: "eval04",
            cap: "Im 2",
            caption: "Improvement 2",
            md: 3
          },
          {
            ev: "eval06",
            cm: "eval06",
            cap: "Sp 1",
            caption: "Speech 1",
            md: 5
          },
          {
            ev: "eval07",
            cm: "eval07",
            cap: "Sp 2",
            caption: "Speech 2",
            md: 6
          },
          {
            ev: "eval08",
            cm: "eval08",
            cap: "Ds 1",
            caption: "Discussion 1",
            md: 7
          },
          {
            ev: "eval09",
            cm: "eval09",
            cap: "Ds 2",
            caption: "Discussion 2",
            md: 8
          },
          {
            ev: "eval10",
            cm: "eval10",
            cap: "Ds F w11",
            caption: "Discussion Final w11",
            md: 9
          },
          {
            ev: "eval12",
            cm: "eval12",
            cap: "Ds F w12",
            caption: "Discussion Final w12",
            md: 10
          },
          {
            ev: "eval11",
            cm: "eval11",
            cap: "Pr F",
            caption: "Presentation Final",
            md: 11
          }
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
        },
        attnElChr: [
          "attn01",
          "attn02",
          "attn03",
          "attn04",
          "attn05",
          "attn06",
          "attn07",
          "attn08",
          "attn09",
          "attn10",
          "attn11",
          "attn12",
          "attn13",
          "attn14",
          "attn15",
          "eval01",
          "eval02",
          "eval03",
          "eval04",
          "eval05",
          "eval06",
          "eval07",
          "eval08",
          "eval09",
          "eval10",
          "eval11",
          "eval12",
          "ecom01",
          "ecom02",
          "ecom03",
          "ecom04",
          "ecom05",
          "ecom06",
          "ecom07",
          "ecom08",
          "ecom09",
          "ecom10",
          "ecom11",
          "ecom12"
        ],
        selCrlmDv: {
          students: "x",
          attn01: "",
          attn02: "",
          attn03: "",
          attn04: "",
          attn05: "",
          attn06: "",
          attn07: "",
          attn08: "",
          attn09: "",
          attn10: "",
          attn11: "",
          attn12: "",
          attn13: "",
          attn14: "",
          attn15: "",
          eval01: "",
          eval02: "",
          eval03: "",
          eval04: "",
          eval05: "",
          eval06: "",
          eval07: "",
          eval08: "",
          eval09: "",
          eval10: "",
          eval11: "",
          eval12: "",
          ecom01: "",
          ecom02: "",
          ecom03: "",
          ecom04: "",
          ecom05: "",
          ecom06: "",
          ecom07: "",
          ecom08: "",
          ecom09: "",
          ecom10: "",
          ecom11: "",
          ecom12: ""
        },
        queryRowCrlm: ""
      },
      showManagementView: false,
      showManagementViewSuper: false,
      classroomIndex: null,
      classmembers: [], // studentslistjson,
      isdeadlinelenient: false, //大目に見る締切
      isOpenselCrlm: false,
      isEnteredselCrlm: false, //部屋に入ってるか
      stickyHeaders: false,
      vacvisible: true,
      dataset: {
        // Cxlrms: ClrmJSON, // [], //学生データ
        Clrms: [], // [], //学生データ
        ClrmsChk: [], //チェック用
        ClrmsInstByday: [],
        allClasses: ClssJSON, // [],
        Cldrs: SchdJSON, //[], //カレンダ
        Insts: [], //講師（勤怠とか）
        Miscs: [], //その他便利に使う
        MiscsList: [],
        upMiscs: [],
        sample: [],
        listInsts: [],
        qInsts: []
      },
      createdval: null
      // periodicValidationFromIdolNum: 0
    };
  },
  methods: {
    /////DataStore
    /////DataStore
    /////DataStore
    async fetchClrms() {
      this.ds.clrms = await DataStore.query(Clrm, Predicates.ALL);
      this.dataset.Clrms = [];
      this.dataset.Clrms = [...this.ds.clrms];
      // this.dataset.Clrms.splice();
      // this.dataset.Clrms.push(...this.ds.clrms);
    },
    async fetchInsts() {
      const insts = await DataStore.query(Inst, Predicates.ALL);
      this.dataset.Insts = [];

      this.dataset.Insts.push(...insts);
      this.instructor.attendances.push(...insts);
      // },
      // // async listInstsData() {
      //   //初期だけ実施してるのかな
      //   warn("xx:listInstsData");
      //   this.instructor.attendances.push(
      //     ...this.instructor.attendances,
      //     ...InstsData.data.listInsts.items
      //   );
      //自分の勤怠
      this.instructor.yourattendances = this.instructor.attendances.filter(
        x => x.uid === this.authdetail.username
      );
    },
    async fetchMiscs() {
      this.dataset.Miscs = [];
      this.dataset.Miscs = await DataStore.query(Misc, Predicates.ALL);
      // this.dataset.Miscs = [...this.ds.xxxxclrms];
      // this.dataset.Clrms.splice();
      // this.dataset.Clrms.push(...this.ds.clrms);
    },
    async fetchClrmsChk() {
      this.dataset.ClrmsChk = await DataStore.query(Clrm, Predicates.ALL);
    },
    async fetchClrmsDatainstByday(dow) {
      this.dataset.ClrmsInstByday = await DataStore.query(Clrm, c =>
        c.dayofweek("eq", dow).uid("eq", this.sett.alias.name)
      );
    },
    async getClrmsDatainstByday(dow) {
      await this.fetchClrmsDatainstByday(dow);
    },

    async createClrm(cr) {
      if (!cr) {
        return;
      }

      await DataStore.save(
        new Clrm({
          uid: this.authd.name,
          index: cr.index,
          classcode: cr.classcode,
          studentcode: cr.studentcode
        })
      );

      this.clrmItemContent = "";
      await this.fetchClrms();
      // await this.fetchClrms(clrm);
    },
    async updateClrm(id, fname, fval) {
      const clrmItem = await DataStore.query(Clrm, id);
      // this.clrmUp =
      //   clrmItem.index + " " + clrmItem.classcode + " " + clrmItem.studentcode;
      await DataStore.save(
        Clrm.copyOf(clrmItem, updated => {
          updated[fname] = fval;
        })
      );

      await this.fetchClrms();
      this.enterClassroomUp();
      // setTimeout(this.enterClassroomUp, 1000 * 1); // 直後だとタイムスタンプ取れないので再実施させる
      // setTimeout(this.enterClassroomUp, 1000 * 2); // 直後だとタイムスタンプ取れないので再実施させる
      // setTimeout(this.enterClassroomUp, 1000 * 3); // 直後だとタイムスタンプ取れないので再実施させる
      // setTimeout(this.enterClassroomUp, 1000 * 5); // 直後だとタイムスタンプ取れないので再実施させる
      setTimeout(this.enterClassroomUp, 1000 * 20); // 直後だとタイムスタンプ取れないので再実施させる
      // // await this.fetchClrms(clrmItem.clrm);
    },
    ///// Misc
    ///// Misc
    async DEVcreateMisc() {
      const cr = {
        type: "classRoom",
        name: this.ds.crMisc.name,
        detail: JSON.stringify({
          oldest: this.$dayjs(),
          newest: new Date()
        })
      };
      try {
        await DataStore.save(new Misc(cr));
      } catch (err) {
        this.writeFail("MiscCreate", cr, err);
      }

      this.fetchMiscs();
    },
    async DEVcreateMisc2() {
      const original = await DataStore.query(Misc, c =>
        c.type("eq", "classRoom").name("eq", this.ds.crMisc.name)
      );
      // table(original);
      const outt = original.find(arr => {
        return arr.detail.length > 0;
      });
      // console.warn(outt.detail);
      const dt = JSON.parse(outt.detail);
      // console.warn(dt.oldest);
      // console.warn(dt.newest);
      return dt;
    },
    async FIREQueryMiscCo() {
      const cr = {
        type: "TEST",
        name: "TEST"
      };
      const original = await DataStore.query(Misc, c =>
        c.type("eq", cr.type).name("eq", cr.name)
      );
      this.sett.dummy = original.length;
      // console.warn(original);
    },

    async FIREcreateMisc() {
      const cr = {
        type: "TEST",
        name: this.sett.dummy,
        detail: this.$dayjs().format("H:mm:ss")
      };
      try {
        await DataStore.save(new Misc(cr));
      } catch (err) {
        this.writeFail("MiscCreate", cr, err);
      }
    },
    //// クラス毎のサマリDB 一括作成

    // <p class="subtitle">学期ごと、開講前の設定作業</p>
    // allClasses: ClssJSON の 全クラス分をMiscに構築。
    // async createMiscClassSummary() {
    //   await Promise.all(
    //     this.dataset.allClasses.forEach((s) => {
    //       DataStore.save(
    //         new Misc({
    //           type: this.ds.typeMisc.classSum,
    //           name: s.id,
    //         })
    //       );
    //     })
    //   );
    //   // warn("createMiscClassSummary done");
    //   // this.fetchMiscs();
    // },

    //// クラス毎のサマリDB 更新
    async reflectClassSummary(classcode) {
      const ret = await DataStore.query(Clrm, c =>
        c.classcode("eq", classcode)
      );

      // クラスのタイムスタンプを取得
      const newest = ret.reduce((a, b) =>
        a._lastChangedAt > b._lastChangedAt ? a : b
      );
      const oldest = ret.reduce((a, b) =>
        a._lastChangedAt < b._lastChangedAt ? a : b
      );
      // this.sett.dummy1 = newest._lastChangedAt;
      // this.sett.dummy2 = oldest._lastChangedAt;

      // クラスのタイムスタンプを取得
      const tgt = this.yourClasses.find(arr => {
        return arr.id == classcode;
      });
      tgt.newest = newest._lastChangedAt;
      tgt.oldest = oldest._lastChangedAt;
      //this.getThisWeekAttnJSON[tgt.dayofweek]
      // this.dataset.allClasses.splice(); // いらない
    },

    async devClassSummary(classcode) {
      const ret = await DataStore.query(Clrm, c =>
        c.classcode("eq", classcode)
      );

      const newest = ret.reduce((a, b) =>
        a._lastChangedAt > b._lastChangedAt ? a : b
      );
      const oldest = ret.reduce((a, b) =>
        a._lastChangedAt < b._lastChangedAt ? a : b
      );
      return { newest: newest._lastChangedAt, oldest: oldest._lastChangedAt };
    },

    // this.ds.nMisc.return = this.getDateMDhmm(mx) + "|" + this.getDateMDhmm(mn);
    // const mx = ret.reduce((a, b) => (a > b ? a : b));
    // const mn = ret.reduce((a, b) => (a < b ? a : b));

    async updateMiscClassSummary(classcode) {
      //生徒単位でタイムスタンプの最大、最小を調べる

      //記録する
      const cr = {
        type: this.ds.typeMisc.classSum,
        name: classcode,
        detail: JSON.stringify({
          oldest: this.$dayjs(),
          newest: new Date()
        })
      };

      await DataStore.save(new Misc(cr));

      this.fetchMiscs();
    },
    async applogSave() {
      await DataStore.save(
        new Misc({
          type: this.ds.typeMisc.appNwLog,
          name: this.authdetail.username,
          detail: this.app.log.nw
        })
      );
    },
    //// クラス毎のサマリDB 取得
    // async queryMiscClassSummary(classcode) {
    //   const original = await DataStore.query(Misc, c =>
    //     c.type("eq", this.ds.typeMisc.classSum).name("eq", classcode)
    //   );
    //   // 設定時に1クラス1レコードを用意する前提。DB上は複数可能。AmplifyのDataStoreがまだいろいろあるので、
    //   // データの持ち方とか厳密に正しさを求めないことにしている
    //   const outt = original.find(arr => {
    //     return arr.detail.length > 0;
    //   });
    //   // console.warn("outt");
    //   // console.warn(outt);
    //   return outt !== undefined ? JSON.parse(outt.detail) : "";
    // },

    async createMisc() {
      try {
        await DataStore.save(new Misc(this.ds.crMisc));
      } catch (err) {
        this.writeFail("MiscCreate", this.ds.crMisc, err);
      }
    },
    async getMiscId(cr) {
      if (!cr) {
        cr = this.ds.crMisc;
      }
      try {
        const original = await DataStore.query(Misc, c =>
          c.type("eq", cr.type).name("eq", cr.name)
        );
        this.ds.nMisc.return = original;
      } catch (err) {
        this.writeFail("MiscCreate", cr, err);
      }
    },

    // async updateMisc(id,upd) {
    async updateMisc(upd) {
      const id = "dummy★"; //あとまわし★
      try {
        const itm = await DataStore.query(Misc, id);
        await DataStore.save(
          Clrm.copyOf(itm, updated => {
            updated.type = upd.type;
            updated.name = upd.name;
            updated.detail = upd.detail;
          })
        );
      } catch (err) {
        this.writeFail("MiscUpdate", id + upd, err);
      }
    },

    //// graphql
    //// graphql

    //初期処理
    // JSONからのallClassesを整える
    initallClassesDev() {
      this.yourClasses.forEach(m => {
        // クラスのタイムスタンプを反映
        this.reflectClassSummary(m.id);
      });
    },
    initallClasses() {
      this.yourClasses.forEach(m => {
        // レッスン集と出欠が今週どこなのか
        m.lssnthisweek = this.getThisWeekLssnJSON[m.dayofweek];
        m.attnthisweek = this.getThisWeekAttnJSON[m.dayofweek];
        // クラスのタイムスタンプを反映
        this.reflectClassSummary(m.id);
      });

      // this.dataset.allClasses = [...allClassesUp];
      //     // const timestamp = this.queryMiscClassSummary(m.classcode);
      // this.dataset.allClasses.splice();
    },

    //編集用
    async updateClrmEdit(uid, fname, fval, logtx) {
      const upArr = {
        id: uid
      };
      upArr[fname] = fval;
      //テスト時はログを記録しない
      if (this.sett.env.isTestMode !== true) {
        upArr.note =
          (logtx === null ? "" : logtx) +
          "_@[" +
          this.$dayjs().format("YYYY-MM-DD HH:mm") +
          "] " +
          fname.replace("attn", "Week") +
          " " +
          this.authdetail.username;
      }
      try {
        const callbk = null;
        //$$$$$         const callbk = await API.graphql(
        // console.warn("xx:updateClrmEdit");
        //$$$$$ graphqlOperation(updateClrm, { input: upArr })
        // );
        return callbk; // returnの先に用途は実はない
      } catch (err) {
        this.writeFail("ClrmEdit", upArr, err);
        return err; // returnの先に用途は実はない
      }
    },

    // async manageUpdateClrmAll() {
    //   //  this.classmembers.forEach((rowval, idx) => {
    //   this.classmembers.forEach(rowval => {
    //     this.updateClrmAll(rowval);
    //     // this.dataset.up0514[num].result = this.$xxxdayjs();
    //   });
    // },
    async manageUpdateClrmDvAll() {
      // ★対象全てをひとづずつCopyOfしようか
      //念のためmiscに
      const classtemp = this.dataset.ClrmsChk.filter(
        x => x.classcode === this.selCrlm.id && x.enable === true
      );
      const crArr = {
        type: "appClrmDeviceUpload",
        name: this.$dayjs().format("YYYY-MM-DD HH:mm.X"),
        detail: classtemp
      };
      try {
        // console.warn("xx:manageUpdateClrmDvAll");
        //$$$$$               await API.graphql(graphqlOperation(createMisc, { input: crArr }));
      } catch (err) {
        this.writeFail("appClrmDeviceUploadFail", crArr, err);
      }

      // いれる
      const classmem = this.dataset.Clrms.filter(
        x => x.classcode === this.selCrlm.id && x.enable === true
      ).sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
      classmem.forEach(rowval => {
        this.updateClrmAll(rowval);
      });

      //集計
      this.listClrmsDataIDCheck(this.sett.alias.name);
    },

    async updateClrmAll(rw) {
      // 管理者は一括Up対象外
      if (this.authdetail.name === this.sett.alias.name) {
        // 出欠と宿題は該当週のみ、評価はすべて
        const upArr = {
          id: rw.id,
          index: rw.index
        };
        //   eval01: rw.eval01,
        //   eval02: rw.eval02,
        //   eval03: rw.eval03,
        //   eval04: rw.eval04,
        //   eval05: rw.eval05,
        //   eval06: rw.eval06,
        //   eval07: rw.eval07,
        //   eval08: rw.eval08,
        //   eval09: rw.eval09,
        //   eval10: rw.eval10,
        //   eval11: rw.eval11,
        //   ecom01: rw.ecom01,
        //   ecom02: rw.ecom02,
        //   ecom03: rw.ecom03,
        //   ecom04: rw.ecom04,
        //   ecom05: rw.ecom05,
        //   ecom06: rw.ecom06,
        //   ecom07: rw.ecom07,
        //   ecom08: rw.ecom08,
        //   ecom09: rw.ecom09,
        //   ecom10: rw.ecom10,
        //   ecom11: rw.ecom11,
        //   homeworkincomplete20: rw.homeworkincomplete20
        // };
        //とりあえず安全策で
        const estr = [
          "01",
          "02",
          "03",
          "04",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11"
        ];
        estr.forEach(x => {
          if (rw["eval" + x] !== null && rw["eval" + x] !== "") {
            upArr["eval" + x] = rw["eval" + x];
          }
        });
        estr.forEach(x => {
          if (rw["ecom" + x] !== null && rw["ecom" + x] !== "") {
            upArr["ecom" + x] = rw["ecom" + x];
          }
        });

        upArr[this.getTodayJSON.attendance] = rw[this.getTodayJSON.attendance];
        upArr[this.getTodayJSON.hwic] = rw[this.getTodayJSON.hwic];

        try {
          //        await API.graphql(graphqlOperation(updateClrm, { input: upArr }));
          // console.warn("xx:updateClrmAll");
          //$$$$$       await API.graphql(graphqlOperation(updateClrm, { input: upArr }));
          this.hideComEv();
          return true;
        } catch (err) {
          this.writeFail("ClrmUpdateAll", upArr, err);
          return false;
        }
      }
    },

    /////
    /////
    /////
    /////
    showAttenChange() {
      let mde = this.cRoom.showAttenHist;
      mde += 1;
      this.cRoom.showAttenHist = mde > 2 ? 0 : mde;
      this.cRoom.showEval = mde === 2 ? true : this.cRoom.showEval;
    },
    showEvalChange() {
      let mde = this.cRoom.showAttenHist;
      mde += 1;
      this.cRoom.showAttenHist = mde > 2 ? 0 : mde;
      this.cRoom.showEval = mde === 2 ? true : this.cRoom.showEval;
    },
    showIndividualChange() {
      this.cRoom.showIndividual = !this.cRoom.showIndividual;
      // // 戻るときだけすべて保存する
      // if (!this.cRoom.showIndividual) {
      //   this.manageUpdateClrmAll();
      // }
    },
    showEvalCompChange() {
      // 行全体保存
      this.updateClrmAll(this.classmembers[this.cRoom.indiNo]);

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

    updateClassModeChange() {
      const upArr = {
        type: "class" + this.dayjsYYYYMMDDh,
        name: this.authdetail.username,
        detail: this.instructor.yourTodaysClasses
      };
      this.updateMisc(upArr);
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
        this.cRoom.evalUpTargetRow.id,
        this.cRoom.evalUpTargetCol,
        val
      );
    },
    // 評価に満たない（出席
    zeroEvalUpTarget(prow, fname) {
      // zeroEvalUpTarget(prow, fname, idx) {
      // prow[fname] = 0;

      //0点にしてUpする
      this.updateClrm(prow.id, fname, 0);
    },
    // 評価を欠席
    minusEvalUpTarget(prow, fname) {
      this.updateClrm(prow.id, fname, -1);
    },

    updateClrmEvalsIndi(row, fname, fval) {
      // console.table(row, fname, fval);
      // コメント欄入力閉じた時にUpする
      this.cRoom.showComEv[fname] = !this.cRoom.showComEv[fname];
      if (!this.cRoom.showComEv[fname]) {
        this.updateClrm(row.id, fname, fval);
      }
    },
    updateClrmEvalsIndiAny(row, fname, fval) {
      // コメント欄入力閉じた時にUpする
      this.cRoom.showComEv.ecomAny = !this.cRoom.showComEv.ecomAny;
      if (!this.cRoom.showComEv.ecomAny) {
        this.updateClrm(row.id, fname, fval);
      }
    },

    ////////////Fail処理
    writeFail(dest, arr, ret) {
      localStorage[
        "appFail" + dest + this.$dayjs().format("YYYY-MM-DD HH:mm.X")
      ] =
        this.getStartingUrl +
        ", auth:" +
        this.authdetail.name +
        ", input:" +
        JSON.stringify(arr) +
        ", result:" +
        JSON.stringify(ret);
      // const lc =localStorage.failUpdate == undefined ? "" : localStorage.failUpdate;
      // localStorage.failUpdate = lc + "| input:" + JSON.stringify(arr) +
      //   ", result:" + JSON.stringify(ret);
    },
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
        name: this.$dayjs().format("YYYY-MM-DD HH:mm.X"),
        detail: arr
      };
      try {
        for (var key2 in localStorage) {
          if (key2.match(/appFail/)) {
            localStorage.removeItem(key2);
          }
        }
      } catch (err) {
        this.writeFail("salvageFail", crArr, err);
      }
    },
    scrollTop: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    ////////////

    // async listClrmsDataID(idstr) {
    async listClrmsDataID() {
      await this.fetchClrms();

      // const ClrmsData = null;
      // //$$$$$
      // // const ClrmsData = await API.graphql(
      // //   graphqlOperation(listClrms, { id: idstr, limit: 5000 })
      // // );
      // // 既に保持していた場合除去
      // const fi = this.dataset.Clrms.filter(n => n.id !== idstr);
      // this.dataset.Clrms = fi;

      // this.dataset.Clrms.push(...ClrmsData.data.listClrms.items);
    },
    // async listClrmsDataIDCheck(idstr) {
    async listClrmsDataIDCheck() {
      this.sett.isLoadingClrmsChk = true;
      await this.fetchClrms();
      this.sett.isLoadingClrmsChk = false;
      // try {
      //   const ClrmsData = null;
      //   // const ClrmsData = await API.graphql(
      //   //   graphqlOperation(listClrms, { id: idstr, limit: 5000 })
      //   // );
      //   // 既に保持していた場合除去
      //   const fi = this.dataset.ClrmsChk.filter(n => n.id !== idstr);
      //   this.dataset.ClrmsChk = fi;

      //   this.dataset.ClrmsChk.push(...ClrmsData.data.listClrms.items);

      //   if (this.sumClrmsChk()) {
      //     this.sett.isLoadingClrmsChk = false;

      //     this.manage.chkStatus = "Checked: " + this.$dayjs().format("H:mm:ss");
      //   } else {
      //     this.sett.isLoadingClrmsChk = false;

      //     this.manage.chkStatus =
      //       "<span style='color:red'>Check not properly finished</span>";
      //   }
      // } catch (err) {
      //   this.writeFail("listClrmsDataIDCheckFail", idstr, err);
      //   this.sett.isLoadingClrmsChk = false;
      //   this.manage.chkStatus = "<span style='color:red'>Check Failed</span>";
      // }
    },
    chkClassesSum() {
      // if (this.dataset.ClrmsChk.length < 1) {
      this.listClrmsDataIDCheck(this.sett.alias.name);
      // }
    },
    sumClrmsChk() {
      const attnElChr = [
        "attn01",
        "attn02",
        "attn03",
        "attn04",
        "attn05",
        "attn06",
        "attn07",
        "attn08",
        "attn09",
        "attn10",
        "attn11",
        "attn12",
        "attn13",
        "attn14",
        "attn15",
        "eval01",
        "eval02",
        "eval03",
        "eval04",
        "eval05",
        "eval06",
        "eval07",
        "eval08",
        "eval09",
        "eval10",
        "eval11",
        "eval12",
        "ecom01",
        "ecom02",
        "ecom03",
        "ecom04",
        "ecom05",
        "ecom06",
        "ecom07",
        "ecom08",
        "ecom09",
        "ecom10",
        "ecom11",
        "ecom12"
      ];

      const groupsum = this.dataset.ClrmsChk.reduce(function(result, elm) {
        //数値化
        let sm = {};
        attnElChr.forEach(s => {
          sm[s] =
            elm[s] === null || elm[s] === undefined
              ? 0
              : elm[s].length > 0
              ? 1
              : 0;
        });

        var el = result.find(function(x) {
          return x.classcode === elm.classcode;
        });
        if (el) {
          el.students++; // count
          attnElChr.forEach(s => {
            el[s] += sm[s];
          });
        } else {
          let arr = {};
          arr.classcode = elm.classcode;
          arr.students = 1;
          attnElChr.forEach(s => {
            arr[s] = sm[s];
          });
          result.push(arr);
        }
        return result;
      }, []);

      // this.sett.dummy1 = groupsum;

      //統合
      groupsum.forEach(x => {
        //該当クラスを探してsplice
        const idx = this.dataset.allClasses.findIndex(v => v.id == x.classcode);
        if (idx != -1) {
          const spl = this.dataset.allClasses[idx];
          attnElChr.forEach(s => {
            spl[s] = x[s];
          });
          spl.students = x.students;
          this.dataset.allClasses.splice(idx, 1, spl);
        }
      });

      // this.sett.dummy1 = groupsum;

      return true;
    },

    sumClrmsChkDv() {
      //デバイス側のデータを集計
      const classtemp = this.dataset.Clrms.filter(
        x => x.classcode === this.selCrlm.id && x.enable === true
      );

      const attnElChr = [
        "attn01",
        "attn02",
        "attn03",
        "attn04",
        "attn05",
        "attn06",
        "attn07",
        "attn08",
        "attn09",
        "attn10",
        "attn11",
        "attn12",
        "attn13",
        "attn14",
        "attn15",
        "eval01",
        "eval02",
        "eval03",
        "eval04",
        "eval05",
        "eval06",
        "eval07",
        "eval08",
        "eval09",
        "eval10",
        "eval11",
        "eval12",
        "ecom01",
        "ecom02",
        "ecom03",
        "ecom04",
        "ecom05",
        "ecom06",
        "ecom07",
        "ecom08",
        "ecom09",
        "ecom10",
        "ecom11",
        "ecom12"
      ];

      const groupsum = classtemp.reduce(function(result, elm) {
        //数値化
        let sm = {};
        attnElChr.forEach(s => {
          sm[s] = elm[s] === null ? 0 : 1;
        });

        var el = result.find(function(x) {
          return x.classcode === elm.classcode;
        });
        if (el) {
          el.students++; // count
          attnElChr.forEach(s => {
            el[s] += sm[s];
          });
        } else {
          let arr = {};
          arr.classcode = elm.classcode;
          arr.students = 1;
          attnElChr.forEach(s => {
            arr[s] = sm[s];
          });
          result.push(arr);
        }
        return result;
      }, []);
      // this.sett.dummy1 = groupsum;

      //統合
      groupsum.forEach(x => {
        attnElChr.forEach(s => {
          this.manage.selCrlmDv[s] = x[s];
        });
        this.manage.selCrlmDv.students = x.students;
      });
      // this.sett.dummy1 = groupsum;

      return true;
    },
    manageClrms() {
      if (
        this.authdetail.role === "instructor" ||
        this.authdetail.role === "headinstructor"
      ) {
        this.listClrmsDataID(this.sett.alias.name);
      }
    },

    dummytest() {
      // this.getClrmsDatainstByday("Tue"); //★test
      //デバイス側のデータを集計
      // this.sumClrmsChkDv();

      this.sett.dummy1 = "val";
      // this.sett.dummy2 = this.classmembers.map((m) => {
    },
    initializeInst() {
      this.workspaceValication();
      // 当日状況管理用の配列を作成 or すでにあればとる
      // this.instructor.youactive = 0;
      // this.instructor.disableInBtn = false; //true;
      // this.instructor.disableOutBtn = true;
      // this.roleInitValidation();
    },
    initializeInstMounted() {
      this.workdateValication();
    },
    periodicValidation() {
      // this.initAuthValidation();
      this.workdateValication();
      if (this.sett.activeTab !== 2) {
        //部屋から出たのか
        if (this.isEnteredselCrlm) {
          this.isEnteredselCrlm = false; // 部屋から出たことを記録

          // クラスのタイムスタンプを反映
          this.reflectClassSummary(this.selCrlm.id);

          if (this.isOpenselCrlm) {
            //集計
            this.listClrmsDataIDCheck(this.sett.alias.name);
            this.sumClrmsChkDv();
          }
        }

        this.dateDevAddDate();
        this.workspaceValication(true);
      }

      this.salvageFail();
    },
    // periodicValidationFromIdol() {
    //   this.initAuthValidation();
    //   this.periodicValidationFromIdolNum += 1;
    //   if (this.periodicValidationFromIdolNum < 5) {
    //     this.workdateValication();
    //   }
    // },
    workspaceValication(ifUp) {
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
      const crArr = {
        type: "class" + this.$dayjs().format("YYYY-MM-DD"),
        name: this.authdetail.username,
        detail: todayclass
      };

      if (ifUp) {
        //出欠モード保持のレコード
        this.updateMisc(crArr);
      } else {
        this.createMisc(crArr);
      }
      // if (this.instructor.yourTodaysClasses.length < 1) {

      // this.instructor.yourTodaysClasses = tdycls.map(id => )
      // }
    },
    workdateValication() {
      //日付またぐとリロードする
      // if (
      //   // this.dayjsYYYYMMDDt != this.$dayjs().format("YYYY/MM/DD") &&
      //   this.dayACjsdddMMMD != this.$dayjs().format("ddd, MMM D") &&
      //   this.sett.env.isTestMode === false
      // ) {
      //   this.reloadApp("workdateValication");
      // } else {
      this.setcurrentAcDate();
      // }
    },
    reloadIfUndefinedName() {
      // undefinedなら再読み込み
      if (this.authdetail.name === undefined) {
        this.reloadApp("reloadIfUndefinedName");
      }
    },
    reloadApp(str) {
      this.writeFail(
        str,
        this.dayACjsdddMMMD, //this.sett.today,
        this.$dayjs().format("YYYY/MM/DD")
      );
      // this.$router.go();
    },
    setcurrentAcDate() {
      this.sett.acdate = this.$dayjs().add(this.sett.env.devAddAcDate, "d");
    },
    setInstMonth() {
      //勤怠用 createdのとき
      this.instructor.yourattendvisiblemonth = this.$dayjs(
        this.sett.acdate
      ).format("YYYY-MM");

      //manage用
      this.instructor.attendvisiblemonth = this.instructor.yourattendvisiblemonth;
    },

    //////////サマリー
    async manageSummary() {
      // if (this.showManagementView === true) {
      // }
      this.sett.isLoadingClrmManage = true;
      await this.getClrmsDatainstByday("Mon"); //★test
      await this.getClrmsDatainstByday("Tue"); //★test
      await this.getClrmsDatainstByday("Wed"); //★test
      await this.getClrmsDatainstByday("Thu"); //★test
      await this.getClrmsDatainstByday("Fri"); //★test
      if (this.showManagementViewSuper === true) {
        await this.getClrmsDatainstByday("Sat"); //★test
        await this.getClrmsDatainstByday("Sun"); //★test
      }
      this.sett.isLoadingClrmManage = false;
    },

    //////////講師 勤怠
    instClockIn() {
      this.periodicValidation(); // 日付とユーザー検証

      this.$buefy.dialog.confirm({
        message: "Clock In?",
        size: "is-large",
        onConfirm: () => {
          const add = {
            date: this.$dayjs().format("YYYY-MM-DD"), //.format("M/D ddd"),
            clockin: this.$dayjs().format("HH:mm"), //.format("hh:mm:ss.sss"), //.format("h:mm"),
            clockout: null //.format("hh:mm:ss.sss"), //.format("h:mm"),
          };
          this.instructor.yourattendances.push(add); //ローカル配列に追加
          this.createInst(add); //DBに追加
          // this.instructor.yourhistory.push(add);
          this.instructor.peopleNow.push(this.instructor.you.firstName);
          this.$buefy.toast.open({
            message:
              "<span style='font-size:40px'>Good morning " +
              this.authdetail.nickname +
              "!</span>",
            type: "is-success",
            size: "is-large",
            duration: 3000
          });
        }
      });
    },
    instClockOut() {
      this.periodicValidation(); // 日付とユーザー検証

      this.$buefy.dialog.confirm({
        message: "Clock Out?",
        size: "is-large",
        onConfirm: () => {
          const arr = this.instructor.yourattendances.pop();
          arr.clockout = this.$dayjs().format("HH:mm");
          this.instructor.yourattendances.push(arr); // ローカルを更新
          this.updateInst(arr); // AppSyncを更新

          // // People nowから削除
          // const idx = this.instructor.peopleNow.findIndex(
          //   v => v == this.instructor.you.firstName
          // );
          // this.instructor.peopleNow.splice(idx, 1);
          this.instructor.showPeople = false;

          this.$buefy.toast.open({
            message:
              "<span style='font-size:40px'>Thanks " +
              this.authdetail.nickname +
              ", have a good rest.</span>",
            type: "is-pinkish",
            size: "is-large",
            duration: 3000
          });
        }
      });
    },

    //////////クラスルーム
    attnModeChangeConfirm() {
      // if (this.computedBlank.length == 0) {
      this.$buefy.dialog.confirm({
        title: "Attendance record mode change:",
        message: "mode change?",
        // "mode change?<br><br>checked: " +
        // this.computedBlank.length +
        // "/" +
        // this.classmembers.length,
        type: this.att.modeset[this.att.mode].colortype,
        size: "is-large",
        onConfirm: () => {
          const attMode = this.att.mode + 1;
          this.att.mode = attMode;
          //当日クラスの場合のみ
          if (this.selCrlm.dayofweek === this.dayjsddd) {
            // if (this.selCrlm.dayofweek === this.sett.dayofweek) {
            this.instructor.yourTodaysClasses[
              this.classroomIndex
            ].status = attMode;
            this.updateClassModeChange();
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
      // } else {
      //   this.$buefy.dialog.alert({
      //     message: this.computedBlank.length + " more check needed!",
      //     size: "is-large",
      //     title: "Error",
      //     hasIcon: true,
      //     icon: "times-circle",
      //     type: "is-danger",
      //     ariaRole: "alertdialog",
      //     ariaModal: true
      //   });
      // }
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
          if (this.selCrlm.dayofweek === this.dayjsddd) {
            // if (this.selCrlm.dayofweek === this.sett.dayofweek) {
            this.instructor.yourTodaysClasses[
              this.classroomIndex
            ].status = attMode;
            this.updateClassModeChange();
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
    attnModeChangeRegardlessOfTheDayConfirm() {
      if (this.att.mode === 3) {
        this.$buefy.dialog.confirm({
          title: "Enable edit mode:",
          message:
            "<b>Not today's class.</b> <b-icon pack='fas' icon='dizzy' size='is-medium' /> Need edit?",
          size: "is-large",
          type: "is-beige",
          onConfirm: () => {
            const attMode = (this.att.mode = 0);
            this.att.mode = attMode;
            // this.instructor.yourTodaysClasses[
            //   this.classroomIndex
            // ].status = attMode;
            this.updateClassModeChange();
            this.cRoom.showAttenHist = 0;

            this.$buefy.toast.open({
              message:
                "<span style='font-size:40px'>You can edit. " + "</span>",
              type: "is-beige",
              size: "is-large"
            });
          }
        });
      } else {
        this.att.mode = 3;
      }
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

    ///// クラス選択、読み込み、
    selectClassroom(arr) {
      //セット
      this.selCrlm = arr;

      //デバイス側のデータを集計
      this.sumClrmsChkDv();

      //表示
      this.isOpenselCrlm = true;
      this.scrollTop();
    },
    selectClassroomClear() {
      this.isOpenselCrlm = false;
      if (this.authdetail.role !== "instructor") {
        this.listClrmsDataID(this.sett.alias.name);
      }
    },
    enterClassroomPrevSeeIfAlter() {
      const dt = this.dataset.Miscs.find(el => {
        return el.type === "alter";
      });
      // 設定があり曜日も合致するなら編集日付を変更する
      if (
        dt !== undefined &&
        this.selCrlm.dayofweek == this.$dayjs(dt.detail).format("ddd")
      ) {
        this.sett.ddate = this.$dayjs(dt.detail);
      }
      this.workspaceValication(true);
    },
    enterClassroom() {
      this.enterClassroomPrevSeeIfAlter(); // 特別対応の有無チェック。ddateに影響

      this.cRoom.showIndividual = false;
      // && x.enable === trueはほんとはAppSyncの時点でやりたい
      // this.classmembers = this.dataset.Clrms.filter(
      const classmem = this.dataset.Clrms.filter(
        x => x.classcode === this.selCrlm.id && x.enable === true
      ).sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
      // this.classmembers.push(... classmem;
      // this.classmembers = classmem;
      this.classmembers = [...classmem];
      // // HW の文字列BooleanをBooleanに変換
      //当日実施クラスのみ（出席記録状況の保持）      this.classroomIndex = this.instructor.yourTodaysClasses.findIndex(
      if (this.selCrlm.dayofweek === this.dayjsddd) {
        // if (this.selCrlm.dayofweek === this.sett.dayofweek) {
        this.classroomIndex = this.instructor.yourTodaysClasses.findIndex(
          item => item.id === this.selCrlm.id
        );

        this.cRoom.showAttenHist = 0;

        // status参照するためにインデックスを格納
        this.att.mode = this.instructor.yourTodaysClasses[
          this.classroomIndex
        ].status;
      } else {
        this.att.mode = 3; //当日ではないので出席は取れないようにする
        this.cRoom.showAttenNote = false;
        this.cRoom.showAttenHist = 1;

        if (
          this.dayjslenient.includes(this.selCrlm.dayofweek)
          // this.sett.dayofweekslenient.includes(this.selCrlm.dayofweek)
        ) {
          this.isdeadlinelenient = true;
        } else {
          this.isdeadlinelenient = false;
        }
      }
      this.isEnteredselCrlm = true;
      this.sett.activeTab = 2;
    },
    // 都度の書込みごとにView反映させる
    enterClassroomUp() {
      const classmem = this.dataset.Clrms.filter(
        x => x.classcode === this.selCrlm.id && x.enable === true
      ).sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
      this.classmembers = [...classmem];
    },
    enterClassroomEdit(arr) {
      this.manage.selCrlm = arr;
      this.manage.isOpenSummary = false;

      const classmem = this.dataset.ClrmsInstByday.filter(
        x => x.classcode === arr.classcode && x.enable === true
      ).sort(function(a, b) {
        if (a.sortid < b.sortid) return -1;
        if (a.sortid > b.sortid) return 1;
        return 0;
      });
      this.manage.selAttn = this.getTodayJSON.attendance;
      this.manage.classmembersEdit = classmem;
      this.manage.isOpenEdit = true;
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
    convertInstructorsInfo(val) {
      const result = this.instructor.nameConv.find(x => x.username === val);
      return result;
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
      return days.includes(this.selCrlm.dayofweek)
        ? this.$dayjs(
            this.dayChainJSON[this.selCrlm.dayofweek][num].date
          ).format("M/D")
        : "--";
    },
    getDateMDddd(val) {
      return this.$dayjs(val).format("M/D ddd");
    },
    getDateMDhmm(val) {
      return this.$dayjs(val).format("M/D h:mm");
    },
    getDateMDHHmm(val) {
      return this.$dayjs(val).format("HH:mm");
    },
    getDateMixYYYYMMDHHmm(d, t) {
      return this.$dayjs(d + " " + t).format("YYYY-MM-DD HH:mm");
    },
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
    getIfAttnThisWeekNotNull(dow, val) {
      //当日更新なら時刻、違えば日付
      return this.$dayjs(val).format("H:mm") == "Invalid Date"
        ? null
        : this.dayACjsYYYMMDD === this.$dayjs(val).format("YYYYMMDD")
        ? this.$dayjs(val).format("H:mm")
        : this.$dayjs(val).format("M/D");
    },
    dateDevAddDate() {
      this.sett.ddate = this.$dayjs().add(this.sett.env.devAddDate, "d");
    }
  },
  filters: {
    subStr: function(string) {
      return string.substring(0, 509) + "...";
    }
  },
  computed: {
    TESTarr0() {
      if (this.ds.clrms) {
        return this.ds.clrms
          .filter(x => x.classcode === "X0063")
          .map(m => {
            return {
              c: m.classcode,
              s: m.studentcode,
              n: m.studentname,
              e: m.eval01,
              up: m._lastChangedAt
            };
          });
      } else {
        return null;
      }
    },
    TESTarr1() {
      if (this.dataset.Clrms) {
        return this.dataset.Clrms.filter(x => x.classcode === "X0063").map(
          m => {
            return {
              c: m.classcode,
              s: m.studentcode,
              n: m.studentname,
              e: m.eval01,
              up: m._lastChangedAt
            };
          }
        );
      } else {
        return null;
      }
    },
    TESTarr2() {
      if (this.classmembers) {
        return this.classmembers
          .filter(x => x.classcode === "X0063")
          .map(m => {
            return {
              c: m.classcode,
              s: m.studentcode,
              n: m.studentname,
              e: m.eval01,
              up: m._lastChangedAt
            };
          });
      } else {
        return null;
      }
    },

    bBoardArticles() {
      if (this.authdetail.name === "dummy instructor") {
        return this.bBoard.collapsesSample;
      } else {
        return this.bBoard.collapses;
      }
    },
    evalCriSubIRtSw() {
      return this.cRoom.evalCriteriaSelect === null
        ? null
        : this.cRoom.evalCriteriaSelect.substr(1, 1) === "1"
        ? this.cRoom.evalCriSubIRt.participation
        : this.cRoom.evalCriSubIRt.others;
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
      //週毎データの表示制御
      const finalWeek = this.dataset.Cldrs.reduce((a, b) =>
        Number(a.lessonnum) > Number(b.lessonnum) ? a : b
      );
      let arr = [];
      for (var v = 0; v <= Number(finalWeek.lessonnum); v++) {
        switch (this.cRoom.showAttenHist) {
          case 0:
            arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
            break;
          case 1:
            arr.push(v <= Number(this.getTodayJSON.lessonnum) ? true : false);
            break;
          case 2:
            arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
            //            arr.push(false);
            break;
          //   default:
        }
      }
      return arr;
    },
    clrmShowColEdit() {
      //週毎データの表示制御
      const finalWeek = this.dataset.Cldrs.reduce((a, b) =>
        Number(a.lessonnum) > Number(b.lessonnum) ? a : b
      );
      let arr = [];
      for (var v = 0; v <= Number(finalWeek.lessonnum); v++) {
        switch (this.manage.numAttenHist) {
          case 0:
            arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
            break;
          case 1:
            arr.push(v <= Number(this.getTodayJSON.lessonnum) ? true : false);
            break;
          case 2:
            arr.push(v == Number(this.getTodayJSON.lessonnum) ? true : false);
            //            arr.push(false);
            break;
          //   default:
        }
      }
      return arr;
    },
    //////////////////// computed 日付関連 ////////////////////
    dayjslenient() {
      // 出欠履歴許可
      return [
        this.$dayjs(this.sett.ddate)
          .add(-1, "d")
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
      //本日の情報 // 5/25: 土日に不具合になるので、ピンポイントではなく最大値でだすようにした
      // : { "id": "class", "date": "2020/09/25", "lessonnum": "3", "lessonstr": "Week3", "dayofweek": "Fri", "attendance": "attn03", "hwic": "homeworkincomplete03" } |
      return this.dataset.Cldrs.filter(
        x => x.date <= this.dayjsYYYYMMDDt
      ).reduce((a, b) => (a.date > b.date ? a : b));
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
    // getDayChainJSON: function() {
    //   //本日の情報
    //   return this.dataset.Cldrs.filter(x => x.dayofweek === this.dayjsddd); //.map((m) => m.);
    // },
    yourClasses: function() {
      const fname = this.sett.alias.name;
      return this.dataset.allClasses.filter(x => x.instructor === fname);
      // return this.dataset.allClasses.filter((x) => x.instructor === this.authdetail.name);
    },
    ifYouClockIn: function() {
      return true; //とりあえず★
      // return this.instructor.yourattendances.some(
      //   x => x.date === this.$dayjs().format("YYYY-MM-DD")
      // );
    },
    ifYouClockInAndStillIn: function() {
      return false; //とりあえず★
      // const fnd = this.instructor.yourattendances.find(
      //   x => x.date === this.$dayjs().format("YYYY-MM-DD")
      // );
      // if (fnd != undefined) {
      //   return fnd.clockout == null ? true : false; //出社/退社
      // } else {
      //   return false; //出社前
      // }
    },
    yourattendancesMonth: function() {
      return this.instructor.yourattendances.filter(
        x => x.date.substr(0, 7) === this.instructor.yourattendvisiblemonth
      );
    },
    allattendancesMonth: function() {
      let filtered;
      filtered = this.instructor.attendances.filter(
        x => x.date.substr(0, 7) === this.instructor.attendvisiblemonth
      );

      if (this.manage.instinstname !== "all") {
        filtered = filtered.filter(x => x.id === this.manage.instinstname);
      }

      return filtered;
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
    }
  },

  async created() {
    ///DataStore
    DataStore.observe(Clrm).subscribe(() => {
      this.fetchClrms();
    });
    await this.fetchClrms();
    await this.fetchInsts(); //今のところ全件とる

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
      })
      .catch(() => (this.authdetail = "created auth error"));

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
          // console.log(`${ctime} HUBlog User has a network connection? ${data.active}`          );
          this.app.network = data.active;
          this.applogSave();
          // if (data.active === false) {
          //   this.app.network = false;
          // }
          this.app.log.nw += ctime + event + ": " + data.active + "\n";
          break;
        case "syncQueriesReady":
          // console.log(ctime + "HUBlog syncQueriesReady");
          this.app.network = true;
          this.app.log.nw += ctime + event + ": " + true + "\n";
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
          // console.log(`${ctime} HUBlog modelSynced:${JSON.stringify(data)}`);
          this.app.log.nw += ctime + event + ": " + JSON.stringify(data) + "\n";
          break;

        case "outboxStatus": // 変更ごとに出る
          // log(`HUB outboxStatus:${JSON.stringify(data)}`);
          // console.log(`${ctime} HUBlog outboxStatus:${JSON.stringify(data)}`);
          this.app.syncing = data.isEmpty;
          // this.app.log.nw += ctime + event + ": " + JSON.stringify(data) + "\n";
          break;
        case "ready":
          // console.log(ctime + " HUBlog ready");
          this.app.ready = true;
          this.app.log.nw += ctime + event + "\n";
          this.applogSave();
          break;
      }
    });

    // const dv1 = await DataStore.query(Clrm, c => c.dayofweek("eq", "Mon"));
    // DataStore.observe(dv1).subscribe(ssb => {
    //   this.ds.dev1 = ssb;
    // });

    // DataStore.query(Clrm, c => c.dayofweek("eq", "Mon")).subscribe(sb => {
    //   this.ds.dev2 = sb;
    // });

    // // DataStore.query(Clrm, c => c.dayofweek("eq", "Mon")).subscribe(sb3 => {
    // //   this.ds.dev3 = sb3;
    // // });
    // DataStore.observe(Clrm).subscribe(sb3 => {
    //   this.ds.dev3 = sb3;
    //   console.warn(sb3);
    // });

    //日付設定
    this.dateDevAddDate();
    this.setcurrentAcDate();
    this.setInstMonth();

    this.manageClrms();

    // JSONからのallClassesを整える
    await this.initallClasses();
    // this.getInstsData(this.authdetail.username);
    // this.getMiscsData("classmanagement", this.authdetail.name);
    // this.listMiscsData();

    //これ特別対応だけのためのやつ
    // this.listMiscsDataID("alter", this.authdetail.username);

    this.initializeInst();
    this.salvageFail();

    //管理用
    this.manageSummary();
  },
  async mounted() {
    setInterval(
      function() {
        this.workdateValication();
        // this.getCurrentTime();
        // this.reloadIfUndefinedName();
      }.bind(this),
      1 * 1000 * 10
    );
    // setTimeout(this.initAuthValidation, 3000);
    // setTimeout(this.reloadIfUndefinedName, 3000);
  }
};
</script>

<style lang="scss" src="./styles.scss"></style>
<style lang="css" src="./styles.css"></style>

<!-- <style scoped></style>-->
