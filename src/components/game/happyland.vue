<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <Alert />
        <div class="group-btn">
          <button type="button" class="btn btn-success" @click="actionAdd"><i class="fas fa-plus"></i>Add</button>
          <button type="button" class="btn btn-danger"><i class="fas fa-minus"></i>Delete</button>
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
                    管理者<a
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
                    姓
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
                    名<a
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
                    メールアドレス<a
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
                    電話番号<a
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
              <tbody v-if="users.length">
                <tr v-for="(user, index) in all" :key="index">
                  <td>
                    <input
                      class="checkbox"
                      type="checkbox"
                      :value="user.id"
                      v-model="userSelect"
                    />
                  </td>
                  <td>{{ user.id }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.pass }}</td>
                  <td>{{ user.key }}</td>
                  <td>{{ user.status }}</td>
                  <td><button type="button" class="btn btn-primary" @click='actionEdit(index)'>Edit</button></td>
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
        <formAccount />
    </div>
  </div>
</template>
 
<script>
import Table from "../../store/modules/table";
import TableDataLength from "../common/TableDataLength.vue";
// import Pagination from "../common/Pagination";
import Alert from "../common/alert";
import formAccount from './formAccount.vue'
import { mapState, mapMutations} from 'vuex'


export default {
  mixins: [Table],
  components: {
    TableDataLength,
    // Pagination,
    formAccount,
    Alert
  },
  data: function() {
        return {
            limit:10,
            pagination: {},
            users:[
                {   
                    id:1,
                    is_admin:1,
                    lastname:1,
                    firstname:1,
                    email:1,
                    phone:1
                }
            ]
        }
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
    )
  },
  methods: {
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE',
      fetchSetDataEditAccount: 'happyland/SET_DATA_EDIT_ACCOUNT'
    }),
    actionAdd() {
        this.fetchSetmode('add')
    },
    actionEdit(index) {
        this.fetchSetmode('edit')
        this.fetchSetDataEditAccount(index)
    },
    actionDelete() {
    },
    changeLimit(value) {
      // eslint-disable-next-line no-unused-vars
      let a  = value;
    },
    changePage(page) {
       // eslint-disable-next-line no-unused-vars
      let a  = page;
    },
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