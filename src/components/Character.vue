<template>
    <a v-if="!!character" v-bind:href="link" target="_blank">{{character.Name}}</a>
</template>

<script>
import * as characterGenerator from '../functions/characterGenerator.js';
import * as characterSheet from '../functions/characterSheetHelper.js';

export default {
  name: 'Character',
  data: function () {
    return {
      character: characterGenerator.generateCharacter(),
      link: null
    };
  },
  mounted: function () {
      this.link = characterSheet.downloadCharacter(this.character);      
  }
};

// characterSheet.downloadCharacter();
</script>

<style scoped>

</style>
