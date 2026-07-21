"use client";

import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main id="main-content" className="error-page">
        <div className="container error-page-inner">
          <p className="eyebrow">Un imprévu est survenu</p>
          <h1>Cette page a besoin d’une nouvelle impulsion.</h1>
          <p>Vos informations n’ont pas été envoyées. Vous pouvez relancer la page en toute sécurité.</p>
          <button className="button" type="button" onClick={reset}>Réessayer <Icon name="arrow" size={17} /></button>
        </div>
      </main>
      <Footer />
    </>
  );
}
