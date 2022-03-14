<template>
  <div id="calendar">
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
  </div>
</template>

<script>
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '@/plugins/firebase'

export default {
  name: 'Calendar',
  created () {
    this.getIdolList()
  },
  components: {
    PopoverRow
  },
  data () {
    return {
      idol: [],
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
    },
    async getIdolList () {
      const list = []
      const querySnapshot = await getDocs(collection(firestore, process.env.VUE_APP_FIRESTORE_COLLECTION))
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data()
        })
      })
      this.idol = list
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar_wrap {
  padding: 40px 20px;
}
.action_wrap {
  padding: 0 20px;

  .btn {
    // background-color: #fff;
    font-weight: bolder;
    &.이경근 { color: hotpink; }
    &.이환웅 { color: blue; }
  }
}
</style>
