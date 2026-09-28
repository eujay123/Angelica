import { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Clock,
  BarChart3,
  Monitor,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Download,
  Menu,
  X,
  BookOpen,
  Shield,
  Calculator,
  TrendingUp,
  Users,
  Award,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const HERO_IMAGE = 'https://image.qwenlm.ai/generated-images/526f7b22-4d86-4a31-bf96-804cd651b011/_result.png';
const AVATAR_IMAGE = 'https://image.qwenlm.ai/generated-images/139515f9-fe77-4ceb-975f-fd633e4c660e/_result.png';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['sobre', 'experiencia', 'competencias', 'formacao'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#competencias', label: 'Competências' },
    { href: '#formacao', label: 'Formação' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FBF6EC]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-[#1A1A1A]">António Machel</span>
          <span className="text-xs text-[#4A4A4A] tracking-wide">Contabilista Certificado</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#F2B632] ${
                activeSection === link.href.slice(1) ? 'text-[#F2B632]' : 'text-[#4A4A4A]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="flex items-center gap-2 bg-[#F2B632] hover:bg-[#D9A22C] text-[#1A1A1A] font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md"
          >
            <Download size={16} />
            Descarregar CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu de navegação"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FBF6EC] border-t border-[#D9D2C3] px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-[#4A4A4A] hover:text-[#F2B632]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="flex items-center gap-2 bg-[#F2B632] text-[#1A1A1A] font-semibold text-sm px-5 py-2.5 rounded-lg w-fit"
            onClick={() => setMobileOpen(false)}
          >
            <Download size={16} />
            Descarregar CV
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { ref, isVisible } = useInView();
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 bg-[#FBF6EC]">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-[#1A1A1A] mb-6">
            Apoio Fiscal e Financeiro Rigoroso para o Crescimento da Sua Empresa
          </h1>
          <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed mb-8 max-w-lg">
            Contabilista com mais de 4 anos de experiência em fiscalidade, planeamento financeiro
            e conformidade, ajudando empresas a reduzir custos e a decidir com base em números fiáveis.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1A1A1A] hover:text-[#FBF6EC] transition-all duration-200"
            >
              Ver Experiência
              <ArrowRight size={16} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#F2B632] hover:bg-[#D9A22C] text-[#1A1A1A] font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-md"
            >
              <Download size={16} />
              Descarregar CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F2B632]/10 rounded-2xl -z-10"></div>
            <img
              src={HERO_IMAGE}
              alt="António Machel, Contabilista Certificado - fotografia profissional"
              className="w-full max-w-[380px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityBar() {
  const { ref, isVisible } = useInView();
  const items = [
    { icon: <FileText size={28} />, text: 'Membro da Ordem dos Contabilistas' },
    { icon: <Clock size={28} />, text: '+4 Anos de Experiência' },
    { icon: <Monitor size={28} />, text: 'SAP, Primavera & PHC Proficiente' },
    { icon: <BarChart3 size={28} />, text: 'Foco em Fiscalidade Empresarial' },
  ];

  return (
    <section className="bg-[#F3EBDC] py-12">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-[#FBF6EC] rounded-xl border border-[#D9D2C3] shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-[#F2B632] mb-3">{item.icon}</div>
            <span className="text-xs md:text-sm font-semibold text-[#1A1A1A] uppercase tracking-wide leading-snug">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const { ref, isVisible } = useInView();
  return (
    <section id="sobre" className="py-20 bg-[#FBF6EC]">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 grid md:grid-cols-[280px_1fr] gap-12 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#F2B632]/15 rounded-full -z-10"></div>
            <img
              src={AVATAR_IMAGE}
              alt="António Machel - fotografia de rosto"
              className="w-56 h-56 rounded-full object-cover border-4 border-[#D9D2C3] shadow-md"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
            Comprometido com a Ética, Rigor e Conformidade
          </h2>
          <p className="text-[#4A4A4A] leading-relaxed mb-4">
            A minha prática contabilística assenta em três pilares: transparência, precisão e
            antecipação. Ao longo de mais de quatro anos, trabalhei com PME e empresas de média
            dimensão nos sectores de comércio, serviços e indústria, garantindo que cada demonstração
            financeira reflete a realidade do negócio e que cada obrigação fiscal é cumprida dentro
            do prazo.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            O meu objectivo não é apenas fechar contas — é entregar informação que permita à
            administração tomar decisões informadas, optimizar a carga fiscal dentro da lei e
            preparar a empresa para crescer com segurança. Trabalho com normas IFRS, conheço o
            PGC-NIR e domino os principais softwares de gestão utilizados em Moçambique.
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { ref, isVisible } = useInView();
  const jobs = [
    {
      title: 'Contabilista Sénior',
      company: 'Gestão & Consultoria, Lda.',
      period: '2022 – Presente',
      bullets: [
        'Reduziu custos fiscais em 18% através de planeamento estratégico de IRPC e IVA, aproveitando benefícios legais para o sector.',
        'Implementou processo de reconciliação bancária automatizada, reduzindo o tempo de fecho mensal de 8 para 3 dias úteis.',
        'Geriu carteira de 12 empresas clientes, assegurando cumprimento integral de obrigações fiscais e entrega atempada de declarações.',
      ],
    },
    {
      title: 'Contabilista',
      company: 'MozaTech Soluções, S.A.',
      period: '2020 – 2022',
      bullets: [
        'Liderou a migração do sistema contabilístico para SAP Business One, com zero interrupção nas operações diárias.',
        'Identificou e corrigiu divergências fiscais de 3 exercícios anteriores, evitando coimas estimadas em 450.000 MZN.',
        'Elaborou relatórios de gestão trimestrais que serviram de base para decisões de investimento totalizando 12 milhões MZN.',
      ],
    },
    {
      title: 'Assistente Contabilístico',
      company: 'Fidelidade – Seguros de Moçambique',
      period: '2019 – 2020',
      bullets: [
        'Processou mais de 200 lançamentos mensais com taxa de erro inferior a 0,5%, contribuindo para auditoria sem ressalvas.',
        'Apoiou a preparação das demonstrações financeiras anuais em conformidade com IFRS.',
      ],
    },
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#F3EBDC]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            Experiência & Conquistas
          </h2>
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="bg-[#FBF6EC] rounded-xl border border-[#D9D2C3] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{job.title}</h3>
                    <p className="text-sm text-[#4A4A4A]">
                      {job.company} <span className="text-[#F2B632] font-medium">•</span>{' '}
                      <span className="font-medium">{job.period}</span>
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                      <CheckCircle2 size={16} className="text-[#F2B632] mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { ref, isVisible } = useInView();
  const accountingSkills = [
    { icon: <Calculator size={18} />, text: 'Contabilidade Geral & Analítica' },
    { icon: <BookOpen size={18} />, text: 'Fiscalidade (IVA, IRPC, IRPS)' },
    { icon: <Shield size={18} />, text: 'Normas IFRS & PGC-NIR' },
    { icon: <Users size={18} />, text: 'Auditoria Interna & Reconciliações' },
    { icon: <TrendingUp size={18} />, text: 'Planeamento & Controlo Orçamental' },
    { icon: <FileText size={18} />, text: 'Demonstrações Financeiras' },
  ];

  const softwareSkills = [
    { name: 'SAP', icon: <Monitor size={20} /> },
    { name: 'Primavera', icon: <Monitor size={20} /> },
    { name: 'PHC', icon: <Monitor size={20} /> },
    { name: 'Excel Avançado', icon: <BarChart3 size={20} /> },
    { name: 'Power BI', icon: <BarChart3 size={20} /> },
    { name: 'QuickBooks', icon: <Calculator size={20} /> },
    { name: 'Outlook', icon: <Mail size={20} /> },
    { name: 'Sistema e-fatura', icon: <FileText size={20} /> },
  ];

  return (
    <section id="competencias" className="py-20 bg-[#FBF6EC]">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          Competências & Ferramentas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-[#FBF6EC] rounded-xl border border-[#D9D2C3] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
              <Award size={20} className="text-[#F2B632]" />
              Contabilidade & Fiscalidade
            </h3>
            <ul className="space-y-4">
              {accountingSkills.map((skill, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-[#4A4A4A]">
                  <span className="text-[#F2B632]">{skill.icon}</span>
                  <span>{skill.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-[#FBF6EC] rounded-xl border border-[#D9D2C3] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
              <Monitor size={20} className="text-[#F2B632]" />
              Software & Tecnologia
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softwareSkills.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-[#F3EBDC] rounded-lg border border-[#D9D2C3]/50"
                >
                  <span className="text-[#F2B632]">{tool.icon}</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const { ref, isVisible } = useInView();
  const items = [
    {
      icon: <GraduationCap size={20} />,
      title: 'Licenciatura em Contabilidade e Auditoria',
      detail: '2015 – 2019, Universidade Eduardo Mondlane, Maputo',
    },
    {
      icon: <Award size={20} />,
      title: 'Membro da Ordem dos Contabilistas e Auditores de Moçambique (OCAM)',
      detail: 'Nº de Membro: 4872',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Certificação em Normas IFRS',
      detail: '2021, ACCA – Association of Chartered Certified Accountants',
    },
    {
      icon: <Shield size={20} />,
      title: 'Formação em Auditoria Financeira',
      detail: '2022, Instituto de Auditores Internos',
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: 'Fiscalidade Avançada – IRPC e IVA',
      detail: '2023, Centro de Formação Contínua da OCAM',
    },
  ];

  return (
    <section id="formacao" className="py-20 bg-[#F3EBDC]">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-12">
          Formação & Certificações
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-[#FBF6EC] rounded-xl border border-[#D9D2C3] p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-[#F2B632] mt-0.5 flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="text-xs text-[#4A4A4A] mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, isVisible } = useInView();
  const contacts = [
    { icon: <Mail size={18} />, label: 'antonio.machel@email.co.mz', href: 'mailto:antonio.machel@email.co.mz' },
    { icon: <Phone size={18} />, label: '+258 84 123 4567', href: 'tel:+258841234567' },
    { icon: <Linkedin size={18} />, label: 'linkedin.com/in/antoniomachel', href: 'https://linkedin.com/in/antoniomachel' },
    { icon: <MapPin size={18} />, label: 'Maputo, Moçambique', href: '#' },
  ];

  return (
    <section id="contacto" className="py-20 bg-[#F3EBDC]">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="bg-[#FBF6EC] rounded-2xl border border-[#D9D2C3] p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                Procura um contabilista rigoroso para a sua equipa?
              </h2>
              <p className="text-[#4A4A4A] text-sm mb-8 leading-relaxed">
                Estou disponível para novas oportunidades. Entre em contacto para conversarmos
                sobre como posso contribuir para os objectivos da sua empresa.
              </p>
              <ul className="space-y-4">
                {contacts.map((contact, i) => (
                  <li key={i}>
                    <a
                      href={contact.href}
                      className="flex items-center gap-3 text-sm text-[#4A4A4A] hover:text-[#F2B632] transition-colors"
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="text-[#F2B632]">{contact.icon}</span>
                      <span>{contact.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <a
                href="mailto:antonio.machel@email.co.mz"
                className="inline-flex items-center gap-3 bg-[#F2B632] hover:bg-[#D9A22C] text-[#1A1A1A] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <Mail size={20} />
                Falar Comigo
              </a>
              <a
                href="https://wa.me/258841234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#4A4A4A] hover:text-[#F2B632] transition-colors"
              >
                <Phone size={16} />
                Ou envie mensagem via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-[#D9D2C3] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4A4A4A]">
            © {new Date().getFullYear()} António Machel. Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-[#F2B632] hover:bg-[#D9A22C] text-[#1A1A1A] font-semibold text-xs px-4 py-2 rounded-lg transition-all duration-200"
          >
            <Download size={14} />
            Descarregar CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-[#FBF6EC] text-[#1A1A1A]">
      <Navbar />
      <Hero />
      <CredibilityBar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
