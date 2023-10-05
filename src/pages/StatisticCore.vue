<script>
import { parserList } from '../services/api';
import { filterItems } from '../services/utility/filterUtils'

export default {
  data() {
    return {
      parsers: [],
      filterConditions: {
        act: false,
        stop: false,
        work: false,
      }
    };
  },
  mounted() {
    parserList()
      .then((response) => {
        this.parsers = response.data.parsers;
      })
      .catch((error) => {
        catchError.call(this, error);
      });
  },
  computed: {
    filteredParsers() {
      return filterItems(this.parsers, this.filterConditions);
    },
  },
};
</script>

<template>
  <div>
    <table class="table-auto m-auto border-separate border-spacing-2 border border-slate-400">
      <caption class="caption-top mb-2 mt-2 text-center font-extrabold">Parser List
      </caption>
      <thead>
        <tr>
          <th class="text-center w-40">Site</th>
          <th class="text-center w-40">Load</th>
          <th class="text-center w-40">Start</th>
          <th class="text-center w-auto">Adm</th>
          <th class="text-center w-10 h-10">Act</th>
          <th class="text-center w-40">Error</th>
          <th class="text-center w-40">comm</th>
          <th class="text-center w-10">Late</th>
          <th class="text-center w-10 h-10">Stop</th>
          <th class="text-center w-10 h-10">Work</th>
        </tr>
        <tr>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center w-auto"></th>
          <th class="text-center w-10 h-10"><input v-model="filterConditions.act" type="checkbox"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center w-10"></th>
          <th class="text-center w-10 h-10"><input v-model="filterConditions.stop" type="checkbox"></th>
          <th class="text-center w-10 h-10"><input v-model="filterConditions.work" type="checkbox"></th>
        </tr>
      </thead>
      <tbody v-for="parser in filteredParsers" :key="parser.id" class="mt-4">
        <tr class="text-center h-10">
          <td class="truncate border border-slate-300 px-2"><a :href="parser.site.link">{{ parser.site }}</a></td>
          <td class="truncate border border-slate-300 px-2">Load</td>
          <td class="truncate border border-slate-300 px-2">Start</td>
          <td class="truncate border border-slate-300 px-2">
            <router-link class="text-blue-600" :to="{ name: 'parserInfo', params: { id: parser.id } }">Link</router-link>
          </td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.act" type="checkbox">
          </td>
          <td class="truncate border border-slate-300 px-2">Error</td>
          <td class="truncate border border-slate-300 px-2">Comm</td>
          <td class="truncate border border-slate-300 px-2 text-end">Late</td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.stop" type="checkbox" >
          </td>
          <td class="truncate border border-slate-300">
            <input v-model="parser.work" type="checkbox">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">

</style>
