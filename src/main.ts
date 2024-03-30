import {createApp} from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import router from './router'
import {
    Icon,
    Swipe,
    SwipeItem,
    Tabbar,
    TabbarItem,
    AddressEdit,
    AddressList,
    NavBar,
    ConfigProvider,
    Notify,
    Empty,
    Dialog,
    Tab,
    Tabs,
    Card,
    Button,
    Image,
    Grid,
    GridItem,
    Checkbox,
    CheckboxGroup
} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(AddressEdit);
app.use(AddressList);
app.use(Icon);
app.use(Swipe);
app.use(SwipeItem);
app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);
app.use(ConfigProvider);
app.use(Notify);
app.use(Empty);
app.use(Dialog);
app.use(Tab);
app.use(Tabs);
app.use(Card);
app.use(Button);
app.use(Image);
app.use(Grid);
app.use(GridItem);
app.use(Checkbox);
app.use(CheckboxGroup);
app.mount('#app')
