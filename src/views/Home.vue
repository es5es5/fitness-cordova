<template>
  <div class="home">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptionh">
      <swiper-slide>
        <Calendar />
      </swiper-slide>
      <swiper-slide>
        <div class="barcode_wrap">
          <img src="@/assets/images/이경근.png" alt="이경근" class="barcode">
          <span class="name1">이경근</span>
          <span class="name2">이경근</span>
          <span class="name3">이경근</span>
          <span class="name4">이경근</span>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="barcode_wrap">
          <img src="@/assets/images/이환웅.png" alt="이환웅" class="barcode">
          <span class="name1">이환웅</span>
          <span class="name2">이환웅</span>
          <span class="name3">이환웅</span>
          <span class="name4">이환웅</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Calendar from '../components/Calendar.vue'

export default {
  name: 'Home',
  components: {
    Calendar
  },
  data () {
    return {
      swiperOptionh: {
        slidesPerView: 1,
        // loop: true
      },
      swiperOptionv: {
        slidesPerView: 1,
        direction: 'vertical',
        loop: true
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.barcode_wrap {
  position: relative;
}

.barcode {
  width: 100%;
  height: 100vh;
  vertical-align: bottom;
}

.name1 {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 20px;
  font-weight: bold;
}

.name2 {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 20px;
  font-weight: bold;
}

.name3 {
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 20px;
  font-weight: bold;
}

.name4 {
  position: absolute;
  bottom: 12px;
  left: 12px;
  font-size: 20px;
  font-weight: bold;
}

</style>
