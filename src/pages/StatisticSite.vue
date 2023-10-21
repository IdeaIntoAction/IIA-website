<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { getParserId } from '../services/api'
import { parserInfo } from '../mock/mockParserInfo'

export default {
  data () {
    return {
      parserInfo 
    }
  },
  mounted () {
    this.parserId = this.$route.params.id 
    getParserId(this.parserId) 
      .then(response => { 
        this.parserData = response.data 
      })
      .catch(error => {
        console.log(this, error) 
      })
    Prism.highlightAll()
  }
}
</script>

<template>
  <div>
    <div class="center bg-current">
      <pre>
       <code class="language-js w-2/3 m-auto block">
        {{ parserInfo.mockData.code }}
       </code>
     </pre>
    </div>
    <div class="center bg-current">
      <pre class="w-1/3 block">
       <code class="language-js">
        {{ parserInfo.mockDataSecond }}
       </code>
     </pre>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
