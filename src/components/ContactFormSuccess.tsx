import { HiCheck, HiPhone } from 'react-icons/hi';

interface ContactFormSuccessProps {
  isBooking: boolean;
  onReset: () => void;
}

export default function ContactFormSuccess({ isBooking, onReset }: ContactFormSuccessProps) {
  return (
    <div className="surface p-8 md:p-10">
      <div className="mx-auto max-w-md text-center">
        <div className="border-theme bg-theme-elevated mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border">
          <HiCheck className="text-theme-heading h-6 w-6" />
        </div>
        <h3 className="text-theme-heading mb-2 font-serif text-2xl font-medium">
          {isBooking ? 'Request Received' : 'Message Sent'}
        </h3>
        <p className="text-theme-body mb-6 text-sm leading-relaxed">
          {isBooking
            ? 'Our team will review your date and expected guest count, then respond within 48 hours to confirm availability and schedule a tour.'
            : 'We received your message and will respond within 48 hours.'}
        </p>
        <div className="surface text-theme-body mb-6 p-4 text-left text-sm">
          <p className="text-theme-heading mb-1 font-medium">Need a Faster Response?</p>
          <a
            href="tel:905-851-3131"
            className="hover:text-theme-heading inline-flex items-center gap-2 transition-colors"
          >
            <HiPhone className="h-4 w-4" />
            905-851-3131
          </a>
        </div>
        <button type="button" onClick={onReset} className="btn-text">
          Submit Another Request
        </button>
      </div>
    </div>
  );
}
