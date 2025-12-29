import Image from 'next/image';
import { ReactNode } from 'react';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

export default function StyleGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Styles"
        title="Style Guide"
        subtitle="A modernized version of the original style guide page with Tailwind-powered components."
      />

      <LayoutContainer className="space-y-14 py-10">
        <Section
          title="Paragraph and Image"
          description="Keep the classic layout: image floated to the left with supporting copy."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <p className="flex gap-4">
                <Image
                  src="/images/sample-image.jpg"
                  alt="Sample"
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] rounded-2xl object-cover"
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras
                  id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo
                  tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci
                  ut diam.
                </span>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum. Cras id
                urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo
                tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci
                ut diam.
              </p>
              <p className="space-x-2">
                <a href="#" className="text-accent underline underline-offset-4">
                  link
                </a>
                <abbr title="Abbreviation">abbrev.</abbr>
                <strong>strong text</strong>
                <em className="italic">em text</em>
                <del>deleted text</del>
                <mark className="rounded bg-accent/20 px-1 text-accent">marked text</mark>
                <code className="rounded bg-white/10 px-2 py-1">.code</code>
              </p>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-gray-300">
              <h3 className="text-lg font-semibold text-white">Drop caps</h3>
              <p className="first-letter:mr-3 first-letter:float-left first-letter:text-5xl first-letter:font-display first-letter:text-accent">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
              </p>
              <h3 className="text-lg font-semibold text-white">Small print</h3>
              <p>
                Buy one widget, get one free!{' '}
                <small className="text-gray-500">
                  (While supplies last. Offer expires on the vernal equinox. Not valid in Ohio.)
                </small>
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="Quotes"
          description="Pull quotes and block quotes styled with gradients."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <aside className="rounded-3xl border border-border/60 bg-white/5 p-6 shadow-card">
              <blockquote className="space-y-3 text-gray-200">
                <p>
                  It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
                  all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                </p>
                <footer className="text-sm uppercase tracking-[0.2em] text-gray-500">Pull quote</footer>
              </blockquote>
            </aside>
            <div className="space-y-5">
              <blockquote className="rounded-3xl border border-border/60 bg-surface/70 p-6 shadow-card">
                <p className="text-gray-100">
                  Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do
                  what you believe is great work. And the only way to do great work is to love what you do.
                </p>
                <cite className="mt-3 block text-sm text-accent">Steve Jobs</cite>
              </blockquote>
              <blockquote className="rounded-3xl border border-border/60 bg-surface/70 p-6 shadow-card">
                <p className="text-gray-100">Good design is as little design as possible.</p>
                <cite className="mt-3 block text-sm text-accent">Dieter Rams</cite>
              </blockquote>
            </div>
          </div>
        </Section>

        <Section
          title="Lists & Definitions"
          description="Ordered lists, unordered lists, and definition lists."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm text-gray-300">
              <ol className="list-decimal space-y-2 pl-6">
                <li>Here is an example</li>
                <li>of an ordered list.</li>
                <li>
                  A parent list item.
                  <ul className="list-disc space-y-1 pl-5">
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                  </ul>
                </li>
                <li>A list item.</li>
              </ol>
              <ul className="list-disc space-y-1 pl-6">
                <li>Here is an example</li>
                <li>of an unordered list.</li>
              </ul>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              <h5 className="text-base font-semibold text-white">Definition list</h5>
              <dl className="space-y-3">
                <div>
                  <dt className="font-semibold text-white">This is a term</dt>
                  <dd className="text-gray-400">
                    This is the definition of that term, which both live in a <code className="text-xs">dl</code>.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Another term</dt>
                  <dd className="text-gray-400">And it gets a definition too, which is this line.</dd>
                  <dd className="text-gray-400">
                    This is a second definition for a single term. A <code className="text-xs">dt</code> may be followed
                    by multiple <code className="text-xs">dd</code>s.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        <Section
          title="Headers & Buttons"
          description="Typography scale and primary/secondary buttons."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2 text-white">
              <h1 className="text-4xl font-display font-semibold">H1 Heading</h1>
              <h2 className="text-3xl font-display font-semibold">H2 Heading</h2>
              <h3 className="text-2xl font-display font-semibold">H3 Heading</h3>
              <h4 className="text-xl font-display font-semibold">H4 Heading</h4>
              <h5 className="text-lg font-display font-semibold">H5 Heading</h5>
              <h6 className="text-base font-display font-semibold">H6 Heading</h6>
            </div>
            <div className="space-y-4">
              <Button className="w-full">Primary button</Button>
              <Button variant="secondary" className="w-full">
                Default button
              </Button>
            </div>
          </div>
        </Section>

        <Section
          title="Stats Tabs"
          description="Simple pill-style stats to mirror the template."
        >
          <div className="flex flex-wrap gap-3">
            {[
              ['1,234', 'Sasuke'],
              ['567', 'Hinata'],
              ['23,456', 'Naruto'],
              ['3,456', 'Kiba'],
              ['456', 'Shikamaru'],
              ['26', 'Sakura'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-full border border-border/60 bg-surface/70 px-4 py-2 text-sm text-gray-200"
              >
                <span className="font-semibold text-white">{value}</span> <em className="text-gray-400">{label}</em>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Responsive media"
          description="Images and videos stay fluid with rounded corners."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Image</h4>
              <Image
                src="/images/shutterbug.jpg"
                alt="Shutterbug"
                width={1200}
                height={800}
                className="h-auto w-full rounded-3xl object-cover"
                priority
              />
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Video</h4>
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-border/60 bg-black/50">
                <iframe
                  src="https://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39"
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section
          title="Table"
          description="Clean table styling with border separation."
        >
          <div className="overflow-hidden rounded-3xl border border-border/60 bg-surface/70 shadow-card">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-background/60 text-left text-sm uppercase tracking-[0.18em] text-gray-400">
                  <tr>
                    {['Name', 'Age', 'Sex', 'Location'].map((col) => (
                      <th key={col} className="px-4 py-3">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm text-gray-200">
                  {[
                    ['Naruto Uzumaki', '16', 'Male', 'Konoha'],
                    ['Sakura Haruno', '16', 'Female', 'Konoha'],
                  ].map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section
          title="Form styles"
          description="Inputs reuse the shared Input/Textarea components."
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-200" htmlFor="guide-email">
                  Your email
                </label>
                <Input id="guide-email" type="email" placeholder="test@mailbox.com" className="mt-2" />
              </div>
              <div>
                <label className="text-sm text-gray-200" htmlFor="guide-reason">
                  Reason for contacting
                </label>
                <select
                  id="guide-reason"
                  className="mt-2 w-full rounded-2xl border border-border bg-surface/80 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                  defaultValue="Questions"
                >
                  <option>Questions</option>
                  <option>Report</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-200" htmlFor="guide-message">
                  Message
                </label>
                <Textarea id="guide-message" placeholder="Your message" className="mt-2 min-h-[140px]" />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input type="checkbox" className="h-4 w-4 rounded border-border bg-surface" />
                <span>Send a copy to yourself</span>
              </label>
              <Button type="submit" className="w-full sm:w-auto">
                Submit
              </Button>
            </form>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Code block</h3>
                <pre className="mt-3 overflow-auto rounded-2xl border border-border/60 bg-background/80 p-4 text-xs text-gray-200">
{`code {
  font-size: 1.4rem;
  margin: 0 .2rem;
  padding: .2rem .6rem;
  white-space: nowrap;
  background: #F1F1F1;
  border: 1px solid #E1E1E1;	
  border-radius: 3px;
}`}
                </pre>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Alerts</h3>
                <Alert tone="error">Error Message. Your message goes here.</Alert>
                <Alert tone="success">Success Message. Your message goes here.</Alert>
                <Alert tone="info">Info Message. Your message goes here.</Alert>
                <Alert tone="notice">Notice Message. Your message goes here.</Alert>
              </div>
            </div>
          </div>
        </Section>
      </LayoutContainer>
    </>
  );
}

type AlertProps = {
  children: ReactNode;
  tone: 'error' | 'success' | 'info' | 'notice';
};

function Alert({ children, tone }: AlertProps) {
  const toneStyles: Record<AlertProps['tone'], string> = {
    error: 'border-red-500/40 bg-red-500/10 text-red-200',
    success: 'border-green-500/40 bg-green-500/10 text-green-200',
    info: 'border-blue-500/40 bg-blue-500/10 text-blue-200',
    notice: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-200',
  };

  return (
    <div className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm ${toneStyles[tone]}`}>
      <p>{children}</p>
      <span className="text-lg leading-none opacity-70">×</span>
    </div>
  );
}
