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
            {{ COMMON.getToDateFormat(day.date, 'YYYY-MM-DD ddd') }}
          </div>
          <popover-row
            v-for="attr in attributes"
            :key="attr.key"
            :attribute="attr">
            {{ attr.customData.name }}
          </popover-row>
        </div>
      </template>
      </v-calendar>
    </div>
    <div class="action_wrap text-left">
      <button type="button" class="btn white 이경근" @click="doStamp('이경근')">이경근</button>
      <button type="button" class="btn white 이환웅" style="float: right;" @click="doStamp('이환웅')">이환웅</button>
    </div>
  </div>
</template>

<script>
import PopoverRow from 'v-calendar/lib/components/popover-row.umd.min'
import { collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { firestore } from '@/plugins/firebase'

export default {
  name: 'Calendar',
  created () {
    this.getCalendarList()
  },
  components: {
    PopoverRow
  },
  data () {
    return {
      calendar: [
        {
          name: 'Take Noah to basketball practice.',
          dates: new Date(2022, 2, 11),
          color: 'red',
        }, {
          name: 'Take Noah to basketball practice.',
          dates: new Date(2022, 2, 11),
          color: 'blue',
        }, {
          name: 'Take Noah to basketball practice.',
          dates: new Date(2022, 2, 15),
          color: 'blue',
        }, {
          name: 'Take Noah to basketball practice.',
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
          dates: new Date(date.dates.seconds * 1000),
          format: 'YYYY-MM-DD',
          dot: {
            color: date.color,
          },
          popover: {
            label: date.name,
            visibility: 'click',
            format: 'YYYY-MM-DD',
          },
          customData: date,
        })),
      ]
    },
  },
  methods: {
    async doStamp (name) {
      if (confirm(`${moment().locale('ko').format('YYYY년 MM월 DD일 HH:mm')}\n${name} 출석`)) {
        await setDoc(doc(firestore, process.env.VUE_APP_FIRESTORE_COLLECTION, this.COMMON.UUID()), {
          name: name,
          dates: new Date(),
          color: name === '이경근' ? 'red' : 'blue',
        })
      }
      this.getCalendarList()
    },
    async getCalendarList () {
      const list = []
      const querySnapshot = await getDocs(collection(firestore, process.env.VUE_APP_FIRESTORE_COLLECTION))
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
          ...doc.data()
        })
      })
      this.calendar = list
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
