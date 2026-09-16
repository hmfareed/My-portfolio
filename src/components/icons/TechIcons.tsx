'use client';

import React from 'react';

export function NextJsIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black"/>
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" r="90" fill="black"/>
        <circle cx="90" cy="90" r="88" stroke="rgba(255,255,255,0.25)" strokeWidth="3" fill="none"/>
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear_next)"/>
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ReactIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

export function TypeScriptIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="#3178C6"/>
      <path d="M72.24 74.4c1.6 4.32 4.48 7.36 9.44 7.36 4.64 0 7.68-2.24 7.68-5.44 0-3.68-3.04-4.96-8.32-7.2-7.52-3.2-12.8-6.88-12.8-15.04 0-8.16 6.4-14.24 16.16-14.24 7.2 0 12.32 2.88 15.36 8.64l-6.4 4.16c-1.44-3.36-3.84-4.96-8-4.96-3.84 0-6.24 2.08-6.24 4.8 0 3.2 2.72 4.48 7.68 6.72 8.32 3.52 13.6 7.04 13.6 15.52 0 9.44-7.36 15.36-17.76 15.36-10.24 0-16.64-5.28-19.04-11.52l8.64-4.16zM46.8 40.8v48H36.4v-48H22.8V32H60.4v8.8H46.8z" fill="white"/>
    </svg>
  );
}

export function TailwindIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
    </svg>
  );
}

export function FramerMotionIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF"/>
    </svg>
  );
}

export function NodeJsIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2l12 7v14l-12 7-12-7V9l12-7z" fill="#5FA04E"/>
      <path d="M16 12.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#FFFFFF"/>
    </svg>
  );
}

export function MongoDbIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.5C11.6 1.8 7 8 7 13.5c0 3.2 2.3 6.1 5 6.5.3-1.2.6-3 1-5 0 0-.5 2.5 0 3.5 2.7-.4 4.5-3.3 4.5-6.5C17.5 8 12.4 1.8 12 1.5z" fill="#00ED64"/>
      <path d="M12 21.5c-.3 0-.6-.5-.8-1.2C9.5 19.8 8 17.5 8 13.5c0-4.5 3.2-9.6 4-10.7V21.5z" fill="#00684A"/>
    </svg>
  );
}

export function PostgreSqlIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2a10 10 0 00-9.8 12.3c.7 2.8 2.6 5.1 5.2 6.4.7.3 1.4.6 2.1.8.8.2 1.6.3 2.5.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.8 14.8c-.8.6-1.8.9-2.9.9-1.5 0-2.8-.6-3.8-1.6-.3-.3-.6-.7-.8-1.1-.3-.6-.5-1.3-.5-2 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.9-2 3.6l2 2.2z" fill="#336791"/>
      <circle cx="12" cy="12" r="2.5" fill="#336791"/>
    </svg>
  );
}

export function DockerIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3h2v2h-2V3zm-3 0h2v2h-2V3zm6 3h2v2h-2V6zm-3 0h2v2h-2V6zm-3 0h2v2h-2V6zm-3 0h2v2H7V6zm9 3h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H7V9zm-3 0h2v2H4V9zm18.5 2.5c-.4-.3-1.3-.3-1.8.1-.3.2-.5.5-.6.8-.7-.2-1.8-.1-2.5.4-.1.1-.3.2-.4.4H2c-.4 1.8.2 5 3.3 6.9 3.2 2 7.7 2 10.7.1 2.3-1.5 3.3-3.8 3.8-5.8.7-.3 1.8-.8 2.2-1.9-.3-.5-1-.9-1.5-.9z" fill="#2496ED"/>
    </svg>
  );
}

