import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import JsonLd from "~/components/JsonLd";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy - Peak Growth Digital" },
        { name: "description", content: "Learn about how Peak Growth Digital LLC handles and protects your personal information across our services and applications." },
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

export default function PrivacyPolicy() {
    const jsonLdData = {
        "@type": "WebPage",
        name: "Privacy Policy - Peak Growth Digital",
        description: "Privacy Policy for Peak Growth Digital LLC and associated applications.",
        url: "https://peakgrowthdigital.com/privacy-policy",
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
                    Privacy Policy
                </motion.h1>

                <motion.div className="prose max-w-none" variants={itemVariants}>
                    <p className="text-lg mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                        <p>
                            Peak Growth Digital LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (peakgrowthdigital.com) or use our applications, including but not limited to Bidwise, MyEasyBids, Circle Miss, Weed Tycoon, and Sudoku Crazy Mania (collectively referred to as "Services").
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                        <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Name and contact information</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Billing and payment information</li>
                            <li>User account credentials</li>
                            <li>Device identifiers</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2">2.2 Usage Information</h3>
                        <ul className="list-disc pl-6 mb-4">
                            <li>App usage statistics</li>
                            <li>Game progress and scores</li>
                            <li>In-app purchase history</li>
                            <li>Device information and settings</li>
                            <li>IP address and location data</li>
                            <li>Browser type and version</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Provide and maintain our Services</li>
                            <li>Process transactions and payments</li>
                            <li>Send administrative information</li>
                            <li>Improve user experience</li>
                            <li>Analyze usage patterns</li>
                            <li>Prevent fraud and abuse</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                        <p>We may share your information with:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Service providers and business partners</li>
                            <li>Analytics providers</li>
                            <li>Payment processors</li>
                            <li>Legal authorities when required</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
                        <p>
                            Our Services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mb-4">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to data processing</li>
                            <li>Request data portability</li>
                            <li>Withdraw consent</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. SMS / Text Messaging</h2>
                        <p>
                            If you opt in to receive text messages from Peak Growth Digital LLC — for example, through our website chat widget or by providing your phone number — the following terms apply:
                        </p>
                        <ul className="list-disc pl-6 mb-4">
                            <li><strong>Consent:</strong> We send SMS messages only to individuals who have expressly opted in. Messages may relate to customer support, account or service updates, appointment scheduling, and information you have requested.</li>
                            <li><strong>Message frequency:</strong> Message frequency varies based on your interactions with us.</li>
                            <li><strong>Rates:</strong> Message and data rates may apply, depending on your mobile carrier and plan.</li>
                            <li><strong>Opt-out:</strong> You can cancel SMS messages at any time by replying STOP. We will send a confirmation and stop messaging you unless you opt in again.</li>
                            <li><strong>Help:</strong> Reply HELP for assistance, or contact us at info@peakgrowthdigital.com.</li>
                        </ul>
                        <p>
                            No mobile information, including your phone number and SMS opt-in consent, will be shared with third parties for marketing or promotional purposes, and it will never be sold or rented. We share it only with the service providers that help us operate the messaging service (such as our SMS platform provider), solely to deliver the messages you have requested.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <p className="mt-2">
                            Peak Growth Digital LLC<br />
                            Email: privacy@peakgrowthdigital.com
                        </p>
                    </section>
                </motion.div>
            </motion.div>
        </>
    );
}
