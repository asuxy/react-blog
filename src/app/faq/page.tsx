const faqs = [
    { question: "What is this blog about?", answer: "We cover web development, coding tutorials, and tech news." },
    { question: "Can I contribute?", answer: "Yes! We welcome guest posts. Reach out via our Contact page." },
    { question: "How often do you post?", answer: "We aim to publish new content weekly." },
  ];
  
export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <p className="text-gray-700">{faq.answer}</p>
            </div>
            ))}
        </div>
        </div>
    );
}
  