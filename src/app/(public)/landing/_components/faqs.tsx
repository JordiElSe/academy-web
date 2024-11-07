import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQS() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <h3>Support</h3>
            <h2>FAQs</h2>
            <p className="text-lg text-black dark:text-white">
              Can&apos;t find the answer?{" "}
              <a
                href="#contact"
                className="text-primary hover:underline font-medium"
              >
                Contact us
              </a>
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg shadow-sm"
          >
            <AccordionItem value="item-1" className="border-b px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-medium text-black dark:text-white">
                  Is it accessible?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-medium">Is it styled?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-medium">Is it animated?</span>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
