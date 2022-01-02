<template>
  <div>
      <h3>Implement jQuery DataTable in Vue Js</h3>
      <table class="table" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.product_title}}</td>
            <td>{{item.product_price}}</td>
            <td>{{item.created_at}}</td>
          </tr>
          
        </tbody>
      </table>    
  </div>
</template>
 
<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 



export default {
  mounted(){
      $('#datatable').DataTable();
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
                
            ]
        }
    },
}
</script>