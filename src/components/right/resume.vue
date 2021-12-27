<template>
<section class="resume wrap" v-show="tab == actived">
      <div class="title">Resume</div>
      <div class="resume-content">
        <div class="resume-content-left">
          <div class="block-title">
            <span class="grid">Education</span>
          </div>
          <div class="list-timestamp">
            <div class="item-timestamp">
              <div class="item-timestamp__left">
                <div class="item-timestamp__left-year">2008</div>
                <div class="item-timestamp__left-uni">
                  University of Studies
                </div>
              </div>
              <div class="item-timestamp__mid"></div>
              <div class="item-timestamp__right">
                <div class="item-timestamp__right-position">
                  Frontend Development
                </div>
                <div class="item-timestamp__right-desc">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt
                  est ac dolor aliquam sodales. Phasellus sed mauris
                  hendrerit, laoreet sem in, lobortis ante.
                </div>
              </div>
            </div>
            <div class="item-timestamp">
              <div class="item-timestamp__left">
                <div class="item-timestamp__left-year">2008</div>
                <div class="item-timestamp__left-uni">
                  University of Studies
                </div>
              </div>
              <div class="item-timestamp__mid"></div>
              <div class="item-timestamp__right">
                <div class="item-timestamp__right-position">
                  Frontend Development
                </div>
                <div class="item-timestamp__right-desc">
                  Maecenas finibus nec sem ut imperdiet. Ut tincidunt
                  est ac dolor aliquam sodales. Phasellus sed mauris
                  hendrerit, laoreet sem in, lobortis ante.
                </div>
              </div>
            </div>
          </div>
          <div class="block-title">
            <span class="grid">Experience</span>
          </div>
          <div class="list-timestamp">
            <div class="item-timestamp">
              <div class="item-timestamp__left">
                <div class="item-timestamp__left-year">
                  2016 - Current
                </div>
                <div class="item-timestamp__left-uni">Google</div>
              </div>
              <div class="item-timestamp__mid"></div>
              <div class="item-timestamp__right">
                <div class="item-timestamp__right-position">
                  Lead Ui/Ux Designer
                </div>
                <div class="item-timestamp__right-desc">
                  Praesent dignissim sollicitudin justo, sed elementum
                  quam lacinia quis. Phasellus eleifend tristique
                  posuere. Sed vitae dui nec magna.
                </div>
              </div>
            </div>
            <div class="item-timestamp">
              <div class="item-timestamp__left">
                <div class="item-timestamp__left-year">2013 - 2016</div>
                <div class="item-timestamp__left-uni">Adobe</div>
              </div>
              <div class="item-timestamp__mid"></div>
              <div class="item-timestamp__right">
                <div class="item-timestamp__right-position">
                  Senior Ui/Ux Designer
                </div>
                <div class="item-timestamp__right-desc">
                  Maecenas tempus faucibus rutrum. Duis eu aliquam urna.
                  Proin vitae nulla tristique, ornare felis id, congue
                  libero. Nam volutpat euismod quam.
                </div>
              </div>
            </div>
            <div class="item-timestamp">
              <div class="item-timestamp__left">
                <div class="item-timestamp__left-year">2011 - 2013</div>
                <div class="item-timestamp__left-uni">Google</div>
              </div>
              <div class="item-timestamp__mid"></div>
              <div class="item-timestamp__right">
                <div class="item-timestamp__right-position">
                  Junior Ui/Ux Designer
                </div>
                <div class="item-timestamp__right-desc">
                  Duis mollis nunc quis quam viverra venenatis. Nulla
                  nulla arcu, congue vitae nunc ac, sodales ultricies
                  diam. Nullam justo leo, tincidunt sit amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resume-content-right">
          <div class="block-title">
            <span class="grid"
              >Design
              <span class="text-blue">Skills</span>
            </span>
          </div>
          <div class="list-skill">
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Web Dessign</div>
                <div class="item-skill-percen">95%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-1"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Print Design</div>
                <div class="item-skill-percen">65%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-2"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Logo Design</div>
                <div class="item-skill-percen">80%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-3"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Graphic Design</div>
                <div class="item-skill-percen">90%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-4"></div>
              </div>
            </div>
          </div>
          <div class="block-title">
            <span class="grid"
              >Coding
              <span class="text-blue">Skills</span>
            </span>
          </div>
          <div class="list-skill">
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">JavaScript</div>
                <div class="item-skill-percen">95%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-1"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">PHP</div>
                <div class="item-skill-percen">65%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-2"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">HTML/CSS</div>
                <div class="item-skill-percen">80%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-3"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Smarty/Twig</div>
                <div class="item-skill-percen">90%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-4"></div>
              </div>
            </div>
            <div class="item-skill">
              <div class="item-skill-text">
                <div class="item-skill-name">Perl</div>
                <div class="item-skill-percen">90%</div>
              </div>
              <div class="item-skill-block">
                <div class="item-skill-block-percen skill-4"></div>
              </div>
            </div>
          </div>
          <div class="block-title">
            <span class="grid">Knowledges </span>
          </div>
          <div class="list-know">
            <div class="item-know">Marketing</div>
            <div class="item-know">Print</div>
            <div class="item-know">Digital Design</div>
            <div class="item-know">Social Media</div>
            <div class="item-know">Time Management</div>
            <div class="item-know">Communication</div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      tab: 3
    }
  },
  computed: {
    ...mapGetters({
      actived: 'common/tab'
    })
  }
}
</script>
