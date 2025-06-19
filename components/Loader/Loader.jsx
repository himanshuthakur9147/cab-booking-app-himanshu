// components/Loader.jsx
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-[9999]">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
