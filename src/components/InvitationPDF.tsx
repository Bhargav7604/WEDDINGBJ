import { motion } from 'framer-motion';
import { FileText, Download, Upload } from 'lucide-react';

export default function InvitationPDF() {
  const pdfUrl = '/wedding-invitation.pdf';

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Bhargav-Jagadeeswari-Wedding-Invitation.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section id="invitation-pdf" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Wedding Invitation
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download and share our digital wedding invitation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {pdfUrl ? (
              <div>
                <div className="bg-gray-100 relative" style={{ minHeight: '600px' }}>
                  <iframe
                    src={pdfUrl}
                    className="w-full"
                    style={{ height: '600px' }}
                    title="Wedding Invitation PDF"
                  ></iframe>
                </div>
                <div className="p-8 bg-gradient-to-r from-pink-50 to-rose-50 text-center">
                  <p className="text-gray-600 mb-4">
                    Click below to download the invitation and share with your loved ones
                  </p>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Download size={24} />
                    <span className="font-medium">Download Invitation</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 md:p-20 text-center bg-gradient-to-br from-pink-50 to-rose-50">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-8">
                  <FileText className="text-rose-500" size={48} />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-4">
                  Digital Invitation Coming Soon
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We're preparing a beautiful digital invitation for you to download and share
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-full shadow-md">
                  <Upload size={20} />
                  <span>PDF upload pending</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
