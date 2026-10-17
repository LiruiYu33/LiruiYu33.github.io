// 网站全部内容都在这个文件里。改内容只需要改这里，不用动 HTML/CSS。
// 每段文字都写成 { zh: "...", en: "..." }。只写一种语言也可以，缺失时会自动用另一种。
// 某个字段不需要就删掉或留空，对应的区块会自动隐藏。

const TESTING = { zh: "测试", en: "Testing" };
const DATA = { zh: "数据", en: "Data" };
const CLOUD = { zh: "云 / DevOps", en: "Cloud & DevOps" };
const APP = { zh: "App", en: "App" };

window.SITE = {
  name: { zh: "虞礼瑞", en: "Lirui Yu" },
  title: { zh: "运维开发 · AI 应用开发 · 跨平台开发", en: "DevOps · AI Applications · Cross-platform Development" },
  tagline: {
    zh: "Monash University IT 硕士在读。做过 AI RAG 产品的私有化部署、企业级运维与全流程测试，是开源项目 RAGFlow v0.24.0 的核心贡献者；也独立开发 macOS、移动端和云原生项目。",
    en: "Master of IT student at Monash University. I've deployed, operated and tested AI RAG products in enterprise settings and was a core contributor to open-source RAGFlow v0.24.0. I also build macOS, mobile and cloud-native projects on my own.",
  },
  avatar: "", // 例如 "assets/avatar.jpg"，留空则不显示头像

  // 邮箱用 Base64 存放，源码里不出现明文地址，防止被爬虫抓取。
  // 换邮箱：终端运行 printf '新邮箱' | base64，把结果填到这里。
  // 链接里写 email: true 即可使用这个邮箱，可选 subject 作为邮件标题。
  emailB64: "YWFyb255dTMzQHFxLmNvbQ==",

  // 首屏下方的亮点数字条。value 是会滚动计数的数字，prefix/suffix 加在数字前后。
  highlights: [
    { value: 10, suffix: "+", label: { zh: "RAGFlow PR · 9 项合入", en: "RAGFlow PRs · 9 merged" } },
    { value: 40, suffix: "+", label: { zh: "缺陷闭环 · 19 项 P0", en: "defects closed · 19 P0" } },
    { value: 113, prefix: "+", suffix: "%", label: { zh: "K8s 扩容吞吐提升", en: "throughput gain on K8s" } },
    { value: 2600, suffix: "+", label: { zh: "SafeLane Twin 自动化测试", en: "automated tests in SafeLane Twin" } },
    { value: 275, label: { zh: "Targie 自动化测试", en: "automated tests in Targie" } },
    { value: 2, prefix: "#", label: { zh: "Monash × Google Shark Tank", en: "Monash × Google Shark Tank" } },
  ],

  links: [
    { label: "GitHub", url: "https://github.com/LiruiYu33" },
    { label: { zh: "邮箱", en: "Email" }, email: true },
    { label: { zh: "简历 PDF", en: "Resume PDF" }, url: "" }, // 例如 "assets/resume.pdf"
    { label: "LinkedIn", url: "" },
  ],

  // core 里列出的技能会高亮显示为“主力技能”。
  skills: [
    {
      group: { zh: "DevOps / 云原生", en: "DevOps & Cloud-native" },
      core: ["Linux", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
      items: [
        "Linux", "Docker", "Kubernetes", "Terraform", "Ansible", "Pulumi", "Git",
        "GitHub Actions", "GitLab CI/CD", "Vercel", "Wireshark", "CORE",
      ],
    },
    {
      group: { zh: "AI 应用 / LLM 工程化", en: "AI Apps & LLM Engineering" },
      core: ["RAG", "RAGFlow", "LangChain", "Dify"],
      items: [
        "Prompt Engineering", "AI Agent Workflow", "LLM Deployment", "Embedding", "Rerank", "RAG",
        "LangChain", "RAGFlow", "Dify", "Ollama", "vLLM", "Harness Engineering (Agent Skills, MCP, Wiki)",
      ],
    },
    {
      group: { zh: "AI 辅助开发", en: "AI-assisted Development" },
      core: ["Claude Code", "Codex"],
      items: ["Codex", "Claude Code", "Lovable", "Stitch", "Android Studio", "Figma", "Lucidchart"],
    },
    {
      group: { zh: "语言 / 框架 / 数据", en: "Languages, Frameworks & Data" },
      core: ["Python", "Java", "Kotlin", "Swift", "React", "FastAPI", "PostgreSQL"],
      items: [
        "Python", "Java", "Kotlin", "Swift", "Vue", "React", "SQL", "Linux Shell", "R", "FastAPI",
        "PostgreSQL", "Redis", "Celery", "Kafka", "MinIO", "Elasticsearch", "Supabase", "PostGIS", "QGIS",
      ],
    },
    {
      group: { zh: "测试 / 协作", en: "Testing & Collaboration" },
      core: ["Postman", "JMeter", "Pytest + Selenium"],
      items: ["Postman", "JMeter", "Pytest + Selenium", "XCTest", "DBeaver", "Jira", "Kanban"],
    },
    {
      group: { zh: "语言能力", en: "Spoken Languages" },
      items: [
        { zh: "中文", en: "Chinese" },
        { zh: "英语（日常及技术沟通）", en: "English (daily & technical)" },
        { zh: "日语（日常及技术沟通）", en: "Japanese (daily & technical)" },
      ],
    },
  ],

  experience: [
    {
      company: { zh: "上海英飞流信息科技有限公司（InfiniFlow）", en: "InfiniFlow (Shanghai)" },
      role: { zh: "运维开发工程师（实习）· RAGFlow", en: "DevOps Engineer (Intern) · RAGFlow" },
      period: "2025.12 – 2026.02",
      points: [
        {
          zh: "在 Ubuntu 远程服务器上完成 Dify、FastGPT、Langfuse、MaxKB 4 款 AI RAG 产品的私有化部署：Docker 容器编排、端口规划与冲突治理、镜像源优化、多应用环境隔离。",
          en: "Privately deployed 4 AI RAG products (Dify, FastGPT, Langfuse, MaxKB) on remote Ubuntu servers: Docker orchestration, port planning and conflict resolution, mirror optimisation, and multi-app environment isolation.",
        },
        {
          zh: "负责自研 RAGFlow 的企业级运维与安全加固，修复 Nginx/MySQL 高危 CVE 漏洞，制定依赖组件跨大版本平滑升级方案，服务阿里云、西门子、特斯拉、沃尔玛、九坤投资、字节跳动、中芯国际等 10+ 行业头部客户。",
          en: "Owned enterprise operations and security hardening for RAGFlow: patched high-severity Nginx/MySQL CVEs and planned smooth major-version dependency upgrades, serving 10+ leading clients including Alibaba Cloud, Siemens, Tesla, Walmart, ByteDance and SMIC.",
        },
        {
          zh: "主导 RAGFlow v0.23.0 → v0.24.0 全流程测试（Postman、JMeter、Selenium），发现并闭环 40+ 缺陷，其中 19 项为 P0 级。",
          en: "Led end-to-end testing for RAGFlow v0.23.0 → v0.24.0 (Postman, JMeter, Selenium), finding and closing 40+ defects, 19 of them P0.",
        },
        {
          zh: "向 RAGFlow 官方仓库提交 10+ PR（9 项合入主干）、130+ commits，覆盖 Python 后端、React 前端、工程配置与安全加固，成为 v0.24.0 核心贡献者。",
          en: "Submitted 10+ PRs (9 merged) and 130+ commits to the official RAGFlow repo across Python backend, React frontend, build config and security, becoming a core contributor to v0.24.0.",
        },
        {
          zh: "输出《RAGFlow 企业级文档》《API 中文文档》等 10 余份技术文档，并完成 AI Agent 功能优化与 Demo 开发。",
          en: "Wrote 10+ technical documents including an enterprise deployment guide and Chinese API docs, and built AI Agent improvements and demos.",
        },
      ],
      links: [{ label: "RAGFlow", url: "https://github.com/infiniflow/ragflow" }],
    },
  ],

  // 项目卡片。featured: true 的项目显示为“代表作”大卡片（带截图 image 和关键数字 metrics）；
  // 其余项目显示在“更多项目”网格里，可按 tags 筛选。
  projects: [
    {
      name: { zh: "RAGFlow 开源贡献", en: "RAGFlow Open-source Contributions" },
      period: "2025.12 – 2026.02",
      featured: true,
      tags: ["AI", CLOUD, TESTING],
      // 没有截图时，代表作卡片左侧显示这段大字
      cover: { big: "v0.24.0", small: { zh: "RAGFlow 核心贡献者", en: "RAGFlow core contributor" } },
      metrics: [
        { zh: "9 项 PR 合入", en: "9 PRs merged" },
        { zh: "130+ commits", en: "130+ commits" },
        { zh: "v0.24.0 核心贡献者", en: "v0.24.0 core contributor" },
      ],
      summary: {
        zh: "实习期间参与开源 RAG 引擎 RAGFlow 的开发、测试与运维，成为 v0.24.0 版本核心贡献者。",
        en: "Contributed to development, testing and operations of the open-source RAG engine RAGFlow during my internship; core contributor to v0.24.0.",
      },
      stack: ["Python", "React", "Docker", "Nginx", "MySQL"],
      details: [
        { zh: "10+ PR（9 项合入主干）、130+ commits", en: "10+ PRs (9 merged), 130+ commits" },
        { zh: "修复检索逻辑、解析链路、任务队列等核心模块缺陷", en: "Fixed bugs in retrieval, parsing pipeline and task queue" },
        { zh: "修复 Nginx/MySQL 高危 CVE 漏洞", en: "Patched high-severity Nginx/MySQL CVEs" },
      ],
      image: "",
      links: [
        { label: "RAGFlow", url: "https://github.com/infiniflow/ragflow" },
        {
          label: { zh: "我的 PR", en: "My PRs" },
          url: "https://github.com/infiniflow/ragflow/pulls?q=is%3Apr+author%3ALiruiYu33",
        },
      ],
    },
    {
      name: { zh: "SafeLane Twin · 有轨电车混行路段骑行前路况预览", en: "SafeLane Twin — Pre-ride Context for Tram-shared Streets" },
      period: { zh: "2026.08 – 至今", en: "2026.08 – present" },
      featured: true,
      tags: ["Web", CLOUD, "AI", TESTING],
      cover: { big: "SafeLane Twin", small: "safelanetwin.tech" },
      metrics: [
        { zh: "后端 & DevOps 负责人", en: "Backend & DevOps lead" },
        { zh: "2,600+ 测试 · 76 个 E2E", en: "2,600+ tests · 76 E2E" },
        { zh: "车流预测 WAPE ≈ 9.2%", en: "Traffic forecast WAPE ≈ 9.2%" },
        { zh: "5 人团队", en: "Team of 5" },
      ],
      summary: {
        zh: "面向墨尔本 Chapel Street 骑行者的 PWA。这段路上自行车要与有轨电车、机动车混行，2021–2025 年共记录 109 起骑行者事故，近一半是开门事故。用户出发前选好路段和时间，平台展示预测车流、天气、电车实时位置、电车站上下客方式和历史事故密度，标出相对风险最高的路段，并建议车流更少的出发时段。个人工作覆盖前端、后端、数据库、机器学习、AWS 部署和域名上线全链路。",
        en: "A PWA for cyclists on Melbourne's Chapel Street, where bikes share the road with trams and cars — 109 cyclist crashes were recorded in 2021–2025, nearly half of them dooring. Before riding, users pick a segment and time to see forecast traffic, weather, live tram positions, tram-stop boarding layouts and historical crash density, with the riskiest segments flagged and quieter departure times suggested. My work spanned frontend, backend, database, ML, AWS deployment and domain launch.",
      },
      stack: [
        "Vue 3", "TypeScript", "MapLibre GL", "FastAPI", "PostgreSQL + PostGIS", "scikit-learn (HistGradientBoosting)",
        "AWS ECS Fargate", "RDS", "CloudFront", "S3", "Lambda", "CloudFormation", "GitHub Actions", "Vercel + Neon",
      ],
      details: [
        {
          zh: "AI 辅助开发流程：以 Codex、Claude Code 等 AI Agent 为主力工具。用 AGENTS.md 规定事实来源、技术栈边界和安全红线（如密钥和数据库凭据不得入库）；在不同 Agent 间切换时写交接文档保留上下文；AI 生成的代码须经过 ADR、CI 测试门禁和 PR 互审。",
          en: "AI-assisted workflow: built mainly with AI agents (Codex, Claude Code). AGENTS.md defines sources of truth, stack boundaries and security red lines (e.g. no secrets or DB credentials in the repo); handoff docs preserve context when switching agents; AI-generated code goes through ADRs, CI gates and peer-reviewed PRs.",
        },
        {
          zh: "交通流量预测：用 SCATS 车流检测数据和历史天气预报，将约 1.9 万条半小时样本按时间顺序切分；对比 HistGradientBoosting、XGBoost、CatBoost、Chronos-2（零样本）和两种历史基线，最终选定 scikit-learn HistGradientBoosting（对比集 WAPE ≈ 9.2%），上线了日历版和天气版两个模型。训练好的树模型导出为经过校验的 JSON，由后端用纯 Python 推理，线上不加载 pickle 等可执行模型文件。无检测器的 5 个路段用邻近路段加权插值，每天输出 10 路段 × 48 时段的预测。",
          en: "Traffic forecasting: ~19k half-hourly samples from SCATS detectors plus historical weather forecasts, split chronologically. Compared HistGradientBoosting, XGBoost, CatBoost, Chronos-2 (zero-shot) and two historical baselines, and chose scikit-learn HistGradientBoosting (WAPE ≈ 9.2% on the comparison set), shipping a calendar model and a weather model. Trained trees are exported as validated JSON and evaluated in pure Python on the backend, so no pickle or other executable model files are loaded in production. Five segments without detectors use weighted interpolation from neighbours, producing 10 segments × 48 slots daily.",
        },
        {
          zh: "后端：基于 FastAPI 开发 20+ 个 REST 接口；用 Repository 协议解耦测试数据与 PostgreSQL 数据源，API 只通过只读角色访问视图；接入 GTFS-Realtime 电车数据和 Open-Meteo 天气，实现连接池、有界缓存 + SingleFlight 请求合并、功能开关和数据缺失时的显式降级。",
          en: "Backend: 20+ FastAPI REST endpoints. A Repository protocol decouples fixtures from PostgreSQL, and the API reads views through a read-only role. Integrated GTFS-Realtime tram data and Open-Meteo weather with connection pooling, bounded caching + SingleFlight request coalescing, feature flags and explicit degradation when data is missing.",
        },
        {
          zh: "云架构与上线：用 CloudFormation 定义 AWS 基础设施——VPC 公/私子网、ALB、ARM64 ECS Fargate、私有 RDS PostgreSQL 15、S3 + CloudFront、ECR、Secrets Manager、CloudWatch、CloudTrail；配置 ACM 证书、DNS 和裸域名跳转。模板经 cfn-lint 和 cfn-guard 安全规则校验后通过 Change Set 审核发布，镜像按 digest 固定。",
          en: "Cloud & launch: AWS infrastructure in CloudFormation — VPC with public/private subnets, ALB, ARM64 ECS Fargate, private RDS PostgreSQL 15, S3 + CloudFront, ECR, Secrets Manager, CloudWatch and CloudTrail; ACM certificates, DNS and apex redirect. Templates pass cfn-lint and cfn-guard security rules and ship via reviewed Change Sets, with images pinned by digest.",
        },
        {
          zh: "多环境与数据库运维：用 CloudFront Functions 做路径路由，让正式站、历史迭代存档和 Vercel + Neon 开发环境共用一个域名且彼此隔离；用 Lambda + API Gateway 实现签名 Cookie 访问控制；负责 RDS 角色初始化、备份恢复任务和数据维护工具。",
          en: "Environments & DB ops: CloudFront Functions route paths so production, archived iterations and a Vercel + Neon dev environment share one domain in isolation; Lambda + API Gateway enforce signed-cookie access. Owned RDS role bootstrap, backup/restore jobs and data-maintenance tooling.",
        },
        {
          zh: "CI/CD 与测试：搭建前端、后端、数据库 3 条 GitHub Actions 流水线（Ruff、pytest、Vitest、Playwright + axe 无障碍检测、PostGIS 集成测试零跳过门禁），覆盖 2,600+ 个单元和集成测试及 76 个浏览器端到端用例；通过拆分 job 和测试分片解决 CI 超时与不稳定问题。",
          en: "CI/CD & testing: three GitHub Actions pipelines for frontend, backend and database (Ruff, pytest, Vitest, Playwright + axe accessibility checks, zero-skip PostGIS integration gate) covering 2,600+ unit/integration tests and 76 browser E2E cases; split jobs and sharded tests to fix CI timeouts and flakiness.",
        },
        {
          zh: "故障复盘：一次发布导致 API 中断约 16 分钟——新配置与旧镜像不兼容，且健康检查路径和 IAM 权限在同一次更新里修改，导致回滚也失败。恢复后改为“先发兼容代码、再改配置”的分步发布，并写入发布手册。",
          en: "Incident review: a release caused ~16 minutes of API downtime — new config was incompatible with the old image, and changing the health-check path and IAM permissions in the same update made rollback fail too. After recovery, switched to staged releases (ship compatible code first, then change config) and documented it in the release runbook.",
        },
        {
          zh: "前端：PWA 安装、首页视频背景、基于定位的路段提醒、地图触控板/鼠标缩放与旋转、加载与错误状态，以及遇到 503 时自动重试。",
          en: "Frontend: PWA install, video hero, location-based segment alerts, trackpad/mouse map zoom and rotation, loading and error states, and automatic retry on 503.",
        },
      ],
      image: "assets/safelane.jpg",
      imagePosition: "left center", // 截图裁切的对齐位置，默认 "top left"
      links: [
        { label: { zh: "在线访问", en: "Live site" }, url: "https://www.safelanetwin.tech" },
        {
          label: { zh: "申请代码访问（私有仓库）", en: "Request code access (private repo)" },
          email: true,
          subject: "SafeLane Twin repo access",
        },
      ],
    },
    {
      name: { zh: "LoadMind 智能货运匹配平台", en: "LoadMind — Smart Freight Matching" },
      period: "2026.02 – 2026.06",
      featured: true,
      tags: ["AI", "Web", CLOUD],
      metrics: [
        { zh: "Shark Tank 第二名", en: "Shark Tank 2nd place" },
        { zh: "XGBoost 定价模型", en: "XGBoost pricing model" },
        { zh: "联合创始人", en: "Co-founder" },
      ],
      summary: {
        zh: "联合创始人 / 全栈开发。货运撮合 MVP，在 Monash University 与 Google 合办的 Shark Tank Pitch 中获第二名及官方认证。",
        en: "Co-founder / full-stack developer. A freight-matching MVP that won 2nd place and official recognition at the Monash University × Google Shark Tank Pitch.",
      },
      stack: ["React", "TypeScript", "FastAPI", "Supabase", "Leaflet", "GitLab CI", "XGBoost", "Stitch + Lovable"],
      details: [
        {
          zh: "负责前端动画、地图选址与地址补全、登录鉴权、AI 货源排序筛选、车辆匹配、货运发布、车队管理及 CI/CD",
          en: "Built frontend animation, map-based address picking and autocomplete, auth, AI load ranking and filtering, vehicle matching, shipment posting, fleet management and CI/CD",
        },
        {
          zh: "基于统计学背景，协同设计 XGBoost 定价模型的数据处理、训练与检验方案",
          en: "Drew on my statistics background to co-design data processing, training and validation for the XGBoost pricing model",
        },
        {
          zh: "调研维州运输市场并参与 Go-to-Market 策略制定",
          en: "Researched the Victorian freight market and helped shape the go-to-market strategy",
        },
      ],
      image: "https://raw.githubusercontent.com/LiruiYu33/LoadMind/HEAD/ScreenShots/02-carrier-ai-load-matcher.png",
      links: [{ label: "GitHub", url: "https://github.com/LiruiYu33/LoadMind" }],
    },
    {
      name: { zh: "Targie · macOS 相似媒体查找与清理工具", en: "Targie — Similar Media Finder for macOS" },
      period: { zh: "2026.06 – 至今", en: "2026.06 – present" },
      featured: true,
      tags: [APP],
      metrics: [
        { zh: "275 项 XCTest", en: "275 XCTests" },
        { zh: "7 种语言", en: "7 languages" },
        { zh: "独立开发", en: "Solo-built" },
      ],
      summary: {
        zh: "独立开发的原生 macOS 应用（Universal，arm64 + x86_64），扫描相似图片与视频，分组预览、批量选择并安全删除。",
        en: "A native macOS app I built solo (Universal, arm64 + x86_64) that finds similar images and videos, with grouped previews, batch selection and safe deletion.",
      },
      stack: ["Swift 6", "SwiftUI", "AppKit", "AVFoundation", "Vision", "GRDB/SQLite", "Swift Concurrency", "XCTest", "GitHub Actions"],
      details: [
        {
          zh: "分层相似度管线：多维分桶预筛 → DCT-3D / pHash 感知哈希 + BK-Tree 近邻检索 → SHA-256 精确去重 → Vision 特征复核，逐层剪枝避免 N² 全量比较",
          en: "Layered similarity pipeline: multi-dimensional bucketing → DCT-3D / pHash + BK-Tree nearest-neighbour search → SHA-256 exact dedup → Vision feature check, pruning at each stage to avoid N² comparisons",
        },
        {
          zh: "基于 GRDB/SQLite 的多层持久化缓存（指纹、Vision 特征、配对结果、扫描索引），二次扫描逐层短路跳过解码与推理",
          en: "Multi-level GRDB/SQLite cache (fingerprints, Vision features, pair results, scan index) lets rescans skip decoding and inference",
        },
        {
          zh: "Swift Concurrency 分阶段有界并行，按扫描强度与系统热状态自适应；数千文件规模下保持交互流畅",
          en: "Staged, bounded parallelism with Swift Concurrency that adapts to scan intensity and thermal state, keeping the UI smooth across thousands of files",
        },
        {
          zh: "支持七种语言；275 项 XCTest 通过 GitHub Actions 自动完成测试、Universal 构建与版本发布",
          en: "Localised in 7 languages; 275 XCTests run in GitHub Actions alongside Universal builds and releases",
        },
      ],
      image: "https://raw.githubusercontent.com/LiruiYu33/Targie-The-Similar-Videos-Images-Finder/HEAD/asset/Screenshot1.png",
      links: [
        { label: { zh: "官网", en: "Website" }, url: "https://liruiyu33.github.io/Targie-The-Similar-Videos-Images-Finder/" },
        { label: "GitHub", url: "https://github.com/LiruiYu33/Targie-The-Similar-Videos-Images-Finder" },
      ],
    },
    {
      name: { zh: "Aussie EcoLens 多云生态影像识别平台", en: "Aussie EcoLens — Multi-cloud Wildlife Media Platform" },
      period: "2026.05 – 2026.06",
      tags: [CLOUD, "AI"],
      summary: {
        zh: "AWS 与 GCP 协同的 Serverless 平台：上传图片或视频后异步抽帧、生成缩略图并识别物种，结果经 HMAC 签名回调写入 AWS，支持标签检索与订阅通知。",
        en: "A serverless platform spanning AWS and GCP: uploaded images and videos are processed asynchronously (frame extraction, thumbnails, species recognition), with results written back to AWS via HMAC-signed callbacks for tag search and notifications.",
      },
      stack: ["Terraform", "Docker", "Cloud Run", "Cloud Functions", "Pub/Sub", "GCS", "AWS Lambda", "API Gateway", "DynamoDB", "SNS"],
      details: [
        {
          zh: "负责 GCP 侧 ML Pipeline 与 IaC：用 Terraform 编排 Cloud Run 推理服务、Cloud Functions、Pub/Sub 重试与死信队列、IAM、GCS 和 Artifact Registry",
          en: "Owned the GCP ML pipeline and IaC: Terraform for Cloud Run inference, Cloud Functions, Pub/Sub retries and dead-letter queues, IAM, GCS and Artifact Registry",
        },
        {
          zh: "编写模型上传、镜像构建推送及共享 Terraform State 初始化脚本",
          en: "Wrote scripts for model upload, image build/push and shared Terraform state setup",
        },
        {
          zh: "实现按需缩放与演示预热，补充媒体处理测试与部署、成本控制文档",
          en: "Configured on-demand scaling and demo warm-up, and added media-processing tests plus deployment and cost-control docs",
        },
      ],
      image: "",
      links: [],
    },
    {
      name: { zh: "CloudEco 云原生垃圾识别服务", en: "CloudEco — Cloud-native Waste Detection" },
      period: "2026.04 – 2026.05",
      tags: [CLOUD, "AI"],
      summary: {
        zh: "在 GCP 上用 Terraform + Ansible 自动搭建 3 节点 Kubernetes 集群，部署 YOLOv8 + FastAPI 推理服务；2 Pod 吞吐提升 113%。",
        en: "Terraform + Ansible build a 3-node Kubernetes cluster on GCP running a YOLOv8 + FastAPI inference service; 2 pods raised throughput by 113%.",
      },
      stack: ["GCP", "Terraform", "Ansible", "Kubernetes", "Docker", "FastAPI", "YOLOv8", "Locust"],
      details: [
        {
          zh: "Terraform 创建 3 台 GCE（1 Master、2 Worker）与防火墙并生成 Ansible Inventory；Playbook 自动安装 containerd/K8s、组建集群并部署服务",
          en: "Terraform provisions 3 GCE VMs (1 master, 2 workers) and firewall rules and generates the Ansible inventory; playbooks install containerd/K8s, form the cluster and deploy",
        },
        {
          zh: "CPU-only、非 root 镜像；Deployment/Service 编排，配置资源限制与存活/就绪探针",
          en: "CPU-only, non-root image; Deployment/Service with resource limits and liveness/readiness probes",
        },
        {
          zh: "FastAPI 异步 API 集成 YOLO，线程池隔离 CPU 密集推理，避免阻塞事件循环",
          en: "Async FastAPI API with YOLO; CPU-bound inference offloaded to a thread pool to keep the event loop free",
        },
        {
          zh: "Locust 压测 1/2/4/8 Pod：2 Pod 从 3.1 提升到 6.6 RPS（+113%），4 Pod 达 7.5 RPS，定位 Worker CPU 饱和瓶颈",
          en: "Locust tests at 1/2/4/8 pods: 3.1 → 6.6 RPS at 2 pods (+113%), 7.5 RPS at 4 pods; identified worker CPU saturation as the bottleneck",
        },
      ],
      image: "",
      links: [{ label: "GitHub", url: "https://github.com/LiruiYu33/CloudEco_YOLO_Waste_Detection_Terraform" }],
    },
    {
      name: { zh: "ZoneSort VIC 市政规则同步程序", en: "ZoneSort VIC — Council Waste Rules App" },
      period: "2026.03 – 2026.05",
      tags: [APP],
      summary: {
        zh: "维州垃圾分类与收运提醒 Android 应用，离线优先架构，按定位自动匹配市政规则。",
        en: "An offline-first Android app for Victorian waste rules and collection reminders that matches council rules by location.",
      },
      stack: ["Kotlin", "Jetpack Compose", "Room", "Firebase Auth/Firestore", "Retrofit", "OSMDroid", "WorkManager", "AlarmManager"],
      details: [
        {
          zh: "主导技术选型、离线优先架构及 UI/UX 设计；用 Compose 搭建核心页面与表单交互",
          en: "Led tech choices, offline-first architecture and UI/UX design; built core screens and forms in Compose",
        },
        {
          zh: "接入 Firebase 认证与用户/房产云缓存，构建 Firestore → Room 数据层",
          en: "Integrated Firebase Auth and user/property cloud cache; built the Firestore → Room data layer",
        },
        {
          zh: "实现 GPS 房产更新、频率配置和轨迹演示模式，修复搜索联动及地图返回崩溃",
          en: "Implemented GPS property updates, frequency settings and a route demo mode; fixed search sync and a map back-navigation crash",
        },
      ],
      image: "",
      links: [{ label: "GitHub", url: "https://github.com/LiruiYu33/ZoneSort_VIC" }],
    },
    {
      name: { zh: "Contract RAG 合同智能分析系统", en: "Contract RAG — Contract Analysis" },
      period: "2026.02 – 2026.03",
      tags: ["AI", "Web"],
      summary: {
        zh: "面向合同管理的 RAG Web 原型：多格式解析、语义检索、关键信息抽取、截止日提醒，以及带来源片段的合同问答。",
        en: "A RAG web prototype for contracts: multi-format parsing, semantic search, key-term extraction, deadline reminders and Q&A with cited source passages.",
      },
      stack: ["Python", "FastAPI", "RAG", "SQLite", "Milvus / Qdrant"],
      details: [
        {
          zh: "支持 PDF、DOCX、TXT、MD、HTML 解析，重叠分块、Embedding 向量化与多文档语义检索",
          en: "Parses PDF, DOCX, TXT, MD and HTML with overlapping chunking, embeddings and multi-document semantic search",
        },
        {
          zh: "LLM + 正则兜底抽取合同方、类型、金额和关键期限，提供倒计时与浏览器定时提醒",
          en: "LLM extraction with regex fallback for parties, type, value and deadlines, plus countdowns and browser reminders",
        },
        {
          zh: "封装 OpenAI、MiniMax、SiliconFlow、Ollama 等模型配置；设计内存 / Milvus / Qdrant / Elasticsearch 向量存储适配层",
          en: "Pluggable model providers (OpenAI, MiniMax, SiliconFlow, Ollama) and a vector-store adapter for in-memory, Milvus, Qdrant and Elasticsearch",
        },
      ],
      image: "",
      links: [{ label: "GitHub", url: "https://github.com/LiruiYu33/Contract_Rag_demo" }],
    },
    {
      name: { zh: "Aurora 可定制 AI 浏览器", en: "Aurora — Customisable AI Browser" },
      period: "2025.11 – 2026.02",
      tags: ["AI", APP],
      summary: {
        zh: "独立开发的跨端移动浏览器及 Java 后端：网页正文提取与 AI 摘要、结合页面上下文的连续问答，可接入自己的大模型服务。",
        en: "A cross-platform mobile browser with a Java backend, built solo: page extraction and AI summaries, follow-up Q&A grounded in the page, and bring-your-own LLM.",
      },
      stack: ["React Native", "Expo", "TypeScript", "Java"],
      details: [
        {
          zh: "基于 WebView 实现多标签、页面快照、收藏夹、下拉刷新与个性化启动页",
          en: "WebView-based tabs, page snapshots, bookmarks, pull-to-refresh and a custom start page",
        },
        {
          zh: "JS 注入清洗并提取网页正文，调用大模型生成摘要",
          en: "JS injection cleans and extracts page content for LLM summaries",
        },
        {
          zh: "多提供方 AI 服务层：接入 SiliconFlow 与 RAGFlow，Chat/Agent 自动发现，兼容 OpenAI Chat Completions",
          en: "Multi-provider AI layer with SiliconFlow and RAGFlow, Chat/Agent auto-discovery and OpenAI Chat Completions compatibility",
        },
      ],
      image: "",
      links: [{ label: "GitHub", url: "https://github.com/LiruiYu33/Aurora" }],
    },
    {
      name: { zh: "墨尔本公交可达性分析", en: "Melbourne Public Transport Accessibility" },
      period: "2025.10 – 2025.11",
      tags: [DATA],
      summary: {
        zh: "基于 PostGIS 与 QGIS 的空间分析，揭示公交服务高度集中于中心城区、边缘住宅区存在显著缺口。",
        en: "Spatial analysis with PostGIS and QGIS showing transit service concentrated in the inner city, with clear gaps in outer residential areas.",
      },
      stack: ["PostgreSQL / PostGIS", "QGIS", "SQL", "GTFS", "ABS"],
      details: [
        {
          zh: "GTFS/ABS 数据恢复与清洗，坐标系转换（WGS84 → GDA2020），研究范围裁剪与公交模式筛选",
          en: "Recovered and cleaned GTFS/ABS data; converted coordinates (WGS84 → GDA2020); clipped to Greater Melbourne and filtered transit modes",
        },
        {
          zh: "设计可达性指标：住宅网格内每平方公里公交站点数",
          en: "Defined an accessibility metric: transit stops per km² within residential grid cells",
        },
        {
          zh: "将数百万条时刻数据分阶段抽取为子集，空间联接与统计由分钟级降至秒级",
          en: "Staged millions of timetable rows into a subset, cutting spatial joins from minutes to seconds",
        },
      ],
      image: "",
      links: [],
    },
    {
      name: { zh: "Monash Merchant 折扣管理系统", en: "Monash Merchant Discount Engine" },
      period: "2025.10 – 2025.11",
      tags: [TESTING],
      summary: {
        zh: "开发与测试。为线上超市结算系统设计并实现 125 条 Python 单元测试，关键模块接近 100% 分支覆盖率。",
        en: "Development and testing. Designed and wrote 125 Python unit tests for an online-store checkout system, reaching near-100% branch coverage on key modules.",
      },
      stack: ["Python", "Unit Testing"],
      details: [
        {
          zh: "覆盖年龄校验、限购、配送费、常规促销与黑五复杂折扣",
          en: "Covered age checks, purchase limits, delivery fees, regular promotions and complex Black Friday discounts",
        },
        {
          zh: "使用等价类、边界值、正/负向用例和组合条件测试",
          en: "Used equivalence partitioning, boundary values, positive/negative and combinatorial testing",
        },
        {
          zh: "发现并修复多处时间边界与限购逻辑缺陷，例如黑五折扣在汇总行上误计算",
          en: "Found and fixed date-boundary and purchase-limit bugs, e.g. Black Friday discounts miscalculated on summary rows",
        },
      ],
      image: "",
      links: [],
    },
    {
      name: { zh: "MonEquip 数据仓库与 BI", en: "MonEquip Data Warehouse & BI" },
      period: "2025.08",
      tags: [DATA],
      summary: {
        zh: "为销售与租赁业务构建企业数据仓库，支持按时间、地区、类别等维度分析收入与销量。",
        en: "Built an enterprise data warehouse for sales and rentals, enabling revenue and volume analysis by time, region and category.",
      },
      stack: ["Oracle SQL", "LucidChart"],
      details: [
        { zh: "清洗整合原始销售与租赁数据，统一字段与时间格式", en: "Cleaned and merged raw sales and rental data" },
        {
          zh: "设计星型模型（时间、客户、分支、产品等维度）",
          en: "Designed a star schema with time, customer, branch and product dimensions",
        },
        { zh: "用 Oracle SQL 实现 ETL 与事实表汇总", en: "Implemented ETL and fact-table aggregation in Oracle SQL" },
      ],
      image: "",
      links: [],
    },
    {
      name: { zh: "Monash Merchant 网上超市系统", en: "Monash Merchant Online Store" },
      period: "2025.03 – 2025.10",
      tags: [TESTING, "Java"],
      summary: {
        zh: "产品 + 开发。基于 Java 的终端购物系统，涵盖登录、账户、购物车、库存、结算，实现库存扣减与回滚、促销码优先级与互斥、配送/自提等功能。",
        en: "Product + development. A Java terminal shopping system covering login, accounts, cart, inventory and checkout, with stock deduction/rollback, promo-code priority and exclusivity, and delivery/pickup options.",
      },
      stack: ["Java", "LucidChart", "Jira / Trello", "Git"],
      details: [
        {
          zh: "参与功能设计与验收标准制定，确保用户故事 100% 可测试",
          en: "Defined features and acceptance criteria so every user story was testable",
        },
        {
          zh: "用 LucidChart 设计原型图、用例图、序列图、类图，按实体-边界-控制分层",
          en: "Designed prototypes, use-case, sequence and class diagrams in LucidChart using entity-boundary-control layering",
        },
        {
          zh: "编写模块级测试用例，覆盖正常/异常/边界场景；执行黑盒、白盒测试并跟踪缺陷",
          en: "Wrote module-level test cases covering normal, error and boundary cases; ran black-box and white-box tests and tracked defects",
        },
        {
          zh: "用 Jira/Trello 搭建 Scrum Board，在多个 Sprint 中完成全部功能测试",
          en: "Ran a Scrum board in Jira/Trello and completed testing of all features across multiple sprints",
        },
      ],
      image: "",
      links: [],
    },
  ],

  education: [
    {
      school: { zh: "莫纳什大学（Monash University）", en: "Monash University" },
      degree: { zh: "Information Technology 硕士 · 全日制", en: "Master of Information Technology · Full-time" },
      period: "2025.02 – 2026.12",
      note: {
        zh: "GPA 3.75/4.0（前 10%）。课程：高级数据库（数据仓库、PostGIS）、软件工程实践（Agile、软件测试、Git）、计算机系统与网络、项目管理、云计算",
        en: "GPA 3.75/4.0 (top 10%). Courses: advanced databases (data warehousing, PostGIS), software engineering practice (Agile, testing, Git), computer systems & networks, project management, cloud computing",
      },
    },
    {
      school: { zh: "绍兴文理学院（现绍兴大学）", en: "Shaoxing University" },
      degree: { zh: "应用统计学 本科 · 全日制", en: "Bachelor of Applied Statistics · Full-time" },
      period: "2019.09 – 2024.06",
      note: {
        zh: "课程：数据结构、数据挖掘、R 语言、机器学习、SAS 时间序列分析、MySQL、货币金融学、SPSS",
        en: "Courses: data structures, data mining, R, machine learning, SAS time series, MySQL, money & banking, SPSS",
      },
    },
  ],

  awards: [
    {
      name: {
        zh: "Monash University × Google Shark Tank Pitch 第二名（LoadMind）",
        en: "Monash University × Google Shark Tank Pitch — 2nd place (LoadMind)",
      },
      date: "2026",
    },
    {
      name: {
        zh: "全国大学生电子商务“三创”大赛 浙江省一等奖（Top 1%，15/3000+）",
        en: "National College E-Commerce Innovation Competition — Zhejiang 1st Prize (top 1%, 15/3000+)",
      },
      date: "2023.06",
    },
    {
      name: {
        zh: "全国大学生统计建模大赛 浙江省三等奖",
        en: "National College Statistical Modeling Competition — Zhejiang 3rd Prize",
      },
      date: "2022.08",
    },
  ],
};
