<template>
  <div>
    <label
      class="label-input"
      for="add-file"
    ><img
       class="right img"
       src="../../assets/icons/file.svg"
       alt="add-file-icon"
     >
      <input
        @change="addFile"
        id="add-file"
        class="get-file-input"
        type="file"
      >

      <img
        class="left img"
        src="../../assets/icons/plus-small.svg"
        alt="plus"
      >
    </label>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    async addFile(event) {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);

      try {
        const response = await axios.post('http://localhost:8080/api/uploader/', formData);
        const imageUrl = response.data.link;
        this.$emit('imageUploaded', imageUrl);
      } catch (error) {
        // console.error(error);
      }
    }
  }
};
</script>
<style lang="scss">
.label-input {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-self: center;
    top: 0;
    width: 100%;
    .img {
        position: absolute;
        width: 4.5rem;
    }
}
.get-file-input {
    color: transparent;
    margin-top: 2rem;
    width: 100%;
    border-radius: 0.7rem;
    height: 7rem;
}
input[type="file"]::file-selector-button {
  display: none;
}
.right, .left {
    top: 3.3rem;
}
.left {
    right: 2rem;
}
.right {
    left: 2rem;
}
</style>
