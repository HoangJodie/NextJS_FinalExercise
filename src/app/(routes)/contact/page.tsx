import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with us"
        subtitle="Contact page rebuilt from the template with map placeholder and a clean form."
      />

      <LayoutContainer>
        <Section>
          <div className="space-y-10">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-surface via-background to-surface/80 p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(246,75,57,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_35%)]" />
              <div className="relative flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Map placeholder</p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-black/40 p-6 text-gray-300">
                    Imagine an embedded map here. Replace this with a map provider when wiring up.
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-black/20 p-6 text-gray-300">
                    <p className="text-sm text-gray-400">Zoom controls:</p>
                    <div className="mt-3 flex gap-2">
                      <Button variant="secondary" className="h-10 w-10 p-0 text-lg">
                        +
                      </Button>
                      <Button variant="secondary" className="h-10 w-10 p-0 text-lg">
                        –
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <h2 className="text-2xl font-display font-semibold text-white">Visit or contact</h2>
              <p className="text-lg text-gray-200">
                Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat magna occaecat Excepteur nisi esse veniam
                dolor consectetur minim qui nisi esse deserunt commodo ea enim ullamco non voluptate consectetur minim
                aliquip Ut incididunt amet ut cupidatat.
              </p>
              <p>
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi
                est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
                dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in
                tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore
                culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat
                fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-border/60 bg-surface/70 p-6 shadow-card">
                  <h4 className="text-lg font-semibold text-white">Where to find us</h4>
                  <p className="mt-2 text-sm leading-relaxed">
                    1600 Amphitheatre Parkway
                    <br />
                    Mountain View, CA
                    <br />
                    94043 US
                  </p>
                </div>
                <div className="rounded-3xl border border-border/60 bg-surface/70 p-6 shadow-card">
                  <h4 className="text-lg font-semibold text-white">Contact info</h4>
                  <p className="mt-2 text-sm leading-relaxed">
                    someone@abstractwebsite.com
                    <br />
                    info@abstractwebsite.com
                    <br />
                    Phone: (+63) 555 1212
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-4 rounded-3xl border border-border/60 bg-surface/70 p-6 shadow-card">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm text-gray-200" htmlFor="contact-name">
                    Your name
                  </label>
                  <Input id="contact-name" name="name" placeholder="Your Name" className="mt-2" />
                </div>
                <div>
                  <label className="text-sm text-gray-200" htmlFor="contact-email">
                    Your email
                  </label>
                  <Input id="contact-email" name="email" type="email" placeholder="Your Email" className="mt-2" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-200" htmlFor="contact-website">
                  Website
                </label>
                <Input id="contact-website" name="website" placeholder="https://example.com" className="mt-2" />
              </div>
              <div>
                <label className="text-sm text-gray-200" htmlFor="contact-message">
                  Your message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message"
                  className="mt-2 min-h-[160px]"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Submit
              </Button>
            </form>
          </div>
        </Section>
      </LayoutContainer>
    </>
  );
}
