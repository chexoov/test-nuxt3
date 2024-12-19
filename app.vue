<template>
  <div class="content-wrapper">
    <div class="desription">
      <desription></desription>
    </div>
    <div class="code-editor">
      <editor></editor>
    </div>
    <div class="terminal">
      <terminal></terminal>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Result } from "./models/result";

const result = useState("result", (): Result => {
  return { status: "", output: "", error: "" };
});
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.content-wrapper {
  border: 1px solid black;
  padding: 15px;

  display: grid;
  height: 90vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
}

.desription {
  border: 1px solid black;
  margin: 0 5px 0 0;
  padding: 10px;
  grid-column: 1/2;
  grid-row: 1/4;
}
.code-editor {
  grid-row: 1/3;
  grid-column: 2/3;
  overflow: hidden;
  height: 100%;
}
.terminal {
  padding: 10px;
  grid-row: 3/4;
  grid-column: 2/3;
  border: 1px solid black;
}
</style>
