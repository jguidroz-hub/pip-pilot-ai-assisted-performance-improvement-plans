import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PIP Pilot - AI-Assisted Performance Improvement Plans',
  description: 'Value Proposition: Streamlines and automates the Performance Improvement Plan (PIP) process for managers, providing data-driven insights, customizable templates, and progress tracking to reduce burnout and improve outcomes for underperforming employees.

Target Customer: HR departments, team leads, and mid-level managers in SMBs and enterprises struggling with inefficient, lengthy PIP processes and high managerial overhead.

---
Category: Micro-SaaS
Target Market: HR departments, team leads, and mid-level managers in SMBs and enterprises struggling with inefficient, lengthy PIP processes and high managerial overhead.
Source Hypothesis ID: 549da95a-8b2e-458b-96a6-9c5cb9c71f95
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">PIP Pilot - AI-Assisted Performance Improvement Plans</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
