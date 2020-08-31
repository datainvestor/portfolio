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
          <v-carousel-item>
          <project-alt></project-alt>
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
      ProjectAlt: () => import('@/components/ProjectAlt')
    },

    data: () => ({
      projects: [
        {
          name: 'Stock In Da Pocket',
          category: 'Dashboard for stock market data',
          src: 'stockindapocket.png',
          desc: 'Created web app that scrapes stock market data from few different sources for certain stock as a personal project that helps me gather all the data into one place. It then displays the data in a form of neat, organized dashboard.'
        },
        {
          name: 'Portal ML',
          category: 'ML/DL algos showcase and playground',
          src: 'portalml.png',
          desc: 'This web app was created to interactively showacase various ML/DL algos like Linear Regression, XGBoost, RNN etc. It allows user to see what results different algorithms produce when applied on certain data. This was done as a personal project to see how different ML/DL algortihms can be deployed in practice.'
        },
      ],
    }),
  }
</script>
