<template>
  <div>
    <h1>{{ msg }}</h1>
    {{ roll }}
    <Character />
  </div>
</template>

<script>
import Character from './Character.vue';
import * as dice from '../functions/diceHelper.js';
import * as characterSheet from '../functions/characterSheetHelper.js';

export default {
  name: 'MainView',
  props: {
    msg: String,
  },
  components: {
    Character    
  },
  data: function () {
    return {
      roll: dice.rollStat(),
    };
  },
  mounted: function () {},
  
};

// characterSheet.downloadCharacter();
</script>

<style scoped></style>
