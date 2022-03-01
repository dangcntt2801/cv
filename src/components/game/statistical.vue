<template>
  <div id="happyland" :class="mode == 'list' ? '' : 'active'">
    <div class="happyland-left">
        <h3>{{ $t('game.statistical') }}</h3>
        <div class="tab">
          <ul class="prodNav">
            <li id="pTab1" :class="tab == 1 ? 'active' : '' " @click="tab = 1" class="ptItem">{{ $t('game.animals') }}</li>
            <li id="pTab2" :class="tab == 2 ? 'active' : '' " @click="tab = 2" class="ptItem">{{ $t('game.seeds') }}</li>
          </ul>
          <div class="">
            <div class="" id="" v-show="tab == 1">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">{{ $t('game.table.Name') }}</th>
                    <th scope="col">{{ $t('game.table.Level') }}</th>
                    <th scope="col">{{ $t('game.table.Price') }}</th>
                    <th scope="col">{{ $t('game.table.PriceHPL') }}</th>
                    <th scope="col">{{ $t('game.table.PriceHPW') }}</th>
                    <th scope="col">{{ $t('game.table.HarvestAmount') }}</th>
                    <th scope="col">{{ $t('game.table.GrowthTime') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(animal, index) in animals" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ animal.name }}</td>
                    <td>{{ animal.level }}</td>
                    <td>{{ animal.price }}</td>
                    <td>{{ animal.priceHPL }}</td>
                    <td>{{ animal.priceHPW }}</td>
                    <td>{{ animal.harvestAmount }}</td>
                    <td>{{ secondsToHms(animal.growthTime) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="" id="" v-show="tab == 2">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">{{ $t('game.table.Name') }}</th>
                    <th scope="col">{{ $t('game.table.Level') }}</th>
                    <th scope="col">{{ $t('game.table.Price') }}</th>
                    <th scope="col">{{ $t('game.table.PriceHPL') }}</th>
                    <th scope="col">{{ $t('game.table.PriceHPW') }}</th>
                    <th scope="col">{{ $t('game.table.HarvestAmount') }}</th>
                    <th scope="col">{{ $t('game.table.GrowthTime') }}</th>
                    <th scope="col">{{ $t('game.table.TypeLand') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(seed, index) in seeds" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ seed.name }}</td>
                    <td>{{ seed.level }}</td>
                    <td>{{ seed.price }}</td>
                    <td>{{ seed.priceHPL }}</td>
                    <td>{{ seed.priceHPW }}</td>
                    <td>{{ seed.harvestAmount }}</td>
                    <td>{{ secondsToHms(seed.harvestPeriod) }}</td>
                    <td>
                        <span :class="{ 
                            common: land == 'Common',
                            rare: land == 'Rare',
                            epic: land == 'Epic',
                            legendary: land == 'Legendary',
                            Mythical: land == 'Mythical',
                        }" class="land" v-for="(land, index_land) in seed.useInPlot" :key="index_land">
                            {{land}}
                        </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>
 
<script>
import { mapActions, mapMutations} from 'vuex'
import { ref, reactive, onMounted} from 'vue'
import { db , onSnapshot, doc} from '../../firebase'
export default {
  name: 'statistical',
  data: function() {
        return {
        }
    },
  setup() {
      const tab = ref(1)
      const animals = ref([])
      const seeds = ref([])
       onMounted(async () => {
        await onSnapshot(doc(db, "happyland_common", 'animals'), (doc) => {
          animals.value = doc.data().data
        });
        await onSnapshot(doc(db, "happyland_common", 'seeds'), (doc) => {
          seeds.value = doc.data().data
        });
      })
        function secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            return hDisplay + mDisplay + sDisplay; 
        }
        debugger
      return {
          tab,
          animals,
          seeds,
          secondsToHms
      }
  },
  created() {
  },
  mounted(){
              
  },
  computed: {
  },
  methods: {
    
  },

}
</script>
<style scoped>
.land {
    padding: 5px;
    border-radius: 20px;
    display:inline-block;
    border: 1px solid #333;
    color: #ffffff;
}
.land.common {
    background: #1ca3ab;
    border-color: #1ca3ab;
}
.land.rare {
    background: #cb7057;
    border-color: #cb7057;
}
.land.epic {
    background: #d25e5d;
    border-color: #d25e5d;
}
.land.legendary {
    background: #426751;
    border-color: #426751;
}
.land.Mythical {
    background: #d9bbe2;
    border-color: #d9bbe2;
}
.prodNav {
  font-size: 12px;
  background: #f5f5f5;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 10px 0 20px;
  line-height: 1.1;
}
.prodNav .ptItem {
  padding: 9px 35px;
  line-height: 20px;
  border-radius: 20px;
  border: 1px solid #333;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s ease-in-out;
}

.prodNav .ptItem.active,
.prodNav .ptItem:hover {
  background: #652796;
  border-color: #652796;
  color: #ffffff;
}

.prodBody {
  border: 1px solid #c1c1c1;
  padding: 20px;
  border-radius: 5px;
}

.prodMain {
  padding: 20px;
  color: #ffffff;
}

#pTab1C {
  background: #343bbf;
}
#pTab2C {
  background: #f06f24;
}

#pTab3C {
  background: #249ef0;
}
</style>