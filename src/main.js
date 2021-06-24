import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/shared/BaseCard.vue';
import BaseButton from './components/shared/BaseButton.vue';

const app = createApp(App);

// Global_Components
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

app.mount('#app');
