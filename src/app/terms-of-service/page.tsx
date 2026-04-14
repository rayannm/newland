import type { Metadata } from "next";

import {
  LegalDocumentPage,
  type LegalSection,
} from "@/components/legal/LegalDocumentPage";

const sections: LegalSection[] = [
  {
    id: "introduction-and-scope",
    title: "Introduction & Scope",
    paragraphs: [
      "These Terms of Service (the \"Terms\") constitute the formal agreement governing your access to and use of the website at enjamb.org (the \"Site\") and all associated software, products, and services (the \"Services\") provided by Enjamb LLC (\"Enjamb,\" \"we,\" or \"us\"). By proceeding to use the Services, you are legally assenting to be bound by these Terms.",
      "Should you be accessing the Services on behalf of an institution, research organization, or corporation, your acceptance affirms that you possess the requisite authority to legally bind that entity, with \"you\" and \"your\" subsequently referring to that organization.",
      "Continued use of the Services is conditioned upon compliance with these Terms and all applicable laws, ensuring you are legally empowered to form this contract.",
      "Acknowledge that the Services are dynamic; they may be stopped, suspended, or modified by Enjamb at any time without requiring prior notification to you.",
    ],
  },
  {
    id: "1-1-customer-ownership-rights-grant",
    title: "1.1 Customer Ownership & Rights Grant",
    paragraphs: [
      "Enjamb explicitly states it does not claim ownership of \"Your Content,\" which encompasses all data you upload, create, and provide, such as manuscript files (for example, .docx files), comments, and other information.",
      "The Customer grants Enjamb only the limited, necessary rights to effectively provide and improve the Services. These operational rights include hosting, storing, processing, and transmitting Your Content to execute user-initiated actions, such as facilitating collaboration, running the proprietary AI-powered analysis, and integrating with any designated external storage solution.",
    ],
  },
  {
    id: "1-2-third-party-sub-processors-and-infrastructure",
    title: "1.2 Third-Party Sub-processors & Infrastructure",
    paragraphs: [
      "The limited rights granted to Enjamb necessarily extend to its affiliates and trusted third-party service providers.",
      "Specifically, the Terms identify Supabase as the provider of the core database and storage infrastructure utilized to support the Services. This delegation of operational necessity is essential for service delivery and function.",
    ],
  },
  {
    id: "1-3-customer-responsibilities-for-content",
    title: "1.3 Customer Responsibilities for Content",
    paragraphs: [
      "You maintain sole responsibility for your conduct while using the Services, the inherent nature and content of Your Content, and any communication with others.",
      "This responsibility includes ensuring you hold the necessary rights and permissions to use and share Your Content in a manner compliant with these Terms.",
      "While Enjamb has no obligation to monitor content for accuracy or legality, it retains the right, at its discretion, to review content for policy compliance and remove any content deemed inappropriate or non-compliant.",
    ],
  },
  {
    id: "2-1-ai-component-definitions",
    title: "2.1 AI Component Definitions",
    paragraphs: [
      "This section governs the use of Enjamb's artificial intelligence features, collectively referred to as \"Enjamb AI,\" which includes the proprietary model Enjamb Cessera and the assistant Anaphora.",
      "Input is defined as the specific content you provide to the AI, such as a manuscript snippet or reviewer comment. Output is defined as the content subsequently generated and returned by Enjamb AI, such as a summary, suggestion, or draft rebuttal.",
      "Both Inputs and Outputs are explicitly classified as components of Your Content under these Terms.",
    ],
  },
  {
    id: "2-2-ownership-and-training-restrictions",
    title: "2.2 Ownership and Training Restrictions",
    paragraphs: [
      "As between the Customer and Enjamb, you retain ownership of your Inputs and Outputs, subject to applicable law.",
      "A key contractual guarantee is that Enjamb will not use your unpublished manuscripts, comments, or other confidential Inputs or Outputs to train its AI models without your explicit, affirmative consent. This serves as a significant safeguard for research and proprietary data provided to the AI features.",
    ],
  },
  {
    id: "2-3-user-responsibility-for-output",
    title: "2.3 User Responsibility for Output",
    paragraphs: [
      "Due to the probabilistic nature inherent in artificial intelligence technology, generated Outputs may not be unique, and it is possible that other users could receive functionally similar outputs.",
      "You bear sole responsibility for all use of the generated Outputs. Consequently, the Customer must maintain diligence, thoroughly reviewing all Outputs for accuracy, completeness, and suitability before any practical application or reliance.",
    ],
  },
  {
    id: "3-1-security-commitments",
    title: "3.1 Security Commitments",
    paragraphs: [
      "Enjamb acknowledges the serious nature of research data security. It commits to implementing appropriate technical and organizational measures to safeguard Your Content, protecting it specifically from accidental loss, misuse, or unauthorized access.",
      "These measures include the crucial implementation of encryption for data both in transit and at rest, coupled with the use of robust and meticulous access control policies.",
    ],
  },
  {
    id: "3-2-data-processing-and-storage-architecture",
    title: "3.2 Data Processing and Storage Architecture",
    paragraphs: [
      "You acknowledge the specific architecture involved in handling your documents: documents are actively processed by Enjamb's self-hosted editor; the documents are then securely stored in your designated Supabase Storage bucket.",
      "The location of this storage is within a specific geographical region that you select upon setup or configuration.",
    ],
  },
  {
    id: "3-3-manuscript-data-model",
    title: "3.3 Manuscript Data Model",
    paragraphs: [
      "A fundamental aspect of Enjamb's security model is that it is not designed to permanently store your manuscript files on the primary application servers.",
      "This architectural design choice reinforces the security posture by minimizing the surface area for unauthorized data access from the main application environment.",
    ],
  },
  {
    id: "4-1-account-access-security",
    title: "4.1 Account Access Security",
    paragraphs: [
      "You are accountable for securing the credentials used to access the Services and must agree not to divulge this information to any third party.",
      "Because you are accountable for the account, you are responsible for all activity that occurs on your account, whether or not that activity was expressly authorized by you.",
      "You must formally and immediately notify Enjamb of any detected or suspected unauthorized use of your account access credentials.",
    ],
  },
  {
    id: "4-2-legal-and-policy-compliance",
    title: "4.2 Legal and Policy Compliance",
    paragraphs: [
      "You are required to adhere to all applicable laws and regulations in the context of your use of the Services.",
      "Furthermore, you must not misuse the Services in any way and must specifically agree to fully comply with Enjamb's established Acceptable Use Policy.",
    ],
  },
  {
    id: "4-3-intellectual-property-adherence",
    title: "4.3 Intellectual Property Adherence",
    paragraphs: [
      "Files and other content accessible within the Services may be subject to the intellectual property rights of third parties.",
      "You are obligated not to copy, upload, download, or share files unless you possess the legal right or explicit permission to do so, thus ensuring respect for others' copyrights and intellectual property.",
    ],
  },
  {
    id: "5-1-ownership-and-protection-of-service-ip",
    title: "5.1 Ownership and Protection of Service IP",
    paragraphs: [
      "The Services, including all underlying technology, intellectual property, and proprietary materials, are the sole property of Enjamb or its licensors and are comprehensively protected by applicable copyright, trademark, and various other intellectual property laws.",
      "These Terms are structured as a license to use the Services, and it is explicitly stated that nothing in this Agreement shall operate to transfer any intellectual property rights in any part of the Service from Enjamb to the Customer.",
    ],
  },
  {
    id: "5-2-permitted-scope-of-use-and-restrictions",
    title: "5.2 Permitted Scope of Use and Restrictions",
    paragraphs: [
      "The Services are fundamentally provided for your own internal and personal use.",
      "For customers who subscribe to a paid tier, the usage license is expanded to permit use for internal business or research purposes, which must be conducted strictly subject to all provisions within these Terms.",
      "The Customer is expressly prohibited from otherwise using, reselling, or commercializing any portion of the Service, its features, or its output without first securing the prior written agreement and consent of Enjamb.",
    ],
  },
  {
    id: "6-1-status-and-absence-of-warranty",
    title: "6.1 Status and Absence of Warranty",
    paragraphs: [
      "Enjamb may, from time to time and at its discretion, offer certain features, products, or services that are designated as \"Beta,\" \"Prototype,\" or \"Early Release.\"",
      "These Beta Services are provided to the Customer on an \"AS IS\" basis, without any form of warranty, whether express or implied.",
      "The Customer accepts that these features are under development, may not perform as expected, and may contain defects or errors.",
    ],
  },
  {
    id: "6-2-customer-risk-and-feedback-usage",
    title: "6.2 Customer Risk and Feedback Usage",
    paragraphs: [
      "Any decision by the Customer to utilize or access Beta Services is made entirely at their own risk.",
      "The Customer further acknowledges that any feedback or suggestions provided regarding the Beta Services, along with any data collected from their usage, may be used by Enjamb to improve, enhance, or develop its current and future products and service offerings.",
    ],
  },
  {
    id: "7-1-customer-right-to-cease-use",
    title: "7.1 Customer Right to Cease Use",
    paragraphs: [
      "The Customer retains the unconditional right to stop using the Enjamb Services at any time without cause or penalty, though outstanding financial obligations may remain.",
      "This action effectively terminates the rights granted to the Customer under this Agreement.",
    ],
  },
  {
    id: "7-2-enjamb-right-to-suspend-or-terminate",
    title: "7.2 Enjamb's Right to Suspend or Terminate",
    paragraphs: [
      "Enjamb explicitly reserves the right to suspend or terminate the Services and your account at any time, with or without cause or prior notice.",
      "Grounds for termination include, but are not limited to, non-compliance with these Terms.",
      "If Enjamb chooses to terminate an account without cause, it commits to making a reasonable effort to provide the Customer with a final opportunity to export or retrieve Your Content before full data deletion occurs.",
    ],
  },
  {
    id: "8-1-comprehensive-disclaimer",
    title: "8.1 Comprehensive Disclaimer",
    paragraphs: [
      "To the absolute fullest extent permissible under applicable law, Enjamb, its affiliates, officers, employees, agents, suppliers, and licensors make no warranties whatsoever, whether express, implied, or statutory, regarding the Services.",
    ],
  },
  {
    id: "8-2-nature-of-service-provision",
    title: "8.2 Nature of Service Provision",
    paragraphs: [
      "The Services are provided to the Customer strictly on an \"AS IS\" and \"AS AVAILABLE\" basis.",
      "Enjamb comprehensively disclaims and excludes all implied warranties, including, without limitation, any warranties related to merchantability, fitness for a particular purpose, and non-infringement of third-party rights.",
      "Enjamb does not warrant that the Services will be uninterrupted, error-free, or fully secure.",
    ],
  },
  {
    id: "9-1-exclusion-of-indirect-and-consequential-damages",
    title: "9.1 Exclusion of Indirect and Consequential Damages",
    paragraphs: [
      "To the maximum extent permitted by applicable law, in no event will Enjamb, its affiliates, officers, employees, agents, suppliers, or licensors be held liable for any category of damages that includes any indirect, special, incidental, punitive, exemplary, or consequential damages.",
      "This expansive exclusion is critical to the scope of Enjamb's financial responsibility.",
    ],
  },
  {
    id: "9-2-exclusion-of-business-and-data-losses",
    title: "9.2 Exclusion of Business and Data Losses",
    paragraphs: [
      "Furthermore, the parties listed above shall not be liable for any loss of use, loss of data, loss of business, or loss of profits, regardless of the underlying legal theory invoked, including contract, tort, or strict liability.",
      "This exclusion applies regardless of whether or not Enjamb had been warned of the possibility of such losses or damages occurring.",
    ],
  },
  {
    id: "10-1-entire-agreement",
    title: "10.1 Entire Agreement",
    paragraphs: [
      "These Terms constitute the entire agreement between you and Enjamb with respect to the subject matter contained herein, and they supersede and replace any and all other prior or contemporaneous agreements, whether written or oral.",
      "The parties agree that no external documents, negotiations, or understandings shall be incorporated into or form any part of this governing agreement unless expressly referenced herein.",
    ],
  },
  {
    id: "10-2-third-party-beneficiaries",
    title: "10.2 Third-Party Beneficiaries",
    paragraphs: [
      "These Terms are created exclusively for the benefit of the contracting parties, Enjamb and the Customer.",
      "The Agreement specifically states that it creates no third-party beneficiary rights. Consequently, no individual or entity, other than you or Enjamb, shall have any legal or equitable right whatsoever to enforce any provision contained within this Agreement.",
    ],
  },
  {
    id: "10-3-waiver-and-remedies",
    title: "10.3 Waiver and Remedies",
    paragraphs: [
      "Enjamb's failure or delay to enforce a provision of these Terms shall not be construed as a permanent waiver of its right to enforce that provision later.",
      "Furthermore, the remedies provided to Enjamb under these Terms are in addition to, and not exclusive of, any other remedies available to Enjamb at law or in equity.",
    ],
  },
  {
    id: "11-1-relationship-of-the-parties",
    title: "11.1 Relationship of the Parties",
    paragraphs: [
      "The relationship established by these Terms is strictly that of independent contractors.",
      "This Agreement is not intended to, and does not, create any form of partnership, franchise, joint venture, agency, fiduciary, or employment relationship between Enjamb and the Customer.",
      "Neither party has the authority to bind the other or incur obligations on the other's behalf.",
    ],
  },
  {
    id: "11-2-notices",
    title: "11.2 Notices",
    paragraphs: [
      "Enjamb may communicate general operational or service-related notices to all customers via email or through a mechanism on the Site.",
      "All other formal notices required under this Agreement, particularly those related to breach or termination, must be in writing.",
      "Such formal written notices are considered effective upon personal delivery or confirmed electronic transmission to the last known contact information on file for the respective party.",
    ],
  },
  {
    id: "11-3-waiver-and-cumulative-remedies",
    title: "11.3 Waiver and Cumulative Remedies",
    paragraphs: [
      "No failure or delay by Enjamb in exercising any right or remedy under this Agreement will constitute a waiver of that right.",
      "Furthermore, the remedies provided to Enjamb under these Terms are explicitly stated to be in addition to, and not exclusive of, any other remedies available to Enjamb at law or in equity.",
    ],
  },
  {
    id: "11-4-severability",
    title: "11.4 Severability",
    paragraphs: [
      "If any provision of these Terms is determined by a court of competent jurisdiction to be contrary to law, unenforceable, or invalid, that provision shall be modified and interpreted by the court to best achieve the original commercial objectives to the fullest extent legally possible.",
      "The remaining provisions of these Terms shall remain in full force and effect.",
    ],
  },
  {
    id: "11-5-assignment",
    title: "11.5 Assignment",
    paragraphs: [
      "You may not assign any of your rights or obligations under these Terms, whether by operation of law or otherwise, and any attempt to do so is void.",
      "Conversely, Enjamb may assign its rights under this Agreement to any of its affiliates or to any successor in interest of any business associated with the Services without requiring your prior consent.",
      "This Agreement is binding upon and inures to the benefit of the parties and their respective successors and permitted assigns.",
    ],
  },
  {
    id: "11-6-subcontractors",
    title: "11.6 Subcontractors",
    paragraphs: [
      "Enjamb reserves the right to use third-party subcontractors, such as Supabase, to assist in the performance of its obligations under this Agreement.",
      "Enjamb will ensure that any such subcontractors are bound by contractual obligations no less protective than those set forth in these Terms, and Enjamb shall remain fully responsible for the acts, omissions, and fulfillment of the subcontracted obligations.",
    ],
  },
  {
    id: "11-7-publicity",
    title: "11.7 Publicity (Extrapolated)",
    paragraphs: [
      "Enjamb may reference the Customer's relationship with Enjamb solely to include the Customer's name and logo on its website or in other marketing materials.",
      "All other uses of each party's name, trademark, or logo for marketing or publicity purposes require the prior written approval and consent of the other party.",
    ],
  },
  {
    id: "11-8-governing-law",
    title: "11.8 Governing Law",
    paragraphs: [
      "These Terms and any disputes or actions arising out of or related to them shall be governed by and construed in accordance with the laws of the State of Florida, without giving effect to its conflict of law provisions.",
      "This establishes the primary legal framework for the contract.",
    ],
  },
  {
    id: "11-9-arbitration-agreement",
    title: "11.9 Arbitration Agreement",
    paragraphs: [
      "The Enjamb Terms do not contain a mandatory arbitration agreement requiring disputes to be resolved through JAMS or similar services.",
      "Therefore, any disputes that are not settled through negotiation may be brought in a judicial proceeding. The parties' judicial forum and venue will be determined by the Governing Law of Florida.",
    ],
  },
  {
    id: "11-10-force-majeure",
    title: "11.10 Force Majeure",
    paragraphs: [
      "Except for the Customer's obligation to make payments, neither party shall be held liable for any delay or non-performance of its obligations where the cause is a Force Majeure Event, defined as unforeseeable circumstances beyond the party's control, such as natural disasters, acts of war or terrorism, or failures of telecommunications infrastructure.",
      "The affected party's obligations are suspended for the duration of the event, provided prompt notice and reasonable mitigation efforts are undertaken.",
    ],
  },
  {
    id: "11-11-no-third-party-beneficiaries",
    title: "11.11 No Third Party Beneficiaries",
    paragraphs: [
      "The parties expressly state that the covenants and terms set forth in this Agreement are intended solely for the benefit of the parties, Enjamb and the Customer, their successors, and permitted assigns.",
      "Nothing in these Terms is intended to confer any legal or equitable right whatsoever upon any other person or entity to enforce any provision of this Agreement.",
    ],
  },
  {
    id: "11-12-export-control",
    title: "11.12 Export Control",
    paragraphs: [
      "The Services and underlying Enjamb technology may be subject to export laws and regulations of the United States and other jurisdictions.",
      "The Customer represents that it is not named on any U.S. government denied-party list and covenants that it shall not access or use the Services in violation of any applicable U.S. export law or regulation.",
    ],
  },
  {
    id: "11-13-entire-agreement",
    title: "11.13 Entire Agreement",
    paragraphs: [
      "These Terms, along with any documents or exhibits explicitly referenced, represent the entire agreement between you and Enjamb with respect to the subject matter.",
      "They supersede all prior written or oral agreements. Enjamb reserves the right to modify these Terms upon notice, and the Customer's continued use of the Services after such changes constitutes consent to the modified terms.",
      "No terms on any Customer order documentation, such as purchase orders, shall be incorporated into this binding Agreement.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions, comments, or concerns about this Agreement, please contact us at: help@enjamb.org",
      "Looking for privacy details? See Privacy Policy.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | Enjamb",
  description: "Terms of Service for Enjamb.",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      lastUpdated="November 19th, 2025"
      sections={sections}
    />
  );
}
