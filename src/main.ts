import {createApp} from 'vue'
import {} from 'vant';
import './style.css'
import App from './App.vue'
import router from './router'
import {Icon, Swipe, SwipeItem, Tabbar, TabbarItem, AddressEdit, AddressList, NavBar, ConfigProvider} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(AddressEdit);
app.use(AddressList);
app.use(router)
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(ConfigProvider);
app.mount('#app')
