"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader/Loader";

export default function RouteLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000); // smooth UX
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? <Loader /> : null;
}
