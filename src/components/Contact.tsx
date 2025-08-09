import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Globe,
  Code2,
} from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // <-- Loading state added

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact info animation
      gsap.fromTo(
        contactInfoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // <-- Start loading

    try {
      const response = await fetch(
        "https://wvevyvdjcedwlvjovfzm.functions.supabase.co/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false); // <-- Stop loading
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ... your contactInfo and socialLinks arrays remain the same

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div ref={formRef}>
            <Card className="glass border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                        disabled={loading} // disable inputs while loading
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-primary/20 focus:border-primary"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/20 focus:border-primary"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                      disabled={loading}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-glow flex items-center justify-center"
                    disabled={loading} // disable button while loading
                  >
                    {loading ? (
                      <>
                        {/* Simple spinner */}
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            {/* ... Your contact info and social links JSX remains unchanged ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
