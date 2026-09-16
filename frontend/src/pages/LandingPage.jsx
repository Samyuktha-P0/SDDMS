import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Files,
  LockKeyhole,
  ScanText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const features = [
  { icon: LockKeyhole, title: 'Secure by default', text: 'Permission-aware storage, encryption, and controlled access for sensitive records.' },
  { icon: ScanText, title: 'Extract what matters', text: 'Turn scanned documents into searchable text with OCR-ready workflows.' },
  { icon: FileSearch, title: 'Find it instantly', text: 'Search across documents, cases, evidence, and audit history from one workspace.' },
  { icon: ShieldCheck, title: 'Always accountable', text: 'Version history and tamper-evident audit trails keep every action visible.' },
];

export const LandingPage = () => (
  <div className="landing-page min-h-screen overflow-hidden bg-slate-950 text-slate-100">
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <Link to="/" className="flex items-center gap-3" aria-label="Secure Digital Document Management System home">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/30">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <span className="hidden text-sm font-bold tracking-tight text-white sm:block">Secure Document Management</span>
      </Link>
      <nav className="flex items-center gap-3 text-sm">
        <a href="#capabilities" className="hidden text-slate-300 transition hover:text-white sm:block">Capabilities</a>
        <Link to="/login" className="rounded-xl border border-white/15 px-4 py-2 font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/[0.06]">Sign in</Link>
      </nav>
    </header>

    <main>
      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-20">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            A calmer way to manage sensitive documents
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl">
            Every document,<br /><span className="text-cyan-200">securely in reach.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            A secure digital platform for storing, retrieving, extracting, classifying, and auditing important records without slowing your team down.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/login" className="inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Open your workspace <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#capabilities" className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]">Explore capabilities</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-400">
            {['Role-aware access', 'OCR-ready workflows', 'Audit-first history'].map(item => <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{item}</span>)}
          </div>
        </div>

        <div className="relative min-h-[390px] lg:min-h-[470px]">
          <div className="landing-orbit absolute inset-8 rounded-[2.5rem] border border-cyan-300/15 bg-cyan-300/[0.03]" />
          <div className="landing-orbit landing-orbit-delay absolute inset-0 rounded-[2.5rem] border border-indigo-300/10" />
          <div className="absolute left-1/2 top-1/2 w-[min(100%,430px)] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-slate-900/85 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Document workspace</p><p className="mt-1 text-sm font-bold text-white">Operations overview</p></div>
              <span className="rounded-full bg-emerald-300/10 px-2.5 py-1 text-[10px] font-bold text-emerald-200">Protected</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><Files className="h-5 w-5 text-cyan-200" /><p className="mt-4 text-2xl font-bold text-white">1,248</p><p className="mt-1 text-xs text-slate-400">Managed documents</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><ScanText className="h-5 w-5 text-amber-200" /><p className="mt-4 text-2xl font-bold text-white">96.8%</p><p className="mt-1 text-xs text-slate-400">Searchable content</p></div>
            </div>
            <div className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              {['Contract review.pdf', 'Evidence register.docx', 'Quarterly archive.zip'].map((name, index) => <div key={name} className="flex items-center gap-3 text-xs"><span className={`h-2 w-2 rounded-full ${index === 1 ? 'bg-amber-300' : 'bg-cyan-300'}`} /><span className="flex-1 text-slate-200">{name}</span><span className="text-slate-500">{index === 1 ? 'Indexing' : 'Ready'}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Built for clarity</p><h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">A secure foundation for daily document work.</h2><p className="mt-4 text-sm leading-6 text-slate-400">Bring storage, retrieval, classification, and accountability into one dependable operating layer.</p></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }) => <article key={title} className="landing-feature rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-cyan-200/30"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200"><Icon className="h-5 w-5" /></span><h3 className="mt-5 text-sm font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></article>)}</div>
        </div>
      </section>
    </main>

    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>Secure Digital Document Management System</span><span>Storage · Retrieval · Classification · Audit</span></footer>
  </div>
);
