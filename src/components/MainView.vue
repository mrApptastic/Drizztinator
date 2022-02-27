<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Race/Class</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <Character v-for="char in characters" :key="char.Id" :character="char" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Character from './Character.vue';
import * as charGen from '../functions/characterGenerator.js';

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
      characters : []
    };
  },
  mounted: function () {
    for (let i = 0; i <= 5; i++) {
      setTimeout(() => {
        this.characters.unshift(charGen.generateCharacter());
      }, 10)
    }
  },
  
};

// characterSheet.downloadCharacter();
</script>

<style scoped></style>
