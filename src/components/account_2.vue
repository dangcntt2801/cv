<template>
  <section class="account" v-show="activeTab == 2">
        <h2>HTML Table 2</h2>
        <table class="table">
            <thead class="thead-dark" style="">
              <tr>
                <th scope="col">email</th>
                <th scope="col">pass</th>
                <th scope="col">ingame</th>
                <!-- <th scope="col">private Key</th>
                <th scope="col">price</th>
                <th scope="col">date off</th>
                <th scope="col">dec</th>
                <th scope="col">ecr</th>
                <th scope="col">countCard</th> -->
              </tr>
            </thead>
            <tbody>
              <tr  v-for="(card,index) in this.userCards" :key="index">
                <td>{{card.ingame.email}}</td>
                <td>{{card.ingame.pass}}</td>
                <td>{{card.ingame.ingameName}}</td>
                <!-- <td>{{card.ingame.private_key}}</td>
                <td >{{card.card.buy_price}}</td>
                <td :style="checkDay(card.card.rental_date, card.card.rental_days) == 'now' ? myStyle : 
                (checkDay(card.card.rental_date, card.card.rental_days) == 'next_time' ? myStyleBlue : '' )
                ">{{ format_date(card.card.rental_date, card.card.rental_days) }}</td>
                <td >{{card.dec}}</td>
                <td >{{card.ecr}}</td>
                <td >{{card.count}}</td> -->
              </tr>
            </tbody>
        </table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment'
export default {
  name: "account_2",
  props: {
      activeTab: Number,
  },
  data() {
    return {
      tab: 2,
      moment: moment,
      myStyle:{
            backgroundColor:"red" 
      },
      myStyleBlue:{
            backgroundColor:"green" 
      }
    };
  },
  computed: {
    ...mapGetters({
      actived: "common/tab",
      userCards: "account/userCard2",
    }),
  },
  methods: {
    ...mapActions({
      fetchAllUser: "account/getAllUser2",
    }),
    format_date(value,dayoff){
         if (value) {
             return moment(String(value)).add(dayoff,'d').format('DD/MM/YYYY hh:mm A')
          }
    },
    checkDay(value,dayoff) {
         if (value) {
             var dateOff = moment(String(value)).add(dayoff,'d').format('DD/MM/YYYY')
             var now = moment().format('DD/MM/YYYY')
             var nextTime = moment().add(1,'d').format('DD/MM/YYYY')
             var boolen
            if(dateOff == now){
                boolen = 'now'
            } else if(dateOff == nextTime) {
                boolen = 'next_time'
            } else {
                boolen = 'far'
            }
             return boolen
          }
    }
  },
  created: async function () {
    await this.fetchAllUser();
  },
};
</script>
<style scoped>
table{
    width: 100%;
    color: #fff;
}
</style>
