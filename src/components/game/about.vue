<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <Alert />
        <h2>Số tiền đang có: {{myAccount.value}}$</h2>
        <h3>Lịch sử Nạp tiền</h3>
        <TableDataLength :limit="limit" @limit="changeLimit"></TableDataLength>
        <div class="account-table">
          <div class="width_max">
            <table class="table">
              <thead class="sticky">
                <tr>
                  <th class="w40">
                  <!-- <input
                        class="checkbox select crsr_pr"
                        type="checkbox"
                        @click="toggleSelect($event)"
                :checked="selectAll"
                      /> -->
                  </th>
                  <th class="w90">
                    Mã giao dịch<a
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
                    Ngày tạo giao dịch
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
                    Số tiền nạp $<a
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
                    Trạng thái<a
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
                </tr>
              </thead>
              <tbody v-if="allTransition.length">
                <tr v-for="(user, index) in allTransition" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ user.code  }}</td>
                  <td>{{ formatDate(user.time) }}</td>
                  <td>{{ user.value }}</td>
                  <td>
                      <span v-if="user.active == 1" class="badge badge-success">đã xác nhận</span>
                      <span v-if="user.active == 0" class="badge badge-warning">chưa xác nhận</span>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <th colspan="2" class="alert-data-none">Không có data</th>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-5 alert alert-success" role="alert" >
          Vui lòng chuyển tiền úng với mỗi mã giao dịch về số tài khoản xxxxx
          <br>
          Nội dung tin nhắn ứng với mã ứng với mã giao dịch
          <br>
          Sau khi chuyển xong hãy liên hệ với chúng tôi
        </div>
    </div>
  </div>
</template>
 
<script>
import moment from 'moment'
import Table from "../../store/modules/table";
import Alert from "../common/alert";
import TableDataLength from "../common/TableDataLength.vue";
import { mapState, mapMutations, mapActions} from 'vuex'
import axiosInstanct from "../../store/interceptors";
export default {
  name: 'about',
  mixins: [Table],
  components: {
    Alert,
    TableDataLength
  },
  setup() {
  },
  data: function() {
        return {
        }
    },
    created() {
        this.fetchActionAllTransition()
        this.fetchActionMyAccount()
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
    ...mapState("happyland", ["allTransition"]),
    ...mapState("accountHappyland", ["myAccount"]),
  },
  methods: {
    ...mapActions({
      fetchActionAllTransition: 'happyland/allTransition',
      fetchActionMyAccount: 'accountHappyland/myAccount',
    }),
    formatDate(val) {
        if (val) {
            return moment((val*1000)).format('MM/DD/YYYY hh:mm')
        }
    },
    onChange(event) {
        let value = event.target.value
        switch (value) {
            case "25":
                this.money1 = 550
                this.money2 = 0
                break;
            case "50":
                this.money1 = 1150
                this.money2 = 5
                break;
            case "100":
                this.money1 = 2300
                this.money2 = 20
                break;
            case "150":
                this.money1 = 3450
                this.money2 = 37.5
                break;
            default:
                break;
        }
        this.money3 = parseInt(value) + this.money2 + '$'
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
</style>