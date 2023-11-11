# ysapi-frontend

ysapi-frontend
## 版本信息

- antd: V6
- umi： umi4
- 浏览器环境：Chrome
- 开发环境：win11
- node：v18.16.0
- yarn：1.22.19

## 环境准备

```bash
npm install
```

or

```bash
yarn
```

## 脚本

通过脚本快速启动和构建与Web项目，代码风格检查和测试。package.json中提供的脚本。修改或添加额外的脚本是安全的，推荐使用yarn管理

### 启动项目

```bash
yarn start
```

### 构建项目

```bash
yarn build
```

### 修复代码

```bash
yarn lint
```

或者通过以下脚本修复代码

```bash
yarn lint:fix
```

### 测试

```bash
yarn test
```

## 提交规范
 - [ ] feat: 新功能、新特性
 - [ ] fix: 修改 bug
 - [x] perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
 - [ ] refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
 - [ ] docs: 文档修改
 - [ ] style: 代码格式修改, 注意不是 css 修改（例如分号修改）
 - [ ] test: 测试用例新增、修改
 - [ ] build: 影响项目构建或依赖项修改
 - [ ] revert: 恢复上一次提交
 - [ ] ci: 持续集成相关文件修改
 - [ ] chore: 其他修改（不在上述类型中的修改）
 - [ ] release: 发布新版本 
 - [ ] workflow: 工作流相关文件修改
