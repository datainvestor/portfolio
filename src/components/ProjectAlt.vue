<template>
  <v-sheet class="py-md-5" height="100%" color="transparent">
    <div class="text-center mb-5">
      <core-subheading class="mb-1" v-text="`Data Analysis Projects`" />
      <span class="subheading black--text" v-text="`Various analyses & visualizations`" />
    </div>
    <v-row>
      <v-col cols="auto">
        <div class="mb-3" style="max-width: 500px;">
          <core-subheading class="mb-3">Project Details</core-subheading>
          <core-text>
            My portfolio also consists of several data analysis projects, that I have done to hone my data visualization skills. I analyzed data from Kaggle and created heavily customized visuals using Python. Notebook containing those analyses are available to see on my
            <v-btn href="https://github.com/datainvestor" icon>
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>Github profile.
          </core-text>
        </div>
      </v-col>
      <v-col>
        <!-- <v-img
          :src="require(`@/assets/projects/${value.src}`)"
          height="350"
          width="500"
          contain
          class="mx-auto"
        />-->
        <div :class="{'fadeinsmall': $vuetify.breakpoint.smAndDown, 'fadein': $vuetify.breakpoint.mdAndUp}">
          <img
            id="f3"
            style="object-fit:contain;"
            src="../assets/projects/f1.png"
            class="mx-auto"
            :class="{'sizesmall': $vuetify.breakpoint.smAndDown, 'size': $vuetify.breakpoint.mdAndUp}"
          />
          <img
            id="f2"
            style="object-fit:contain;"
            src="../assets/projects/f2.png"
            class="mx-auto"
            :class="{'sizesmall': $vuetify.breakpoint.smAndDown, 'size': $vuetify.breakpoint.mdAndUp}"
          />
          <img
            id="f1"
            style="object-fit:contain;"
            src="../assets/projects/f3.png"
            class="mx-auto"
            :class="{'sizesmall': $vuetify.breakpoint.smAndDown, 'size': $vuetify.breakpoint.mdAndUp}"
          />
          <!-- <img src="../assets/projects/biere.jpg" />
          <img src="../assets/projects/portalml.png" />
          <img src="../assets/projects//portalml.png" />-->
        </div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        name: "",
        category: "",
        src: undefined
      })
    }
  }
};
</script>

<style scoped>


.fadeinsmall {
    position: absolute;
    left: 25%;
    margin: auto 0;
    top:40%;
  }

.fadeinsmall img {
  position: absolute;
  left: -150px;
  top: 75px;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 9s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-duration: 9s;
}

.fadein {
  position: absolute;
  left: 50%;
  margin: auto 0;
}
.fadein img {
  position: absolute;
  left: -65px;
  top: 0;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: 9s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-duration: 9s;
}

@-webkit-keyframes fade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  33% {
    opacity: 1;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.size {
  height:350px;
  width:500px;
}
.sizesmall {
  height:250px;
  width:500px;
}

#f1 {
}
#f2 {
  -webkit-animation-delay: -6s;
}
#f3 {
  -webkit-animation-delay: -3s;
}
</style>
