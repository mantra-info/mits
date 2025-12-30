import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import 'react-phone-number-input/style.css';
import PhoneInput, { 
  isValidPhoneNumber, 
  parsePhoneNumber, 
  isPossiblePhoneNumber, 
} from 'react-phone-number-input';

type EnquiryForm = {
  name: string;
  email: string;
  phone: string;
  countryCode: string; 
  businessType: string;
  message: string;
  companyName: string;
};

// Define error type
type FormErrors = { [K in keyof EnquiryForm]?: string };

const Contact: React.FC = () => {
    const router = useRouter(); 
  const [form, setForm] = useState<EnquiryForm>({
    name: '', 
    email: '', 
    phone: '', 
    countryCode: '+91', // Default for India
    businessType: '', 
    message: '', 
    companyName: ''
  });


  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);


  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!form.name.trim()) newErrors.name = "Name is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation (Using libphonenumber-js logic)
   if (!form.phone) {
      newErrors.phone = "Phone number is required";
    } else {
      const phoneNumber = parsePhoneNumber(form.phone);
      if (!phoneNumber || !phoneNumber.isValid()) {
        newErrors.phone = "Invalid phone number for this country";
      } else {
        const nationalNumber = phoneNumber.nationalNumber ?? "";
        const isSequence = /^(?:0123456789|1234567890|9876543210|0000000000|1111111111)$/.test(nationalNumber);
        if (isSequence) newErrors.phone = "Please enter a valid, non-sequential number";
      }
    }


    if (!form.businessType) newErrors.businessType = "Please select a business type";
      //  if (!form.companyName.trim()) newErrors.companyName = "Company Name cannot be empty";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Trigger Validation
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
       sessionStorage.setItem('formSubmitted', 'true');
        setForm({ name: '', email: '', phone: '',countryCode: '+91',  businessType: '', message: '', companyName: '' });
        setErrors({});
        router.push('/thank-you'); 
      
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
      {/* Background Text (kept your design) */}
      <div className="absolute inset-x-0 bottom-10 flex justify-center pointer-events-none select-none opacity-20 ">
        <h1 className="text-[180px] md:text-[350px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-black/70 leading-none">
          mits
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Side Content */}
          <div className="flex flex-col h-full justify-center">
            <h2 className="text-3xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
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
                <p className="text-2xl md:text-4xl font-bold tracking-tighter hover:text-gray-300 transition-colors">
                  hello@mantrainfotechs.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#0a0a0a]/60 backdrop-blur-md p-1 border border-white/5 rounded-3xl">
            <form className="p-6 md:p-8 space-y-4" onSubmit={handleSubmit} noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Full Name"
                    className={`w-full bg-[#111] border ${errors.name ? 'border-red-500' : 'border-gray-800'} rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all`}
                  />
                  {errors.name && <span className="text-red-500 text-xs ml-1">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="Email Address"
                    className={`w-full bg-[#111] border ${errors.email ? 'border-red-500' : 'border-gray-800'} rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all`}
                  />
                  {errors.email && <span className="text-red-500 text-xs ml-1">{errors.email}</span>}
                </div>
              </div>

              {/* International Phone Input */}
              <div className="flex flex-col gap-1">
                 <PhoneInput
                  international
                  defaultCountry="IN"
                  value={form.phone}
                  onChange={(val) => {
                    // This extracts the country calling code (e.g. "91")
                    const parsed = val ? parsePhoneNumber(val) : null;
                    setForm({ 
                      ...form, 
                      phone: val || '', 
                      countryCode: parsed?.countryCallingCode ? `+${parsed.countryCallingCode}` : ''
                    });
                  }}
                  className={`phone-input-custom w-full bg-[#111] border ${errors.phone ? 'border-red-500' : 'border-gray-800'} rounded-xl px-5 py-4 focus-within:border-white/20 outline-none transition-all`}
                />
                {errors.phone && <span className="text-red-500 text-xs ml-1">{errors.phone}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <select
                  value={form.businessType}
                  onChange={e => setForm({ ...form, businessType: e.target.value })}
                  className={`w-full bg-[#111] border ${errors.businessType ? 'border-red-500' : 'border-gray-800'} rounded-xl px-5 py-4 focus:border-white/20 outline-none text-gray-400 appearance-none`}
                >
                  <option value="">Select Business Type</option>
                  <option value="ecommerce">E-commerce (Online Store)</option>
                  <option value="portfolio">Portfolio / Personal Website</option>
                  <option value="saas">SaaS (Software as a Service)</option>
                  <option value="corporate">Corporate / Company Website</option>
                  <option value="automotive">Automotive Business</option>
                  <option value="healthcare">Healthcare / Medical</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="landing-page">Landing Page</option>
                </select>
                {errors.businessType && <span className="text-red-500 text-xs ml-1">{errors.businessType}</span>}
              </div>

              <input
                value={form.companyName}
                onChange={e => setForm({ ...form, companyName: e.target.value })}
                placeholder="Company Name"
                className="w-full bg-[#111] border border-gray-800 rounded-xl px-5 py-4 focus:border-white/20 outline-none transition-all"
              />

              <div className="flex flex-col gap-1">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Brief of your requirement..."
                  className={`w-full bg-[#111] border ${errors.message ? 'border-red-500' : 'border-gray-800'} rounded-xl px-5 py-4 focus:border-white/20 outline-none resize-none transition-all`}
                />
                {errors.message && <span className="text-red-500 text-xs ml-1">{errors.message}</span>}
              </div>

              <div className="pt-2">
                <button
                  disabled={loading}
                  className="w-full md:w-auto bg-white text-black font-bold px-12 py-4 rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50 active:scale-95"
                >
                  {loading ? 'Processing...' : 'Submit Enquiry'}
                </button>
              </div>

            
            </form>
          </div>
        </div>
          <div className="flex justify-center mt-20">
          <div className="px-6 py-2 border hidden md:block  border-gray-800 rounded-full bg-black/50 backdrop-blur-sm text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em]">
            Strategic Plan <span className="mx-2 text-gray-800">•</span> Good Design <span className="mx-2 text-gray-800">•</span> Results That Matters
          </div>
        </div>
      </div>

      {/* CSS for Phone Input styling to match your dark theme */}
      <style>{`
        .phone-input-custom input {
          background: transparent;
          border: none;
          color: white;
          outline: none;
          width: 100%;
          margin-left: 10px;
        }
        .PhoneInputCountrySelect {
          background: #111;
          color: white;
        }
        .PhoneInputCountryIcon--border {
          background-color: transparent;
          box-shadow: none; 
        }
      `}</style>
    </section>
  );
};

export default Contact;