<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <div class="group-btn">
          <button type="button" class="btn btn-success" @click="actionAdd"><i class="fas fa-plus"></i>Add</button>
          <button type="button" class="btn btn-danger"><i class="fas fa-minus"></i>Delete</button>
        </div>
        <h3>Account</h3>
        <table id="datatable" class="ui celled table">
          <thead>
            <tr>
              <th></th>
              <th>Stt</th>
              <th>Email</th>
              <th>Key</th>
              <th>Pass</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,key) in all" :key="item.id">
              <td><input type="checkbox" id="checkbox" v-model="checked"></td>
              <td>{{key + 1}}</td>
              <td>{{item.email}}</td>
              <td>{{item.key}}</td>
              <td>{{item.pass}}</td>
              <td>{{item.status}}</td>
              <td><button type="button" class="btn btn-primary">Edit</button></td>
            </tr>
          </tbody>
        </table>    
          
    </div>
    <div class="happyland-right">
        <formAccount />
    </div>
  </div>
</template>
 
<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import formAccount from './formAccount.vue'
import { mapState, mapMutations} from 'vuex'


export default {
  mounted(){
      $('#datatable').DataTable({
        scrollY: '50vh',
        scrollCollapse: true,
      }
      );
  },
  components : {
      formAccount
  },
  computed: {
    ...mapState("happyland", ["mode","all"]
    )
  },
  methods: {
    ...mapMutations({
      fetchSetmode: 'happyland/SETMODE'
    }),
    actionAdd() {
        this.fetchSetmode('add')
    },
    actionEdit() {
        this.fetchSetmode('edit')
    },
    actionDelete() {
    }
  },
  data: function() {
        return {
            products:[
                {   
                    id:1,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                {
                    id:3,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                {
                    id:2,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                                   {
                    id:4,
                    product_title:1,
                    product_price:1,
                    created_at:1
                },
                
            ]
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
        box-shadow: 4px 3px 10px 2px #ced4da;
        height: calc(100vh - 132px);
        overflow-y: auto;
        overflow-x: hidden;
        transition: all 0.25s linear;
    }
    .active .happyland-right {
        width: 49%;
    }
    .active .happyland-left {
        width: 50%;
    }
</style>