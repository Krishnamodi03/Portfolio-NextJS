import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-surface overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.12), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <SectionHeading
          label="Let's Work Together"
          title="Get In Touch"
          subtitle="Have a project in mind or want to say hello? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Form */}
          <GlassCard className="p-8">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Send a Message
            </h3>
            <ContactForm />
          </GlassCard>

          {/* Right: Contact info */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-lg font-semibold text-foreground">
              Find Me Here
            </h3>
            <SocialLinks />

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-secondary-foreground leading-relaxed">
                Currently{" "}
                <span className="font-semibold text-primary">
                  open to new opportunities
                </span>
                . Whether it&apos;s a full-time role, freelance project, or
                collaboration — let&apos;s connect and build something great
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
