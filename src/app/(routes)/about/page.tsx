import Image from 'next/image';
import { LayoutContainer } from '@/components/shared/LayoutContainer';
import { PageHeader } from '@/components/shared/PageHeader';
import { Section } from '@/components/shared/Section';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Learn more about us"
        subtitle="Rebuilt from the template with cleaner structure and reusable components."
      />

      <LayoutContainer>
        <Section>
          <div className="space-y-10">
            <div className="overflow-hidden rounded-3xl border border-border/60">
              <Image
                src="/images/thumbs/about-us.jpg"
                alt="About us"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="space-y-6 text-gray-300">
              <h2 className="text-2xl font-display font-semibold text-white">Our story</h2>
              <p className="text-lg text-gray-200">
                Lorem ipsum Nisi cillum reprehenderit minim sunt dolore dolor eiusmod eu aliquip ad ut sint dolore
                laborum voluptate ullamco dolore aliquip enim. Excepteur cillum cupidatat fugiat nostrud cupidatat dolor
                sunt sint sit nisi est eu exercitation incididunt adipisicing.
              </p>
              <p>
                Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat nostrud cupidatat dolor sunt sint sit nisi
                est eu exercitation incididunt adipisicing veniam velit id fugiat enim mollit amet anim veniam dolor
                dolor irure velit commodo cillum sit nulla ullamco magna amet magna cupidatat qui labore cillum sit in
                tempor veniam consequat non laborum adipisicing aliqua ea nisi sint ut quis proident ullamco ut dolore
                culpa occaecat ut laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat
                fugiat in adipisicing in amet Ut nulla nisi non ut enim aliqua laborum mollit quis nostrud sed sed.
              </p>
              <p>
                Lorem ipsum Cillum sit sunt dolore non aute enim pariatur deserunt magna reprehenderit veniam officia
                ullamco eiusmod laborum commodo veniam elit proident enim sit cillum ex aliquip dolore labore sint ut
                deserunt officia veniam consectetur in in quis eu consectetur non sint Duis mollit Ut magna irure.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ['Who.', 'Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat.'],
                ['When.', 'Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat.'],
                ['What.', 'Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat.'],
                ['How.', 'Lorem ipsum Nisi amet fugiat eiusmod et aliqua ad qui ut nisi Ut aute anim mollit fugiat.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-border/60 bg-surface/70 p-5 shadow-card">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </LayoutContainer>
    </>
  );
}
