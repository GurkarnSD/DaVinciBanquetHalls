import type { ChangeEvent } from 'react';
import type { ContactFormData } from './contact-form-data';

const EVENT_TYPES = [
  { value: 'wedding', label: 'Wedding' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'social', label: 'Social event' },
  { value: 'south-asian', label: 'South Asian celebration' },
  { value: 'fundraiser', label: 'Fundraiser / trade show' },
  { value: 'other', label: 'Other' },
];

interface ContactEventFieldsProps {
  isBooking: boolean;
  formData: ContactFormData;
  inputClass: string;
  labelClass: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function ContactEventFields({
  isBooking,
  formData,
  inputClass,
  labelClass,
  onChange,
}: ContactEventFieldsProps) {
  const today = new Date().toISOString().split('T')[0];

  if (isBooking) {
    return (
      <>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="eventType" className={labelClass}>
              Event type *
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={onChange}
              className={inputClass}
            >
              <option value="">Select event type</option>
              {EVENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className={labelClass}>
              Preferred date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={today}
              value={formData.date}
              onChange={onChange}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="guests" className={labelClass}>
            Expected guest count
          </label>
          <input
            type="text"
            id="guests"
            name="guests"
            inputMode="numeric"
            autoComplete="off"
            placeholder="e.g. 250"
            value={formData.guests}
            onChange={onChange}
            className={inputClass}
          />
        </div>
      </>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div>
        <label htmlFor="eventType" className={labelClass}>
          Event type
        </label>
        <select id="eventType" name="eventType" value={formData.eventType} onChange={onChange} className={inputClass}>
          <option value="">Select (optional)</option>
          {EVENT_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date" className={labelClass}>
          Preferred date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          min={today}
          value={formData.date}
          onChange={onChange}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="guests" className={labelClass}>
          Expected guest count
        </label>
        <input
          type="text"
          id="guests"
          name="guests"
          inputMode="numeric"
          autoComplete="off"
          placeholder="e.g. 250"
          value={formData.guests}
          onChange={onChange}
          className={inputClass}
        />
      </div>
    </div>
  );
}
