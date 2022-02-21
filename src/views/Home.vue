<template>
  <div class="home">
    <swiper class="swiper">
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
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.barcode_wrap {
  position: relative;
}
.barcode {
  width: 100%;
  height: 100vh;
}
.name1 {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  font-weight: bold;
}
.name2 {
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 20px;
  font-weight: bold;
}
.name3 {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 20px;
  font-weight: bold;
}
.name4 {
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 20px;
  font-weight: bold;
}
</style>
