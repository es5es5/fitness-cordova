<template>
  <div id="calendar">
    <div class="calendar_wrap">
      <v-calendar
        disable-page-swipe
        is-expanded
        :rows="2"
        :attributes="attributes"
      >
      <template #day-popover="{ day, attributes }">
        <div>
          <div class="text-xs text-gray-300 font-semibold text-center">
            {{ COMMON.getToDateFormat(day.date, 'YYYY-MM-DD ddd') }}
          </div>
          <popover-row
            v-for="attr in attributes"
            :key="attr.customData.id"
            :attribute="attr">
            <span>
              {{ attr.customData.name }}
            </span>
            <span class="delete" @click.prevent="doDelete(attr.customData.id)">✖️</span>
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
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
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
      ],
    }
  },
  computed: {
    attributes () {
      return [
        ...this.calendar.map(date => ({
          id: date.id,
          dates: date.dates,
          dot: {
            color: date.color,
          },
          popover: {
            visibility: 'click',
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
          dates: moment().format('YYYY-MM-DD'),
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
    },
    async doDelete (id) {
      console.log(id)
      if (confirm('삭제하시겠습니까?')) {
        await deleteDoc(doc(firestore, process.env.VUE_APP_FIRESTORE_COLLECTION, id))
      }
      this.getCalendarList()
    },
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

.delete {
  padding: 2px 4px;
}
</style>
