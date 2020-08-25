<template>
  <core-section id="what-ive-done">
    <abstract-3 />

    <core-heading>What I've done</core-heading>

    <v-col cols="12">
      <v-carousel
        :cycle="false"
        :height="650"
        :show-arrows="false"
        class="elevation-0"
        hide-delimiter-background
        light
      >
        <v-carousel-item
          v-for="(project, i) in projects"
          :key="i"
        >
          <project :value="project" />
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </core-section>
</template>

<script>
  export default {
    name: 'WhatIveDone',

    components: {
      Abstract3: () => import('@/components/Abstract3'),
      Project: () => import('@/components/Project'),
    },

    data: () => ({
      projects: [
        {
          name: 'Classic Cafe Rebrand',
          category: 'Logo Design',
          src: 'classic-cafe.png',
        },
        {
          name: 'Flagship',
          category: 'Digital Design',
          src: 'flagship.jpg',
        },
        {
          name: 'Biere Craft Beer',
          category: 'Marketing and Graphic Design',
          src: 'biere.jpg',
        },
      ],
    }),
  }
</script>
