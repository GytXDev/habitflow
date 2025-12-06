"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function HeroSection() {
  const { isSignedIn } = useUser();
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-32 px-8 sm:px-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Titre principal */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          Les habitudes créent l'avenir.{" "}
          <span className="text-default-color">HabitFlow</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          La plateforme simple et efficace pour suivre vos habitudes, renforcer
          votre discipline et progresser chaque jour vers vos objectifs.
        </p>

        {/* Bouton CTA */}
        {!isSignedIn && (
          <div className="pt-4">
            <Link href="/sign-up">
              <button className="btn-primary font-bold px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-default focus:ring-offset-2">
                Commencer maintenant
              </button>
            </Link>
          </div>
        )}

        {/* Éléments décoratifs optionnels */}
        <div className="pt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="h-px w-12 bg-gray-300"></div>
          <span>Gratuit • Sans engagement</span>
          <div className="h-px w-12 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
