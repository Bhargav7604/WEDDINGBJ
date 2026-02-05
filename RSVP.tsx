import { useState } from 'react';
import { CheckCircle, Users, Mail, Phone, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function RSVP() {
  const [formData, setFormData] = useState({
    guest_name: '',
    email: '',
    phone: '',
    attending: true,
    number_of_guests: 1,
    dietary_restrictions: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('rsvp_responses')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSubmitted(true);
      setFormData({
        guest_name: '',
        email: '',
        phone: '',
        attending: true,
        number_of_guests: 1,
        dietary_restrictions: '',
        message: '',
      });
    } catch (err) {
      setError('Failed to submit RSVP. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="font-serif text-3xl text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-8">
              Your RSVP has been received. We're excited to celebrate with you!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 text-rose-600 hover:text-rose-700 font-medium"
            >
              Submit Another RSVP
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-gray-600">
            Please confirm your attendance and help us plan for a wonderful celebration.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.guest_name}
              onChange={(e) => setFormData({ ...formData, guest_name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="+91 12345 67890"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3">
              Will you be attending? *
            </label>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  checked={formData.attending === true}
                  onChange={() => setFormData({ ...formData, attending: true })}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.attending === true
                    ? 'border-rose-500 bg-rose-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <span className="font-medium">Joyfully Accept</span>
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  checked={formData.attending === false}
                  onChange={() => setFormData({ ...formData, attending: false })}
                  className="sr-only"
                />
                <div className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.attending === false
                    ? 'border-rose-500 bg-rose-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}>
                  <span className="font-medium">Regretfully Decline</span>
                </div>
              </label>
            </div>
          </div>

          {formData.attending && (
            <>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Number of Guests *
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={formData.number_of_guests}
                    onChange={(e) => setFormData({ ...formData, number_of_guests: parseInt(e.target.value) || 1 })}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  value={formData.dietary_restrictions}
                  onChange={(e) => setFormData({ ...formData, dietary_restrictions: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Vegetarian, vegan, allergies, etc."
                />
              </div>
            </>
          )}

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2">
              Message to the Couple
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Share your wishes and blessings..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-rose-500 text-white font-medium rounded-full hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
}
