# 快速开始

#### 安装组件库

```bash
npm i angelwork-ui
```

#### 引用组件库
> 在 main.js 中引用组件库

```javascript
//全部引用
import 'angelwork-ui/dist/css/index.css';
import MUI from 'angelwork-ui';
Vue.use(MUI);

//按需引用
import 'angelwork-ui/dist/css/demo.css';
import { Demo } from 'angelwork-ui';
Vue.use(Demo);
```

