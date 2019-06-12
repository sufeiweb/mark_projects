<template>
  <div id="app">
    <SaasNavbar/>
    <div class="app_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SaasNavbar from "./components/SaasNavbar";
export default {
  name: "App",
  components: {
    SaasNavbar
  }
};
</script>

<style>
#app {
  height: 100%;
  display: flex;
}
html,
body {
  height: 100%;
}
.app_content {
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
a,
img {
  display: block;
}
a {
  text-decoration: none;
  color: #01aaef;
}
* {
  margin: 0;
  padding: 0;
}
.layout {
  height: 100%;
  overflow: auto;
}
</style>
