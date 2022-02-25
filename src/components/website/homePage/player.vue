<template>
   <div class="player">
       <div class="group-btn">
            <a href="" class="active">All</a>
            <a href="">24 Hours</a>
            <a href="">Last Week</a>
            <a href="">Last Month</a>
       </div>
      <div class="group-player">
          <div class="player-list">
            <div class="player-item" v-for="(player,index) in arrPlayer" :key="index">
                <span>{{index + 1}}</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>{{player.msisdn}}</p>
                        <p><span>Số tiền đã nạp </span> {{player.value}}$</p>
                    </div>
                    <!-- <div class="right"><p>+ 69,5%</p></div> -->
                </div>
            </div>
            <!-- <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div>
            <div class="player-item">
                <span>1</span>
                <div class="player-img">
                    <img class="avatar" src="/img/topsellerimg01.png" alt="">
                    <img class="icon" src="/img/checkicon.svg" alt="">
                </div>
                <div class="player-text">
                    <div class="left">
                        <p>Metasaurs by Dr. DMT </p>
                        <p>8 921,77 </p>
                    </div>
                    <div class="right"><p>+ 69,5%</p></div>
                </div>
            </div> -->
          </div>
        
      </div>
   </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted} from 'vue'
export default {
  name: 'banner',
  components: {

  },
  setup() {
    const arrPlayer = ref([]);
    onMounted(async () => {
      const res = await axios.get("http://api.hdnft.online?url=user/user-dashboard-api");
      arrPlayer.value = res.data.data
    });
      return {
        arrPlayer
      }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.group-btn a {
    display: inline-flex;
    padding: 15px 25px;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
}
.group-btn a.active {
    background: #0E2542;
    border-color: #1f487c #1f487c #1f487c;
}
.group-player {
    margin-top: 50px;
}

/* player */
.player-list {
    display: flex;
    flex-wrap: wrap;
    margin-left: -25px;
}
.player-item {
    margin-left: 25px;
    margin-bottom: 30px;
    display: inline-flex;
    height: 70px;
    align-items: center;
    width: 350px;
}
.player-item>span {
    width: 20px;
}
.player-img {
    width: 70px;
    height: 70px;
    position: relative;
}
.avatar {
    width: 70px;
    height: 70px;
    object-fit: cover;
}
.icon {
    position: absolute;
    width: 20px;
    height: 20px;
    object-fit: cover;
    bottom: -5px;
    right: -5px;
}
.player-text {
    margin-left: 25px;
    display: flex;
    align-items: center;
}
.left {
    display: flex;
    flex-direction: column;
}
.right {
    margin-left: 25px;
    color: #019DEA;
}
</style>