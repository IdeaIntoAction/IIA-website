<script>
import { parserList } from '../services/api';

export default {
  data() {
    return {
      parsers: [],
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
          <th class="text-center w-10 h-10"><input type="checkbox"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center"><input class="h-12 px-1 border border-slate-700 font-normal" type="text"></th>
          <th class="text-center w-10"></th>
          <th class="text-center w-10 h-10"><input type="checkbox"></th>
          <th class="text-center w-10 h-10"><input type="checkbox"></th>
        </tr>
      </thead>
      <tbody v-for="parser in parsers" :key="parser.id" class="mt-4">
        <tr class="text-center h-10">
          <td class="truncate border border-slate-300 px-2"><a href={{parser.site.link}}>{{ parser.site }}</a></td>
          <td class="truncate border border-slate-300 px-2">Load</td>
          <td class="truncate border border-slate-300 px-2">Start</td>
          <td class="truncate border border-slate-300 px-2"><router-link class="text-blue-600" :to="{ name: 'parserInfo', params: { id: parser.id } }">Link</router-link></td>
          <td class="truncate border border-slate-300"><input type="checkbox"></td>
          <td class="truncate border border-slate-300 px-2">Error</td>
          <td class="truncate border border-slate-300 px-2">Comm</td>
          <td class="truncate border border-slate-300 px-2 text-end">Late</td>
          <td class="truncate border border-slate-300"><input type="checkbox"></td>
          <td class="truncate border border-slate-300"><input type="checkbox"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">

</style>
