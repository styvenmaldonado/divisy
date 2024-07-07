<template>
  <side-bar> </side-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src
export default defineComponent({
  name: "Blog",
  components: {
    SideBar,
  },
});
</script>
