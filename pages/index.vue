<template>
  <section class="container">
    <div class="contents">
      <sample :items="firstItems" title="first store"/>
      <sample :items="secondItems" title="second store"/>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Sample from '~/components/VuexFireSample'

export default {
  components: {
    Sample
  },
  computed: {
    ...mapGetters({
      firstItems: 'first/items',
      secondItems: 'second/items'
    })
  },
  created () {
    this.fistInit()
    this.secondInit()
  },
  methods: {
    ...mapActions({
      fistInit: 'first/init',
      secondInit: 'second/init'
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contents {
  display: flex;
  flex-direction: row;
}
</style>

