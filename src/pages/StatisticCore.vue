<script>
import { parserList } from '../services/api'
import { filterItems, filterText } from '../services/utility/filterUtils'
import addParser from '../component/addFileCard.vue'

export default {
  components: {
    addParser
  },
  data () {
    return {
      parsers: [],
      filterTextContent: {
        site: '',
        start: '',
        load: '',
        error: '',
        comm: ''
      },
      filterConditions: {
        act: false,
        stop: false,
        work: false
      },
      parsersCount: '',
      addFile: true

    }
  },
  computed: {
    filteredParsers () {
      const filteredByItems = filterItems(this.parsers, this.filterConditions)
      const filteredByText = filterText(filteredByItems, this.filterTextContent)
      return filteredByText
    }
  },
  mounted () {
    parserList()
      .then(response => {
        this.parsers = response
        this.parsersCount = this.parsers.length
      })
      .catch(error => {
        console.log(this, error)
      })
  },
  methods: {
    handleFileUploadSuccess () {
      this.addParser()
    },
    addParser () {
      this.addFile = !this.addFile
    }
  }
}
</script>

<template>
  <div class="w-max m-auto">
    <addParser
        @file-uploaded-successfully="handleFileUploadSuccess"
        :class="{hidden : addFile}"/>
    <div class="py-3 flex justify-between">
      <div>Parser List: You have <span class="font-bold">{{ parsersCount }}</span> parsers</div>
      <button @click="addParser"
              class="p-1 px-2 border-0 hover:bg-blue-900 bg-blue-600 rounded-lg text-white">Add parser</button>
    </div>
    <table class="w-[1280px] border-collapse border border-slate-400 m-auto">
      <thead>
        <tr>
          <th class="text-center w-40">Site</th>
          <th class="text-center w-40">Load</th>
          <th class="text-center w-40">Start</th>
          <th class="text-center w-12 h-10">Adm</th>
          <th class="text-center w-12 h-10">Act</th>
          <th class="text-center w-40">Error</th>
          <th class="text-center w-40">Сomm</th>
          <th class="text-center w-12 h-10 px-1">Late</th>
          <th class="text-center w-12 h-10 px-1">Stop</th>
          <th class="text-center w-12 h-10 px-1">Work</th>
        </tr>
        <tr>
          <th class=" text-center border border-slate-300">
            <input class="w-full h-12 px-1 font-normal"
                   type="text"
                   v-model="filterTextContent.site" />
          </th>
          <th class="text-center border border-slate-300">
            <input class="w-full h-12 px-1 font-normal"
                   type="text"
                   v-model="filterTextContent.load"/>
          </th>
          <th class="text-center border border-slate-300">
            <input class="w-full h-12 px-1 font-normal"
                   type="text"
                   v-model="filterTextContent.start"/>
          </th>
          <th class="text-center w-10 h-10 border border-slate-300" />
          <th class="text-center w-10 h-10 border border-slate-300">
            <input v-model="filterConditions.act"
                   type="checkbox" />
          </th>
          <th class="text-center border border-slate-300">
            <input class="w-full h-12 px-1 font-normal"
                   type="text"
                   v-model="filterTextContent.error"/>
          </th>
          <th class="text-center border border-slate-300">
            <input class="w-full h-12 px-1 font-normal"
                   type="text"
                   v-model="filterTextContent.comm"/>
          </th>
          <th class="text-center w-10 border border-slate-300"/>
          <th class="text-center w-10 h-10 border border-slate-300">
            <input v-model="filterConditions.stop"
                   type="checkbox" />
          </th>
          <th class="text-center w-10 h-10 border border-slate-300">
            <input v-model="filterConditions.work"
                   type="checkbox" />
          </th>
        </tr>
      </thead>
      <tbody v-for="parser in filteredParsers"
             :key="parser.id"
             class="mt-4">
        <tr class="text-center h-10">
          <td class="truncate border border-slate-300 px-2">
            <a :href="parser.site.link">{{ parser.site }}</a>
          </td>
          <td class="truncate border border-slate-300 px-2">
            {{ parser.start }}
          </td>
          <td class="truncate border border-slate-300 px-2">
            {{ parser.load }}
          </td>
          <td class="truncate border border-slate-300 px-2">
            <router-link class="text-blue-600"
                         :to="{ name: 'parserInfo', params: { id: parser.id } }">
              Link
            </router-link>
          </td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.act"
                   type="checkbox" />
          </td>
          <td class="truncate border border-slate-300 px-2">
            {{ parser.error }}
          </td>
          <td class="truncate border border-slate-300 px-2">
            {{ parser.comm }}
          </td>
          <td class="truncate border border-slate-300 px-2">
            {{ parser.late }}
          </td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.stop"
                   type="checkbox" />
          </td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.work"
                   type="checkbox" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.hohoho {
  position: fixed;
  margin: 0 auto;
}
</style>
