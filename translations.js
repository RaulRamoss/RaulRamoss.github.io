const translations = {
  en: {
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.resume': 'Resume', 'nav.contact': 'Contact',
    'hero.eyebrow': 'BI & Analytics Engineer',
    'hero.description': 'Building the data layer behind the decisions — pipelines, models, and dashboards that turn raw data into something teams can actually trust and use.',
    'hero.cta': 'View Projects',
    'about.title': 'About',
    'about.p1': 'Analytics Engineer with 5+ years turning messy data into reliable, decision-ready products. I work across the full stack — modeling data in SQL, building ETL pipelines in Python, and delivering dashboards that executives actually use. Most of my career has been at large Brazilian financial institutions (Santander & Itaú), where I owned KPI layers, metrics stores, and BI infrastructure at scale.',
    'about.p2': 'This portfolio showcases some of the BI work I can share publicly. All projects use fictional data — professional work stays confidential.',
    'projects.title': 'Projects',
    'card.viewmore': 'View Project →',
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
    'nav.about': 'Sobre', 'nav.projects': 'Projetos', 'nav.resume': 'Currículo', 'nav.contact': 'Contato',
    'hero.eyebrow': 'BI & Analytics Engineer',
    'hero.description': 'Construindo a camada de dados por trás das decisões — pipelines, modelos e dashboards que transformam dados brutos em algo em que os times possam confiar e usar de verdade.',
    'hero.cta': 'Ver Projetos',
    'about.title': 'Sobre',
    'about.p1': 'Analytics Engineer com mais de 5 anos transformando dados em produtos confiáveis e prontos para decisão. Atuo em toda a stack — modelagem em SQL, construção de pipelines ETL em Python e entrega de dashboards usados por executivos. A maior parte da minha carreira foi em grandes instituições financeiras brasileiras (Santander & Itaú), onde fui responsável por camadas de KPIs, metrics stores e infraestrutura de BI em escala.',
    'about.p2': 'Este portfólio apresenta parte do trabalho de BI que posso compartilhar publicamente. Todos os projetos utilizam dados fictícios — trabalhos profissionais são confidenciais.',
    'projects.title': 'Projetos',
    'card.viewmore': 'Ver Projeto →',
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
