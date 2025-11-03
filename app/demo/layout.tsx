"use client"
import { NatNalProvider } from '../context/NatNalContext';

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NatNalProvider>{children}</NatNalProvider>;
}

