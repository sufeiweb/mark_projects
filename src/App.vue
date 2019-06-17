<template>
  <div id="app">
    <SaasNavbar/>
    <div class="app_content">
      <div class="app_content_header"></div>
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
  overflow-y: auto;
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
  height: calc(100% - 60px);
  padding: 20px;
  overflow: auto;
  box-sizing: border-box;
}
.app_content_header {
  height: 60px;
  box-shadow: 0 0 8px rgb(84, 92, 100);
}
</style>
