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
      <input type="email" class="form-control"  placeholder="name@example.com" v-model="isEditData.email">
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Public key</label>
      <input type="text" class="form-control" v-model="isEditData.key">
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Pass</label>
      <input type="password" class="form-control" v-model="isEditData.password">
    </div>
  </div>
</template>
 
<script>


import { mapState, mapMutations} from 'vuex'

export default {
  mounted(){

  },
  data: function() {
        return {
            editData:{}
        }
    },
  computed: {
    ...mapState("happyland", ["mode","isEditData"]
    )
  },
  methods: {
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE',
      fetchAddAccount: 'happyland/ADD_ACCOUNT',
      fetchEditAccount: 'happyland/EDIT_ACCOUNT'
    }),
    actionSubmit() {
        if(this.mode == 'add') {
            this.fetchAddAccount(this.isEditData)
        } else {
            this.fetchEditAccount(this.isEditData)
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