<template>
    <div class="dataTables_length">
        <label>
            <select class="table_length" v-model="selected_dataLength" @change="onChange($event)">
                <option v-for="(item,key) in dataLength" :key="key" v-bind:value="item.value" >{{item.label}}</option>
            </select>
        </label>
    </div>
</template>
<script>
export default {
   name: "TableDataLength",
   props: ['limit'],
   data() {
    return {
    selected_dataLength: '50',
    dataLength:[
        {label: '10' , value: '10'},
        {label: '50' , value: '50'},
        {label: '100' , value: '100'}
    ],
    }
   },
   methods: {
	onChange() {
	this.$emit('limit', this.selected_dataLength);
	}
   },
   created () {
	if (this.limit != '' && this.limit != null) {
	this.dataLength.forEach((data) => {
	if(this.limit == data.value) {
			this.selected_dataLength = this.limit
	}
	})
	}
   }
   
}

</script>
<style scoped lang="scss">
.dataTables_length {
  margin-bottom: 10px;
  font-size: 14px;
}
.table_length {
  font-size: 12px;
  width: 75px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  border-radius: 0;
  border-color: #d2d6de;
  padding: 5px 10px !important;
  color: #555;
  border: 1px solid #ccc;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
}
.table_length:focus-visible {
  border-color: #3c8dbc !important;
  outline: 0.25px solid #3c8dbc;
}
</style>
