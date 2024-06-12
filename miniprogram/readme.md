What's happening/
├── cloudfunctions/    # 云函数目录
│   ├── getNearbyInfo/     # 获取附近信息的云函数
│   │   ├── index.js
│   │   └── package.json
│   ├── postInfo/          # 发布信息的云函数
│   │   ├── index.js
│   │   └── package.json
│   └── ...                # 其他云函数
├── miniprogram/        # 小程序前端目录
│   ├── pages/              # 页面目录
│   │   ├── index/          # 首页
│   │   │   ├── index.js
│   │   │   ├── index.json
│   │   │   ├── index.wxml
│   │   │   └── index.wxss
│   │   ├── post/           # 发布信息页面
│   │   │   ├── post.js
│   │   │   ├── post.json
│   │   │   ├── post.wxml
│   │   │   └── post.wxss
│   │   ├── detail/         # 信息详情页面
│   │   │   ├── detail.js
│   │   │   ├── detail.json
│   │   │   ├── detail.wxml
│   │   │   └── detail.wxss
│   ├── utils/              # 工具函数目录
│   ├── app.js             # 小程序入口文件
│   ├── app.json           # 小程序配置文件
│   ├── app.wxss           # 小程序全局样式表
│   └── ...                # 其他配置文件
└── project.config.json    # 项目配置文件
