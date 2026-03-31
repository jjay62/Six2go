import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-foreground/80 mb-4">
          Last updated: March 2026
        </p>
        <div className="space-y-4 text-foreground/90">
          <p>
            This is a placeholder privacy policy. SIX2GO respects your privacy and is committed
            to protecting your personal data.
          </p>
          <h2 className="text-lg font-semibold mt-6">Information We Collect</h2>
          <p>
            We may collect information you provide when registering, subscribing to our newsletter,
            or contacting us. This may include your name, email address, and preferences.
          </p>
          <h2 className="text-lg font-semibold mt-6">How We Use Your Information</h2>
          <p>
            We use your information to provide services, improve our platform, and communicate with you
            about events and updates.
          </p>
          <h2 className="text-lg font-semibold mt-6">Contact</h2>
          <p>
            For privacy-related questions, contact us at privacy@eventapp.example.com.
          </p>
        </div>
        <Link href="/" className="inline-block mt-8 text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
