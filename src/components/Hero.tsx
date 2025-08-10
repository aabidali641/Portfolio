import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Loader2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [loadingFile, setLoadingFile] = useState<string | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        buttonsRef.current,
        scrollIndicatorRef.current,
      ],
      { opacity: 0, y: 50 }
    );

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        buttonsRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        scrollIndicatorRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );

    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  const handleDownload = async (fileUrl: string, fileName: string) => {
    try {
      setLoadingFile(fileName);
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setLoadingFile(null);
    }
  };

  const handleDownloadCV = async () => {
    try {
      setLoading(true);
      const fileUrl =
        "https://raw.githubusercontent.com/aabidali641/My-Documents/main/Aabid%20Ali%20Resume.pdf";
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Failed to fetch file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Aabid_Ali_Resume.pdf";
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setLoading(false);
    }
  };

  const buttonStyle =
    "border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-transform transform hover:scale-105 active:scale-95";

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400">
            Aabid Ali
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-2"
        >
          Full Stack Developer
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Java & MERN Stack Specialist | AI-Enhanced And Scalable Web
          Applications | Bridging Intelligent Systems with Modern UI/UX | MCA
          Postgraduate | Passionate About Building Future-Ready Digital
          Solutions
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg neon-glow"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className={buttonStyle}
            onClick={handleDownloadCV}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>

        <div className="flex justify-center items-center gap-4">
          {/* Cover Letter Button */}
          <Button
            variant="outline"
            size="lg"
            className={buttonStyle}
            onClick={() =>
              handleDownload(
                "https://raw.githubusercontent.com/aabidali641/My-Documents/main/Cover%20Letter.pdf",
                "Aabid_Ali_Cover_Letter.pdf"
              )
            }
            disabled={loadingFile === "Aabid_Ali_Cover_Letter.pdf"}
          >
            {loadingFile === "Aabid_Ali_Cover_Letter.pdf" ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <FileText className="mr-2 h-5 w-5" />
                Download Cover Letter
              </>
            )}
          </Button>

          {/* Download Foreign CV Button */}
          <Button
            variant="outline"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg neon-glow"
            onClick={() =>
              handleDownload(
                "https://raw.githubusercontent.com/aabidali641/My-Documents/main/Foreign%20CV.pdf",
                "Aabid_Ali_Foreign_CV.pdf"
              )
            }
            disabled={loadingFile === "Aabid_Ali_Foreign_CV.pdf"}
          >
            {loadingFile === "Aabid_Ali_Foreign_CV.pdf" ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Download Foreign CV
              </>
            )}
          </Button>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="flex flex-col items-center text-primary">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
