<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <Alert />
        <div class="group-btn">
          <button type="button" class="btn btn-success" @click="actionAdd()"><i class="fas fa-plus"></i>Add</button>
          <button type="button" class="btn btn-danger" @click="actionDelete()"><i class="fas fa-minus"></i>Delete</button>
        </div>
        <h3>Account</h3>
        <TableDataLength :limit="limit" @limit="changeLimit"></TableDataLength>
        <div class="account-table">
          <div class="width_max">
            <table class="table">
              <thead class="sticky">
                <tr>
                  <th class="w40">
                  <input
                        class="checkbox select crsr_pr"
                        type="checkbox"
                        @click="toggleSelect($event)"
                :checked="selectAll"
                      />
                  </th>
                  <th class="w90">
                    account<a
                      v-on:click="sortBy('level')"
                      :class="getSorticon('level')"
                    >
                      <template v-if="getSorticon('level') == 'sorting'">
                        <i class="fas fa-sort"></i>
                      </template>
                      <template v-if="getSorticon('level') == 'sorting_desc'">
                        <i class="fas fa-sort-amount-down"></i>
                      </template>
                      <template v-if="getSorticon('level') == 'sorting_asc'">
                        <i class="fas fa-sort-amount-up"></i>
                      </template>
                    </a>
                  </th>
                  <th class="w200">
                    time
                    <a
                      v-on:click="sortBy('lastname')"
                      :class="getSorticon('lastname')"
                    >
                      <template v-if="getSorticon('lastname') == 'sorting'">
                        <i class="fas fa-sort"></i>
                      </template>
                      <template v-if="getSorticon('lastname') == 'sorting_desc'">
                        <i class="fas fa-sort-amount-down"></i>
                      </template>
                      <template v-if="getSorticon('lastname') == 'sorting_asc'">
                        <i class="fas fa-sort-amount-up"></i>
                      </template>
                    </a>
                  </th>
                  <th class="w200">
                    tên game<a
                      v-on:click="sortBy('firstname')"
                      :class="getSorticon('firstname')"
                    >
                      <template v-if="getSorticon('firstname') == 'sorting'">
                        <i class="fas fa-sort"></i>
                      </template>
                      <template v-if="getSorticon('firstname') == 'sorting_desc'">
                        <i class="fas fa-sort-amount-down"></i>
                      </template>
                      <template v-if="getSorticon('firstname') == 'sorting_asc'">
                        <i class="fas fa-sort-amount-up"></i>
                      </template>
                    </a>
                  </th>
                  <th class="w400">
                    action<a
                      v-on:click="sortBy('email')"
                      :class="getSorticon('email')"
                    >
                      <template v-if="getSorticon('email') == 'sorting'">
                        <i class="fas fa-sort"></i>
                      </template>
                      <template v-if="getSorticon('email') == 'sorting_desc'">
                        <i class="fas fa-sort-amount-down"></i>
                      </template>
                      <template v-if="getSorticon('email') == 'sorting_asc'">
                        <i class="fas fa-sort-amount-up"></i>
                      </template>
                    </a>
                  </th>
                  <th class="w300">
                    status<a
                      v-on:click="sortBy('phone')"
                      :class="getSorticon('phone')"
                    >
                      <template v-if="getSorticon('phone') == 'sorting'">
                        <i class="fas fa-sort"></i>
                      </template>
                      <template v-if="getSorticon('phone') == 'sorting_desc'">
                        <i class="fas fa-sort-amount-down"></i>
                      </template>
                      <template v-if="getSorticon('phone') == 'sorting_asc'">
                        <i class="fas fa-sort-amount-up"></i>
                      </template>
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody v-if="all.length">
                <tr v-for="(user, index) in all" :key="index">
                  <div style="display:none">{{status(user.account)}}</div>
                  <td>
                    <input
                      class="checkbox"
                      type="checkbox"
                      :value="index"
                      v-model="userSelect"
                    />
                  </td>
                  <td>{{ user.account }}</td>
                  <td>{{ user.expire_time }}</td>
                  <td>{{ user.type }}</td>
                  <td><button type="button" class="btn btn-primary" @click='actionPlayGame(user.account)'>Play Game</button></td>
                  <td>{{this.sttName[user.account]}}</td>
                  <td><button type="button" class="btn btn-primary" @click='actionEdit(index)'>ChangePassWord</button></td>
                </tr>
              </tbody>
              <tbody v-else>
                <th colspan="2" class="alert-data-none">データはありません。</th>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <Pagination :pagination="pagination" @changePage="changePage" /> -->
          
    </div>
    <div class="happyland-right">
        <formAccount :formAccount="formAccount"/>
    </div>
  </div>
