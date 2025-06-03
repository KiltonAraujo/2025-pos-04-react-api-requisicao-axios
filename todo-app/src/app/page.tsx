"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

export default function Home() {
  return (
    <main>
      <div className="flex items-center flex-col mt-10">
		<h1 className="text-xl font-bold">Bem-vindo à Home!</h1>
      	<a href="/tarefas" className="font-sm font-red-500 p-2 hover:">Ir para Tarefas</a>

	  </div>
    </main>
  );
}