import { Search, Bell } from 'lucide-react';

export default function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 bg-white px-8 py-5">
      <h1 className="text-lg font-bold tracking-wide text-gray-800">
        {title}
      </h1>

      <div className="flex items-center gap-3">
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
          aria-label="Search"
        >
          <Search size={16} />
        </button>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50"
          aria-label="Notifications"
        >
          <Bell size={16} />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-300 text-sm font-bold text-white">
          PB
        </div>
      </div>
    </header>
  );
}