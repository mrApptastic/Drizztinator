<template>
  <div id="app" class="container">
    <MainHeader />
    <MainView msg="Every Body Say Drizzzzzzt!" />
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
