export default function Footer() {
  return (
    <footer className="border-t border-[rgba(248,241,231,0.10)] bg-[rgba(14,23,30,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-light text-[#F8F1E7] tracking-tight">
              Менторство репетиторов
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[rgba(248,241,231,0.5)] font-light">
            <a href="#profiles" className="hover:text-[#F8F1E7] transition-colors">
              Результаты
            </a>
            <a href="#program" className="hover:text-[#F8F1E7] transition-colors">
              Программа
            </a>
            <a href="#pricing" className="hover:text-[#F8F1E7] transition-colors">
              Тарифы
            </a>
          </div>

          <p className="text-xs text-[rgba(248,241,231,0.3)] font-light">
            © {new Date().getFullYear()} Менторство репетиторов. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
