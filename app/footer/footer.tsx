import { FileUser } from "lucide-react"
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-muted py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-muted-foreground" />
                <p>Cairo, Egypt</p>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <p>
                  +20 1024081411{" "}
                  <a
                    href="https://wa.me/+201024081411"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-4 ml-2"
                  >
                    WhatsApp
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-muted-foreground" />
                <a href="mailto:omarsameh20017@gmail.com" className="text-primary underline underline-offset-4">
                  omarsameh20017@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Connect with Me</h3>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/omarsameh2001/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/OmarSameh2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://drive.google.com/file/d/1ulsaMhH49gYlMJF5kybtfdYw9JKTS7c0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="CV"
                title="Resume"
              >
              <FileUser className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Omar Sameh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
