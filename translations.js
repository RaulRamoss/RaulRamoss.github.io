const translations = {
  en: {
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.resume': 'Resume', 'nav.contact': 'Contact', 'nav.backlink': 'Back to Projects',
    'section.features': 'Key Features', 'section.features.metrics': 'Key Features & Metrics', 'section.dashboard': 'Dashboard',
    'section.howit': 'How It Works', 'section.tabs': 'Response Tabs', 'section.stack': 'Tech Stack',
    'section.preview': 'Live Preview', 'section.inside': 'What\'s Inside',
    'proj.sbi.desc': 'Dashboard developed as part of a technical assessment for a Senior BI Analyst position. The goal was to showcase advanced Power BI capabilities including field parameters, custom tooltips, and interactive filters — all within a production-ready, clean layout.',
    'proj.hashtag.desc': 'Sales and invoicing dashboard designed to analyze sales performance and compare revenue against targets set for each period. Built for a fictional retail store using data from a small Excel database, with emphasis on visual clarity and interactive exploration.',
    'proj.rauls.desc': 'Sales and returns dashboard built for a fictional retail chain. The main objective is to track revenue performance across store locations while monitoring return rates and identifying top customers — enabling data-driven decisions to optimize both sales strategy and customer experience.',
    'proj.tracking.desc': 'Project monitoring dashboard designed to track a portfolio of projects and provide insights on actions to improve their performance and management. Covers the full pipeline from opportunity through closure, comparing planned vs. actual values to surface bottlenecks and guide decision-making.',
    'proj.financial.desc': 'Financial control dashboard built to monitor the financial health of a fictional store chain. Provides insights into revenue, payments, and profitability with geographic breakdowns to help identify which locations drive the most value and where optimization is needed.',
    'proj.hr.desc': 'Human resources dashboard providing a comprehensive view of the workforce. The main objective is HR control — delivering insights into headcount, turnover, hiring trends, and overtime. Tooltip interactions on bar charts surface overtime hours by position without cluttering the main view.',
    'proj.sales.desc': 'Sales monitoring dashboard for a fictional store, designed to track revenue volume and provide insights to optimize performance. Covers product-level and brand-level analysis alongside a continental revenue breakdown, giving a global perspective on where sales are concentrated.',
    'proj.astra.desc': 'An AI-powered data analyst that lets you query a Brazilian e-commerce database using plain Portuguese. Ask any business question and get back a natural-language insight, an auto-generated chart, the SQL that ran, and the raw data — all powered by Claude Haiku and DuckDB. Built as my MBA thesis at FIAP.',
    'proj.sanitrix.desc': 'Institutional website built for a nutrition consultancy. Designed to convey professionalism and trust, with a clean layout that presents services, credentials, and contact options clearly. Built with a focus on mobile-first responsiveness and deployed on Netlify.',
    'hero.eyebrow': 'Analytics Engineer',
    'hero.description': 'Building the data layer behind the decisions — pipelines, models, and dashboards that turn raw data into something teams can actually trust and use.',
    'hero.cta': 'View Projects',
    'about.title': 'About',
    'about.p1': 'Analytics Engineer with 5+ years turning messy data into reliable, decision-ready products. I work across the full stack — modeling data in SQL, building ETL pipelines in Python, and delivering dashboards that executives actually use. Most of my career has been at large Brazilian financial institutions (Santander & Itaú), where I owned KPI layers, metrics stores, and BI infrastructure at scale.',
    'about.p2': 'This portfolio showcases some of the BI work I can share publicly. All projects use fictional data — professional work stays confidential.',
    'projects.title': 'Projects',
    'card.viewmore': 'View Project →',
    'card.astra.tag': 'AI Agent · MBA Thesis', 'card.astra.title': 'Astra — AI Data Analyst', 'card.astra.desc': 'AI-powered data analyst that converts plain Portuguese questions into SQL, executes them on a Brazilian e-commerce database, and returns a natural-language insight, an auto-generated chart, the SQL, and the raw data — built with Claude Haiku and DuckDB as my MBA thesis at FIAP.',
    'card.sanitrix.tag': 'Website · Nutrition', 'card.sanitrix.title': 'Sanitrix', 'card.sanitrix.desc': 'Institutional website built for a nutrition consultancy. Features a clean, modern design with service descriptions, professional profile, and contact form — fully responsive and deployed on Netlify.',
    'card.sbi.tag': 'BI Assessment', 'card.sbi.desc': 'Dashboard developed as part of a technical assessment for a Senior BI Analyst position, featuring advanced field parameters, custom tooltips and interactive filters.',
    'card.hashtag.tag': 'Retail · Sales', 'card.hashtag.desc': 'Sales and invoicing dashboard to analyze revenue and compare results against targets, with custom hover tooltips and a scrolling store-performance chart.',
    'card.rauls.tag': 'Retail · Returns', 'card.rauls.desc': 'Sales and returns dashboard tracking revenue, profit, top customers, and return rates across store locations for a fictional retail chain.',
    'card.tracking.tag': 'Project Management', 'card.tracking.title': 'Projects Tracking', 'card.tracking.desc': 'Project monitoring dashboard providing insights on pipeline stages, monetary vs. actual values, and closure trends to improve portfolio management.',
    'card.financial.tag': 'Finance', 'card.financial.desc': 'Financial control dashboard monitoring revenues, payments, profit margin, and monthly profit across store locations with city-level filtering.',
    'card.hr.tag': 'Human Resources', 'card.hr.desc': 'HR dashboard providing workforce insights including headcount, turnover rate, gender distribution, hiring trends, and overtime hours by position.',
    'card.sales.tag': 'Retail · Sales', 'card.sales.desc': 'Sales monitoring dashboard tracking total revenue, top products and brands, and continental revenue distribution for a fictional store.',
    'resume.title': 'Resume', 'resume.experience': 'Experience', 'resume.skills': 'Technical Skills', 'resume.education': 'Education',
    'resume.summary': "Analytics Engineer with 5+ years building data pipelines, self-serve analytics platforms, and BI infrastructure at two of Brazil's largest financial institutions (Santander & Itaú). Specializes in translating ambiguous business problems into reliable, scalable data products — from ETL design to executive-facing dashboards. Comfortable owning the full stack: SQL modeling, Python automation, and stakeholder enablement. Available for remote roles (UTC-3).",
    'exp.s2.b1': 'Redesigned the Open Finance KPI layer in SQL/PySpark, reducing dashboard refresh time by ~60% and enabling real-time monitoring for 3 executive squads.',
    'exp.s2.b2': 'Built a Python-based ETL framework (REST API → data warehouse) that replaced 4 manual processes, saving ~12 analyst hours/week.',
    'exp.s2.b3': 'Architected a centralized metrics store that became the single source of truth for 8 cross-functional teams, eliminating reporting discrepancies.',
    'exp.s2.b4': 'Mentored 3 junior analysts into independent contributors; introduced code review practices that cut production data bugs by 40%.',
    'exp.s1.b1': 'Designed and owned 15+ KPIs tracking Open Finance adoption across Brazil, directly informing product prioritization for a portfolio serving millions of customers.',
    'exp.s1.b2': 'Delivered a suite of Tableau/Power BI dashboards that consolidated data from 6 source systems, used weekly by C-level stakeholders.',
    'exp.s1.b3': 'Automated a regulatory data-reconciliation process in Python, reducing a 3-day monthly effort to under 4 hours.',
    'exp.it.b1': 'Built optimization models (Python + SQL) to determine the ideal ATM equipment mix across ~4,500 branches in Brazil, improving equipment availability and reducing idle stock.',
    'exp.it.b2': 'Developed interactive sales dashboards adopted by 200+ branch managers nationwide, giving field teams daily visibility into product performance for the first time.',
    'exp.it.b3': 'Migrated 10+ legacy Excel-based reports to automated pipelines, cutting report generation from days to minutes and improving data accuracy.',
    'exp.it.b4': 'Analyzed ATM transaction trends across 5 product lines, surfacing insights that contributed to double-digit growth in digital product adoption.',
    'skill.query': 'Languages & Query', 'skill.eng': 'Data Engineering', 'skill.bi': 'BI & Visualization', 'skill.infra': 'Infrastructure', 'skill.lang': 'Spoken Languages',
    'edu.bs': 'B.S. in Computer Science',
    'contact.title': 'Contact',
    'footer.copy': '© 2025 Raul Ramos. All projects use fictional data for educational purposes.',
  },
  pt: {
    'nav.about': 'Sobre', 'nav.projects': 'Projetos', 'nav.resume': 'Currículo', 'nav.contact': 'Contato', 'nav.backlink': 'Voltar para Projetos',
    'section.features': 'Funcionalidades', 'section.features.metrics': 'Funcionalidades & Métricas', 'section.dashboard': 'Dashboard',
    'section.howit': 'Como Funciona', 'section.tabs': 'Abas de Resposta', 'section.stack': 'Stack Tecnológica',
    'section.preview': 'Preview ao Vivo', 'section.inside': 'O que está incluído',
    'proj.sbi.desc': 'Dashboard desenvolvido como parte de uma avaliação técnica para uma posição de Senior BI Analyst. O objetivo foi demonstrar capacidades avançadas do Power BI, incluindo parâmetros de campo, tooltips personalizados e filtros interativos — tudo em um layout limpo e pronto para produção.',
    'proj.hashtag.desc': 'Dashboard de vendas e faturamento projetado para analisar o desempenho de vendas e comparar receita com as metas definidas para cada período. Desenvolvido para uma loja fictícia com dados de uma base Excel, com foco em clareza visual e exploração interativa.',
    'proj.rauls.desc': 'Dashboard de vendas e devoluções desenvolvido para uma rede de varejo fictícia. O objetivo é acompanhar o desempenho de receita por localização de loja, monitorando taxas de retorno e identificando os principais clientes — para decisões baseadas em dados que otimizem vendas e experiência do cliente.',
    'proj.tracking.desc': 'Dashboard de monitoramento de projetos criado para acompanhar um portfólio e fornecer insights sobre ações que melhorem desempenho e gestão. Cobre todo o pipeline, da oportunidade ao fechamento, comparando valores planejados vs. realizados para identificar gargalos e orientar a tomada de decisão.',
    'proj.financial.desc': 'Dashboard de controle financeiro desenvolvido para monitorar a saúde financeira de uma rede de lojas fictícia. Fornece insights sobre receita, pagamentos e lucratividade com segmentação geográfica para identificar quais localizações geram mais valor e onde otimizações são necessárias.',
    'proj.hr.desc': 'Dashboard de recursos humanos que oferece uma visão abrangente do quadro de colaboradores. O objetivo é o controle de RH — fornecendo insights sobre headcount, turnover, tendências de contratação e horas extras. Tooltips nos gráficos de barras revelam horas extras por cargo sem sobrecarregar a visualização principal.',
    'proj.sales.desc': 'Dashboard de monitoramento de vendas para uma loja fictícia, criado para acompanhar o volume de receita e fornecer insights para otimizar o desempenho. Cobre análises por produto e marca, além de uma segmentação de receita por continente, oferecendo uma perspectiva global de onde as vendas estão concentradas.',
    'proj.astra.desc': 'Analista de dados com IA que permite consultar um banco de dados de e-commerce brasileiro em português natural. Faça qualquer pergunta de negócio e receba de volta uma análise em linguagem natural, um gráfico gerado automaticamente, o SQL executado e os dados brutos — tudo com Claude Haiku e DuckDB. Desenvolvido como meu TCC no MBA da FIAP.',
    'proj.sanitrix.desc': 'Site institucional desenvolvido para uma consultoria de nutrição. Desenhado para transmitir profissionalismo e confiança, com um layout limpo que apresenta serviços, credenciais e opções de contato de forma clara. Desenvolvido com foco em responsividade mobile-first e hospedado no Netlify.',
    'hero.eyebrow': 'Analytics Engineer',
    'hero.description': 'Construindo a camada de dados por trás das decisões — pipelines, modelos e dashboards que transformam dados brutos em algo em que os times possam confiar e usar de verdade.',
    'hero.cta': 'Ver Projetos',
    'about.title': 'Sobre',
    'about.p1': 'Analytics Engineer com mais de 5 anos transformando dados em produtos confiáveis e prontos para decisão. Atuo em toda a stack — modelagem em SQL, construção de pipelines ETL em Python e entrega de dashboards usados por executivos. A maior parte da minha carreira foi em grandes instituições financeiras brasileiras (Santander & Itaú), onde fui responsável por camadas de KPIs, metrics stores e infraestrutura de BI em escala.',
    'about.p2': 'Este portfólio apresenta parte do trabalho de BI que posso compartilhar publicamente. Todos os projetos utilizam dados fictícios — trabalhos profissionais são confidenciais.',
    'projects.title': 'Projetos',
    'card.viewmore': 'Ver Projeto →',
    'card.astra.tag': 'Agente IA · TCC FIAP', 'card.astra.title': 'Astra — Analista de Dados IA', 'card.astra.desc': 'Analista de dados com IA que converte perguntas em português para SQL, executa no banco de e-commerce brasileiro e retorna um insight em linguagem natural, gráfico gerado automaticamente, o SQL e os dados brutos — construído com Claude Haiku e DuckDB como meu TCC no MBA da FIAP.',
    'card.sanitrix.tag': 'Site · Nutrição', 'card.sanitrix.title': 'Sanitrix', 'card.sanitrix.desc': 'Site institucional construído para uma consultoria de nutrição. Design moderno e limpo com descrição dos serviços, perfil profissional e formulário de contato — totalmente responsivo e publicado no Netlify.',
    'card.sbi.tag': 'Avaliação Técnica', 'card.sbi.desc': 'Dashboard desenvolvido como parte de uma avaliação técnica para uma posição de Senior BI Analyst, com parâmetros de campo avançados, tooltips customizados e filtros interativos.',
    'card.hashtag.tag': 'Varejo · Vendas', 'card.hashtag.desc': 'Dashboard de vendas e faturamento para análise de receita e comparação com metas, com tooltips customizados e gráfico scrollável de desempenho por loja.',
    'card.rauls.tag': 'Varejo · Devoluções', 'card.rauls.desc': 'Dashboard de vendas e devoluções rastreando receita, lucro, principais clientes e taxa de retorno por loja para uma rede de varejo fictícia.',
    'card.tracking.tag': 'Gestão de Projetos', 'card.tracking.title': 'Acompanhamento de Projetos', 'card.tracking.desc': 'Dashboard de monitoramento de projetos com visibilidade sobre estágios do pipeline, valor planejado vs. realizado e tendências de fechamento.',
    'card.financial.tag': 'Finanças', 'card.financial.desc': 'Dashboard de controle financeiro monitorando receitas, pagamentos, margem de lucro e lucro mensal por localização, com filtro por cidade.',
    'card.hr.tag': 'Recursos Humanos', 'card.hr.desc': 'Dashboard de RH com visibilidade sobre headcount, turnover, distribuição de gênero, tendências de contratação e horas extras por cargo.',
    'card.sales.tag': 'Varejo · Vendas', 'card.sales.desc': 'Dashboard de monitoramento de vendas rastreando receita total, produtos e marcas mais vendidos e distribuição de receita por continente.',
    'resume.title': 'Currículo', 'resume.experience': 'Experiência', 'resume.skills': 'Habilidades Técnicas', 'resume.education': 'Formação',
    'resume.summary': 'Analytics Engineer com mais de 5 anos construindo pipelines de dados, plataformas de analytics self-service e infraestrutura de BI em duas das maiores instituições financeiras do Brasil (Santander & Itaú). Especializado em transformar problemas de negócio complexos em produtos de dados confiáveis e escaláveis — do design de ETL a dashboards para executivos. Confortável com a stack completa: modelagem SQL, automação em Python e habilitação de stakeholders. Disponível para posições remotas (UTC-3).',
    'exp.s2.b1': 'Redesenhou a camada de KPIs do Open Finance em SQL/PySpark, reduzindo o tempo de atualização dos dashboards em ~60% e habilitando monitoramento em tempo real para 3 squads executivos.',
    'exp.s2.b2': 'Construiu um framework ETL em Python (REST API → data warehouse) que substituiu 4 processos manuais, economizando ~12 horas de analistas por semana.',
    'exp.s2.b3': 'Arquitetou um metrics store centralizado que se tornou a fonte única da verdade para 8 times cross-funcionais, eliminando discrepâncias nos relatórios.',
    'exp.s2.b4': 'Mentorou 3 analistas juniores; introduziu práticas de code review que reduziram bugs de dados em produção em 40%.',
    'exp.s1.b1': 'Projetou e manteve 15+ KPIs rastreando a adoção do Open Finance no Brasil, informando diretamente a priorização de produto para um portfólio com milhões de clientes.',
    'exp.s1.b2': 'Entregou uma suite de dashboards Tableau/Power BI consolidando dados de 6 sistemas, usada semanalmente por stakeholders C-level.',
    'exp.s1.b3': 'Automatizou um processo de reconciliação regulatória em Python, reduzindo um esforço mensal de 3 dias para menos de 4 horas.',
    'exp.it.b1': 'Construiu modelos de otimização (Python + SQL) para definir o mix ideal de equipamentos ATM em ~4.500 agências no Brasil, melhorando disponibilidade e reduzindo estoque ocioso.',
    'exp.it.b2': 'Desenvolveu dashboards de vendas interativos adotados por 200+ gerentes de agência em todo o país, oferecendo visibilidade diária ao desempenho de produtos pela primeira vez.',
    'exp.it.b3': 'Migrou 10+ relatórios legados em Excel para pipelines automatizados, reduzindo a geração de relatórios de dias para minutos e melhorando a precisão dos dados.',
    'exp.it.b4': 'Analisou tendências de transações ATM em 5 linhas de produto, gerando insights que contribuíram para crescimento de dois dígitos na adoção de produtos digitais.',
    'skill.query': 'Linguagens & Consulta', 'skill.eng': 'Engenharia de Dados', 'skill.bi': 'BI & Visualização', 'skill.infra': 'Infraestrutura', 'skill.lang': 'Idiomas',
    'edu.bs': 'Bacharelado em Ciência da Computação',
    'contact.title': 'Contato',
    'footer.copy': '© 2025 Raul Ramos. Todos os projetos utilizam dados fictícios para fins educacionais.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  apply();
  updateBtns();
}

function apply() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });
}

function updateBtns() {
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

document.addEventListener('DOMContentLoaded', () => { apply(); updateBtns(); });
