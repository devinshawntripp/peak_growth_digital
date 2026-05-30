import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import JsonLd from "~/components/JsonLd";

export const meta: MetaFunction = () => {
    return [
        { title: "Terms of Service - Peak Growth Digital" },
        { name: "description", content: "The terms and conditions governing your use of Peak Growth Digital LLC's website, services, and applications." },
    ];
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function TermsOfService() {
    const jsonLdData = {
        "@type": "WebPage",
        name: "Terms of Service - Peak Growth Digital",
        description: "Terms of Service for Peak Growth Digital LLC and associated applications.",
        url: "https://peakgrowthdigital.com/terms-of-service",
    };

    return (
        <>
            <JsonLd data={jsonLdData} />
            <motion.div
                className="container mx-auto px-4 py-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" variants={itemVariants}>
                    Terms of Service
                </motion.h1>

                <motion.div className="prose max-w-none" variants={itemVariants}>
                    <p className="text-lg mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service ("Terms") govern your access to and use of the website (peakgrowthdigital.com), services, and applications provided by Peak Growth Digital LLC ("we," "our," or "us"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Our Services</h2>
                        <p>
                            Peak Growth Digital provides digital marketing services, including website creation, website ranking and search engine optimization, Google Business Profile optimization, paid advertising management, social media management, and related digital services. The specific scope, deliverables, and timelines for any engagement are defined in a separate proposal or agreement between you and us.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
                        <p>
                            You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet these requirements.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Client Responsibilities</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Provide accurate, current, and complete information when requested</li>
                            <li>Supply timely access to accounts, assets, and approvals needed to perform the Services</li>
                            <li>Ensure you have the rights to any materials you provide to us</li>
                            <li>Use our Services in compliance with all applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Fees and Payment</h2>
                        <p>
                            Fees for our Services are set out in the applicable proposal or agreement. Unless otherwise stated, invoices are due upon receipt. Late or unpaid amounts may result in suspension of Services. All fees are non-refundable except where required by law or expressly stated in a written agreement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                        <p>
                            All content on our website, including text, graphics, logos, and software, is the property of Peak Growth Digital LLC or its licensors and is protected by intellectual property laws. Ownership of deliverables produced for a client is governed by the applicable engagement agreement and is generally transferred upon full payment.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
                        <p>
                            Our Services may rely on or link to third-party platforms (such as search engines, advertising networks, and analytics providers). We are not responsible for the availability, content, or policies of those third parties, and your use of them is subject to their respective terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. No Guarantee of Results</h2>
                        <p>
                            Digital marketing results depend on many factors outside our control, including search engine algorithms, market conditions, and third-party platform policies. While we apply industry best practices, we do not guarantee specific rankings, traffic, leads, or revenue outcomes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
                        <p>
                            Our Services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement, to the fullest extent permitted by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Peak Growth Digital LLC will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of our Services. Our total liability for any claim will not exceed the amount you paid to us for the Services giving rise to the claim during the three months preceding the claim.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
                        <p>
                            You agree to indemnify and hold harmless Peak Growth Digital LLC and its officers, employees, and agents from any claims, damages, liabilities, and expenses arising from your use of our Services or your breach of these Terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
                        <p>
                            We may suspend or terminate your access to our Services at any time for any violation of these Terms. Either party may terminate an ongoing engagement in accordance with the applicable agreement. Provisions that by their nature should survive termination will survive.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the United States and the state in which Peak Growth Digital LLC is organized, without regard to conflict of law principles.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">14. Changes to These Terms</h2>
                        <p>
                            We may update these Terms from time to time. The "Last updated" date reflects the most recent revision. Your continued use of our Services after changes take effect constitutes acceptance of the revised Terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
                        <p>
                            If you have questions about these Terms, please contact us at:
                        </p>
                        <p className="mt-2">
                            Peak Growth Digital LLC<br />
                            Email: info@peakgrowthdigital.com
                        </p>
                    </section>
                </motion.div>
            </motion.div>
        </>
    );
}
