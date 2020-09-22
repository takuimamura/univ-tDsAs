<template>
  <div>
    <!-- <section>
      <b-sidebar type="is-light" :open.sync="open">
        <div class="p-1">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item
                icon="information-outline"
                label="Info"
              ></b-menu-item>
              <b-menu-item icon="settings">
                <template slot="label" slot-scope="props">
                  Administrator
                  <b-icon
                    class="is-pulled-right"
                    :icon="props.expanded ? 'menu-down' : 'menu-up'"
                  ></b-icon>
                </template>
                <b-menu-item icon="account" label="Users"></b-menu-item>
                <b-menu-item icon="cellphone-link">
                  <template slot="label">
                    Devices
                    <b-dropdown
                      aria-role="list"
                      class="is-pulled-right"
                      position="is-bottom-left"
                    >
                      <b-icon icon="dots-vertical" slot="trigger"></b-icon>
                      <b-dropdown-item aria-role="listitem"
                        >Action</b-dropdown-item
                      >
                      <b-dropdown-item aria-role="listitem"
                        >Another action</b-dropdown-item
                      >
                      <b-dropdown-item aria-role="listitem"
                        >Something else</b-dropdown-item
                      >
                    </b-dropdown>
                  </template>
                </b-menu-item>
                <b-menu-item
                  icon="cash-multiple"
                  label="Payments"
                  disabled
                ></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
              </b-menu-item>
            </b-menu-list>
            <b-menu-list>
              <b-menu-item
                label="Expo"
                icon="link"
                tag="router-link"
                target="_blank"
                to="/expo"
              ></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
          </b-menu>

          <b-button
            type="is-primary"
            inverted
            @click="open = false"
            size="is-large"
            class="w400"
          >
            Close
          </b-button>
        </div>
      </b-sidebar>
    </section>-->
    <section>
      <!-- <div class="block">
        <b-field grouped group-multiline>
          <div class="control">
            <b-switch v-model="overlay">Overlay</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="fullheight">Fullheight</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="fullwidth">Fullwidth</b-switch>
          </div>
          <div class="control">
            <b-switch v-model="right">Right</b-switch>
          </div>
        </b-field>
        <b-button @click="open = true">Show</b-button>
      </div>-->
      <!-- <input
        id="condition"
        type="text"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <input type="text" v-model="tsutaetai" />-->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    value: String
    // tsutaetai: {
    //   type: String,
    //   required: true,
    // },
  },

  data() {
    return {
      open: false,
      mobile: "reduce",
      reduce: false, // hide, fullwidth
      title: "Header",
      text: "Hello Vue.js!",
      transval2: "dddhen"
    };
  }
};
</script>

<style lang="scss">
.w400 {
  width: 100%;
}
/* ====== media ====== */
.media {
  margin: 10px;
}
.media,
.bd {
  overflow: hidden;
  _overflow: visible;
  zoom: 1;
}
.media .img {
  float: left;
  margin-right: 10px;
}
.media .img img {
  display: block;
}
.media .imgExt {
  float: right;
  margin-left: 10px;
}
.p-1 {
  padding: 1em;
}
@media screen and (max-width: 1023px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini-mobile {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1024px) {
  .b-sidebar {
    .sidebar-content {
      &.is-mini {
        &:not(.is-mini-expand),
        &.is-mini-expand:not(:hover) {
          .menu-list {
            li {
              a {
                span:nth-child(2) {
                  display: none;
                }
              }
              ul {
                padding-left: 0;
                li {
                  a {
                    display: inline-block;
                  }
                }
              }
            }
          }
          .menu-label:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
