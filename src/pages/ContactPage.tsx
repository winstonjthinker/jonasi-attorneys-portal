// Contact page
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { MainLayout } from '@/components/layout';
import { SectionWrapper, ImagePlaceholder } from '@/components/common';
import { NewsletterSection } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { companyInfo, practiceAreas } from '@/data/siteData';
import { contactApi } from '@/api';

const ContactPage: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactApi.submitContact(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="relative py-20 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-3 block">Contact Us</span>
            <h1 className="heading-display text-primary-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-primary-foreground/80">Have a legal question? Contact us today for a confidential consultation.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="heading-card mb-6">Contact Information</h2>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-accent" /></div>
              <div><h3 className="font-semibold mb-1">Office Address</h3><p className="text-sm text-muted-foreground">{companyInfo.address}</p></div>
            </div>
            {companyInfo.phones && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center"><Phone className="w-5 h-5 text-accent" /></div>
                <div>
                  <h3 className="font-semibold mb-1">Phone Numbers</h3>
                  <a href={`tel:${companyInfo.phones.landline.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-accent">{companyInfo.phones.landline} (Landline)</a>
                  <a href={`tel:${companyInfo.phones.econet.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-accent">{companyInfo.phones.econet} (Econet)</a>
                  <a href={`tel:${companyInfo.phones.netone.replace(/\s/g, '')}`} className="block text-sm text-muted-foreground hover:text-accent">{companyInfo.phones.netone} (Netone)</a>
                </div>
              </div>
            )}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center"><Mail className="w-5 h-5 text-accent" /></div>
              <div><h3 className="font-semibold mb-1">Email</h3><a href={`mailto:${companyInfo.email}`} className="text-sm text-muted-foreground hover:text-accent">{companyInfo.email}</a></div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center"><Clock className="w-5 h-5 text-accent" /></div>
              <div><h3 className="font-semibold mb-1">Office Hours</h3><p className="text-sm text-muted-foreground">{companyInfo.hours}</p></div>
            </div>
            <ImagePlaceholder src="/media/office-map.jpg" alt="Office Location Map" className="w-full h-48 rounded-sm mt-8" />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-sm shadow-medium p-8">
              <h2 className="heading-card mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

              {isSuccess ? (
                <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 rounded-sm p-8">
                  <CheckCircle className="w-6 h-6" />
                  <div><h3 className="font-semibold">Message Sent Successfully!</h3><p className="text-sm">We'll be in touch within 24 hours.</p></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input placeholder="Your full name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="+263 712 345 678" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Practice Area</label>
                      <Select value={selectedArea} onValueChange={setSelectedArea}>
                        <SelectTrigger><SelectValue placeholder="Select a practice area" /></SelectTrigger>
                        <SelectContent>
                          {practiceAreas.map((area) => (<SelectItem key={area.slug} value={area.slug}>{area.title}</SelectItem>))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input placeholder="How can we help you?" value={formData.subject} onChange={(e) => handleChange('subject', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea placeholder="Please describe your legal matter..." rows={5} value={formData.message} onChange={(e) => handleChange('message', e.target.value)} required />
                  </div>
                  <Button type="submit" variant="accent" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : (<>Send Message <Send className="w-4 h-4" /></>)}
                  </Button>
                  <p className="text-xs text-muted-foreground">By submitting this form, you agree to our privacy policy.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <NewsletterSection />
    </MainLayout>
  );
};

export default ContactPage;
