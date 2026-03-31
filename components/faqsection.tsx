import React from 'react'

export default function Faqsection() {
  return (
    <div className="mb-8 justify-center items-center w-5xl mx-auto">
    <h2 className="text-xl font-semibold text-center mb-6">FAQ</h2>
    <div className="space-y-4 text-white/90">
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">What areas do you deliver to?</summary>
        <p className="mt-2 text-white/70">We currently deliver across the Netherlands and are expanding to more EU countries soon.</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">How long does delivery take?</summary>
        <p className="mt-2 text-white/70">Most orders arrive within 30–45 minutes. Max drives fast.</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">Can I cancel or change my order?</summary>
        <p className="mt-2 text-white/70">You can modify your order within 5 minutes of placing it. After that, the kitchen is already on it.</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">Is there a minimum order?</summary>
        <p className="mt-2 text-white/70">Nope. Even a single dessert counts — we don't judge.</p>
      </details>
      <details className="rounded-lg border border-white/20 bg-gray-900 p-4">
        <summary className="cursor-pointer font-medium">How do I contact support?</summary>
        <p className="mt-2 text-white/70">Drop us an email at jayklav62@gmail.com or call (+31) 0633376647. We're here to help.</p>
      </details>
    </div>
  </div>
  )
}
