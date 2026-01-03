// Footer component
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { companyInfo, navigation, practiceAreas } from '@/data/siteData';
import { ImagePlaceholder } from '@/components/common';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-sm">
                <ImagePlaceholder
                  src="/media/logo-white.png"
                  alt="Jonasi Attorneys Logo"
                  className="w-full h-full"
                  showPath={false}
                />
              </div>
              <span className="font-serif text-xl font-semibold">
                Jonasi Attorneys
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              A premier full-service law firm in Zimbabwe, providing trusted corporate, commercial, litigation, conveyancing and mining law services.
            </p>
            <div className="flex gap-4">
              {companyInfo.social.facebook && (
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {companyInfo.social.twitter && (
                <a
                  href={companyInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {companyInfo.social.linkedin && (
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  {companyInfo.address}
                </span>
              </li>
              {companyInfo.phones && (
                <>
                  <li>
                    <a href={`tel:${companyInfo.phones.landline.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{companyInfo.phones.landline} (Landline)</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${companyInfo.phones.econet.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{companyInfo.phones.econet} (Econet)</span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${companyInfo.phones.netone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{companyInfo.phones.netone} (Netone)</span>
                    </a>
                  </li>
                </>
              )}
              <li>
                <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {currentYear} Jonasi Attorneys. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