export function GitIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.6 10.6L13.4 2.4c-.8-.8-2-.8-2.8 0L8.8 4.2l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2 0 2.8s-2 .8-2.8 0c-.6-.6-.8-1.5-.5-2.3l-3.2-3.2v4.8c.2.2.4.4.5.7.4.8.2 1.9-.6 2.5-.8.8-2 .8-2.8 0s-.8-2 0-2.8c.3-.3.8-.5 1.3-.6v-5.2c-.5-.1-1-.3-1.3-.6-.6-.6-.8-1.6-.5-2.4L8.1 7.2 2.4 12.9c-.8.8-.8 2 0 2.8l8.2 8.2c.8.8 2 .8 2.8 0l8.2-8.2c.8-.8.8-2 0-2.8z" fill="#F05032"/>
    </svg>
  );
}

export function VercelIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1L24 22H0L12 1Z"/>
    </svg>
  );
}

export function PaystackIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="3.5" rx="1.5" fill="#00C3F7"/>
      <rect x="2" y="9" width="14" height="3.5" rx="1.5" fill="#00C3F7"/>
      <rect x="2" y="15" width="20" height="3.5" rx="1.5" fill="#00C3F7"/>
    </svg>
  );
}

export function ReduxIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 13.2c-.4.8-1 1.4-1.7 1.9-.7.5-1.5.7-2.3.7-1 0-1.9-.3-2.6-1-.8-.7-1.2-1.6-1.2-2.7 0-.7.2-1.4.5-2 .4-.7.9-1.2 1.5-1.6.7-.4 1.4-.6 2.1-.6.9 0 1.7.3 2.5.8.7.6 1.2 1.4 1.3 2.3l2-.3c-.3-1.3-1-2.4-2.1-3.2-1.1-.8-2.3-1.2-3.7-1.2-1.1 0-2.1.3-3.1.8-1 .6-1.7 1.3-2.3 2.3-.6 1-.9 2.1-.9 3.2 0 1.5.5 2.9 1.5 4 1 1.1 2.3 1.7 3.9 1.7 1.3 0 2.4-.4 3.5-1.1 1-.7 1.7-1.7 2.1-2.9l-2-.4z" fill="#764ABC"/>
    </svg>
  );
}

export function AuthIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="#6366F1"/>
      <path d="M12 6a3 3 0 00-3 3v2h6V9a3 3 0 00-3-3zm-2 5V9a2 2 0 114 0v2h-4z" fill="white"/>
      <circle cx="12" cy="15" r="1.5" fill="white"/>
    </svg>
  );
}

export function ApiIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="2"/>
      <path d="M7 14l3-3-3-3M13 14h4" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LighthouseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3 5H9l3-5zM8 8h8l1 6H7l1-6zm-2 7h12l1 7H5l1-7z" fill="#FF5E00"/>
      <circle cx="12" cy="11" r="1.5" fill="white"/>
    </svg>
  );
}

export function getOfficialIcon(name: string, className = 'w-5 h-5') {
  const n = name.toLowerCase();
  if (n.includes('next.js') || n.includes('next')) return <NextJsIcon className={className} />;
  if (n.includes('react')) return <ReactIcon className={className} />;
  if (n.includes('typescript')) return <TypeScriptIcon className={className} />;
  if (n.includes('tailwind')) return <TailwindIcon className={className} />;
  if (n.includes('framer')) return <FramerMotionIcon className={className} />;
  if (n.includes('state') || n.includes('zustand') || n.includes('redux')) return <ReduxIcon className={className} />;
  if (n.includes('node') || n.includes('express')) return <NodeJsIcon className={className} />;
  if (n.includes('mongo')) return <MongoDbIcon className={className} />;
  if (n.includes('postgres') || n.includes('prisma')) return <PostgreSqlIcon className={className} />;
  if (n.includes('auth')) return <AuthIcon className={className} />;
  if (n.includes('payment') || n.includes('paystack')) return <PaystackIcon className={className} />;
  if (n.includes('git')) return <GitIcon className={className} />;
  if (n.includes('docker')) return <DockerIcon className={className} />;
  if (n.includes('vercel') || n.includes('cloud')) return <VercelIcon className={className} />;
  if (n.includes('api')) return <ApiIcon className={className} />;
  if (n.includes('performance') || n.includes('optimization')) return <LighthouseIcon className={className} />;
  return <NextJsIcon className={className} />;
}
