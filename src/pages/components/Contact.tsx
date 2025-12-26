import React, { useState } from 'react';

type EnquiryForm = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
};

const Contact: React.FC = () => {
  const [form, setForm] = useState<EnquiryForm>({
    name: '', email: '', phone: '', businessType: '', message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // We point this to a local PHP file on your cPanel
      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', businessType: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Failed to send enquiry. Please try again.');
      }
    } catch (error) {
      alert('Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Large Background Text Effect */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center pointer-events-none select-none opacity-20">
        <h1 className="text-[180px] md:text-[350px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-black/70 leading-none">
          mits
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Side Content */}
          <div className="flex flex-col h-full justify-center">
            <span className="text-4xl mb-6">👋</span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Let's Talk About Your <br /> Project
            </h2>
            <p className="text-gray-400 text-lg max-w-sm mb-12">
              Tell us a little about your requirements and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-6 mt-auto">
              <div>
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest">Call Us</p>
                <p className="text-2xl font-semibold">+91 62821 13506</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1 uppercase tracking-widest">Email Us</p>
                <p className="text-3xl md:text-5xl font-bold tracking-tighter hover:text-gray-300 transition-colors">
                  info@mantraitsolutions.in
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#0a0a0a]/60 backdrop-blur-md p-1 border border-white/5 rounded-3xl">
            <form className="p-6 md:p-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all"
                />
              </div>

              <input
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                placeholder="Mobile No. (+91)"
                className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all"
              />

              <select
                required
                value={form.businessType}
                onChange={e => setForm({ ...form, businessType: e.target.value })}
                className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none text-gray-400 appearance-none"
              >
                <option value="">Business Type</option>
                <option value="E-commerce">E-commerce Development</option>
                <option value="Portfolio">Portfolio Website</option>
                <option value="SaaS">SaaS Platform</option>
                <option value="Corporate">Corporate Website</option>
              </select>

              <textarea
                rows={4}
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Brief of your project..."
                className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none resize-none transition-all"
              />

              <div className="pt-2">
                <button
                  disabled={loading}
                  className="w-full md:w-auto bg-white text-black font-bold px-12 py-4 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95"
                >
                  {loading ? 'Processing...' : 'Submit Enquiry'}
                </button>
              </div>

              {success && (
                <p className="text-green-400 text-sm font-medium animate-pulse mt-4">
                  ✅ Enquiry sent! We'll contact you soon.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Tagline Pill */}
        <div className="flex justify-center mt-20">
          <div className="px-6 py-2 border border-gray-800 rounded-full bg-black/50 backdrop-blur-sm text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em]">
            Strategic Plan <span className="mx-2 text-gray-800">•</span> Good Design <span className="mx-2 text-gray-800">•</span> Results That Matters
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;