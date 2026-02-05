import { useState, useEffect } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_jspqadn',
    TEMPLATE_ID: 'template_0ak2gop',
    PUBLIC_KEY: 'DKxJ4y4ZBE-LSyMaD',
  };

  const RECIPIENT_EMAIL = 'bhargavmoparthi@gmail.com';

  const isEmailJSConfigured =
    EMAILJS_CONFIG.PUBLIC_KEY &&
    EMAILJS_CONFIG.PUBLIC_KEY.trim().length > 10 &&
    EMAILJS_CONFIG.SERVICE_ID &&
    EMAILJS_CONFIG.TEMPLATE_ID;

  useEffect(() => {
    if (isEmailJSConfigured) {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      console.log('✅ EmailJS initialized');
    } else {
      console.warn('⚠️ EmailJS not configured - please update EMAILJS_CONFIG');
    }
  }, [isEmailJSConfigured, EMAILJS_CONFIG.PUBLIC_KEY]);

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setError('');
    setEmailStatus('');
  };

  const sendEmailViaEmailJS = async (data: ContactFormData) => {
    try {
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        to_name: 'Wedding Team',
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        subject: data.subject || 'New Wedding Message',
        message: data.message,
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: new Date().toLocaleTimeString('en-US'),
        website: 'bj.bhargavjagadeeshwariwedding.life',
        wedding_couple: 'Bhargav & Jagadeeswari',
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      return {
        success: response.status === 200,
        message: 'Email sent successfully',
        response,
      };
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      return {
        success: false,
        message: err.text || 'Failed to send email',
        error: err,
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setIsSubmitted(false);
    setEmailStatus('Sending email...');

    if (!formData.name.trim()) {
      setError('Please enter your name');
      setIsSubmitting(false);
      setEmailStatus('');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      setEmailStatus('');
      return;
    }

    if (!formData.message.trim()) {
      setError('Please enter your message');
      setIsSubmitting(false);
      setEmailStatus('');
      return;
    }

    try {
      let emailResult = null;
      if (isEmailJSConfigured) {
        emailResult = await sendEmailViaEmailJS(formData);

        if (emailResult?.success) {
          setEmailStatus('Email sent successfully!');
        } else {
          setEmailStatus('Email sending failed');
          throw new Error('Failed to send email. Please try again.');
        }
      } else {
        throw new Error('Email service is not configured.');
      }

      setIsSubmitted(true);
      clearForm();

      setTimeout(() => {
        setIsSubmitted(false);
        setEmailStatus('');
      }, 5000);
    } catch (err: any) {
      console.error('Form submission error:', err);
      setError(err.message || 'Failed to send message. Please try again.');
      setEmailStatus('Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to share something special? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">bj.bhargavjagadeeshwariwedding.life</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">Bhargav: +91 91555 36665</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8">
              <h4 className="font-serif text-xl text-gray-800 mb-4">Wedding Coordinators</h4>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-medium">Bride's Family:</span>
                  <br />
                  Contact: +91 98486 07476
                </p>
                <p>
                  <span className="font-medium">Groom's Family:</span>
                  <br />
                  Contact: +91 98669 14668
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-100 rounded-2xl p-8">
              {emailStatus && (
                <div
                  className={`mb-6 p-4 rounded-xl ${
                    emailStatus.includes('success')
                      ? 'bg-green-50 border border-green-200 text-green-700'
                      : emailStatus.includes('Sending')
                        ? 'bg-blue-50 border border-blue-200 text-blue-700'
                        : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                >
                  <div className="flex items-center">
                    {emailStatus.includes('success') ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : emailStatus.includes('Failed') ? (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    ) : emailStatus.includes('Sending') ? (
                      <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <span className="font-medium">{emailStatus}</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {isSubmitted && !emailStatus && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-green-500 text-xs mt-1">
                      Thank you for your gracious wedding wishes - we truly appreciate your
                      thoughtful message.
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white transition-colors"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white transition-colors"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white transition-colors"
                  placeholder="What is this about?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white transition-colors resize-none"
                  placeholder="Your message..."
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-rose-500 text-white font-medium rounded-full hover:bg-rose-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
