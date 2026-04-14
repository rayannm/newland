import type { Metadata } from "next";

import {
  LegalDocumentPage,
  type LegalSection,
} from "@/components/legal/LegalDocumentPage";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "**Effective date:** 2026-04-14",
      "These Terms of Service (\"Terms\") govern your access to and use of enjamb.org, app.enjamb.org, and all related software, APIs, and services (collectively, the \"Services\") provided by **Enjamb Labs, Inc.**, a Delaware corporation (\"Enjamb,\" \"we,\" \"us,\" or \"our\").",
      "By creating an account, accessing, or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.",
      "If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms, and \"you\" and \"your\" refer to that organization.",
    ],
  },
  {
    id: "1-definitions",
    title: "1. Definitions",
    content: [
      {
        ul: [
          "**\"Account\"** means the credentialed user account that identifies you on the Services.",
          "**\"Organization\"** means a workspace tier that groups multiple Accounts under a shared billing entity and shared Projects.",
          "**\"Project\"** means a research workspace inside the Services containing files (documents, data, figures, references, tasks, chat threads, and related metadata).",
          "**\"Your Content\"** means any content you upload to, create in, or generate through the Services, including Projects, files, text, images, chat inputs, agent inputs and outputs, and references.",
          "**\"AI Features\"** means the agentic research assistant and automated processing features integrated into the Services.",
          "**\"Sub-processor\"** means a third-party service Enjamb uses to provide the Services (see Section 6).",
        ],
      },
    ],
  },
  {
    id: "2-accounts-and-organizations",
    title: "2. Accounts and Organizations",
    content: [
      "**2.1 Eligibility.** You must be at least 18 years old and legally able to form a binding contract.",
      "**2.2 Registration.** You will provide accurate and current account information and keep it up to date.",
      "**2.3 Credentials and activity.** You are responsible for safeguarding your login credentials and for all activity occurring under your Account. You agree to notify us promptly at help@enjamb.org of any unauthorized access or suspected breach.",
      "**2.4 Organizations and member roles.** When you create or join an Organization, access to Projects within it is governed by the Organization's member and guest roles. Organization owners and admins control membership, billing, and visibility settings. A user invited only to a specific Project (\"guest\") has access to that Project but is not considered a full member of the Organization.",
      "**2.5 Invitations and guests.** You may invite others to collaborate on Organizations or specific Projects by email. Invitations may be revoked by the inviter at any time. Removing a user from an Organization also terminates that user's access to all Projects in that Organization unless they are separately invited as a guest.",
    ],
  },
  {
    id: "3-your-content",
    title: "3. Your Content",
    content: [
      "**3.1 Ownership.** You retain all ownership rights in Your Content. Enjamb does not claim ownership of any data, files, or material you upload or create.",
      "**3.2 License to operate the Services.** To provide the Services, you grant Enjamb a worldwide, non-exclusive, royalty-free license to host, store, copy, process, transmit, index, render, and display Your Content, and to create reasonable derivatives (such as thumbnails, search indexes, caches, and format conversions) solely to the extent necessary to operate, maintain, secure, and improve the Services for you and the users you share Your Content with. This license ends when you delete the relevant content or close your Account, subject to reasonable backup retention periods.",
      "**3.3 Your responsibilities.** You represent and warrant that you have all rights, licenses, consents, and permissions necessary to upload and share Your Content through the Services, and that Your Content does not infringe any third party's rights or violate any law.",
      "**3.4 No obligation to monitor.** Enjamb is not obligated to monitor Your Content, but we reserve the right to review, disable access to, or remove content we reasonably believe violates these Terms or applicable law.",
    ],
  },
  {
    id: "4-ai-features",
    title: "4. AI Features",
    content: [
      "**4.1 How it works.** The Services include AI-assisted research tools. These features rely on large language models and other AI systems operated by third-party providers (see Section 6). Enjamb does not operate its own proprietary foundation models; we orchestrate and route to third-party models on your behalf.",
      "**4.2 Inputs and Outputs.** \"Input\" means content you submit to AI Features (prompts, attached files, selections, and related context). \"Output\" means content returned by AI Features (text, drafts, structured data, figures). Both are part of Your Content under these Terms.",
      "**4.3 No training on your private content.** Enjamb does not use Your Content (including Inputs and Outputs) to train Enjamb AI models. Our third-party model providers contractually commit, for their enterprise API tiers that Enjamb uses, to not train their models on API traffic from Enjamb. If this position changes for a specific provider, we will update these Terms and notify active users.",
      "**4.4 AI limitations and your responsibility.** AI Outputs are probabilistic and may be incorrect, incomplete, biased, or otherwise unsuitable. You are solely responsible for reviewing, verifying, and deciding whether to rely on any Output. Do not use Outputs as authoritative medical, legal, financial, or safety advice without independent verification.",
      "**4.5 Autonomy and tool use.** The Services' AI agent may read, write, and modify files within your Project on your behalf, including editing documents, running search queries against third-party databases and websites, generating figures, and other workspace actions. You acknowledge these actions are initiated by your instructions to the agent and are attributable to your Account.",
    ],
  },
  {
    id: "5-third-party-integrations",
    title: "5. Third-Party Integrations",
    content: [
      "Certain features integrate optional third-party services under your control (for example, Zotero reference sync, GitHub repository linking, Stripe for payments). Your use of those integrations is subject to each provider's own terms and privacy policies, and to any additional permissions you grant. Enjamb is not responsible for the availability, accuracy, or conduct of third-party services.",
    ],
  },
  {
    id: "6-sub-processors",
    title: "6. Sub-processors and Service Infrastructure",
    content: [
      "To deliver the Services, Enjamb uses a set of trusted third-party sub-processors. Each sub-processor is contractually bound to security and confidentiality obligations no less protective than those in these Terms. The current list, to the best of our knowledge as of the effective date, is:",
      {
        table: {
          headers: ["Name", "Purpose"],
          rows: [
            ["Supabase", "Cloud database, authentication, and storage"],
            ["Railway", "Application hosting and infrastructure"],
            ["Anthropic", "AI language model services"],
            ["OpenAI", "AI language model services"],
            ["E2B", "Sandboxed code execution environments"],
            ["Resend", "Transactional email delivery"],
            ["Stripe", "Payment processing and billing"],
            ["PostHog", "Product analytics"],
            ["Firecrawl", "Web search and content extraction"],
          ],
        },
      },
      "In addition, the Services query public research databases on your behalf when you use research tools (Semantic Scholar, OpenAlex, arXiv, PubMed, bioRxiv, Crossref, protocols.io, and Grants.gov / simpler.grants.gov). We do not store these providers' proprietary data beyond what is necessary to display and cite results you request.",
      "We may add or replace sub-processors. Material changes will be reflected in an updated version of these Terms. If you require advance notice of sub-processor changes under a paid plan, contact us to discuss enterprise terms.",
    ],
  },
  {
    id: "7-data-processing",
    title: "7. Data Processing, Storage, and Security",
    content: [
      "**7.1 Data location.** Your Content is stored on Supabase infrastructure hosted in the region we designate for the Services (currently `us-east-2`). We do not currently offer customer-selectable data regions.",
      "**7.2 Security measures.** Enjamb implements reasonable technical and organizational safeguards appropriate to the sensitivity of Your Content, including encryption in transit (TLS) and at rest, row-level security policies on multi-tenant data, scoped access tokens, secrets management, and logging of administrative actions. No system is perfectly secure; we cannot guarantee absolute security.",
      "**7.3 Backups.** Routine backups are maintained by our infrastructure providers for disaster recovery and are retained for a limited period. Backups are not a substitute for your own retention practices.",
      "**7.4 Privacy Policy.** Our handling of personal data is further described in our Privacy Policy, which is incorporated into these Terms by reference.",
    ],
  },
  {
    id: "8-acceptable-use",
    title: "8. Acceptable Use",
    content: [
      "You agree not to, and not to permit anyone acting through your Account to:",
      {
        ul: [
          "Violate applicable law or the rights of any third party (including intellectual property, privacy, and publicity rights).",
          "Upload content that is unlawful, infringing, malicious, or grossly offensive.",
          "Use the Services to generate, distribute, or promote disinformation, harassment, CSAM, non-consensual intimate imagery, or content designed to deceive reviewers or violate research integrity standards.",
          "Attempt to reverse engineer, decompile, or derive the source code of the Services, except to the extent expressly permitted by applicable law.",
          "Probe, scan, or test the vulnerability of the Services without our prior written consent; breach or circumvent any security or authentication measures.",
          "Resell, rent, or commercially exploit the Services outside the scope of your subscription.",
          "Use the Services to train competing AI models or large-scale dataset collection.",
          "Interfere with other users' access or with the integrity of the Services.",
          "Abuse AI Features in ways that impose disproportionate cost or load on the infrastructure (e.g., automated scripting outside normal research workflows). We may enforce reasonable rate limits.",
        ],
      },
    ],
  },
  {
    id: "9-intellectual-property",
    title: "9. Intellectual Property",
    content: [
      "**9.1 Our IP.** The Services, including their software, designs, trademarks, logos, documentation, and all non-Your-Content material, are the exclusive property of Enjamb or its licensors and are protected by copyright, trademark, and other laws. Except for the license granted in Section 9.2, nothing in these Terms transfers any Enjamb IP to you.",
      "**9.2 License to use the Services.** Subject to your compliance with these Terms and payment of any applicable fees, Enjamb grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal research, academic, or business purposes, consistent with your subscription tier.",
      "**9.3 Feedback.** If you provide suggestions, ideas, or feedback about the Services, you grant Enjamb a perpetual, irrevocable, royalty-free license to use that feedback for any purpose without obligation to you.",
    ],
  },
  {
    id: "10-subscriptions-billing-and-trials",
    title: "10. Subscriptions, Billing, and Trials",
    content: [
      "**10.1 Plans.** Features available to you depend on your subscription tier (Free, Pro, Lab, Enterprise). Tier details, seat counts, and usage limits are published on our pricing page and may change from time to time.",
      "**10.2 Billing.** Paid subscriptions are billed in advance, recurring monthly or annually depending on the plan you select, via Stripe. Unless otherwise stated, fees are non-refundable once charged, except where required by law.",
      "**10.3 Taxes.** Fees are exclusive of applicable taxes. You are responsible for any sales, use, VAT, or withholding taxes.",
      "**10.4 Changes to pricing.** We may change prices on notice. Price changes apply to billing cycles beginning after the notice period.",
      "**10.5 Seats, guests, and usage.** Organization plans are licensed by seat. Guest Accounts invited to specific Projects do not occupy a seat on the inviting Organization's plan, but the inviting Organization remains responsible for how those guests are used and configured.",
      "**10.6 Overage.** Some plans include usage caps (AI credits, compute credits, storage). If you enable \"extra usage,\" you authorize Enjamb to bill you via Stripe for usage above your plan's included amount up to any limit you set.",
    ],
  },
  {
    id: "11-beta-features",
    title: "11. Beta and Experimental Features",
    content: [
      "Features designated \"Beta,\" \"Preview,\" \"Experimental,\" or similar are provided **AS IS** and **AS AVAILABLE** without warranties. They may be unstable, may change, or may be removed at any time. Data loss and defects are possible. Any feedback, logs, or usage data from Beta Features may be used by Enjamb to improve or develop the Services.",
    ],
  },
  {
    id: "12-suspension-and-termination",
    title: "12. Suspension and Termination",
    content: [
      "**12.1 Your right to terminate.** You may stop using the Services and delete your Account at any time. Paid subscriptions continue through the end of the paid period unless cancelled earlier.",
      "**12.2 Our right to suspend or terminate.** We may suspend or terminate your Account or an Organization's access at any time for breach of these Terms, for actions that threaten the security or integrity of the Services, for non-payment of fees, or as required by law.",
      "**12.3 Export on termination.** Unless we terminate for cause related to illegal activity, fraud, or a material security risk, we will make a reasonable effort to provide you an opportunity to export Your Content before deletion.",
      "**12.4 Effect of termination.** Upon termination, your license to use the Services ends. Enjamb will delete Your Content from active systems within a reasonable period, subject to residual copies in backups and legal retention obligations. Provisions that by their nature should survive termination (including Sections 3.1, 4.4, 8, 9, 13, 14, 15, 16, 18) survive.",
    ],
  },
  {
    id: "13-disclaimers",
    title: "13. Disclaimers",
    content: [
      "**13.1 AS IS.** Except as expressly stated, the Services are provided **AS IS** and **AS AVAILABLE**. To the maximum extent permitted by law, Enjamb disclaims all warranties, whether express, implied, statutory, or otherwise, including warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranties arising from course of dealing or trade usage.",
      "**13.2 No uptime guarantee.** We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components, or that any data will be preserved without loss.",
      "**13.3 AI Outputs.** We specifically do not warrant that AI Outputs will be accurate, reliable, or suitable for any particular purpose. See Section 4.4.",
    ],
  },
  {
    id: "14-limitation-of-liability",
    title: "14. Limitation of Liability",
    content: [
      "**14.1 Excluded damages.** To the maximum extent permitted by law, neither Enjamb nor its affiliates, officers, directors, employees, agents, suppliers, or licensors will be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, use, goodwill, or other intangible losses, arising out of or relating to the Services, regardless of the theory of liability and even if advised of the possibility of such damages.",
      "**14.2 Cap.** In all other respects, Enjamb's aggregate liability for all claims arising out of or relating to the Services in any twelve-month period will not exceed the greater of (a) the amounts actually paid by you to Enjamb for the Services during the twelve months preceding the event giving rise to the claim, or (b) one hundred U.S. dollars (USD $100).",
      "**14.3 Basis of the bargain.** The limitations in this Section are a fundamental basis of the bargain between you and Enjamb. They apply even if a remedy fails its essential purpose.",
    ],
  },
  {
    id: "15-indemnification",
    title: "15. Indemnification",
    content: [
      "You will defend, indemnify, and hold harmless Enjamb and its affiliates, officers, directors, employees, and agents from and against any third-party claims, damages, liabilities, losses, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) Your Content; (b) your use of the Services in violation of these Terms or applicable law; or (c) your violation of any third party's rights.",
    ],
  },
  {
    id: "16-governing-law-and-disputes",
    title: "16. Governing Law and Disputes",
    content: [
      "**16.1 Governing law.** These Terms are governed by the laws of the State of Delaware, without regard to its conflict of laws principles, and applicable U.S. federal law.",
      "**16.2 Venue.** Except as otherwise agreed, any dispute arising out of or relating to these Terms or the Services will be brought exclusively in the state or federal courts located in the State of Delaware, and the parties consent to the personal jurisdiction and venue of those courts.",
      "**16.3 Informal resolution.** Before filing a claim, you agree to first contact us at help@enjamb.org and attempt in good faith to resolve the dispute informally.",
      "**16.4 No class actions.** To the extent permitted by law, you and Enjamb each waive the right to participate in a class action or collective proceeding.",
      "**16.5 Export and sanctions compliance.** You represent that you are not located in, and are not a national or resident of, any country subject to comprehensive U.S. sanctions, and that you are not listed on any U.S. government denied-party list. You agree not to use the Services in violation of U.S. export control laws.",
    ],
  },
  {
    id: "17-changes-to-these-terms",
    title: "17. Changes to These Terms",
    content: [
      "We may update these Terms from time to time. If we make material changes, we will notify you by email, in-product notice, or by updating the Effective date above and providing at least thirty (30) days' notice where feasible. Your continued use of the Services after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "18-miscellaneous",
    title: "18. Miscellaneous",
    content: [
      "**18.1 Entire agreement.** These Terms, together with any order form, enterprise addendum, Privacy Policy, and Acceptable Use Policy referenced here, constitute the entire agreement between you and Enjamb regarding the Services, and supersede any prior or contemporaneous agreements.",
      "**18.2 Independent contractors.** The parties are independent contractors. Nothing in these Terms creates a partnership, franchise, joint venture, agency, fiduciary, or employment relationship.",
      "**18.3 Assignment.** You may not assign these Terms without our prior written consent. Enjamb may assign these Terms to an affiliate or to a successor in connection with a merger, acquisition, reorganization, or sale of substantially all its assets.",
      "**18.4 Severability.** If any provision of these Terms is held unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in full force.",
      "**18.5 Waiver.** A failure or delay by Enjamb to enforce any provision is not a waiver of that or any other provision.",
      "**18.6 No third-party beneficiaries.** These Terms are for the benefit of you and Enjamb only. No other person or entity has any right to enforce these Terms.",
      "**18.7 Force majeure.** Neither party is liable for delays or failures (other than payment obligations) caused by events beyond its reasonable control, including natural disasters, war, terrorism, labor disputes, government action, internet or telecommunications outages, and failures of third-party providers.",
      "**18.8 Notices.** We may deliver notices to you by email, through the Services, or by posting on our site. You may send formal notices to us at help@enjamb.org.",
      "**18.9 Publicity.** Enjamb may identify you as a customer (name and logo) on its website and marketing materials. You may opt out by contacting help@enjamb.org.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "**Enjamb Labs, Inc.**",
      "2 Marina Blvd, San Francisco, CA",
      "help@enjamb.org",
      "For questions about privacy, see our [Privacy Policy](/privacy-policy).",
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms of Service | Enjamb",
  description:
    "Terms governing your access to and use of enjamb.org, app.enjamb.org, and related Enjamb Labs services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Enjamb Terms of Service"
      lastUpdated="2026-04-14"
      sections={sections}
    />
  );
}
