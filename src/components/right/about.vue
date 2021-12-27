<template>
  <section class="about wrap" v-show="tab == actived">
        <h2>HTML Table 2</h2>
        <table>
          <tr>
            <th>email</th>
            <th>pass</th>
            <th>price</th>
            <th>date off</th>
          </tr>
          <tr v-for="(card,index) in this.userCards" :key="index">
            <td>{{card.ingame.email}}</td>
            <td>{{card.ingame.pass}}</td>
            <td >{{card.card.buy_price}}</td>
            <td :style="checkDay(card.card.rental_date, card.card.rental_days) == 'now' ? myStyle : 
            (checkDay(card.card.rental_date, card.card.rental_days) == 'next_time' ? myStyleBlue : '' )
            ">{{ format_date(card.card.rental_date, card.card.rental_days) }}</td>
          </tr>
        </table>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment'
export default {
  name: "about",
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
