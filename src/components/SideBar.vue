<template>
  <div>
    <div class="sidebar-container">
      <div
        @mouseover="show = true"
        @mouseleave="show = false"
        :class="sidebarClassess"
      >
        <div class="col">
          <div>
            <RouterLink class="cart-button" to="/">
              <div>
                <div style="display: flex; margin: auto">
                  <div :style="!show && 'padding-left: 1rem'">
                    <v-icon>mdi-cart-outline</v-icon>
                  </div>
                  <span :class="nameRouteClassess">Buy Crypto</span>
                </div>
              </div>
            </RouterLink>
          </div>
          <div>
            <RouterLink :class="route == '/' ? 'active' : 'no-active'" to="/">
              <div>
                <v-icon>mdi-home-outline</v-icon>
                <span :class="nameRouteClassess">Home</span>
              </div>
            </RouterLink>
          </div>
          <div
            style="
              margin-top: 1rem;
              border-top: solid 1px #c9cccf;
              margin-left: 2rem;
              margin-right: 2rem;
            "
          ></div>
          <div v-for="(r, index) in routes" :key="index">
            <RouterLink
              :class="route == r.route ? 'active' : 'no-active'"
              :to="r.route"
            >
              <div>
                <span>
                  <div>
                    <v-icon>{{ r.icon }}</v-icon>
                  </div>
                </span>
                <span :class="nameRouteClassess">{{ r.name }}</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "side-bar",
  watch: {
    show(i) {
      if (i) {
        this.sidebarClassess = ["sidebar", "sidebar-animation"];
        this.nameRouteClassess = ["name-route-animation", "name-route"];
      }
      if (!i) {
        this.sidebarClassess = ["sidebar"];
        this.nameRouteClassess = ["name-route"];
      }
    },
  },
  data: function () {
    return {
      show: false,
      sidebarClassess: ["sidebar"],
      nameRouteClassess: ["name-route"],
      route: this.$route.path,
      routes: [
        {
          name: "Discover Us",
          icon: "mdi-earth",
          route: "/discover-us",
        },
        {
          name: "How it works",
          icon: "mdi-currency-usd",
          route: "/how-it-works",
        },
        {
          name: "Community",
          icon: "mdi-account-multiple-outline",
          route: "/community",
        },
        {
          name: "Blog",
          icon: "mdi-post-outline",
          route: "/blog",
        },
        {
          name: "FAQ",
          icon: "mdi-forum-outline",
          route: "/FAQ",
        },
        {
          name: "Company",
          icon: "mdi-domain",
          route: "/company",
        },
        {
          name: "Contact",
          icon: "mdi-account-box-outline",
          route: "/contact",
        },
      ],
    };
  },
};
</script>
<style>
body,
a {
  color: black;
}

.sidebar-container {
  height: 100vh;
  display: flex;
}
.sidebar {
  align-items: center;
  width: 8rem;
  background-color: #f6f6f7;
  height: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  transition: 0.2s ease-in;
  overflow: hidden;
}
.sidebar-animation {
  width: 20rem;
}
.name-route {
  text-decoration: none;
  padding-left: 1rem;
  opacity: 0;
  transition: 0.2s ease-in;
  width: 0;
  white-space: nowrap;
}
.name-route-animation {
  width: fit-content;
  opacity: 1;
}
.sidebar > .col {
  width: 100%;
  display: grid;
}
.sidebar > .col > a {
  text-decoration: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
}
.no-active:hover {
  color: #0078d4;
}
.sidebar > .col > a > div {
  padding-left: 2rem;
  display: flex;
}
.sidebar > .col > a > div > i,
.sidebar > .col > a > div > img {
  margin: auto;
}
.cart-button {
  display: flex;
  color: #0078d4;
  text-decoration: none;
  margin-bottom: 1rem;
}
.cart-button > div {
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 50px;
  width: 100%;
  display: flex;
  margin-left: 0.5rem;
  margin-right: 1rem;
  background: #0078d4;
  color: white;
  text-decoration: none;
}
.no-active {
  display: flex;
  border-color: #0078d4;
  color: black;
  text-decoration: none;
}
.no-active > div {
  margin: auto;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 8px;
  width: 100%;
  display: flex;
  margin-left: 0.5rem;
  margin-right: 1rem;
  text-decoration: none;
  padding-left: 1.25rem;
}
.active {
  display: flex;
  border-color: #0078d4;
  color: #0078d4;
  border-left: solid 6px;
  text-decoration: none;
}
.active > div {
  margin: auto;
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 8px;
  width: 100%;
  display: flex;
  margin-left: 0.5rem;
  margin-right: 1rem;
  background: white;
  text-decoration: none;
  padding-left: 1rem;
}
</style>
