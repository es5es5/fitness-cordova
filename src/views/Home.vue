<template>
  <div class="home">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptionh">
      <swiper-slide>
        <div class="calendar_wrap">
          <v-calendar
            disable-page-swipe
            is-expanded
            :rows="2"
            :attributes='attributes'
          >
          <template #day-popover="{ day, attributes }">
            <div>
              <div class="text-xs text-gray-300 font-semibold text-center">
                {{ getToDateFormat(day.date, 'YYYY-MM-DD ddd') }}
              </div>
              <popover-row
                v-for="attr in attributes"
                :key="attr.key"
                :attribute="attr">
                {{ attr.customData.description }}
              </popover-row>
            </div>
          </template>
          </v-calendar>
        </div>
        <div class="action_wrap text-left">
          <button type="button" class="btn white 이경근">이경근</button>
          <button type="button" class="btn white 이환웅" style="float: right;">이환웅</button>
        </div>
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
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'

export default {
  name: 'Home',
  components: {
    PopoverRow
  },
  data () {
    return {
      calendar: [
        {
          description: 'Take Noah to basketball practice.',
          isComplete: true,
          dates: new Date(2022, 2, 11),
          color: 'red',
        }, {
          description: 'Take Noah to basketball practice.',
          isComplete: true,
          dates: new Date(2022, 2, 11),
          color: 'blue',
        }, {
          description: 'Take Noah to basketball practice.',
          isComplete: true,
          dates: new Date(2022, 2, 15),
          color: 'blue',
        }, {
          description: 'Take Noah to basketball practice.',
          isComplete: true,
          dates: new Date(2022, 2, 15),
          color: 'blue',
        },
      ],
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
  computed: {
    attributes () {
      return [
        ...this.calendar.map(date => ({
          dates: date.dates,
          format: 'YYYY-MM-DD',
          dot: {
            color: date.color,
            class: date.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: date.description,
            visibility: 'click',
            format: 'YYYY-MM-DD',
          },
          customData: date,
        })),
      ]
    },
  },
  methods: {
    getToDateFormat (value, format) {
      let _format = format
      if (!_format) _format = 'YYYY-MM-DD'
      return moment(value).locale('ko').format(_format)
    }
  }
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

.calendar_wrap {
  padding: 40px;
}
.action_wrap {
  padding: 0 40px;

  .btn {
    // background-color: #fff;
    font-weight: bolder;
    &.이경근 { color: hotpink; }
    &.이환웅 { color: blue; }
  }
}
</style>
