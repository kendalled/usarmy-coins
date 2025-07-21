<template>
  <main>
    <ContentDoc v-slot="{ doc }" not-found="false">
      <div v-if="doc">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>
