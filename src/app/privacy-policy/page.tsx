import type { Metadata } from "next";

import {
  LegalDocumentPage,
  type LegalSection,
} from "@/components/legal/LegalDocumentPage";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Your privacy and the security of your intellectual property are paramount to us. This Privacy Policy (\"Policy\") applies to the websites, platform, mobile or web applications, or other digital products that link to or reference this Policy (collectively, the \"Services\") operated by Enjamb Inc. (\"Enjamb,\" \"we,\" \"us,\" or \"our\"). This Policy explains what information we collect from users of our Services (a \"user,\" \"you,\" or \"your\"), including information that may be used to personally identify you (\"Personal Data\"), and how we collect, use, process, and share it.",
      "Enjamb does not sell your data or train on your data. You own your manuscripts and intellectual property.",
      "By accessing or using our Services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your Personal Data as described in this Policy and our Terms of Service.",
    ],
  },
  {
    id: "scope-and-applicability",
    title: "Scope and Applicability",
    paragraphs: [
      "This Policy applies to your information when you visit our website or otherwise use the Services.",
      "Please note that this Policy does not apply to the extent that we process Personal Data in the role of a processor, or a comparable role such as a service provider in certain jurisdictions, on behalf of our Customers, for example a university or institution. In such cases, the Customer is the data controller, and their privacy policy governs the collection and use of your data.",
      "Each of our Customers, not Enjamb, controls what information about you is collected by the Services on behalf of such Customer. For detailed privacy information applicable to situations where a Customer who uses the Services is the controller, please reach out to the respective Customer directly.",
      "We are not responsible for the privacy or data security practices of our Customers, which may differ from those set forth in this Privacy Policy.",
      "This Privacy Policy also does not apply to any third-party applications or services that are used in connection with our Services, such as if you choose to integrate a third-party reference manager, or any other products, services, or accounts provided by other entities under their own terms of service and privacy policy, collectively referred to as Third-Party Services.",
      "These Third-Party Services are not part of our Services and are provided by independent third parties under their policies and terms. Lastly, the Site or Services may contain links to other websites. We have no control over these websites and they are subject to their own terms of use and privacy policies.",
    ],
  },
  {
    id: "what-information-do-we-collect",
    title: "What Information Do We Collect?",
    paragraphs: [
      "We use the information we collect for the following legitimate business purposes.",
    ],
  },
  {
    id: "how-do-we-use-the-information-we-collect",
    title: "How Do We Use The Information We Collect?",
    paragraphs: [
      "We use the information we collect for the following legitimate business purposes.",
      "To Provide, Deliver, and Maintain Our Services: We use your account information, Personal Data, and Your Content to operate, deliver, maintain, and secure our platform, manage your account, provide access to the collaborative editor, and run our suite of AI-powered features.",
      "To Manage Collaboration: Your information is used to allow you to invite and manage team members and to control access permissions for your manuscripts.",
      "To Improve, Personalize, and Expand Our Services: We analyze usage data to understand how our Services are used, diagnose technical problems, and develop new features. We may also use this data to conduct internal reporting, auditing, and research, and to link or combine information to improve your overall user experience and expand our product offerings to better serve the research community.",
      "To Provide Support and Service Communications: We use your contact information to respond to your comments, questions, and support requests. We also send you essential service-related communications, such as technical notices, updates, security alerts, invoices, and administrative messages.",
      "To Communicate About Our Services (Marketing): With your consent where required by law, we may email or otherwise contact you with information and updates about Enjamb's new features, products, events, or other opportunities. You may opt-out of these communications at any time, as described in Section 9.",
      "To Process Payments and Verify Information: We use your information to process your subscription payments, prevent fraudulent transactions, and to compare and verify information for accuracy and update our records.",
      "To Create Aggregated and De-Identified Data: We may use information we collect to create aggregated, anonymized, non-personal data for analytical and research purposes to help us benchmark and improve our Services. We will maintain such data in a de-identified form and will not attempt to re-identify it, except solely for the purpose of determining whether our de-identification processes are compliant with applicable laws.",
      "For Legal, Safety, and Security Purposes: We use information to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity. We also use it to enforce our Terms of Service, protect the rights, property, or safety of Enjamb, our users, or the public, and to comply with legal obligations or respond to valid legal process.",
      "With Your Consent or At Your Direction: We may also use your information for any other purpose for which you provide your consent or at your explicit direction.",
    ],
  },
  {
    id: "our-commitment-to-responsible-ai",
    title: "Our Commitment to Responsible AI",
    paragraphs: [
      "Your intellectual property is paramount. Our proprietary AI, Enjamb Cessera, and our AI assistant, Anaphora, are governed by these core principles.",
      "For Your Benefit Only: We use our AI models to process your manuscript content and comments for the sole purpose of providing the features you request, such as parsing comments, assigning tasks, providing contextual suggestions, and generating summaries.",
      "WE DO NOT TRAIN ON YOUR DATA: We will never use your unpublished manuscript data, comments, rebuttals, or any other project content to train our proprietary AI models, including Cessera, or any third-party models.",
      "Inference Only: Your data is used for inference, generating a response to your specific, real-time request only, and is not logged or stored for future AI training purposes.",
    ],
  },
  {
    id: "how-we-share-and-disclose-information",
    title: "How We Share and Disclose Information",
    paragraphs: [
      "We do not sell your Personal Data or your research data. We only share information under the following limited circumstances.",
      "With Your Collaborators: When you invite team members to a project, they will have access to the manuscript and associated data according to the permissions you set.",
      "With Service Providers (Sub-processors): We use trusted third-party service providers to help us operate our Services. These providers are contractually obligated to implement robust security measures, protect your data, and are prohibited from using it for any other purpose.",
      "Our primary service providers include Supabase, our primary infrastructure partner for database management, authentication, and secure file storage; Amazon Web Services (AWS), which Supabase utilizes for underlying data hosting and infrastructure in the region you select; and Stripe, our payment processor for handling subscription payments.",
      "In Connection with a Business Transfer: If we are involved in a merger, acquisition, reorganization, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and or a prominent notice on our website of any change in ownership.",
      "For Legal Reasons: We may disclose your information if we believe in good faith that it is required by law, a valid legal process such as a subpoena or court order, or to protect the rights, property, or safety of Enjamb, our users, or the public.",
      "With Your Consent: We may share your information with third parties when we have your explicit consent to do so.",
    ],
  },
  {
    id: "data-storage-security-and-transfer",
    title: "Data Storage, Security, and Transfer",
    paragraphs: [
      "Data Security: We implement industry-standard technical and organizational security measures to protect your data. This includes encryption of data in transit using TLS or SSL and at rest using AES-256, and the use of Supabase's Row-Level Security and Storage Policies to ensure your data is strictly isolated and accessible only by you and your authorized collaborators.",
      "User Responsibility: Your account is protected by your password. We urge you to take steps to keep your Personal Data safe by choosing a strong password, not disclosing it to others, and by logging out of your account after each use.",
      "Data Storage Location: Your project data is stored securely with our infrastructure partners, Supabase on AWS, in a specific geographical region you select upon account creation, such as US-East or EU-Central. We do not move your project data outside of this region without your consent.",
      "International Data Transfers: We are based in the United States. Your Personal Data may be stored and processed in any country where we have facilities or in which we engage service providers. By using the Services, you consent to the transfer of information to countries outside of your country of residence, including the United States, which may have data protection rules that are different from those of your country.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    paragraphs: [
      "We retain your Personal Data as long as your account is active or as needed to provide you with the Services.",
      "You can delete your manuscripts or your entire account at any time. When you delete your account, all associated data is permanently removed from our active systems within a specified period.",
      "We may retain some information in de-identified and aggregated form, in archived or backup copies as required for our records retention obligations, or as otherwise required by law.",
    ],
  },
  {
    id: "how-we-use-tracking-technologies",
    title: "How We Use Tracking Technologies",
    paragraphs: [
      "We use cookies, small text files stored on your device, and similar tracking technologies to operate and improve our Services.",
      "Why we use them: Cookies help us enable our servers to recognize your web browser, tell us how and when you use our Services, remember your preferences, analyze trends, and secure your account.",
      "Types of Cookies We Use: Required Cookies are essential to operate the Services and their features, such as accessing secure areas, and you cannot opt out of these. Performance Cookies collect information about how you use our Services, such as which pages you visit most, which helps us improve how the Services function. Functionality Cookies allow our Services to remember choices you make, like your username or language, and provide enhanced, more personal features.",
      "Your Choices: You may delete or block cookies from our Services through your browser settings. However, if you do, parts of the Services may not work, and your experience may be diminished.",
      "Do Not Track: Your browser settings may allow you to transmit a Do Not Track signal. We do not alter our practices when we receive a Do Not Track signal because we do not track our visitors across third-party websites to provide targeted advertising.",
    ],
  },
  {
    id: "your-data-protection-rights-and-choices",
    title: "Your Data Protection Rights & Choices",
    paragraphs: [
      "Depending on your location and subject to applicable law, you have certain rights regarding your Personal Data.",
      "Your rights may include the Right of Access, the Right to Rectification, the Right to Erasure or Right to be Forgotten, the Right to Restrict Processing, the Right to Data Portability, the Right to Object, and the Right to Withdraw Consent where we rely on your consent.",
      "How to Exercise Your Rights: To exercise any of these rights, please contact us at privacy@enjamb.org. For your protection, we may need to verify your identity before processing your request.",
      "Marketing Communications: You may opt out of receiving promotional communications from us by using the unsubscribe link within each email or by changing your account preferences. We will continue to send you essential service-related and security communications even if you opt out of marketing emails.",
    ],
  },
  {
    id: "legal-basis-for-processing",
    title: "The Legal Basis for Processing (For EEA/UK Users)",
    paragraphs: [
      "If you are in the European Economic Area or the United Kingdom, our legal basis for collecting and using the Personal Data described above will depend on the data concerned and the specific context.",
      "We normally rely on the following bases: Performance of a Contract, to fulfill our contractual obligation to provide the Services to you as described in our Terms of Service; Legitimate Interests, for our legitimate interests such as improving our Services and maintaining security, provided these are not overridden by your data protection rights; Consent, where required by law, for specific purposes such as marketing; and Legal Obligation, to comply with our legal obligations.",
    ],
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    paragraphs: [
      "Our Services are not intended for or directed at individuals under the age of 16. We do not knowingly collect Personal Data from children.",
      "If we become aware that we have collected Personal Data from a child, we will take steps to remove that information from our servers.",
    ],
  },
  {
    id: "region-specific-policies",
    title: "Region-Specific Policies",
    paragraphs: [
      "California Residents: We do not sell your Personal Information as defined by the California Consumer Privacy Act. We also do not share Personal Information with third parties for their direct marketing purposes.",
      "Nevada Residents: You have the right to opt-out of the sale of certain Personal Information. As we do not sell your Personal Information, no action is needed.",
    ],
  },
  {
    id: "changes-to-this-policy",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
      "We will notify you of any material changes by posting the new policy on our website and, where feasible, by sending you an email.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions, comments, or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer at: privacy@enjamb.org.",
      "Looking for terms? See Terms of Service.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Enjamb",
  description: "Privacy Policy for Enjamb.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      lastUpdated="November 13th, 2025"
      sections={sections}
    />
  );
}
