<script>
import axios from "axios";

/**
 * Preloader component
 */
export default {
  data() {
    return {};
  },
  props: {
    loading: Boolean,
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    axios.get(process.env.VUE_APP_URL).then((res) => {
      setTimeout(() => {
            var preloader = document.getElementsByClassName("preloader-component");
            Array.prototype.forEach.call(preloader, function(el) {
                el.style.display = "none";
            });

            var status = document.getElementsByClassName("status");
            Array.prototype.forEach.call(status, function(el) {
                el.style.display = "none";
            });
      }, 1000);
    });
  },
};
</script>

<template>
  <div :class="{ 'is-loading': loading }">
    <div class="preloader-component">
      <div class="status">
        <div class="spinner-chase">
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
          <div class="chase-dot"></div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>
