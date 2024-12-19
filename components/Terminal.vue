<template>
  <div class="terminal">
    <div v-if="result.status === 'success'">
      {{ result.output }}
    </div>
    <div v-if="result.status === 'error'">{{ result.error }}</div>
  </div>
</template>
<script setup lang="ts">
import type { Result } from '~/models/result';

const result = useState<Result>("result");
</script>

<style scoped>
.terminal {
  border: 1px solid black;
}
</style>
