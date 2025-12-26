import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', businessType: '', message: '' });

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowModal(true);
      setTimeout(() => setIsVisible(true), 10); 
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => setShowModal(false), 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Enquiry Sent!");
        closePopup();
      }
    } catch (err) {
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 bg-black/60 backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Modal Container */}
      <div className={`relative bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'} flex flex-col md:flex-row min-h-[550px]`}>
        
        {/* Close Button */}
        <button onClick={closePopup} className="absolute top-6 right-8 z-20 text-gray-500 hover:text-black transition-colors">
          <X size={28} />
        </button>

        {/* Left Side: Illustration & Branding */}
     <div className="relative w-full md:w-[45%] p-10 flex flex-col overflow-hidden">
 
  {/* Header/Logo Branding */}
  <div className="relative z-10 mb-4">
    <h1 className="text-3xl text-gray-700 font-bold tracking-tighter">mits</h1>
  </div>

  {/* GIF Container - flex-1 makes it take all available vertical space */}
  <div className="relative z-10 flex-1 w-full">
    <Image
      src="/popup.gif" 
      alt="Design and Development Illustration"
      fill
      className="object-contain" // "contain" ensures the full GIF is visible without cropping
      unoptimized 
    />
  </div>
</div>

        {/* Right Side: Dark Form Card */}
        <div className="w-full md:w-[55%] p-4 md:p-8 flex items-center">
          <div className="bg-[#111] w-full rounded-[35px] p-8 md:p-10 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-3">Let’s Talk About Your <br/> Project</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Tell us a little about your requirements and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required placeholder="Full Name" className="bg-transparent border border-gray-800 rounded-xl px-5 py-3.5 outline-none focus:border-gray-600 text-sm" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <input required type="email" placeholder="Email Address" className="bg-transparent border border-gray-800 rounded-xl px-5 py-3.5 outline-none focus:border-gray-600 text-sm" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center bg-transparent border border-gray-800 rounded-xl px-4 py-3.5">
                   <img src="https://flagcdn.com/in.svg" className="w-5 mr-2" alt="IN" />
                   <input placeholder="Mobile No." className="bg-transparent outline-none w-full text-sm" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                </div>
                <select className="bg-[#111] border border-gray-800 rounded-xl px-5 py-3.5 outline-none text-gray-500 text-sm appearance-none" value={form.businessType} onChange={e => setForm({...form, businessType: e.target.value})}>
                  <option value="">Business Type</option>
             <option value="E-commerce">E-commerce Development</option>
                <option value="Portfolio">Portfolio Website</option>
                <option value="SaaS">SaaS Platform</option>
                <option value="Corporate">Corporate Website</option>
                </select>
              </div>

              <textarea rows={3} placeholder="Brief of your project" className="w-full bg-transparent border border-gray-800 rounded-xl px-5 py-3.5 outline-none focus:border-gray-600 text-sm resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />

              <button disabled={loading} className="w-full bg-white text-black font-bold py-4 rounded-full mt-2 hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50">
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;