<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { getParserId } from '../services/api';

export default {
  data() {
    return {
      parserId: null,
      parserData: null,
      mockData: {
        site: "https://localhost:3000",
        title: "parser Music",
        code: `def parse(url = URL_TEMPLATE):
            result_list = {'href': [], 'title': [], 'about': []}
            r = requests.get(url)
            soup = bs(r.text, "html.parser")
            vacancies_names = soup.find_all('h2', class_='add-bottom-sm')
            vacancies_info = soup.find_all('p', class_='overflow')
            for name in vacancies_names:
                result_list['href'].append('https://www.work.ua' + name.a['href'])
                result_list['title'].append(name.a['title'])
            for info in vacancies_info:
                result_list['about'].append(info.text)
            return result_list`,
        startParser: "03-10-2023: 15:00 mp",
        endParser: "03-10-2023: 15:00 mp",
        status: true,
      },
      mockDataSecond: {
        error: "404",
        region: "Ukraine", 
        address: "Shirone Street 79",
        timeStart: "02-10-2023: 15:00pm",
        timeEnd: "02-10-2023: 19:00pm",
        author: "no name",
        company: "IT",
        phone: "0631415352",
        email: "test@gmail.com",
      }
    };
  },
  mounted() {
    this.parserId = this.$route.params.id;
    getParserId(this.parserId)
      .then(response => {
        this.parserData = response.data;
      })
      .catch(error => {
        catchError.call(this, error);
      });
    Prism.highlightAll();
  },
};
</script>

<template>
  <div>
    <div center bg-current>
     <pre>
       <code class="language-js w-2/3 m-auto block">
        {{ mockData.code }}
       </code>
     </pre>
   </div>
   <div center bg-current>
     <pre class="w-1/3 block" >
       <code class="language-js">
        {{ mockDataSecond }}
       </code>
     </pre>
   </div>

  </div>
</template>

<style scoped lang="scss">
</style>