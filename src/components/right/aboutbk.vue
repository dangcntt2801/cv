<template>
  <section class="about wrap" v-show="tab == actived">
      <div class="title">
          About <span class="text-blue">Me</span>
      </div>
      <div class="about-infor">
          <div class="about-infor-left">
              Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et
              ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.
          </div>
          <div class="about-infor-right">
              <div class="about-infor-right-text">
                  <span class="text-blue">Age</span>24
              </div>
              <div class="about-infor-right-text">
                  <span class="text-blue">Residence</span>VietNam
              </div>
              <div class="about-infor-right-text">
                  <span class="text-blue">Address</span>52D KP1 P.Buu Long Bien Hoa Dong Nai
              </div>
              <div class="about-infor-right-text">
                  <span class="text-blue">e-mail</span>dangcntt2801@gmail.com
              </div>
              <div class="about-infor-right-text">
                  <span class="text-blue">Phone</span>+083 646 1574
              </div>
          </div>
      </div>
      <div class="block-title">
          What <span class="text-blue grid">I Do</span>
      </div>
      <div class="list-do">
          <div class="item-do">
              <div class="item-do__icon"><i class="fas fa-store"></i></div>
              <div class="item-do__title">Ecommerce</div>
              <div class="item-do__desc">Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
          </div>
          <div class="item-do">
              <div class="item-do__icon"><i class="fas fa-pen"></i></div>
              <div class="item-do__title">Copywriting</div>
              <div class="item-do__desc">Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
          </div>
          <div class="item-do">
              <div class="item-do__icon"><i class="fas fa-laptop"></i></div>
              <div class="item-do__title">Web Design</div>
              <div class="item-do__desc">Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
          </div>
          <div class="item-do">
              <div class="item-do__icon"><i class="fas fa-flag"></i></div>
              <div class="item-do__title">Management</div>
              <div class="item-do__desc">Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</div>
          </div>
      </div>
      <div class="block-title">
          <span class="grid">Testimonials</span>
      </div>
      <div class="list-endorser">
          <div class="item-endorser">
              <img src="img/testimonial-1.jpg" alt="" class="item-endorser__img">
              <div class="item-endorser__desc">
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.
              </div>
              <div class="item-endorser__author">
                  <div class="item-endorser__name">Julia Hickman</div>
                  <div class="item-endorser__company">Omni Source</div>
                  <div class="icon-quote">
                      <i class="fas fa-quote-right"></i>
                  </div>
              </div>
          </div>
          <div class="item-endorser">
              <img src="img/testimonial-2.jpg" alt="" class="item-endorser__img">
              <div class="item-endorser__desc">
                  Vivamus at molestie dui, eu ornare orci
                  Vivamus at molestie dui, eu ornare orci
                  Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.
              </div>
              <div class="item-endorser__author">
                  <div class="item-endorser__name">Julia Hickman</div>
                  <div class="item-endorser__company">Omni Source</div>
                  <div class="icon-quote">
                      <i class="fas fa-quote-right"></i>
                  </div>
              </div>
          </div>
      </div>
      <div class="block-title">
          <span class="grid">Pricing</span>
      </div>
      <div class="list-price">
          <div class="item-price effect-top">
              <div class="item-price__type">Silver</div>
              <div class="item-price__cost">$64</div>
              <div class="item-price__month">per month</div>
              <a href="" class="item-price__btn">Free Trial</a>
              <div class="item-price__desc">
                  Lorem ipsum dolor
                  Pellentesque scelerisque
                  Morbi eu sagittis
              </div>
          </div>
          <div class="item-price effect-top">
              <div class="item-price__type">Gold</div>
              <div class="item-price__cost">$128</div>
              <div class="item-price__month">per month</div>
              <a href="" class="item-price__btn">Free Trial</a>
              <div class="item-price__desc">
                  Lorem ipsum dolor
                  Pellentesque scelerisque
                  Morbi eu sagittis
                  Pellentesque scelerisque
                  Morbi eu sagittis
              </div>
          </div>
      </div>
      <div class="block-title">
          Fun <span class="text-blue grid">Facts</span>
      </div>
      <div class="list-funfact">
          <div class="item-funfact effect-top">
              <div class="item-funfact__icon"><i class="far fa-heart"></i></div>
              <div class="item-funfact__text">Happy Clients</div>
              <div class="item-funfact__time">578</div>
          </div>
          <div class="item-funfact effect-top">
              <div class="item-funfact__icon"><i class="far fa-clock"></i></div>
              <div class="item-funfact__text">Working Hours</div>
              <div class="item-funfact__time">4,780</div>
          </div>
          <div class="item-funfact effect-top">
              <div class="item-funfact__icon"><i class="far fa-star"></i></div>
              <div class="item-funfact__text">Awards Won</div>
              <div class="item-funfact__time">15</div>
          </div>
      </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      tab: 2
    }
  },
  computed: {
    ...mapGetters({
      actived: 'common/tab'
    })
  }
}
</script>
