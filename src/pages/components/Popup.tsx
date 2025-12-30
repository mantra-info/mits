import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
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
interface PopupProps {
  externalTrigger?: boolean; // Prop to open from outside
  onClose?: () => void;      // Callback to reset outside state
}
const inputClass = (error?: string) =>
  `bg-white/5 border rounded-xl px-4 py-3 outline-none text-[16px] md:text-sm w-full
   ${error ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-white/30'}`;

const Popup: React.FC<PopupProps> = ({ externalTrigger, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const timerStarted = React.useRef(false);
   const openModal = () => {
     if (showModal) return;
    setShowModal(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  useEffect(() => {
       if (showModal || timerStarted.current) return;
    const timer = setTimeout(() => {
      // Only auto-open if it's not already open
        timerStarted.current = true;
      if (!showModal) openModal();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // 2. External Trigger Logic (Button Click)
  useEffect(() => {
    if (externalTrigger) {
      openModal();
    }
  }, [externalTrigger]);

  const closePopup = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowModal(false);
      setIsSubmitted(false);
      if (onClose) onClose(); 
    }, 300);
  };

  useEffect(() => {
  const firstErrorField = document.querySelector('[data-error="true"]');
  firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}, [errors]);
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

  const handleSubmit = async (e: React.FormEvent) => {
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
      if (res.ok) setIsSubmitted(true);
    } catch (err) {
      alert("Error sending enquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

 return (
    <div className={`fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-6 transition-all duration-500 bg-black/80 backdrop-blur-md ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className={`relative bg-white w-full max-w-5xl rounded-[24px] md:rounded-[40px] shadow-2xl transition-all duration-500 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'} flex flex-col md:flex-row overflow-hidden max-h-[95vh] overflow-y-auto`}>
        
        <button onClick={closePopup} className="absolute top-3 right-3 md:top-6 md:right-8 z-50 text-gray-400 hover:text-black transition-colors bg-white/90 rounded-full p-1.5 shadow-md">
          <X size={20} className="md:w-7 md:h-7" />
        </button>

        {/* LEFT SIDE */}
        <div className="hidden md:flex relative w-full md:w-[40%] p-10 flex-col bg-gray-50 border-r border-gray-100">

           <Image src={'/logo.webp'} alt="Logo" width={80} height={40} className='w-20 h-auto cursor-pointer'/>
          <div className="relative flex-1 w-full mt-4">
            <Image src="/popup_new.webp" alt="Illustration" fill className="object-contain" unoptimized />
          </div>
        </div>

        {/* RIGHT SIDE: The Form */}
        <div className="w-full md:w-[60%] flex flex-col bg-[#111]">
          <div className="p-6 md:p-12 text-white">
            {!isSubmitted ? (
              <>
                <div className="md:hidden flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                   <Image src={'/Logo_White.webp'} alt="Logo" width={80} height={40} className='w-20 h-auto cursor-pointer'/>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">Let’s Talk Project</h2>
                <p className="text-gray-500 text-xs md:text-sm mb-6">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* ROW 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <input placeholder="Full Name" className={inputClass(errors.name)} value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      {errors.name && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                      <input type="email" placeholder="Email" className={inputClass(errors.email)} value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      {errors.email && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* ROW 2: Phone & Business Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <div className={`flex items-center bg-white/5 border rounded-xl px-4 py-3 ${errors.phone ? 'border-red-500' : 'border-white/10'}`}>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={form.phone}
                          onChange={(val) => {
                            const parsed = val ? parsePhoneNumber(val) : null;
                            setForm({ 
                              ...form, 
                              phone: val || '', 
                              countryCode: parsed?.countryCallingCode ? `+${parsed.countryCallingCode}` : ''
                            });
                          }}
                          className="phone-input-custom w-full bg-transparent outline-none text-white text-[16px] md:text-sm"
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col gap-1">
                      <select className={`bg-white/5 border rounded-xl px-4 py-3 outline-none appearance-none text-[16px] md:text-sm
                        ${errors.businessType ? 'border-red-500 text-red-400' : 'border-white/10 text-gray-400'}`} 
                        value={form.businessType} onChange={e => setForm({...form, businessType: e.target.value})}>
                        <option value="ecommerce">E-commerce (Online Store)</option>
                  <option value="portfolio">Portfolio / Personal Website</option>
                  <option value="saas">SaaS (Software as a Service)</option>
                  <option value="corporate">Corporate / Company Website</option>
                  <option value="automotive">Automotive Business</option>
                  <option value="healthcare">Healthcare / Medical</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="landing-page">Landing Page</option>
                      </select>
                      {errors.businessType && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.businessType}</p>}
                    </div>
                  </div>

                  {/* ROW 3: Company Name */}
                  <div className="flex flex-col gap-1">
                    <input placeholder="Company Name" className={inputClass(errors.companyName)} value={form.companyName} onChange={e => setForm({...form, companyName: e.target.value})} />
                    {errors.companyName && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.companyName}</p>}
                  </div>

                  {/* ROW 4: Message */}
                  <div className="flex flex-col gap-1">
                    <textarea rows={2} placeholder="Brief of your requirement" className={`w-full bg-white/5 border rounded-xl px-4 py-3 outline-none focus:border-white/30 text-[16px] md:text-sm resize-none ${errors.message ? 'border-red-500' : 'border-white/10'}`} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    {errors.message && <p className="text-red-500 text-[10px] md:text-xs ml-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={loading} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all active:scale-95 disabled:opacity-50">
                      {loading ? 'Sending...' : 'Submit Enquiry'}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center text-center py-12">
                <CheckCircle2 size={64} className="text-green-500 mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Thank You!</h2>
                <p className="text-gray-400 mb-8 max-w-[280px]">Our team will contact you shortly.</p>
                <button onClick={closePopup} className="bg-white/10 border border-white/10 px-10 py-3 rounded-full text-sm hover:bg-white/20 transition-all">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .phone-input-custom input {
          background: transparent !important;
          border: none !important;
          color: white !important;
          outline: none !important;
          width: 100%;
          margin-left: 10px;
        }
        .PhoneInputCountrySelect {
          background: #111;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Popup;