function App() {
  return (
    <main className="min-h-screen bg-primary-light-90 px-8 py-16 text-black max-lg:px-6 max-lg:py-12 max-md:py-8 max-sm:px-4">
      <section
        className="mx-auto grid max-w-5xl grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] overflow-hidden rounded-card border border-black-80 bg-white shadow-xl shadow-black/5 max-md:grid-cols-1"
        aria-labelledby="page-title"
      >
        <div className="min-w-0 p-14 max-lg:p-10 max-md:p-6">
          <p className="mb-3 text-body-7 text-primary uppercase">
            Vocabulary App
          </p>
          <h1
            id="page-title"
            className="max-w-3xl text-heading-1 text-balance"
          >
            Vocabulary Manager
          </h1>
          <p className="mt-5 max-w-2xl text-body-3 text-black-30">
            Nền tảng React, TypeScript và Tailwind CSS v4 đã sẵn sàng cho các
            user story của ứng dụng.
          </p>
          <a
            className="mt-8 inline-flex min-h-control min-w-control items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-body-4 text-white transition-colors hover:bg-primary-dark-10"
            href="#setup-status"
          >
            Kiểm tra nền tảng
          </a>
        </div>

        <aside
          id="setup-status"
          className="min-w-0 border-l border-primary-light-80 bg-primary-light-90 p-10 max-lg:p-8 max-md:border-t max-md:border-l-0 max-md:p-6"
          aria-label="Trạng thái nền tảng giao diện"
        >
          <h2 className="text-heading-4 text-primary-dark-30">
            Styling foundation
          </h2>
          <ul className="mt-5 space-y-4 text-body-6 text-black-20">
            <li className="rounded-lg border border-primary-light-80 bg-white/80 p-4">
              Tailwind CSS v4
            </li>
            <li className="rounded-lg border border-primary-light-80 bg-white/80 p-4">
              Desktop-first responsive
            </li>
            <li className="rounded-lg border border-primary-light-80 bg-white/80 p-4">
              Keyboard focus rõ ràng
            </li>
          </ul>
        </aside>
      </section>
    </main>
  )
}

export default App
