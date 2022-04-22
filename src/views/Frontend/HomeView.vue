<template>
    <form @submit.prevent="submit"
          class="vld-parent"
          ref="formContainer">
    </form>
<div class="home">
    <div id="portfolio">
        <div class="container">
            <div class="container-fluid p-0">
                <div class="row mb-3">
                    <div class="col-lg-12 text-center">
                        <div class="section-title">
                            <h2>今日猴賽雷</h2>
                            <hr class='divider'>
                        </div>
                    </div>
                </div>
                <div class="row g-0">
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-Mzwu-bqEk8hG2hHyeLv">
                            <img class="img-fluid" src="../../assets/image/cute.jpg" alt="回頭一笑猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">最迷人的反叛角色</div>
                                <div class="project-name">回頭一笑猴</div>
                            </div></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-MypjOMWHDFogCai6Tmr">
                            <img class="img-fluid" src="../../assets/image/office.jpg" alt="辦公猴猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">別給我偷懶！！</div>
                                <div class="project-name">辦公猴猴</div>
                            </div></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-N-4LPSyYKzROVS-dDHh">
                            <img class="img-fluid" src="../../assets/image/milk.jpg" alt="早起巡邏猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">今天早餐豆漿真香</div>
                                <div class="project-name">早起巡邏猴</div>
                            </div></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-MzwvYE1UoAcqXReKXlg">
                            <img class="img-fluid" src="../../assets/image/motor.jpg" alt="重機猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">剛誰按我喇叭？</div>
                                <div class="project-name">重機猴</div>
                            </div></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-MypfaQMdvs8Zk98LEld">
                            <img class="img-fluid" src="../../assets/image/model.jpg" alt="背影猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">這橘子，真香阿！</div>
                                <div class="project-name">背影猴</div>
                            </div></router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4 aos-init aos-animate">
                        <div class="portfolio-box"><router-link to="/product/-Mw2JDBgqDU7GsZQLNc3">
                            <img class="img-fluid" src="../../assets/image/grass.jpg" alt="健康美顏猴" width="415" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">粗草囉</div>
                                <div class="project-name">健康美顏猴</div>
                            </div></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mb-3">
                <div class="col-lg-12 text-center">
                    <div class="section-title">
                        <h2>麥猴挖造！</h2>
                        <hr class='divider'>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="skills-text">
                        <h2>我想你需要知道...</h2>
                        <p style="font-size:18px;line-height:2">
                            「進中山大學第一件事，就是學習與猴子和平共處！」 而中山大學是全台獼猴鬧事最頻繁地區，舉凡獼猴搶食拉扯、闖宿舍偷竊、丟石砸人事件不勝枚舉，人猴衝突頻傳， 城市的發展限制、縮小了猴群的生存空間，導致獼猴在校園裡遊走、覓食，除了課程壓力外，更需要時常面對本土「猴居民」的搶劫。
                        </p>
                    </div>
                </div>
                <div class="col-md-6">
                    <!-- skill bar item -->
                    <div class="skillbar-item">
                        <div class="skillbar-score">
                            <span class="score">98</span><span class="percent">%</span>
                        </div>
                        <div class="skillbar" style="color:green" data-percent="98%">
                            <h3>抗猴能力</h3>
                            <div class="skillbar-bar">
                                <div class="skillbar-percent" style="width: 90%;background-color:green">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- skill bar item -->
                    <div class="skillbar-item">
                        <div class="skillbar-score">
                            <span class="score">70</span><span class="percent">%</span>
                        </div>
                        <div class="skillbar" style="color:red" data-percent="70%">
                            <h3>防範意識</h3>
                            <div class="skillbar-bar">
                                <div class="skillbar-percent" style="width: 70%;background-color:red">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- skill bar item -->
                    <div class="skillbar-item">
                        <div class="skillbar-score">
                            <span class="score">65</span><span class="percent">%</span>
                        </div>
                        <div class="skillbar" style="color:#e0b564" data-percent="65%">
                            <h3>裝備屬性</h3>
                            <div class="skillbar-bar">
                                <div class="skillbar-percent" style="width: 65%;background-color:#e0b564;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- skill bar item -->
                    <div class="skillbar-item">
                        <div class="skillbar-score">
                            <span class="score">35</span><span class="percent">%</span>
                        </div>
                        <div class="skillbar" style="color:rgb(93, 110, 133)" data-percent="35%">
                            <h3>學習能力</h3>
                            <div class="skillbar-bar">
                                <div class="skillbar-percent" style="width: 35%;background-color:rgb(93, 110, 133);">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-cover py-5 d-flex align-items-center" style='background-image: url("https://blogger.googleusercontent.com/img/a/AVvXsEixZEe0QOocUhc4dtxve2KsYDewawMfTDd_6GRwLFOK26LYBdtljYiXxu0UBXWLKmsgpRQh6hUH_4NxS_TeNmW4qBpBZKAZgBGDO61N3gm5WPmPDXxCVjbQQBPgEKFzmA_tXqiwC6IaAoVd7O2vZopdEBzcmMccN0UHvMh3amafKBZQLYrPENcwChXD");background-repeat: no-repeat;'>
        <div class="container">
            <div class="row">
                <div class="col-12 e-paper text-light">
                    <h3>訂閱猴樂園電子報</h3>
                    <h5>接收第一手猴消息</h5>
                </div>
                <div class="col-12 col-sm-6">
                    <form novalidate="" class="input-group"><input id="email" type="email" class="form-control" placeholder="請輸入 Email" name="email"><button class="btn add-btn btn-third text-white px-4 m-0 rounded-end" @click.prevent='sendCoupon()'>訂閱</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'HomeView',
  methods: {
    sendCoupon () {
      const data = {
        code: 'testcode'
      }
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`,
          data
        )
        .then((res) => {
          alert(res)
        }).catch((err) => {
          alert(err)
        })
    },
    submit () {
      const loader = this.$loading.show()
      setTimeout(() => {
        loader.hide()
      }, 1000)
    }
  },
  mounted () {
    this.submit()
  }
}
</script>
