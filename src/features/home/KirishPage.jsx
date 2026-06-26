import React from "react";
import AboutIdokon from "./AboutPage";
import UsingIdokon from "./UsingPage";

/**
 * Kirish sahifasi - IDOKON haqida va Idokondan foydalanish bo'limlarini birlashtiradi
 */
export default function KirishPage() {
  return (
    <div className="space-y-16">
      {/* IDOKON haqida bo'limi */}
      <div>
        <AboutIdokon />
      </div>

      {/* Bo'linuvchi chiziq */}
      <div className="relative my-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-primary-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-2xl">✨</span>
          </div>
        </div>
      </div>

      {/* Idokondan foydalanish bo'limi */}
      <div>
        <UsingIdokon />
      </div>
    </div>
  );
}
