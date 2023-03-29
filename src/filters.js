import Vue from "vue";

Vue.filter("uppercase", function (v) {
  return v.toUpperCase();
});

Vue.filter("reverse", function (e) {
  return e.split("").reverse().join("");
});
