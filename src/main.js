import '@/app/styles/styles.css';

import { createApp } from 'vue';
import App from '@/app/App.vue';
import locales from '@/features/SwitchedLanguage/i18n/setupI18n.js';
import router from '@/app/providers/router.js';
import { createPinia } from 'pinia';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(locales);
app.use(router);
app.mount('#app');
