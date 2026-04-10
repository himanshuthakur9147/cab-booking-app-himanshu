{/* ── INCLUSIONS / EXCLUSIONS ── */}
<ST>Fare Inclusions and Exclusions</ST>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
  <div className="border border-blue-200 rounded-xl overflow-hidden">
    <div className="bg-[#1e40af] px-5 py-3">
      <span className="text-white font-bold text-sm tracking-widest uppercase">Included</span>
    </div>
    <ul className="list-none m-0 p-0">
      {INCLUDED.map((item, i) => (
        <li key={item} className={"px-5 py-3.5 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f8faff]" : "bg-white")}>
          {item}
        </li>
      ))}
    </ul>
  </div>
  <div className="border border-blue-200 rounded-xl overflow-hidden">
    <div className="bg-[#0a4a8f] px-5 py-3">
      <span className="text-white font-bold text-sm tracking-widest uppercase">Excluded</span>
    </div>
    <ul className="list-none m-0 p-0">
      {EXCLUDED.map((item, i) => (
        <li key={item} className={"px-5 py-3.5 text-base font-semibold text-[#1e40af] border-b border-blue-100 last:border-0 " + (i % 2 === 0 ? "bg-[#f8faff]" : "bg-white")}>
          {item}
        </li>
      ))}
    </ul>
  </div>
</div>
