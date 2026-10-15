(function () {
  var STORAGE_KEY = 'yb_lang';

  var dict = {
    /* —— Shared —— */
    'nav.home': { en: 'Home', zh: '首页' },
    'nav.products': { en: 'Products', zh: '产品' },
    'nav.about': { en: 'About', zh: '关于我们' },
    'nav.contact': { en: 'Contact', zh: '联系我们' },
    'nav.quote': { en: 'Request Quote', zh: '立即询价' },
    'nav.menu': { en: 'Menu', zh: '菜单' },
    'logo.lighting': { en: 'Lighting', zh: '灯饰' },

    'footer.blurb': {
      en: 'Decorative lighting manufacturer in Zhongshan, China. OEM/ODM for brands in the UK, Canada, US and Europe.',
      zh: '中国中山装饰灯具制造商，为英国、加拿大、美国及欧洲品牌提供 OEM/ODM 服务。'
    },
    'footer.products': { en: 'Products', zh: '产品' },
    'footer.company': { en: 'Company', zh: '公司' },
    'footer.contact': { en: 'Contact', zh: '联系' },
    'footer.pendant': { en: 'Pendant Lighting', zh: '吊灯' },
    'footer.chandelier': { en: 'Chandeliers', zh: '水晶灯 / 枝形灯' },
    'footer.wall': { en: 'Wall Lighting', zh: '壁灯' },
    'footer.ceiling': { en: 'Ceiling Lighting', zh: '吸顶灯' },
    'footer.about': { en: 'About Us', zh: '关于我们' },
    'footer.factory': { en: 'Factory Tour', zh: '工厂参观' },
    'footer.rights': { en: '© 2026 Gloris Lighting. All rights reserved.', zh: '© 2026 Gloris Lighting. 保留所有权利。' },
    'footer.salesNote': { en: 'WhatsApp / Instagram via sales team', zh: '通过销售团队 WhatsApp / Instagram 联系' },
    'footer.address': { en: 'Guzhen, Zhongshan, Guangdong, China', zh: '中国广东省中山市古镇' },

    'float.title': { en: 'Choose a sales contact', zh: '选择销售联系人' },
    'float.more': { en: 'View sales profiles →', zh: '查看销售资料 →' },
    'float.contact': { en: 'Contact sales', zh: '联系销售' },
    'common.viewDetails': { en: 'View Details →', zh: '查看详情 →' },
    'common.enquire': { en: 'Enquire →', zh: '询价 →' },

    /* —— Home —— */
    'home.title': { en: 'Gloris Lighting | Decorative Lighting Manufacturer', zh: 'Gloris 灯饰 | 装饰灯具制造商' },
    'hero1.tag': { en: 'Decorative Lighting · B2B Project Supply', zh: '装饰灯具 · B2B 工程供应' },
    'hero1.h1': { en: 'Glass chandelier & pendant collections for hospitality projects.', zh: '面向酒店与工程的玻璃吊灯与枝形灯系列。' },
    'hero1.p': {
      en: 'Factory-direct fixtures engineered in Zhongshan — designed for distributors, hotels and interior programmes.',
      zh: '中山工厂直供灯具，专为经销商、酒店与室内工程项目打造。'
    },
    'hero1.cta1': { en: 'Explore Collections', zh: '浏览系列' },
    'hero1.cta2': { en: 'Request a Wholesale Quote', zh: '申请批发报价' },
    'hero2.tag': { en: 'OEM / ODM · 7–10 Day Sampling', zh: 'OEM / ODM · 7–10 天打样' },
    'hero2.h1': { en: 'From your drawing to a shippable SKU — under one roof.', zh: '从您的图纸到可出货 SKU —— 一站完成。' },
    'hero2.p': {
      en: 'In-house tooling, finishing and certification support for brands across the UK, EU, US and Canada.',
      zh: '自有开模、表面处理与认证支持，服务英、欧、美、加等市场品牌。'
    },
    'hero2.cta1': { en: 'See OEM Process', zh: '了解 OEM 流程' },
    'hero2.cta2': { en: 'Discuss Your Design', zh: '讨论您的设计' },
    'hero3.tag': { en: 'Factory-Direct · Since 2005', zh: '工厂直供 · 始于 2005' },
    'hero3.h1': { en: 'Certified production ready for global customs clearance.', zh: '认证齐全，助力全球清关。' },
    'hero3.p': {
      en: 'CE, RoHS, UL, SAA and ETL documentation prepared with every programme — not after the fact.',
      zh: '每个项目配套 CE、RoHS、UL、SAA、ETL 等文件，而非事后补办。'
    },
    'hero3.cta1': { en: 'View Products', zh: '查看产品' },
    'hero3.cta2': { en: 'Request Compliance Files', zh: '索取合规文件' },

    'svc1.h': { en: 'Wholesale Supply', zh: '批发供应' },
    'svc1.p': {
      en: 'Factory-direct catalogue for distributors and retailers — consistent finishes across repeat orders.',
      zh: '面向经销商与零售商的工厂直供目录，复购批次表面处理一致。'
    },
    'svc1.link': { en: 'Browse catalogue →', zh: '浏览目录 →' },
    'svc2.h': { en: 'Custom Lighting', zh: '定制灯具' },
    'svc2.p': {
      en: 'OEM/ODM from drawings, samples or reference photos. Tooling, sampling and mass production in-house.',
      zh: '按图纸、样品或参考图做 OEM/ODM，开模、打样与量产均在厂内完成。'
    },
    'svc2.link': { en: 'How OEM works →', zh: 'OEM 如何运作 →' },
    'svc3.h': { en: 'Project Support', zh: '工程支持' },
    'svc3.p': {
      en: 'Hospitality and commercial programmes with dedicated lead times and technical documentation.',
      zh: '酒店与商业项目专属交期与技术文件支持。'
    },
    'svc3.link': { en: 'Request a quote →', zh: '立即询价 →' },

    'cat.tag': { en: 'Collections', zh: '产品系列' },
    'cat.title': { en: 'What we manufacture', zh: '我们生产什么' },
    'cat.sub': {
      en: 'Full decorative and architectural spectrum, shipped from in-house production in Guzhen.',
      zh: '覆盖装饰与建筑灯具全品类，由古镇自有工厂发货。'
    },
    'cat1.h': { en: 'Chandeliers', zh: '枝形吊灯' },
    'cat1.p': {
      en: 'Linear, dining and multi-arm configurations for hospitality lobbies and residences.',
      zh: '线性、餐厅与多臂造型，适用于酒店大堂与住宅。'
    },
    'cat2.h': { en: 'Pendant Lighting', zh: '吊灯' },
    'cat2.p': { en: 'Modern minimalist, glass, cluster and staircase variants.', zh: '现代极简、玻璃、组合与楼梯吊灯等。' },
    'cat3.h': { en: 'Wall Lighting', zh: '壁灯' },
    'cat3.p': { en: 'Sconces, linear fixtures and corridor art lighting.', zh: '壁灯、线性灯具与走廊艺术照明。' },
    'cat4.h': { en: 'Ceiling Lighting', zh: '吸顶灯' },
    'cat4.p': { en: 'Flush mount, recessed, decorative and luxury formats.', zh: '吸顶、嵌入、装饰与奢华款式。' },

    'factory.tag': { en: 'Our Factory', zh: '我们的工厂' },
    'factory.h': { en: 'From sketch to shipment — all under one roof', zh: '从草图到发货 —— 一站式完成' },
    'factory.p': {
      en: 'Every fixture is designed, prototyped and manufactured in our own facility in Guzhen, China. Full vertical integration means tighter quality control and faster turnaround.',
      zh: '每盏灯具均在中国古镇自有工厂设计、打样与生产。垂直整合带来更严的质量把控与更快交付。'
    },
    'factory.s1': { en: 'Years Experience', zh: '年行业经验' },
    'factory.s2': { en: 'Countries Served', zh: '服务国家' },
    'factory.s3': { en: 'Lighting Models', zh: '灯具型号' },
    'factory.s4': { en: 'Full Custom Service', zh: '全定制服务' },
    'factory.cta': { en: 'Learn more about our factory', zh: '了解更多工厂信息' },

    'feat.tag': { en: 'Catalogue', zh: '产品目录' },
    'feat.title': { en: 'Featured fixtures', zh: '精选灯具' },
    'feat.sub': {
      en: 'Recently released models selected for distribution, hospitality and custom programmes.',
      zh: '面向分销、酒店与定制项目的最新发布型号。'
    },
    'p1.h': { en: 'Six-Light Globe Chandelier', zh: '六头球形吊灯' },
    'p1.p': { en: 'Iron construction, G9 lamp holders, black & green finish.', zh: '铁艺结构，G9 灯头，黑绿双色表面。' },
    'p1.pShort': { en: 'Iron, G9, black & green', zh: '铁艺、G9、黑绿' },
    'p2.h': { en: 'Cable Globe LED Pendant Series', zh: '线缆球形 LED 吊灯系列' },
    'p2.hShort': { en: 'Cable Globe LED Pendant', zh: '线缆球形 LED 吊灯' },
    'p2.p': { en: '2/4/6-light configurations, red spherical heads.', zh: '2/4/6 头配置，红色球形灯头。' },
    'p2.pShort': { en: '2/4/6-light, red heads', zh: '2/4/6 头，红色灯头' },
    'p3.h': { en: 'White Disc LED Pendant Series', zh: '白色圆盘 LED 吊灯系列' },
    'p3.hShort': { en: 'White Disc LED Pendant', zh: '白色圆盘 LED 吊灯' },
    'p3.p': { en: 'Single, double and triple configurations in iron.', zh: '单头/双头/三头铁艺配置。' },
    'p3.pShort': { en: 'Single/double/triple iron', zh: '单/双/三头铁艺' },
    'p4.h': { en: 'Glass Globe Wall Lamp', zh: '玻璃球形壁灯' },
    'p4.pShort': { en: 'Slim iron, 3-color LED', zh: '纤细铁艺，三色 LED' },
    'feat.all': { en: 'Browse Full Catalogue', zh: '浏览全部产品' },

    'aud.tag': { en: 'Who we serve', zh: '服务对象' },
    'aud.title': { en: 'Sourcing support for your business', zh: '为您的业务提供采购支持' },
    'aud.sub': {
      en: 'Whether you distribute, specify projects or need private-label manufacturing.',
      zh: '无论您是分销、工程指定，还是需要贴牌生产。'
    },
    'aud1.h': { en: 'Distributor / Retailer', zh: '经销商 / 零售商' },
    'aud1.l1': { en: 'Low MOQ trials for new SKUs', zh: '新 SKU 低起订试单' },
    'aud1.l2': { en: 'Retail-ready & private-label packaging', zh: '零售包装与贴牌包装' },
    'aud1.l3': { en: 'Seasonal newness recommendations', zh: '季节性新品推荐' },
    'aud1.link': { en: 'Explore distributor programme →', zh: '了解经销方案 →' },
    'aud2.h': { en: 'Project Buyer / Contractor', zh: '工程采购 / 承包商' },
    'aud2.l1': { en: 'Dedicated project lead times', zh: '专属工程交期' },
    'aud2.l2': { en: 'IES files & install manuals on request', zh: '可提供 IES 文件与安装手册' },
    'aud2.l3': { en: 'Finish matching across fixture types', zh: '跨品类表面处理匹配' },
    'aud2.link': { en: 'Request project quotation →', zh: '申请工程报价 →' },
    'aud3.h': { en: 'OEM / Custom Needs', zh: 'OEM / 定制需求' },
    'aud3.l1': { en: 'Custom from sketch or sample', zh: '按草图或样品定制' },
    'aud3.l2': { en: 'Market-specific wiring & voltage', zh: '适配当地电压与接线标准' },
    'aud3.l3': { en: 'NDA-ready design confidentiality', zh: '可签 NDA，设计保密' },
    'aud3.link': { en: 'Discuss your idea →', zh: '讨论您的想法 →' },

    'proc.tag': { en: 'OEM Process', zh: 'OEM 流程' },
    'proc.title': { en: 'From idea to delivery', zh: '从创意到交付' },
    'proc.titleAbout': { en: 'How our OEM/ODM process works', zh: '我们的 OEM/ODM 流程' },
    'proc.sub': {
      en: 'One controlled path from your first reference image to goods loaded for export.',
      zh: '从第一张参考图到出口装柜，全程可控。'
    },
    'proc1.h': { en: 'Consultation', zh: '沟通评估' },
    'proc1.p': {
      en: 'Share drawings, target market and volume. Feasibility and cost guidance within 24 hours.',
      zh: '提供图纸、目标市场与数量，24 小时内反馈可行性与成本。'
    },
    'proc2.h': { en: 'Sample Development', zh: '打样开发' },
    'proc2.p': {
      en: 'Working samples in 7–10 days. Iterate until finish, size and optics are locked.',
      zh: '7–10 天出样，迭代至表面、尺寸与光学锁定。'
    },
    'proc3.h': { en: 'Mass Production', zh: '批量生产' },
    'proc3.p': {
      en: 'Inline QC at every station, 24-hour aging burn-in, final inspection before packing.',
      zh: '各工位在线质检，24 小时老化，包装前终检。'
    },
    'proc4.h': { en: 'Delivery & Support', zh: '交付与售后' },
    'proc4.p': {
      en: 'FOB / CIF shipping with full export docs. Account manager through after-sales.',
      zh: 'FOB / CIF 出运并配齐出口文件，客户经理跟进售后。'
    },

    'trust.label': { en: 'Certified for global markets', zh: '通过全球市场认证' },

    'faq.tag': { en: 'FAQ', zh: '常见问题' },
    'faq.title': { en: 'Questions buyers ask first', zh: '买家常问的问题' },
    'faq.sub': { en: 'Straight answers on MOQ, OEM, certifications and lead times.', zh: '关于起订量、OEM、认证与交期的直接回答。' },
    'faq1.q': { en: 'Can you provide OEM and ODM lighting services?', zh: '能否提供 OEM / ODM 灯具服务？' },
    'faq1.a': {
      en: 'Yes. We support OEM/ODM from concept, drawings or reference samples through tooling, certification and mass production — all in-house in Guzhen.',
      zh: '可以。我们支持从概念、图纸或参考样到开模、认证与量产的 OEM/ODM，全部在古镇厂内完成。'
    },
    'faq2.q': { en: 'What MOQ do you support?', zh: '起订量（MOQ）是多少？' },
    'faq2.a': {
      en: 'MOQ depends on category and customization. Catalogue items allow flexible trial quantities; OEM programmes typically start from negotiated project volumes.',
      zh: '视品类与定制程度而定。目录产品可灵活试单；OEM 项目通常按协商数量启动。'
    },
    'faq3.q': { en: 'Which certifications are available?', zh: '可提供哪些认证？' },
    'faq3.a': {
      en: 'We prepare CE, RoHS, UL, SAA and ETL documentation by destination market, with test reports maintained per SKU where required.',
      zh: '可按目标市场准备 CE、RoHS、UL、SAA、ETL 等文件，并按需保留各 SKU 测试报告。'
    },
    'faq4.q': { en: 'How fast can I get a sample?', zh: '打样需要多久？' },
    'faq4.a': {
      en: 'Standard sampling runs 7–10 days for most finishes. Complex tooling or new molds may take longer — we confirm timelines at consultation.',
      zh: '常规表面处理打样约 7–10 天。复杂开模或新模具可能更久，沟通阶段会确认交期。'
    },

    'cta.tag': { en: 'Get started', zh: '开始合作' },
    'cta.h': { en: 'Have a project in mind?', zh: '有项目需求？' },
    'cta.p': {
      en: 'Reach out to Alex or Mia directly via WhatsApp or Instagram — pick the specialist that fits your enquiry.',
      zh: '通过 WhatsApp 或 Instagram 直接联系 Alex 或 Mia，选择适合您询盘的销售。'
    },
    'cta.team': { en: 'Meet Our Sales Team', zh: '联系销售团队' },
    'cta.waAlex': { en: 'WhatsApp Alex', zh: 'WhatsApp 联系 Alex' },
    'cta.waMia': { en: 'WhatsApp Mia', zh: 'WhatsApp 联系 Mia' },

    /* —— Products —— */
    'products.title': { en: 'Products | Gloris Lighting', zh: '产品 | Gloris 灯饰' },
    'products.h1': { en: 'Designer Lighting Collections', zh: '设计师灯具系列' },
    'products.sub': {
      en: 'Chandeliers, suspensions, wall, floor and table fixtures for wholesale and project programmes — enquire for pricing.',
      zh: '枝形灯、吊灯、壁灯、落地灯与台灯，面向批发与工程 —— 价格请来询。'
    },
    'filter.all': { en: 'All', zh: '全部' },
    'filter.pendant': { en: 'Pendants', zh: '吊灯' },
    'filter.chandelier': { en: 'Chandeliers', zh: '枝形灯' },
    'filter.wall': { en: 'Wall', zh: '壁灯' },
    'filter.floor': { en: 'Floor', zh: '落地灯' },
    'filter.table': { en: 'Table', zh: '台灯' },
    'filter.ceiling': { en: 'Ceiling', zh: '吸顶灯' },
    'filter.spotlight': { en: 'Spotlights', zh: '射灯 / 轨道' },
    'filter.custom': { en: 'Custom', zh: '定制' },
    'search.ph': { en: 'Search models...', zh: '搜索型号...' },
    'search.label': { en: 'Search products', zh: '搜索产品' },
    'empty': { en: 'No products match your filters. Try another category or keyword.', zh: '没有符合筛选条件的产品，请尝试其他分类或关键词。' },
    'page.next': { en: 'Next →', zh: '下一页 →' },

    'prod.dsp0090.h': { en: 'Six-Light Globe Chandelier', zh: '六头球形吊灯' },
    'prod.dsp0090.p': { en: 'Iron, G9, black & green', zh: '铁艺、G9、黑绿' },
    'prod.dsp0089.h': { en: 'Cable Globe LED Pendant', zh: '线缆球形 LED 吊灯' },
    'prod.dsp0089.p': { en: '2/4/6-light, red heads', zh: '2/4/6 头，红色灯头' },
    'prod.dsp008.h': { en: 'White Disc LED Pendant Series', zh: '白色圆盘 LED 吊灯系列' },
    'prod.dsp008.p': { en: 'Single / double / triple iron', zh: '单/双/三头铁艺' },
    'prod.hct281.h': { en: 'Glass Globe Wall Lamp', zh: '玻璃球形壁灯' },
    'prod.hct281.p': { en: 'Slim iron, 3-color LED', zh: '纤细铁艺，三色 LED' },
    'prod.modernPendant.h': { en: 'Modern Pendant', zh: '现代吊灯' },
    'prod.modernPendant.p': { en: 'Minimalist lines for hotels & residences', zh: '极简线条，适用于酒店与住宅' },
    'prod.glassPendant.h': { en: 'Glass Pendant', zh: '玻璃吊灯' },
    'prod.glassPendant.p': { en: 'Hand-blown & pressed glass shades', zh: '手工吹制与压制玻璃灯罩' },
    'prod.clusterPendant.h': { en: 'Cluster Pendant', zh: '组合吊灯' },
    'prod.clusterPendant.p': { en: 'Multi-drop compositions for bars & lobbies', zh: '多头组合，适用于酒吧与大堂' },
    'prod.staircasePendant.h': { en: 'Staircase Pendant', zh: '楼梯吊灯' },
    'prod.staircasePendant.p': { en: 'Long-drop fixtures for atriums & stairs', zh: '长吊装，适用于中庭与楼梯' },
    'prod.modernChandelier.h': { en: 'Modern Chandelier', zh: '现代枝形灯' },
    'prod.modernChandelier.p': { en: 'Contemporary multi-arm & linear forms', zh: '当代多臂与线性造型' },
    'prod.luxuryChandelier.h': { en: 'Luxury Chandelier', zh: '奢华枝形灯' },
    'prod.luxuryChandelier.p': { en: 'Crystal & glass for villas and hotels', zh: '水晶与玻璃，适用于别墅与酒店' },
    'prod.customChandelier.h': { en: 'Custom Chandelier', zh: '定制枝形灯' },
    'prod.customChandelier.p': { en: 'Bespoke geometry via OEM programme', zh: '通过 OEM 方案定制造型' },
    'prod.linearChandelier.h': { en: 'Linear Chandelier', zh: '线性枝形灯' },
    'prod.linearChandelier.p': { en: 'Dining table & conference formats', zh: '餐桌与会议桌款式' },
    'prod.wallSconce.h': { en: 'Wall Sconce', zh: '壁灯' },
    'prod.wallSconce.p': { en: 'Corridor & guest-room ambient sconces', zh: '走廊与客房氛围壁灯' },
    'prod.modernWall.h': { en: 'Modern Wall Light', zh: '现代壁灯' },
    'prod.modernWall.p': { en: 'Architectural wall fixtures, matched finishes', zh: '建筑壁灯，可配套表面处理' },
    'prod.linearWall.h': { en: 'Linear Wall Light', zh: '线性壁灯' },
    'prod.linearWall.p': { en: 'Horizontal / vertical linear wall wash', zh: '水平/垂直线性洗墙' },
    'prod.pictureArt.h': { en: 'Picture & Art Light', zh: '画灯 / 艺术照明' },
    'prod.pictureArt.p': { en: 'Gallery-grade picture and art lighting', zh: '画廊级画作与艺术照明' },
    'prod.modernCeiling.h': { en: 'Modern Ceiling', zh: '现代吸顶灯' },
    'prod.modernCeiling.p': { en: 'Decorative ceiling for residential & commercial', zh: '住宅与商业装饰吸顶' },
    'prod.flushMount.h': { en: 'Flush Mount', zh: '贴顶吸顶灯' },
    'prod.flushMount.p': { en: 'Low-profile flush mounts for volume projects', zh: '低矮贴顶，适合大批量项目' },
    'prod.recessedCeiling.h': { en: 'Recessed Ceiling', zh: '嵌入式天花灯' },
    'prod.recessedCeiling.p': { en: 'Recessed decorative & architectural formats', zh: '嵌入式装饰与建筑款式' },
    'prod.luxuryCeiling.h': { en: 'Luxury Ceiling', zh: '奢华吸顶灯' },
    'prod.luxuryCeiling.p': { en: 'Statement ceiling fixtures for hospitality', zh: '酒店亮点吸顶灯具' },
    'prod.trackLighting.h': { en: 'Track Lighting', zh: '轨道灯' },
    'prod.trackLighting.p': { en: 'Track systems for retail & galleries', zh: '零售与画廊轨道系统' },
    'prod.recessedSpot.h': { en: 'Recessed Spotlights', zh: '嵌入式射灯' },
    'prod.recessedSpot.p': { en: 'Precision recessed spots for commercial fit-out', zh: '商装精密嵌入射灯' },
    'prod.ceilingSpot.h': { en: 'Ceiling Spotlights', zh: '天花射灯' },
    'prod.ceilingSpot.p': { en: 'Surface-mount ceiling spot fixtures', zh: '明装天花射灯' },
    'prod.adjustableSpot.h': { en: 'Adjustable Spotlights', zh: '可调射灯' },
    'prod.adjustableSpot.p': { en: 'Aimable spots for retail & hospitality', zh: '可调角度，适用于零售与酒店' },
    'prod.customFixtures.h': { en: 'Custom Fixtures', zh: '定制灯具' },
    'prod.customFixtures.p': { en: 'From concept to shippable SKU, 7–10 day prototype', zh: '从概念到可出货 SKU，7–10 天打样' },
    'prod.customPendants.h': { en: 'Custom Pendants', zh: '定制吊灯' },
    'prod.customPendants.p': { en: 'Private-label pendant development', zh: '贴牌吊灯开发' },
    'prod.customWallSconces.h': { en: 'Custom Wall Sconces', zh: '定制壁灯' },
    'prod.customWallSconces.p': { en: 'Matched finishes for project corridors', zh: '工程走廊配套表面处理' },
    'prod.hospitalityCustom.h': { en: 'Hospitality Custom', zh: '酒店定制' },
    'prod.hospitalityCustom.p': { en: 'Hotel / resort full-scope lighting programmes', zh: '酒店 / 度假村全范围照明方案' },

    'prod.talia.h': { en: 'Talia Large Chandelier', zh: 'Talia 大型枝形灯' },
    'prod.talia.p': { en: 'Statement sphere for foyers & dining', zh: '门厅与餐厅亮点球形灯' },
    'prod.collier.h': { en: 'Collier Linear Chandelier', zh: 'Collier 线性枝形灯' },
    'prod.collier.p': { en: 'Long linear form for dining tables', zh: '长线性造型，适用于餐桌' },
    'prod.menil.h': { en: 'Menil Large Chandelier', zh: 'Menil 大型枝形灯' },
    'prod.menil.p': { en: 'Geometric multi-arm, hospitality lobbies', zh: '几何多臂，酒店大堂' },
    'prod.dining.h': { en: 'Dining Room Chandelier', zh: '餐厅枝形灯' },
    'prod.dining.p': { en: 'Warm ambient over dining & islands', zh: '餐桌与中岛暖光氛围' },
    'prod.foyer.h': { en: 'Foyer Statement Chandelier', zh: '门厅亮点枝形灯' },
    'prod.foyer.p': { en: 'Entry & atrium focal fixtures', zh: '入口与中庭焦点灯具' },
    'prod.crystal.h': { en: 'Crystal Luxury Chandelier', zh: '水晶奢华枝形灯' },
    'prod.crystal.p': { en: 'Crystal & glass for villas and hotels', zh: '水晶与玻璃，别墅与酒店' },
    'prod.multiArm.h': { en: 'Multi-Arm Chandelier Family', zh: '多臂枝形灯系列' },
    'prod.multiArm.p': { en: 'Classic multi-arm, scalable configurations', zh: '经典多臂，可扩展配置' },
    'prod.sfera.h': { en: 'Sfera Sphere Chandelier', zh: 'Sfera 球形枝形灯' },
    'prod.sfera.p': { en: 'Sculptural glass spheres, modern lobby', zh: '雕塑感玻璃球，现代大堂' },
    'prod.aether.h': { en: 'Aether Suspension', zh: 'Aether 吊灯' },
    'prod.aether.p': { en: 'Airy single-drop suspension', zh: '轻盈单头吊装' },
    'prod.drape.h': { en: 'Drape Pendant', zh: 'Drape 吊灯' },
    'prod.drape.p': { en: 'Soft draped silhouette for lounges', zh: '柔和垂坠造型，休息区' },
    'prod.cylinder.h': { en: 'Cilindrica Pendant', zh: '圆柱吊灯' },
    'prod.cylinder.p': { en: 'Cylindrical glass / metal suspension', zh: '圆柱玻璃 / 金属吊灯' },
    'prod.aplomb.h': { en: 'Aplomb Concrete Pendant', zh: 'Aplomb 混凝土吊灯' },
    'prod.aplomb.p': { en: 'Cast concrete cone, architectural', zh: '浇筑混凝土锥形，建筑风' },
    'prod.arcWall.h': { en: 'Arc Wall Light', zh: '弧形壁灯' },
    'prod.arcWall.p': { en: 'Articulated arm wall sconce', zh: '可调臂壁灯' },
    'prod.bellWall.h': { en: 'Bell Wall Up Light', zh: 'Bell 上照壁灯' },
    'prod.bellWall.p': { en: 'Upward wash for corridors', zh: '走廊上照洗墙' },
    'prod.arco.h': { en: 'Arco Floor Lamp', zh: 'Arco 落地灯' },
    'prod.arco.p': { en: 'Arc floor for living & lounge', zh: '客厅与休息区弧形落地灯' },
    'prod.bellFloor.h': { en: 'Bell Floor Lamp', zh: 'Bell 落地灯' },
    'prod.bellFloor.p': { en: 'Portable-style floor ambient', zh: '便携风格落地氛围灯' },
    'prod.anima.h': { en: 'Anima Table Light', zh: 'Anima 台灯' },
    'prod.anima.p': { en: 'Desk & bedside table lamp', zh: '书桌与床头台灯' },
    'prod.buds.h': { en: 'Buds Table Light', zh: 'Buds 台灯' },
    'prod.buds.p': { en: 'Soft glass table ambient', zh: '柔和玻璃桌面氛围灯' },

    /* —— About —— */
    'about.title': { en: 'About Us | Gloris Lighting', zh: '关于我们 | Gloris 灯饰' },
    'about.h1': { en: 'About Gloris Lighting', zh: '关于 Gloris 灯饰' },
    'about.sub': {
      en: 'Decorative lighting manufacturer in Zhongshan, China, with 20+ years of OEM/ODM experience.',
      zh: '中国中山装饰灯具制造商，拥有 20+ 年 OEM/ODM 经验。'
    },
    'about.tag': { en: 'Our Story', zh: '我们的故事' },
    'about.h2': { en: 'Built on manufacturing, not assembly', zh: '立足制造，而非组装' },
    'about.p1': {
      en: "Founded in 2005, Gloris Lighting operates a vertically integrated facility in Guzhen, China's lighting capital. From die-casting and CNC machining to surface treatment, wiring and assembly — every step happens under one roof.",
      zh: 'Gloris 灯饰成立于 2005 年，在中国灯都古镇运营垂直整合工厂。从压铸、CNC 加工到表面处理、接线与组装，每一步都在同一厂房完成。'
    },
    'about.p2': {
      en: 'We work with lighting brands, distributors and project buyers across the UK, Canada, US and Europe. Our in-house R&D team of 15 engineers turns design concepts into shippable SKUs with 7–10 day prototype turnaround.',
      zh: '我们服务英国、加拿大、美国与欧洲的灯饰品牌、经销商与工程客户。15 人研发团队可将设计概念在 7–10 天内打样为可出货 SKU。'
    },
    'about.numbers': { en: 'The Factory in Numbers', zh: '工厂数据' },
    'about.founded': { en: 'Founded', zh: '成立年份' },
    'about.area': { en: 'Factory Area', zh: '厂房面积' },
    'about.team': { en: 'Team Members', zh: '团队人数' },
    'about.capacity': { en: 'Monthly Capacity', zh: '月产能' },
    'about.countries': { en: 'Export Countries', zh: '出口国家' },
    'about.compliance': { en: 'Compliance', zh: '合规认证' },
    'about.capTitle': { en: 'Our Capabilities', zh: '我们的能力' },
    'about.capSub': {
      en: 'End-to-end manufacturing support for brands and project buyers.',
      zh: '为品牌与工程客户提供端到端制造支持。'
    },
    'cap1.h': { en: 'OEM / ODM', zh: 'OEM / ODM' },
    'cap1.p': {
      en: 'From engineering drawings, samples or reference photos — tooling, sampling, certification and mass production in-house.',
      zh: '从工程图纸、样品或参考图开始，开模、打样、认证与量产均在厂内完成。'
    },
    'cap2.h': { en: 'Custom Finishes', zh: '定制表面处理' },
    'cap2.p': {
      en: '200+ color options, salt-spray tested to 48+ hours. Built for hotel and hospitality environments.',
      zh: '200+ 颜色可选，盐雾测试 48 小时以上，适用于酒店与酒店业环境。'
    },
    'cap3.h': { en: 'Quality Control', zh: '质量控制' },
    'cap3.p': {
      en: '24-hour aging burn-in test. IQC, IPQC and FQC checkpoints covering 15+ criteria. Defect rate below 0.3%.',
      zh: '24 小时老化测试；IQC、IPQC、FQC 覆盖 15+ 项标准，不良率低于 0.3%。'
    },
    'cap4.h': { en: 'Export Packaging', zh: '出口包装' },
    'cap4.p': {
      en: 'Foam, corner guards and double-wall cartons. Drop-test validated, breakage rate under 0.5%.',
      zh: '泡沫、护角与双层纸箱，跌落测试验证，破损率低于 0.5%。'
    },

    /* —— Contact —— */
    'contact.title': { en: 'Contact | Gloris Lighting', zh: '联系我们 | Gloris 灯饰' },
    'contact.h1': { en: 'Talk to Our Sales Team', zh: '联系销售团队' },
    'contact.sub': {
      en: 'Choose a sales specialist and reach out directly via WhatsApp or Instagram.',
      zh: '选择销售专员，通过 WhatsApp 或 Instagram 直接联系。'
    },
    'sales.tag': { en: 'Sales Specialist', zh: '销售专员' },
    'sales.alex.role': { en: 'Wholesale · Distributors · Catalogue orders', zh: '批发 · 经销商 · 目录订单' },
    'sales.mia.role': { en: 'OEM / ODM · Project & hospitality programmes', zh: 'OEM / ODM · 工程与酒店项目' },
    'sales.wa': { en: 'WhatsApp', zh: 'WhatsApp' },
    'sales.email': { en: 'Email', zh: '邮箱' },
    'sales.lang': { en: 'Languages', zh: '语言' },
    'sales.ig': { en: 'Instagram', zh: 'Instagram' },
    'sales.addrLabel': { en: 'Factory Address', zh: '工厂地址' },
    'sales.addr': { en: 'Guzhen Town, Zhongshan, Guangdong, China', zh: '中国广东省中山市古镇' },
    'sales.hoursLabel': { en: 'Working Hours', zh: '工作时间' },
    'sales.hours': { en: 'Mon–Sat, 9:00–18:00 (GMT+8)', zh: '周一至周六 9:00–18:00（GMT+8）' },
    'sales.oemLabel': { en: 'OEM / ODM', zh: 'OEM / ODM' },
    'sales.oem': { en: 'NDAs signed on request. Your designs stay confidential.', zh: '可按需签署保密协议，您的设计严格保密。' },

    /* —— Detail —— */
    'detail.title': { en: 'DSP0090-6 Six-Light Globe Chandelier | Gloris Lighting', zh: 'DSP0090-6 六头球形吊灯 | Gloris 灯饰' },
    'detail.desc': {
      en: 'Six-light paired globe chandelier with iron construction and G9 lamp holders, shown in black and green for B2B wholesale and interior projects.',
      zh: '六头配对球形吊灯，铁艺结构与 G9 灯头，黑绿配色，适用于 B2B 批发与室内工程。'
    },
    'spec.material': { en: 'Material', zh: '材质' },
    'spec.materialVal': { en: 'Iron, Glass', zh: '铁艺、玻璃' },
    'spec.holder': { en: 'Lamp Holder', zh: '灯头' },
    'spec.config': { en: 'Configurations', zh: '配置' },
    'spec.configVal': { en: '3-light to 8-light', zh: '3 头至 8 头' },
    'spec.finish': { en: 'Finish', zh: '表面处理' },
    'spec.finishVal': { en: 'Black, Green (custom available)', zh: '黑色、绿色（可定制）' },
    'spec.app': { en: 'Application', zh: '适用场景' },
    'spec.appVal': { en: 'Stairwells, Villas, Hotels, Restaurants', zh: '楼梯间、别墅、酒店、餐厅' },
    'spec.cert': { en: 'Certification', zh: '认证' }
  };

  function t(key, lang) {
    var row = dict[key];
    if (!row) return null;
    return row[lang] || row.en || null;
  }

  function applyLang(lang) {
    lang = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key, lang);
      if (val == null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-placeholder'), lang);
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var val = t(el.getAttribute('data-i18n-aria'), lang);
      if (val != null) el.setAttribute('aria-label', val);
    });

    var page = document.body && document.body.getAttribute('data-page');
    if (page) {
      var title = t(page + '.title', lang);
      if (title) document.title = title;
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      saved = (navigator.language || '').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
    }
    applyLang(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.YB_I18N = { applyLang: applyLang, t: t };
})();
