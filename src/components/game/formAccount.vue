<template>
  <div class="form-account">
    <div class="group-btn">
        <div style="display:flex;justify-content: flex-end;">
            <button type="button" class="btn btn-success" @click="actionSubmit"><i class="fas fa-plus"></i>{{mode == 'add' ? 'Add' : 'Edit'}}</button>
            <button type="button" class="btn btn-secondary" @click="actionCancel">Cancel</button>
        </div>
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Email</label>
      <input type="email" class="form-control"  placeholder="name@example.com" v-model="data.account">
    </div>
    <!-- <div class="mb-3">
      <label for="" class="form-label">Public key</label>
      <input type="text" class="form-control" v-model="isEditData.key">
    </div> -->
    <div class="mb-3">
      <label for="" class="form-label">Pass</label>
      <input type="password" class="form-control" v-model="data.password">
    </div>
  </div>
</template>
 
<script>


import { mapState, mapMutations, mapActions} from 'vuex'
import cloneDeep from "clone-deep";
export default {
  mounted(){
  },
  data: function() {
        return {
            data:{}
        }
    },
  computed: {
    ...mapState("happyland", ["mode","isEditData"])
  },
  methods: {
    ...mapActions({
      fetchActionAddAccount: 'happyland/add',
      fetchActionGetAllAccount: 'happyland/all'
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
        } else {
            this.data = cloneDeep(this.isEditData)
            this.fetchEditAccount(this.data)
            this.fetchSetmode('list')
        }
    },
    actionCancel() {
        this.fetchSetmode('list')
    },
    actionDelete() {
    }
  },
  created () {

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