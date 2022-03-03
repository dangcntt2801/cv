<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <Alert />
        <div class="group-btn">
          <button type="button" class="btn btn-success" @click="actionAdd()"><i class="fas fa-plus"></i>{{ $t('game.add') }}</button>
          <button type="button" class="btn btn-danger" @click="actionDelete()"><i class="fas fa-minus"></i>{{ $t('game.delete') }}</button>
        </div>
        <h3>{{ $t('game.account') }}</h3>
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
                    {{ $t('game.account') }}<a
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
                    {{ $t('game.duration') }}
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
                  <th class="w400">
                    {{ $t('game.action') }}<a
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
                  <th class="w400">
                    {{ $t('game.table.settingPlay') }}<a
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
                    {{ $t('game.table.status') }}<a
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
                   <th class="w300">
                    {{ $t('game.last_status') }}<a
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
                <tr v-for="(user, index) in all" :key="index" @click="actionInfor(index)">
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
                  <td>{{ formatDate(user.expire_time)  }}</td>
                  <td v-show="user.status == 1"><button type="button" class="btn btn-danger" @click='actionStopGame(user.account)'>Stop Game</button></td>
                  <td v-show="user.status != 1 "><button type="button" class="btn btn-primary" @click='actionPlayGame(user.account)'>Play Game</button></td>
                  <td><button type="button" class="btn btn-info" @click='actionOpenModalSetting(user.account)'>{{ $t('game.table.settingPlay') }}</button></td>
                  <td>{{this.sttName[user.account]}}</td>
                  <td>{{formatDate(this.timeStamp[user.account])}}</td>
                  <td><button type="button" class="btn btn-primary" @click='actionEdit(index)'>{{ $t('game.ChangePassWord') }}</button></td>
                  <td><button type="button" class="btn btn-warning" @click='actionRent(index)'>{{ $t('game.extend') }}</button></td>
                </tr>
              </tbody>
              <tbody v-else>
                <th colspan="2" class="alert-data-none">Không có data</th>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <Pagination :pagination="pagination" @changePage="changePage" /> -->
        <div class="popup-setting" v-show="settingFlag">
            <button type="button" class="btn btn-success" @click='actionSettingGame'>Submit</button>
            <span
            @click="settingFlag = false;accountSetting = ''"
            style="float: right;cursor:pointer"
            ><i class="fa fa-window-close" aria-hidden="true"></i></span>
            <h4>{{ $t('game.animals') }}</h4>
              <div class="form-group">
                    <input type="checkbox" v-model="config.animal.active">
                    <label class="label-checkbox" for="checkbox">Chăm sóc động vật</label>
              </div>
              <!-- <div class="form-group">
                    <input type="checkbox" v-model="checked">
                    <label for="checkbox">Bón phân</label>
              </div>
              <div class="form-group">
                    <input type="checkbox" v-model="checked">
                    <label for="checkbox">Trồng theo order</label>
              </div>
              <div class="form-group">
                    <input type="checkbox" v-model="checked">
                    <label for="checkbox">Chăm sóc cây</label>
              </div> -->
            <h4>{{ $t('game.seeds') }}</h4>
                          <div class="form-group">
                    <input type="checkbox" v-model="config.plant.active">
                    <label class="label-checkbox" for="checkbox">Chăm sóc cây</label>
              </div>
              <div class="form-group">
                    <input type="checkbox" v-model="config.plant.shorten">
                    <label class="label-checkbox" for="checkbox">Bón phân</label>
              </div>
              <div class="form-group">
                    <input type="checkbox" v-model="config.plant.order">
                    <label class="label-checkbox" for="checkbox">Trồng theo order</label>
              </div>
              <h4>Trồng cây</h4>
              <div class="form-group" v-for="(seed, index) in seeds" :key="index">
                    <input type="radio" :value="seed" v-model="config.plant.item">
                    <label class="label-checkbox" for="checkbox">{{seed}}</label>
              </div>
        </div>
        <div v-if="flagInfor">
            <h3>Account Infor</h3>
            <div class="form-row">
              <div class="form-group col-md-6">
                    <label for="" class="form-label">UserName</label>
                    <p>{{accountInfor.username}}</p>
              </div>
              <div class="form-group col-md-6">
                <label for="" class="form-label">Level</label>
                <p>{{accountInfor.level}}</p>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="" class="form-label">pointExpNow</label>
                <p>{{accountInfor.pointExpNow}}</p>
              </div>
              <div class="form-group col-md-6">
                <label for="" class="form-label">HPL</label>
                <p>{{accountInfor.hpl}}</p>
              </div>
            </div>


            <div class="form-row">
              <div class="form-group col-md-6">
                    <label for="" class="form-label">HPLDeposit</label>
                <p>{{accountInfor.hplDeposit}}</p>
              </div>
              <div class="form-group col-md-6">
                    <label for="" class="form-label">HPLReward</label>
                    <p>{{accountInfor.hplReward}}</p>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                       <label for="" class="form-label">HPLRewardClaimed</label>
              <p>{{accountInfor.hplRewardClaimed}}</p>
              </div>
              <div class="form-group col-md-6">
              <label for="" class="form-label">HPLSpend</label>
              <p>{{accountInfor.hplSpend}}</p>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                    <label for="" class="form-label">HPW</label>
              <p>{{accountInfor.hpw}}</p>
              </div>
              <div class="form-group col-md-6">
              <label for="" class="form-label">HPWDeposit</label>
              <p>{{accountInfor.hpwDeposit}}</p>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
              <label for="" class="form-label">HPWReward</label>
              <p>{{accountInfor.hpwReward}}</p>
              </div>
              <div class="form-group col-md-6">
              <label for="" class="form-label">HPWRewardClaimed</label>
              <p>{{accountInfor.hpwRewardClaimed}}</p>
              </div>
            </div>
                <div class="form-row">
              <div class="form-group col-md-6">
              <label for="" class="form-label">HPWSpend</label>
              <p>{{accountInfor.hpwSpend}}</p>
              </div>
            </div>
          

        </div>
        
    </div>
    <div class="happyland-right">
        <formAccount :formAccount="formAccount"/>
    </div>
    
  </div>
  
