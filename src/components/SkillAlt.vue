<template>
  <v-row
    :key="i"
    align="center"
    class="mb-2 mx-0"
  >
    <v-col cols="4">
      <h5
        class="subheading"
        v-text="skill"
      />
    </v-col>
    <v-col cols="8">
      <v-rating
        length="6"
        dense
        empty-icon="mdi-record"
        full-icon="mdi-record"
        :value="rating"
        background-color="grey darken-4"
        readonly
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: ['rating', 'skill'],
  }
</script>
