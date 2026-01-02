// Newsletter subscription section
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SectionWrapper } from '@/components/common';
import { contactApi } from '@/api';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await contactApi.subscribeNewsletter(email);
      if (response.success) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError(response.error || 'Failed to subscribe');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper background="cream" className="!py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="heading-section mb-4">Stay Updated</h2>
        <p className="text-body text-muted-foreground mb-8">
          Subscribe to our newsletter for legal insights, firm news, and updates on Zimbabwean law.
        </p>

        {isSuccess ? (
          <div className="flex items-center justify-center gap-3 text-green-600 bg-green-50 rounded-sm p-4">
            <CheckCircle className="w-5 h-5" />
            <span>Thank you for subscribing! You'll receive our updates soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background"
            />
            <Button type="submit" variant="gold" size="lg" disabled={isLoading}>
              {isLoading ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        )}

        {error && (
          <p className="text-destructive text-sm mt-3">{error}</p>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default NewsletterSection;
