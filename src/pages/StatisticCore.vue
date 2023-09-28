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
        console.log(this.parsers);
      })
      .catch((error) => {
        catchError.call(this, error);
      });
  },
};
</script>

<template>
  <div>
    <h1 class="mb-2 mt-2 text-center font-extrabold">Parser List</h1>
    <table class="table-fixed m-auto parser">
      <thead>
        <tr>
          <th>Name Site</th>
          <th>Time update</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody v-for="parser in parsers" :key="parser.id" class="mt-4">
        <tr class="bg-violet-100 hover:bg-violet-200 focus:outline-none focus:ring focus:ring-violet-300 cursor-pointer">
          <td class="border border-slate-300 truncate w-1/2 py-2 px-2">{{ parser.site }}</td>
          <td class="border border-slate-300 truncate w-1/4 py-2 px-2">Time Update</td>
          <td class="border border-slate-300 truncate w-1/4 py-2 px-2">Status</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.parser {
  width: 40rem;
}
</style>
