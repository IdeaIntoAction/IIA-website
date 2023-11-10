<template>
  <div class="flex bg-black/[.75] z-10 w-full h-full fixed flex-col items-center top-0  left-0 justify-center">
    <div class=" relative flex flex-col items-center bg-white rounded-lg justify-center p-7">
      <button @click="this.$emit('file-uploaded-successfully')"
              class="w-10 rounded-lg bg-slate-400 h-10 absolute top-0 right-0">Back</button>
      <label
          for="dropzone-file"
          @drop.prevent="handleDrop"
          @dragover.prevent="handleDragOver"
          @change="addFile"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
          >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"
          ><span class="font-semibold">Click to upload</span> or drag and drop</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">.JS or .CJS</p>
        </div>
        <input id="dropzone-file"
               type="file"
               class="hidden"
               accept=".js, .cjs" />
      </label>
      <button
          type="button"
          :disabled="!fileCheck"
          @click="handleUpload"
          :class="{ 'pointer-events-none': !fileCheck, 'opacity-60': !fileCheck, }"
          class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Send File : {{ selectedFile ? selectedFile.name : 'No file selected' }}
      </button>
      <div class="text-rose-600">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { upLoadFile } from '../services/api'

export default {
  data () {
    return {
      error: '',
      isDragging: false,
      selectedFile: null,
      fileCheck: false
    }
  },
  methods: {
    async handleUpload () {
      try {
        await upLoadFile(this.selectedFile)
        this.completePushFile()
        this.isVisible = false
        this.$emit('file-uploaded-successfully')
      } catch (error) {
        this.error = error
        setTimeout(() => {
          this.error = ''
        }, 3000)
        this.completePushFile()
      }
    },
    completePushFile () {
      this.selectedFile = null
      this.fileCheck = !this.fileCheck
    },
    handleDragOver () {
      this.isDragging = true
    },
    handleDragLeave () {
      this.isDragging = false
    },
    handleDrop (event) {
      event.preventDefault()
      this.isDragging = false
      this.handleFile(event.dataTransfer.files[0])
    },
    addFile (event) {
      event.preventDefault()
      this.handleFile(event.target.files[0])
    },
    handleFile (file) {
      if (file instanceof File && (file.name.endsWith('.js') || file.name.endsWith('.cjs'))) {
        this.selectedFile = file
        this.fileCheck = true
      } else {
        this.error = 'Invalid file format. Please upload a .js or .cjs file.'
        setTimeout(() => {
          this.error = ''
        }, 3000)
      }
    }
  }
}
</script>

<style>
.w {
  background: rgba(0, 0, 0, 0.5); /* Затемнение с эффектом opacity */
  z-index: 1;
}
</style>
