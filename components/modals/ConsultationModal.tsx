"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useConsultationModal } from "./ConsultationModalContext";

const consultationSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(6, "Please enter a valid phone or WhatsApp number."),
  service: z.string().min(1, "Please select a service."),
  description: z.string().min(10, "Please provide a project description (at least 10 characters).")
});

type ConsultationFormValues = z.infer<typeof consultationSchema>;

const servicesOptions = [
  "Website Development",
  "Mobile App Development",
  "AI Chatbot",
  "AI Agents",
  "Automation",
  "Custom Project"
];

export function ConsultationModal() {
  const { isOpen, defaultService, closeModal } = useConsultationModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService,
      description: ""
    }
  });

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setValue("service", defaultService);
    }
  }, [isOpen, defaultService, setValue]);

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsSubmitting(true);
    try {
      // 1. Send via server API route & store
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      // 2. Optional: Send directly via EmailJS if configured in .env
      const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        try {
          await emailjs.send(
            emailjsServiceId,
            emailjsTemplateId,
            {
              from_name: data.name,
              from_email: data.email,
              phone: data.phone,
              service: data.service,
              message: data.description
            },
            emailjsPublicKey
          );
        } catch (emailjsErr) {
          console.warn("EmailJS delivery note:", emailjsErr);
        }
      }

      if (result.success) {
        setSubmittedData(data);
        setIsSubmitted(true);
        toast.success("Request submitted successfully!");
        reset();
      } else {
        toast.error(result.message || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const phoneNum = "919205394233";
    const serviceName = submittedData?.service || "a project";
    const msg = `Hi YourDevelopers, I just submitted a consultation request for ${serviceName}. Let's connect!`;
    const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-dark/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
          className="relative w-full max-w-xl bg-[#191918]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white my-auto overflow-hidden"
        >
          {/* Subtle Ambient Glow inside Modal */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/15 text-accent font-mono text-[10px] font-bold uppercase tracking-widest mb-3 border border-accent/20">
                  FREE CONSULTATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-white mb-2">
                  Let&apos;s Build Your Next Project 🚀
                </h3>
                <p className="text-xs sm:text-sm font-body text-white/70 leading-relaxed">
                  Fill in your details and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mohit Aggarwal"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? "border-red-500" : "border-white/15 focus:border-accent"
                    } text-white placeholder:text-white/30 text-sm font-body outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="mohit@example.com"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? "border-red-500" : "border-white/15 focus:border-accent"
                    } text-white placeholder:text-white/30 text-sm font-body outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Phone Number / WhatsApp <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 92053 94233"
                    {...register("phone")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.phone ? "border-red-500" : "border-white/15 focus:border-accent"
                    } text-white placeholder:text-white/30 text-sm font-body outline-none transition-colors`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                {/* Service Needed Dropdown */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Service Needed <span className="text-accent">*</span>
                  </label>
                  <select
                    {...register("service")}
                    className={`w-full px-4 py-3 rounded-xl bg-[#222221] border ${
                      errors.service ? "border-red-500" : "border-white/15 focus:border-accent"
                    } text-white text-sm font-body outline-none transition-colors cursor-pointer`}
                  >
                    {servicesOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#191918] text-white py-2">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.service.message}</p>
                  )}
                </div>

                {/* Brief Project Description */}
                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-1.5">
                    Brief Project Description <span className="text-accent">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you'd like to build..."
                    {...register("description")}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.description ? "border-red-500" : "border-white/15 focus:border-accent"
                    } text-white placeholder:text-white/30 text-sm font-body outline-none transition-colors resize-none`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.description.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-accent text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin text-dark" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success Screen */
            <div className="py-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/15 text-accent flex items-center justify-center border border-accent/30">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                🎉 Request Submitted Successfully
              </h3>
              <p className="text-sm font-body text-white/75 leading-relaxed max-w-md mx-auto mb-8">
                Thank you! We&apos;ve received your request and will contact you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-dark font-display font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white transition-all shadow-md"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 text-white hover:bg-white/20 font-display font-bold uppercase tracking-wider text-xs sm:text-sm transition-all border border-white/15"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
