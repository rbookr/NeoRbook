<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl style="font-family: huiwen;">
    <a icon-btn rel="noreferrer" href="https://github.com/Rainboy/" target="_blank" title="GitHub" class="flex items-center gap-2">
      <div i-carbon-logo-github class="inline-block" />
      Author:Rainboy
    </a>
  </nav>
</template>
