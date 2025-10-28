# Repository Guidelines

## 项目结构与模块组织
本仓库基于 VitePress，根目录下的 `index.md` 负责站点首页，`markdown-examples.md` 与 `api-examples.md` 提供示例内容，专题文档置于子目录（如 `linux/index.md`）。全局站点配置集中在 `.vitepress/config.mts`，调整导航或主题时请同步更新侧边栏定义。静态资源请放入 `.vitepress/public`；若目录不存在可新建，以确保构建产物与预览路径一致。

## 构建、测试与开发命令
首次贡献前执行 `pnpm install` 安装依赖。使用 `pnpm docs:dev` 启动本地热更新服务器（默认 `http://localhost:5173`）以实时查看文档修改。`pnpm docs:build` 触发生产构建并输出至 `.vitepress/dist`，用于验证打包是否成功。`pnpm docs:preview` 会基于构建产物启动本地服务器，适合在提交前确认生产表现。

## 代码风格与命名约定
Markdown 文件采用 UTF-8 编码与 Unix 换行，标题层级从 `#` 开始逐级递进。Frontmatter 使用两个空格缩进的 YAML，键名保持 kebab-case（如 `themeConfig.sidebar`）。文档文件名建议使用小写短横线风格（示例：`linux-shell-notes.md`），以获得稳定的路由。代码示例使用围栏语法并补充语言标识（例如 ```bash），必要时注明上下文或期望输出。新增依赖时维持 `package.json` 字段按字母排序。

## 测试准则
项目暂无自动化测试，需通过手动流程保障质量。每次提交前至少执行 `pnpm docs:build`，确保构建无错误与警告；随后运行 `pnpm docs:preview` 并在浏览器中逐页检视，确认导航、外链与代码块渲染正常。更新命令示例时请在本地终端实测，避免文档与实际行为不符。大范围结构调整需在 PR 中附截图或 GIF 说明可视化差异。

## 提交与合并请求指引
现有提交信息采用简洁中文祈使句（例如“修复action构建错误”），提交说明请突出改动目的与范围，总长度控制在约 20 个字符内。Pull Request 需包含：变更摘要、验证步骤（附 `pnpm docs:build` 或预览结果）、关联的 issue 或任务链接。若改动影响导航或主题配置，请在描述中列出重点检查项，并附关键页面截图，协助审核者快速复现。

## 配置与部署提示
仓库通过 CI 自动构建与部署，请保持脚本命令与 `.github` 配置一致。调整基础路径或自定义域名时需同步更新 `.vitepress/config.mts` 的 `base` 字段并通知运维。敏感凭据只应存放于仓库密钥管理，严禁写入 Markdown 或提交历史。
