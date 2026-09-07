import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, form, mapEmbedUrl, mapTitle, id, hasBackground = false }: ContactProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="flex items-stretch justify-center">
      <div className={`grid w-full gap-8 ${form || mapEmbedUrl ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        <div className="h-full pr-6">
          {content && <p className="mt-3 mb-12 text-lg text-stone-600 dark:text-slate-400">{content}</p>}
          <ul className="mb-6 md:mb-0">
            {items &&
              items.map(({ title, description, icon: Icon }, index) => (
                <li key={`item-contact-${index}`} className="flex">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary-800 text-gray-50">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div className="ml-4 mb-4 rtl:ml-0 rtl:mr-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-ink dark:text-white">{title}</h3>
                    {typeof description === 'string' ? (
                      <p key={`text-description-${index}`} className="text-stone-600 dark:text-slate-400">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, indexDesc) => (
                        <p key={`text-description-${indexDesc}`} className="text-stone-600 dark:text-slate-400">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {mapEmbedUrl && (
          <div className="overflow-hidden border border-stone-200 bg-stone-100 dark:border-slate-700 dark:bg-slate-800">
            <iframe
              title={mapTitle || 'Studio location map'}
              src={mapEmbedUrl}
              className="h-[min(28rem,70vh)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
        {form && !mapEmbedUrl && (
          <Form {...form} containerClass="card h-fit max-w-2xl mx-auto p-5 md:p-12" btnPosition="center" />
        )}
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
