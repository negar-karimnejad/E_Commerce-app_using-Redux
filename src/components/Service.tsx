import { ServiceProps } from "../types";

function Service({ icon, title, subtitle }: ServiceProps) {
  return (
    <main className="flex-1 p-3 flex items-center bg-gray-100 gap-2">
      <div className="text-4xl">{icon}</div>
      <section>
        <p className="font-bold text-gray-800 text-sm">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </section>
    </main>
  );
}

export default Service;
