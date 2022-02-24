<template>
    <a v-if="!!character" v-bind:href="link" target="_blank">{{character.Name}}</a>
</template>

<script>
import * as characterGenerator from '../functions/characterGenerator.js';
import * as characterSheet from '../functions/characterSheetHelper.js';

export default {
  name: 'Character',
  // props: {
  //   character
  // },
  data: function () {
    return {
      character: characterGenerator.generateCharacter(),
      link: null
    };
  },
  mounted: function () {
    characterSheet.downloadCharacter(this.character).then(x => {
      this.link = x;
    }, e => {
      console.log(e);
    });      
  }
};

// characterSheet.downloadCharacter();
</script>

<style scoped>

</style>
