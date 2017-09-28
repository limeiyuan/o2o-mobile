# O2O 移动端（APP）

## 项目初始化
1. 安装第三方依赖node.js

下载安装 https://nodejs.org/dist/v6.11.3/node-v6.11.3-x64.msi（windows）

```cmd
npm install -g @angular/cli
npm install -g cordova
npm install -g ionic
```

2. 安装依赖库

命令行输入 ionic serve 提示是否安装依赖，选择Y

## IDEA 启动工程

下箭头Edit Configuration，新建npm项目，选择ionic:serve，启动即可

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

