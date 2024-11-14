import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    id: "item-1",
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "Is it styled?",
    answer:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    id: "item-3",
    question: "Is it animated?",
    answer:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export default function FAQS() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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
            className="w-full rounded-lg shadow-sm md:pt-4"
          >
            {faqsData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={`px-4 ${
                  index !== faqsData.length - 1 ? "border-b" : ""
                }`}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-left font-medium text-black dark:text-white text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