</template>
 
<script>
import moment from 'moment'
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
            settingFlag: false,
            firebaseData:[],
            limit:10,
            pagination: {},
            sttName: {},
            timeStamp: {},
            accountArrInfor: {},
            accountInfor: {},
            flagInfor: false,
            userSelect: [],
            formAccount: {
                account: '',
                password: ''
            },
            accountSetting: '',
            seeds: [
                'Tomato',
                'Corn',
                'Wheat',
                'Carrot',
                'Sugarcane',
                'Watermelon',
                'Grapes',
                'Sunflower',
                'Rose',
                'Coconut'
            ],
            config: {
                plant: {
                    active: true,
                    item: '',
                    order: false,
                    shorten: false
                },
                animal: {
                    active: true,
                    item: '',
                    order: false,
                    shorten: false
                }
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
      fetchActionStopGame: 'happyland/stopgame',
      fetchActionDeleteAccountGame: 'happyland/delete',
      fetchActionConfigGame: 'happyland/configGame'
    }),
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE',
      fetchSetDataEditAccount: 'happyland/SET_DATA_EDIT_ACCOUNT',
      fetchSetAlert: 'alert/SETMALERT'
    }),
    formatDate(val) {
        if (val) {
            return moment((val*1000)).format('MM/DD/YYYY hh:mm')
        }
    },
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
    },
    actionRent(index) {
        this.fetchSetmode('rent')
        let dataAccount = this.all[index]
        this.formAccount = {
            ...dataAccount
        }
    },
    async actionPlayGame(account) {
        let playgame = await this.fetchActionPlayGame(account)
        if(playgame.type == "success") {
            this.fetchSetAlert({
                type: 'success',
                msg: "Đã start game",
                control: true
            })
            this.fetchActionAllAccount()
        }
            
    },
    async actionStopGame(account) {
        let stopGame = await this.fetchActionStopGame(account)  
        if(stopGame.type == "success") {
            this.fetchSetAlert({
                type: 'success',
                msg: "Đã stop game",
                control: true
            })
             this.fetchActionAllAccount()
        }
    },
    async actionSettingGame() {
        let params = {
            account: this.accountSetting,
            config: JSON.stringify(this.config)
        }
        let response = await this.fetchActionConfigGame(params)  
        if(response.type == "success") {
            this.fetchSetAlert({
                type: 'success',
                msg: response.msg,
                control: true
            })
             this.fetchActionAllAccount()
        }
        this.settingFlag = false
    },
    async actionDelete() {
        if(this.userSelect.length == 0) {
            alert("vui lòng chọn account để xoá ")
        } else {
            if(confirm("Bạn có thật sự muốn xoá?")){
                    for(var i = 0 ; i < this.userSelect.length ;i++) {
                    let dataAccount = this.all[i]
                    let rsAction = await this.fetchActionDeleteAccountGame({
                        type: dataAccount.type,
                        account: dataAccount.account
                    })
                    this.fetchSetAlert(rsAction)
                    this.fetchActionAllAccount()
                }
            }
        }
    },
    actionInfor(index) {
        this.flagInfor = false
        this.accountInfor = {}
        let dataAccount = this.all[index]
        if(  Object.keys(this.accountArrInfor[ dataAccount.account]).length !== 0 ) {
            this.accountInfor = this.accountArrInfor[ dataAccount.account]
            this.flagInfor = true
        } 
    },
    actionOpenModalSetting(account) {
        const myAccount = this.all.find(val => {
             return val.account == account
        });
        const accountConfig = JSON.parse(myAccount.config)
        this.config = {}
        this.config = accountConfig
        this.settingFlag = true;
        this.accountSetting = account
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
            this.timeStamp[documentName] = doc.data().time.seconds
            this.accountArrInfor[documentName] = doc.data().infor
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
        z-index: 999;
        background-color: white;
    }
    .active .happyland-left {
        width: 50%;
    }
    tr:hover {background-color: coral;}
    tr {
        cursor: pointer;
    }
    .form-label {
        font-weight: 700;
    }
    .popup-setting {
        position: absolute;
        padding: 20px;
        width: 500px;
        height: 500px;
        top: 100px;
        left:700px;
        z-index: 999;
        background: white;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.2);
        overflow-y: auto;
    }
    .label-checkbox {
        margin: 0 5px;
    }
</style>