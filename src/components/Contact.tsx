import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import Tilt from "react-parallax-tilt";
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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    setLoading(true);

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
      setLoading(false);
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mdaabidali28@gmail.com",
      link: "mailto:mdaabidali28@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9410464794",
      link: "tel:+919410464794",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amroha Uttar Pradesh, India",
      link: "https://www.google.com/maps/place/Amroha,+Uttar+Pradesh",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-secondary/10 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <Tilt
          tiltEnable={true}
          glareEnable={true}
          glareMaxOpacity={0.25}
          glareColor="white"
          glarePosition="bottom"
          glareBorderRadius="1rem"
          scale={1.5}
          transitionSpeed={900}
          tiltMaxAngleX={25}
          tiltMaxAngleY={25}
          className="block mx-auto max-w-max mb-12 sm:mb-16"
        >
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gradient text-center"
          >
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
        </Tilt>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <div ref={formRef}>
            <Card className="glass border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div
            ref={contactInfoRef}
            className="space-y-6 max-w-xl mx-auto px-4 sm:px-6 md:px-0"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-primary text-center md:text-left">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-6 text-center md:text-left text-base sm:text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Tilt
                  key={index}
                  tiltEnable={true}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="white"
                  glarePosition="bottom"
                  glareBorderRadius="1rem"
                  scale={1.05}
                  transitionSpeed={600}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  className="block"
                >
                  <Card className="glass border-primary/20 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-5 sm:p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary text-lg sm:text-xl">
                            {info.title}
                          </h4>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary break-all text-sm sm:text-base"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
