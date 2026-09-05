function App() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-950 sm:px-6 md:py-12 lg:px-8 lg:py-16">
      <section
        className="mx-auto grid max-w-5xl overflow-hidden rounded-card border border-neutral-200 bg-white shadow-xl shadow-neutral-950/5 md:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)]"
        aria-labelledby="page-title"
      >
        <div className="min-w-0 p-6 md:p-10 lg:p-14">
          <p className="mb-3 text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
            Vocabulary App
          </p>
          <h1
            id="page-title"
            className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl lg:text-6xl"
          >
            Vocabulary Manager
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Nền tảng React, TypeScript và Tailwind CSS v4 đã sẵn sàng cho các
            user story của ứng dụng.
          </p>
          <a
            className="mt-8 inline-flex min-h-control min-w-control items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            href="#setup-status"
          >
            Kiểm tra nền tảng
          </a>
        </div>

        <aside
          id="setup-status"
          className="min-w-0 border-t border-neutral-200 bg-brand-50 p-6 md:border-t-0 md:border-l md:p-8 lg:p-10"
          aria-label="Trạng thái nền tảng giao diện"
        >
          <h2 className="text-sm font-semibold text-brand-700">Styling foundation</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-neutral-700">
            <li className="rounded-lg border border-brand-100 bg-white/80 p-4">
              Tailwind CSS v4
            </li>
            <li className="rounded-lg border border-brand-100 bg-white/80 p-4">
              Mobile-first responsive
            </li>
            <li className="rounded-lg border border-brand-100 bg-white/80 p-4">
              Keyboard focus rõ ràng
            </li>
          </ul>
        </aside>
      </section>
    </main>
  )
}

export default App
