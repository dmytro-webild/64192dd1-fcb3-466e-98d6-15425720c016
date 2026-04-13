"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Philosophy",
          id: "philosophy",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="DR RAMONA"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Where Science Meets Radiance"
      description="Doctor-led aesthetics for the discerning patient"
      testimonials={[
        {
          name: "Jessica T.",
          handle: "@jessicat",
          testimonial: "My experience was painless and professional. The practitioner really understood my needs.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-charming-young-caucasian-woman-with-bob-pinkish-hairstyle-facial-piercing-relaxing-home-sitting-comfortably-sofa-looking-camera-with-cute-smile_343059-1950.jpg",
        },
        {
          name: "Charlotte N.",
          handle: "@charlotten",
          testimonial: "Amazing! I am so happy with the results. The team is fantastic and professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-healthcare-expert-looking-camera_637285-11471.jpg",
        },
        {
          name: "Hollie L.",
          handle: "@holliel",
          testimonial: "I have had such a confidence boost. I would not recommend anyone else.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-smiley-doctor-s-appointment_23-2149313522.jpg",
        },
        {
          name: "Georgia T.",
          handle: "@georgiat",
          testimonial: "Astounded at the amount of knowledge the practitioner had. True specialist care.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/make-up-artist-making-client-laugh_23-2148398584.jpg",
        },
        {
          name: "Alexandra V.",
          handle: "@alexandrav",
          testimonial: "Extremely impressed and delighted with the service. Amazing work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-women-working-together_23-2149871330.jpg",
        },
      ]}
      buttons={[
        {
          text: "Explore Services",
          href: "#services",
        },
        {
          text: "Book Consultation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/hospital-reception-desk-with-computer-making-healthcare-appointments-patients-with-disease-registration-work-with-medical-checkup-reports-papers-forms-facility-lobby_482257-50665.jpg"
      imageAlt="Dr Ramona Aesthetics"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-white-short-hair_23-2148262831.jpg",
          alt: "Patient portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-elder-smiley-covid-recovery-center-female-doctor_23-2148847816.jpg",
          alt: "Patient portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-doctor-wearing-white-coat-front-view_23-2149844581.jpg",
          alt: "Patient portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/natural-beauty-young-woman_329181-1207.jpg",
          alt: "Patient portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg",
          alt: "Patient portrait",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Evidence-Based",
        },
        {
          type: "text",
          text: "Doctor-Led",
        },
        {
          type: "text",
          text: "Natural Results",
        },
        {
          type: "text",
          text: "Bespoke Plans",
        },
        {
          type: "text",
          text: "Confidence",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Anti-Wrinkle Injections",
          description: "Precise, evidence-based treatments to soften expression lines.",
          tag: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/clinic-registration-counter-waiting-room-lobby-computer-make-checkup-appointments-with-healthcare-report-papers-empty-hospital-reception-desk-with-medical-forms-insurance-support_482257-50666.jpg",
        },
        {
          id: "2",
          title: "Dermal Fillers",
          description: "Advanced volumising treatments to enhance contours.",
          tag: "Advanced",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-empty-desk-nurses-with-computer-monitor-document-files-medical-clinic-nobody-doctors-office-with-healthcare-instruments-professional-equipment-checkup_482257-38078.jpg",
        },
        {
          id: "3",
          title: "Fat Dissolving",
          description: "Non-invasive body contouring for refined silhouettes.",
          tag: "Body",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-modern-medical-office-having-disease-documents-table-equipped-with-contemporary-furniture-hospital-workplace-with-nobody-it-ready-sickness-consultation-medicine-support_482257-35871.jpg",
        },
        {
          id: "4",
          title: "Dermapen Microneedling",
          description: "Cutting-edge collagen induction for skin texture.",
          tag: "Skin",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-reception-desk-appointments-medical-facility-waiting-area-with-chairs-sit-rows-before-attending-checkup-consultation-healthcare-clinical-space-emergency-center_482257-46930.jpg",
        },
        {
          id: "5",
          title: "PRP Therapy",
          description: "Regenerative treatments for long-term renewal.",
          tag: "Regenerative",
          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-diagnosing-melanoma-body-female-patient_23-2149365819.jpg",
        },
        {
          id: "6",
          title: "Skin Boosters",
          description: "Professional-grade hydration for a luminous glow.",
          tag: "Hydration",
          imageSrc: "http://img.b2bpic.net/free-photo/client-beautician-s-appointment-consultation-face-shaping-preparation-upcoming-procedures-visual-examination-problem-areas_343596-4176.jpg",
        },
      ]}
      title="Our Treatments"
      description="Evidence-based aesthetic treatments for your unique face."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Medical Excellence Meets Aesthetic Artistry",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/doctor-assistant-checking-medical-form_23-2148733937.jpg",
          alt: "Doctor performing consultation",
        },
      ]}
    />
  </div>

  <div id="philosophy" data-section="philosophy">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Three Pillars"
      tag="Philosophy"
      metrics={[
        {
          id: "m1",
          value: "Precision",
          description: "Evidence-based treatments tailored to your face.",
        },
        {
          id: "m2",
          value: "Naturalness",
          description: "Subtle, sophisticated results that respect you.",
        },
        {
          id: "m3",
          value: "Confidence",
          description: "Empowering you to love your natural beauty.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in touch"
      title="Ready to Begin Your Transformation?"
      description="Schedule a confidential consultation with Dr Ramona today."
      buttons={[
        {
          text: "Book Consultation",
          href: "tel:+441173450000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Clinic",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Philosophy",
              href: "#philosophy",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "+44 (0)117 345 0000",
              href: "tel:+441173450000",
            },
            {
              label: "info@drramona.co.uk",
              href: "mailto:info@drramona.co.uk",
            },
          ],
        },
      ]}
      logoText="DR RAMONA"
      copyrightText="© 2026 Dr Ramona Aesthetics & Wellness."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
