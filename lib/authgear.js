// lib/authgear.ts
"use client";

import authgear from "@authgear/web";

export const ag = authgear;

export async function configureAuthgear() {
  if (ag.sessionState) return; // prevent reconfigure

  await ag.configure({
    endpoint: process.env.NEXT_PUBLIC_AUTHGEAR_ENDPOINT,
    clientID: process.env.NEXT_PUBLIC_AUTHGEAR_CLIENT_ID,
    sessionType: "refresh_token",
  });
}
