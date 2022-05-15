<template>
  <div id="app" class="container">
    <MainHeader heading="Everybody say Drizzzzzzt!" />
    <MainView />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainView from './components/MainView.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainView,
  },
};
</script>

<style></style>
