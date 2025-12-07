"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-4 pb-6 sm:pb-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        {/* Logo et nom de l'application */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1 sm:p-2 rounded-md">
            {/* logo de l'application */}
          </div>
          <div className="text-xl sm:text-2xl md:text-2xl">
            <span className="font-bold text-default-color">Habit</span>
            <span className="font-light">Flow</span>
          </div>
        </div>

        {/* Bouton hamburger (mobile seulement) */}
        {isSignedIn ? (
          <Link href="/dashboard">
            <button className="btn-primary rounded-lg px-4 py-2 text-sm font-medium focus:outline-none cursor-pointer sm:hidden">
              <span className="font-bold">Tableau de Bord</span>
            </button>
          </Link>
        ) : (
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md focus:outline-none"
            aria-label="Menu"
            type="button"
          >
            <svg
              className="w-6 h-6 hamburger-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        )}

        {/* Boutons (desktop) */}
        {isSignedIn ? (
          <div className="hidden sm:flex sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/dashboard">
              <button className="btn-primary rounded-lg px-6 sm:px-8 md:px-9 py-2.5 sm:py-3 text-sm font-medium focus:outline-none cursor-pointer">
                <span className="font-bold">Tableau de Bord</span>
              </button>
            </Link>
          </div>
        ) : (
          <div className="hidden sm:flex sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link href="/sign-in">
              <button className="btn-primary rounded-lg px-6 sm:px-8 md:px-9 py-2.5 sm:py-3 text-sm font-medium focus:outline-none cursor-pointer">
                <span className="font-bold">Connexion</span>
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn-secondary border rounded-lg px-6 sm:px-8 md:px-9 py-2.5 sm:py-3 text-sm font-medium focus:outline-none cursor-pointer">
                <span className="font-bold">Inscription</span>
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Menu mobile (déroulant) */}
      {isMenuOpen && !isSignedIn && (
        <div className="sm:hidden mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            <Link href="/sign-in">
              <button
                onClick={toggleMenu}
                className="btn-primary w-full rounded-lg px-6 py-3 text-sm font-medium focus:outline-none cursor-pointer"
                type="button"
              >
                <span className="font-bold">Connexion</span>
              </button>
            </Link>
            <Link href="/sign-up">
              <button
                onClick={toggleMenu}
                className="btn-secondary w-full border rounded-lg px-6 py-3 text-sm font-medium focus:outline-none cursor-pointer"
                type="button"
              >
                <span className="font-bold">Inscription</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
