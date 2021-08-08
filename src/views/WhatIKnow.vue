<template>
  <core-section id="what-i-know">
    <abstract-2 />

    <v-col cols="12">
      <v-row justify="space-between">
        <core-heading cols="auto">What I know.</core-heading>

        <v-col cols="auto">
          <blockquote style="max-width: 250px;">
            <p class="subheading font-weight-light font-italic">
              Go ahead and download my full CV and check my
              <v-btn href="https://github.com/datainvestor" icon>
                <v-icon>mdi-github-circle</v-icon>
              </v-btn>github profile
            </p>
            <footer class="text-center">
              <v-btn color="primary" :href="`${publicPath}cv.docx`" download>download cv</v-btn>
            </footer>
          </blockquote>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row justify="space-around">
        <v-col id="my-education" cols="12" md="3" tag="section">
          <h3 class="headline font-weight-medium mb-4 primary--text">My Education</h3>

          <education-card v-for="(degree, i) in schema.education" :key="i" :value="degree" />
        </v-col>

        <v-col id="my-skills" cols="12" md="4" tag="section">
          <h3 class="headline font-weight-medium mb-4 primary--text">My Skills</h3>

          <h4 class="text-uppercase mb-3 primary--text" v-text="`Web development`" />
          <div class="pr-md-6">
            <skill-alt :rating="5" :skill="`Django`" />
            <skill-alt :rating="4" :skill="`FastApi`" />
            <skill-alt :rating="4" :skill="`Flask`" />
            <skill-alt :rating="2" :skill="`Node.js`" />
            <skill-alt :rating="5" :skill="`Docker`" />
            <skill-alt :rating="5" :skill="`Vue.js`" />
            <skill-alt :rating="2" :skill="`React`" />
            <skill-alt :rating="3" :skill="`Strapi (Headless CMS)`" />
          </div>
          <h4 class="text-uppercase mb-3 primary--text" v-text="`Programming Languages`" />
          <div class="pr-md-6">
            <skill-alt :rating="5" :skill="`Javascript`" />
            <skill-alt :rating="5" :skill="`Python`" />
            <skill-alt :rating="5" :skill="`HTML5/CSS3`" />
            <skill-alt :rating="2" :skill="`R+Shiny`" />
            <skill-alt :rating="1" :skill="`Swift`" />
          </div>

          <h4 class="text-uppercase mb-3 primary--text" v-text="`Other`" />
          <div class="pr-md-6">
            <skill-alt :rating="2" :skill="`Fast.Ai+Keras`" />
            <skill-alt :rating="5" :skill="`PowerBI`" />
            <skill-alt :rating="1" :skill="`ELK Stack`" />
            <skill-alt :rating="5" :skill="`Azure Services(DevOps)`" />
            <skill-alt :rating="2" :skill="`AWS`" />
            <skill-alt :rating="2" :skill="`Circle CI`" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </core-section>
</template>

<script>
// Utilities
import { mapState } from "vuex";

export default {
  name: "WhatIKnow",
  components: {
    Abstract2: () => import("@/components/Abstract2"),
    EducationCard: () => import("@/components/EducationCard"),
    // Skill: () => import('@/components/Skill'),
    SkillAlt: () => import("@/components/SkillAlt")
  },
  data: () => ({ publicPath: process.env.BASE_URL }),
  computed: {
    ...mapState("app", ["schema"])
  }
};
</script>