</template>
 
<script>
import Table from "../../store/modules/table";
import TableDataLength from "../common/TableDataLength.vue";
// import Pagination from "../common/Pagination";
import Alert from "../common/alert";
import formAccount from './formAccount.vue'
import { mapState, mapMutations, mapActions} from 'vuex'
import { db , onSnapshot, doc} from '../../firebase'

export default {
  mixins: [Table],
  components: {
    TableDataLength,
    // Pagination,
    formAccount,
    Alert
  },
  setup() {
  },
  data: function() {
        return {
            firebaseData:[],
            limit:10,
            pagination: {},
            sttName: {},
            userSelect: [],
            formAccount: {
                account: '',
                password: ''
            }
        }
    },
    created() {
        this.fetchActionAllAccount()
        this.status('sutu9578')
    },
          mounted(){
              this.pagination = {
                total:11,
                from:1,
                to:10,
                current_page:1,
                last_page:1,
                per_page:10
            }
  },
  computed: {
    ...mapState("happyland", ["mode","all"]
    ),
  },
  methods: {
    ...mapActions({
      fetchActionAllAccount: 'happyland/all',
      fetchActionPlayGame: 'happyland/playgame',
      fetchActionDeleteAccountGame: 'happyland/delete'
    }),
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE',
      fetchSetDataEditAccount: 'happyland/SET_DATA_EDIT_ACCOUNT',
      fetchSetAlert: 'alert/SETMALERT'
    }),
    actionAdd() {
        this.formAccount = {
            account: '',
            password: ''
        }
        this.fetchSetmode('add')
    },
    actionEdit(index) {
        this.fetchSetmode('edit')
        let dataAccount = this.all[index]
        this.formAccount = {
            ...dataAccount
        }
        // eslint-disable-next-line no-debugger
        debugger
    },
    async actionPlayGame(account) {
        let playgame = await this.fetchActionPlayGame(account)
        this.fetchSetAlert(playgame)
    },
    async actionDelete() {
        // eslint-disable-next-line no-debugger
        debugger
        if(this.userSelect.length == 0) {
            alert("vui lòng chọn account để xoá ")
        } else {
            for(var i = 0 ; i < this.userSelect.length ;i++) {
                let dataAccount = this.all[i]
                let rsAction = await this.fetchActionDeleteAccountGame({
                    type: dataAccount.type,
                    account: dataAccount.account
                })
                // eslint-disable-next-line no-debugger
                debugger
                this.fetchSetAlert(rsAction)
                this.fetchActionAllAccount()
            }
            
        }
    },
    changeLimit(value) {
      // eslint-disable-next-line no-unused-vars
      let a  = value;
    },
    changePage(page) {
       // eslint-disable-next-line no-unused-vars
      let a  = page;
    },
    async status(documentName) {
        await onSnapshot(doc(db, "happyland", documentName), (doc) => {
            this.sttName[documentName] = doc.data().detail
        });
    }
  },

}
</script>
<style scoped>
    .group-btn {
        display: flex;
        justify-content: flex-end;
        margin: 0px 0 15px 0;
    }
    .group-btn .btn:first-child {
        margin-right: 10px;
    }
    #happyland {
        display: flex;
        justify-content: space-between;
        width:100%;
    }
    .happyland-left {
        width: 100%;
        transition: all 0.25s linear;
    }
    .happyland-right {
        width: 0;
        height: calc(100vh - 132px);
        overflow-y: auto;
        overflow-x: hidden;
        transition: all 0.25s linear;
    }
    .active .happyland-right {
        width: 49%;
        box-shadow: 4px 3px 10px 2px #ced4da;
    }
    .active .happyland-left {
        width: 50%;
    }
</style>