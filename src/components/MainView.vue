<template>
  <div>
    <h1>{{ msg }}</h1>
    {{ roll }}
  </div>
</template>

<script>
import * as dice from '../functions/diceHelper.js';
import * as characterSheet from '../functions/characterSheetHelper.js';

export default {
  name: 'MainView',
  props: {
    msg: String,
  },
  data: function () {
    return {
      roll: dice.rollStat(),
    };
  },
  mounted: function () {},
};

characterSheet.downloadCharacter();
</script>

<style scoped></style>
