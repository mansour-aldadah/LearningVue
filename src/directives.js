import Vue from "vue";

Vue.directive("font", {
  bind: function (e, binding) {
    e.style.fontSize = binding.value + "px";

    if (binding.modifiers.bold) {
      e.style.fontWeight = "bold";
    }
    if (binding.modifiers.orange) {
      e.style.color = "orange";
    }
  },
});
