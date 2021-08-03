<template>
  <v-tooltip bottom nudge-top="20">
    <template v-slot:activator="{ on, attrs }">
      <v-row :key="i" align="center" class="mb-2 mx-0" v-bind="attrs" v-on="on">
        <v-col cols="4">
          <h5 class="subheading" v-text="skill" />
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
    <span> {{objectVars[rating]}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["rating", "skill"],
  data: () => ({
    objectVars: {
      1: "lol1",
      2: "lol3",
      3: "lol3",
      4: "lol5",
      5: "lol6",
      6: "Used it extensively in production",
    },
  }),
};
</script>
