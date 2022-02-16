<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <Alert />
        <h3>Nạp tiền</h3>
        <div class="form-group">
            <label for="exampleInputPassword1">Số tiền nạp</label>
            <select 
                v-model="moneySelect"
                @change="onChange($event)"
                class="custom-select custom-select-lg"
            >
              <option value="">Chọn số tiền</option>
              <option value="25">25$</option>
              <option value="50">50$(10%)</option>
              <option value="100">100$(20%)</option>
              <option value="150">150$(25%)</option>
            </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Số tiền phải trả</label>
          <input type="text" v-model="money1" class="form-control" id="exampleInputPassword1" disabled>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số tiền được cộng thêm</label>
          <input type="text" v-model="money2" class="form-control" id="exampleInputPassword1" disabled>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Số tiền thực nhận</label>
          <input type="text" v-model="money3" class="form-control" id="exampleInputPassword1" disabled>
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <!-- <Pagination :pagination="pagination" @changePage="changePage" /> -->
        <div class="mt-5 alert alert-success" role="alert" v-show="msgBank != ''">
          Vui lòng chuyển {{this.money1}} về số tài khoản xxxxx
          <br>
          Nội dung tin nhắn ứng với mã {{msgBank.msg}}
          <br>
          Sau khi chuyển xong hãy liên hệ với chúng tôi
        </div>
    </div>

  </div>
</template>
 
<script>
import Table from "../../store/modules/table";
// import Pagination from "../common/Pagination";
import Alert from "../common/alert";
import { mapActions, mapMutations} from 'vuex'

export default {
  name: 'recharge',
  mixins: [Table],
  components: {
    Alert
  },
  setup() {
  },
  data: function() {
        return {
            moneySelect:'',
            moneyPurcharse: {
                25:100,
                50:100,
                100:100,
                150:100
            },
            money1:0,
            money2:0,
            money3:0,
            msgBank:''
        }
    },
    created() {
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
  },
  methods: {
    ...mapActions({
      fetchActionRecharge: 'happyland/recharge',
    }),
    ...mapMutations({
      fetchSetAlert: 'alert/SETMALERT'
    }),
    onChange(event) {
        let value = event.target.value
        switch (value) {
            case "25":
                this.money1 = '550.000 VND'
                this.money2 = 0
                break;
            case "50":
                this.money1 = '1.150.000 VND'
                this.money2 = 5
                break;
            case "100":
                this.money1 = '2.300.000 VND'
                this.money2 = 20
                break;
            case "150":
                this.money1 = '3.450.000 VND'
                this.money2 = 37.5
                break;
            default:
                break;
        }
        this.money3 = parseInt(value) + this.money2 + '$'
    },
    async submit() {
        if(this.moneySelect == '') alert("vui lòng chọn số tiền cần nạp")
        else {
            let msg = await this.fetchActionRecharge(this.moneySelect)
            this.fetchSetAlert(msg)
            this.msgBank = msg
        }
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