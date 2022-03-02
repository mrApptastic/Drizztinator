<template>
  <tr :class="{ 'table-danger': !link }">
    <td>
      {{character.Name}}
    </td>
    <td>
      {{character.Race.Name}} {{character.Class.Name}}
    </td>
    <td>
      <a v-if="link" class="btn btn-danger" v-bind:href="link" target="_blank">Download</a>
    </td>
  </tr>
</template>

<script>
import * as characterSheet from '../functions/characterSheetGenerator.js';

export default {
  name: 'Character',
  props: {
    character: Object
  },
    data: function () {
    return {
      link: null
    };
  },
  mounted: function () {

    const ib = JSON.parse(JSON.stringify(this.character));
    characterSheet.downloadCharacter(ib).then(x => {
      this.link = x;
    }, e => {
      console.log(e);
    });      
  }
};

</script>

<style scoped>

</style>
