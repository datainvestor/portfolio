<template>
  <v-tooltip bottom nudge-top="20">
    <template v-slot:activator="{ on, attrs }">
      <v-row :key="i" align="center" class="mb-2 mx-0" v-bind="attrs" v-on="on">
        <v-col cols="4">
          <h5 class="subheading" v-text="skill" />
        </v-col>
        <v-col cols="8">
          <v-rating
            length="5"
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
    <span> {{ objectVars[rating] }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["rating", "skill"],
  data: () => ({
    objectVars: {
      1: "Read about it, used it once, looking forward to learn about it in future",
      2: "Used in small personal project, liked it",
      3: "Used in bigger personal project extensively, loved it",
      4: "Helped create commercial app using it",
      5: "Worked as lead developer using it in commercial project",
    },
  }),
};
</script>
