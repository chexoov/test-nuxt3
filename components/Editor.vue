<template>
  <div class="code-editor">
    <div class="code-editor__buttons">
      <button @click="runCode" class="code-editor__run">Run</button>
      <select v-model="currentLang">
        <option value="python">Python</option>
        <option value="typescript">TypeScript</option>
      </select> 
    </div>

    <MonacoEditor
      v-model="value"
      :options="options"
      :lang="currentLang"
      class="editor"
    />
  </div>
</template>
<script setup lang="ts">
import type * as monaco from "monaco-editor";
import { ref } from "vue";

const result = useState("result");
const value = ref("");

const options: monaco.editor.IEditorConstructionOptions = {
  automaticLayout: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  lineNumbersMinChars: 3,
  fontSize: 16,
  wordWrap: "on",
  wrappingIndent: "indent",
  wrappingStrategy: "simple",
  readOnly: false,
  theme: 'vs-dark', 
};

const changeLanguage = (lang: string) => {
  currentLang.value = lang;
};
const currentLang = ref("python");

const runCode = async () => {
  const data = await $fetch("/api/execute", {
    method: "post",
    body: { code: value.value, 
      language: currentLang.value
     },
  });
  result.value = data;
};
</script>

<style scoped>
.code-editor {
  margin: 0 0 5px 0 ;
  padding: 10px;
  border: 1px solid black
}
.editor {
  width: 100%;
  height: 90%;
  
}

.code-editor__buttons{
  margin-bottom: 5px;
}

.code-editor__run {
  margin-right: 5px;
}
</style>
