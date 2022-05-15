<template>
  <div>
    <div class="mt-2 mb-2 d-flex justify-content-around">
      <button class="btn btn-success" v-on:click="generateNew()">
        Generate Character
      </button>
      <button class="btn btn-warning" v-on:click="clearList()">
        Clear List
      </button>
    </div>
    <div class="table-container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Race/Class</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <Character
            v-for="char in characters"
            :key="char.Id"
            :character="char"
          />
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
  components: {
    Character,
  },
  data: function () {
    return {
      characters: [],
    };
  },
  methods: {
    generateNew: function (number) {
      if (!number) {
        number = 1;
      }

      for (let i = 0; i < number; i++) {
        setTimeout(() => {
          this.characters.unshift(charGen.generateCharacter());
        }, 10);
      }
    },
    clearList: function () {
      setTimeout(() => {
        while (this.characters.length > 0) {
          this.characters.pop();
        }
      }, 0);
    },
  },
  mounted: function () {
    this.generateNew();
  },
};
</script>

<style scoped>
.table-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>
