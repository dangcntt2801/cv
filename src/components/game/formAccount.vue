<template>
  <div class="form-account">
    <div class="group-btn">
        <div style="display:flex;justify-content: flex-end;">
            <button type="button" class="btn btn-success" @click="actionSubmit"><i class="fas fa-plus"></i>{{mode == 'add' ? 'Add' : (mode == 'edit' ? 'ChangePassWord' : 'Rent') }}</button>
            <button type="button" class="btn btn-secondary" @click="actionCancel">Cancel</button>
        </div>
    </div>
    <div v-if="mode == 'rent'">
        <div class="mb-3">
          <label for="" class="form-label">Thời hạn</label>
            <select class="form-control" v-model="renvalue" @change="onChange($event)">
                <option v-for="(item,key) in dateRent" :key="key" v-bind:value="item.value" >{{item.text}}</option>
            </select>
        </div>
    </div>
    <div v-else>
        <div class="mb-3">
          <label for="" class="form-label">Email</label>
          <input type="email" class="form-control" :disabled="mode != 'add'" placeholder="name@example.com" v-model="data.account">
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Pass</label>
          <input type="password" class="form-control" v-model="data.password">
        </div>
    </div>
    
  </div>
</template>
 
<script>


import { mapState, mapMutations, mapActions} from 'vuex'
export default {
  name:"formAccount",
  props: {
    formAccount: Object
  },
    data: function() {
        return {
            data: {},
            renvalue: 1,
            dateRent: [
                {
                    'value': 1,
                    'text' : '1 ngày'
                },
                {
                    'value': 7,
                    'text' : '7 ngày'
                },
                {
                     'value': 30,
                    'text' : '30 ngày'
                }
            ]
        }
    },
  mounted(){
  },
  computed: {
    ...mapState("happyland", ["mode","isEditData"])
  },
  methods: {
    ...mapActions({
      fetchActionAddAccount: 'happyland/add',
      fetchActionGetAllAccount: 'happyland/all',
      fetchActionChangePassWord: 'happyland/changePassWord',
      fetchActionRent: 'happyland/rent'
    }),
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE',
      fetchEditAccount: 'happyland/EDIT_ACCOUNT',
      fetchSetAlert: 'alert/SETMALERT'
    }),
    async actionSubmit() {
        if(this.mode == 'add') {
            let actionAdd = await this.fetchActionAddAccount(this.data)
            this.fetchSetAlert(actionAdd)
            this.fetchSetmode('list')
            this.fetchActionGetAllAccount()
        } else if (this.mode == 'edit') {
            let actionEdit = await this.fetchActionChangePassWord(this.formAccount)
            this.fetchSetAlert(actionEdit)
            this.fetchSetmode('list')
        } else {
            let rent = await this.fetchActionRent({
                account: this.formAccount.account,
                day: this.renvalue
            })
            this.fetchSetAlert(rent)
            this.fetchSetmode('list')
            this.fetchActionGetAllAccount()
        }
    },
    actionCancel() {
        this.fetchSetmode('list')
    },
    actionDelete() {
    }
  },
  created () {

  },
  watch: {
    formAccount: {
      handler() {
        this.data = this.formAccount;
    },
  },
  }
}
</script>
<style scoped>
    .form-account {
        padding: 10px;
    }
    .group-btn {
        background-color: #f1f5f9;
        height: 150px;
        margin-bottom: 10px;
    }
    .group-btn button:first-child {
        margin-right: 10px;
    }
</style>