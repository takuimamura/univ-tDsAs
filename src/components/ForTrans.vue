<template>
  <div id="app">
    <div v-if="getStartingUrl === 'localhost'">
      <!--■■■開発用 ローカル限定表示■■■-->
      <b-modal :active.sync="sett.isModalActive"></b-modal>
      <b-button @click="dummytest">dummytest</b-button>
      sett.dummy1:{{ sett.dummy1 }} ■sett.dummy2{{ sett.dummy2 }} ■sett.dummy3{{ sett.dummy3 }}
      <b-checkbox v-model="sett.env.isTestMode">{{ sett.env.isTestMode }}</b-checkbox>
      <!-- dayjsddd:{{ dayjsddd }} - lenient{{ dayjslenient }} dayjsYYYYMMDD::{{ dayjsYYYYMMDDh }} -->
      <!-- <ul>        <li v-for="ch in yourClasses" :key="ch.classcode">{{ ch }}</li>      </ul> -->
      <!-- <ul>        <li v-for="ch in dataset.allClasses" :key="ch.classcode">{{ ch }}</li>     </ul> -->
      <!-- sett.ddate::::::{{ sett.ddate }}      <br /> -->
      <!-- sett.acdate::::::{{ sett.acdate }}      <br /> -->
      <!-- authdetail:: {{authdetail}}      <br /> -->
      cRoom.showEvalComp {{cRoom.showEvalComp}}
      <br />
      <!-- <b-field label="Select a date">
        <b-datepicker
          v-model="sett.ddate"
          :first-day-of-week="1"
          placeholder="Click to select..."
          @input="
            dummytest();
            workspaceValication(true);
          "
        >
        </b-datepicker>
      </b-field>-->
      <b-numberinput v-model="sett.env.devAddDate" controls-position="compact"></b-numberinput>
      <b-button @click="dateDevAddDate();dummytest();workspaceValication(true);">reflect day change</b-button>
      <!-- getTodayJSON {{ getTodayJSON }}      <br /> -->
      InstByday::{{ dataset.ClrmsInstByday.length }} | Clrms::{{ dataset.Clrms.length }} | ClrmsChk::{{ dataset.ClrmsChk.length }}
      <br />
      <!-- {{indiRow}} -->
      <!--
      <template v-if="dataset.Clrms.length>0">
        ■Clrm: {{ dataset.Clrms[0].studentcode }}
        - eval {{ dataset.Clrms[0].eval01 }}- {{ dataset.Clrms[0].ecom01 }}
        - eval4: {{ dataset.Clrms[0].eval04 }}- {{ dataset.Clrms[0].ecom04 }}
        - eval11: {{ dataset.Clrms[0].eval11 }}- {{ dataset.Clrms[0].ecom11 }}
        <br />
      </template>
      <template v-if="classmembers.length>0">
        ■Class:{{classmembers[0].studentcode }}
        - eval {{ classmembers[0].eval01 }}- {{ classmembers[0].ecom01 }}
        - eval4: {{ classmembers[0].eval04 }}- {{ classmembers[0].ecom04 }}
        - eval11: {{ classmembers[0].eval11 }}- {{ classmembers[0].ecom11 }}
        <br />
      </template>
      <template v-if="selCrlm.eval01 !== undefined">
        selCrlm:::: eval{{ selCrlm.eval01 }}- {{ selCrlm.ecom01 }}
        - eval4:{{ selCrlm.eval04 }}- {{ selCrlm.ecom04 }}
        - eval11:{{ selCrlm.eval11 }}- {{ selCrlm.ecom11 }}
      </template>
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
    <span style="visibility: hidden;">
      <v-idle @idle="periodicValidationFromIdol()" :duration="3" />
    </span>
  </div>
</template>

<script>
import Vue from "vue";
// import Vidle from "v-idle";

// import studentslistjson from "../assets/students.json";
import CinfJSON from "../assets/Cinf.json";
import CldrJSON from "../assets/Cldr.json";
import MiscellaneousJSON from "../assets/Miscellaneous.json";
// import ClrmJSON from "../assets/Clrm.json";
// import allclassesjson from "../assets/allclasses.json";
import EnvJSON from "../assets/env.json";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
// dayjs.locale("ja");
// dayjs.locale("en");
dayjs.extend(relativeTime);
Vue.prototype.$dayjs = dayjs;

//import { formatDate, description } from "./plugins/filters.js";
Vue.use(dayjs);

// ###import StarRating from "vue-star-rating";
// Vue.component("star-rating", StarRating);

// 表示日時のフォーマット
// Vue.filter("formatDate", function(value) {
//   if (value) {
//     return this.$dayjs().format("YYYY/MM/DD hh:mm");
//   }
// });

// ***
// Vue.filter("dateMDddd", function(value) {
//   if (value) {
//     return this.$dayjs(value).format("M/D ddd");
//   }
// });

// 本文のトリミング
// ###Vue.filter("description", function(value, num) {
//   if (value) {
//     return value.slice(0, num) + "...";
//   }
// });
// ***
// Vue.filter("slice2", function(value, num1, num2) {
//   if (value) {
//     return value.slice(num1, num2) + "...";
//   }
// });

export default {
  components: {
    // FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return;
  },
  methods: {
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
        await API.graphql(graphqlOperation(createMisc, { input: crArr }));
        for (var key2 in localStorage) {
          if (key2.match(/appFail/)) {
            localStorage.removeItem(key2);
          }
        }
      } catch (err) {
        this.writeFail("salvageFail", crArr, err);
      }
    },

    dummytest() {
      // this.getClrmsDatainstByday("Tue"); //★test
      //デバイス側のデータを集計
      // this.sumClrmsChkDv();

      const val = this.dataset.allClasses.map(m => {
        return {
          id: m.id,
          grade: m.grade,
          dayofweek: m.dayofweek,
          slot: m.slot
        };
      });

      this.sett.dummy1 = val;
    }
  },
  async created() {
    this.salvageFail();
  }
};
</script>

