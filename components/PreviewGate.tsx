"use client";

import { type FormEvent, useEffect, useMemo, useState } from "react";
import BrandLogo from "./BrandLogo";

type PreviewGateProps = {
  passwordHash: string;
  children: React.ReactNode;
};

const storagePrefix = "grayce-preview-access";

async function sha256(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export default function PreviewGate({
  passwordHash,
  children,
}: PreviewGateProps) {
  const normalizedHash = passwordHash.trim().toLowerCase();
  const storageKey = useMemo(
    () => `${storagePrefix}:${normalizedHash.slice(0, 12)}`,
    [normalizedHash]
  );
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (!normalizedHash) {
      return;
    }

    setIsUnlocked(window.localStorage.getItem(storageKey) === normalizedHash);
  }, [normalizedHash, storageKey]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!normalizedHash) {
      setError("Preview access is not configured.");
      return;
    }

    setIsChecking(true);
    setError("");

    try {
      const enteredHash = await sha256(password);

      if (enteredHash === normalizedHash) {
        window.localStorage.setItem(storageKey, normalizedHash);
        setIsUnlocked(true);
        return;
      }

      setError("That password did not work. Please try again.");
    } catch {
      setError("This browser could not verify the password.");
    } finally {
      setIsChecking(false);
    }
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-bg text-ink">
      <div className="absolute inset-0 -z-10 hero-gradient" />
      <div className="absolute inset-x-0 top-0 h-px bg-hairline" />
      <div className="mx-auto flex min-h-screen max-w-page flex-col justify-center px-6 py-12 md:px-10">
        <section
          aria-labelledby="preview-access-title"
          className="grid min-h-[calc(100vh-6rem)] items-center gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
              <span className="h-px w-10 bg-gold" />
              Preview access
            </div>

            <h1
              id="preview-access-title"
              className="font-display mt-7 max-w-4xl text-[clamp(3.25rem,11vw,7rem)] leading-[0.9] text-ink"
            >
              Enter the preview password.
            </h1>

            <form className="mt-9 max-w-md" onSubmit={handleSubmit}>
              <label
                className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted"
                htmlFor="preview-password"
              >
                Password
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="preview-password"
                  autoComplete="current-password"
                  className="min-h-12 flex-1 rounded-full border border-hairline bg-surface px-5 text-base text-ink shadow-soft outline-none transition focus:border-gold"
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  value={password}
                />
                <button
                  className="min-h-12 rounded-full bg-[#4b594c] px-6 text-sm font-semibold uppercase tracking-[0.12em] text-[#ffeedc] transition hover:bg-[#354238] disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={isChecking}
                  type="submit"
                >
                  {isChecking ? "Checking" : "Enter"}
                </button>
              </div>
              {error ? (
                <p className="mt-3 text-sm text-[#715f49]">
                  {error}
                </p>
              ) : null}
            </form>
          </div>

          <div className="md:col-span-5">
            <div className="brand-logo-panel relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-t-[6rem] rounded-b-[2rem] border border-hairline p-10 shadow-soft-xl md:max-w-md md:rounded-t-[8rem]">
              <div className="absolute inset-6 rounded-t-[5rem] rounded-b-[1.5rem] border border-gold-soft" />
              <BrandLogo
                mark="monogram"
                className="relative h-44 w-44 object-contain sm:h-52 sm:w-52"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
