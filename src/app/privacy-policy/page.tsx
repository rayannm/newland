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
      "This Privacy Policy (\"Policy\") describes how **Enjamb Labs, Inc.**, a Delaware corporation (\"Enjamb,\" \"we,\" \"us,\" or \"our\"), collects, uses, and shares information when you use enjamb.org, app.enjamb.org, and our related software, APIs, and services (the \"Services\").",
      "We do not sell your data. We do not train AI models on your private content. You retain ownership of your research and work product.",
      "By using the Services, you acknowledge the practices described in this Policy and our [Terms of Service](/terms-of-service).",
    ],
  },
  {
    id: "1-scope-and-roles",
    title: "1. Scope and Roles",
    content: [
      "This Policy applies when you visit our website or use the Services as an individual user or as a member of an Organization that subscribes to the Services.",
      "**When Enjamb is the controller.** When you sign up directly, when you join an Organization at your own initiative, or when you provide content to the Services, Enjamb determines the purposes and means of processing the relevant Personal Data and acts as the data controller.",
      "**When an Organization is the controller.** If your Account was provisioned for you by an Organization (for example, a research lab, university, or company that pays for your seat), that Organization controls your Account and the Projects you work in within their Organization. The Organization's own privacy notices and policies govern its handling of your Personal Data in that context. Enjamb processes that data on the Organization's behalf as a processor and follows their reasonable instructions.",
      "**Third-party services you connect.** The Services let you optionally connect third-party tools (for example, Zotero for reference sync, GitHub for repository linking). Those services are governed by their own terms and privacy policies, not by this Policy.",
    ],
  },
  {
    id: "2-information-we-collect",
    title: "2. Information We Collect",
    content: [
      "**2.1 Information you provide directly**",
      {
        ul: [
          "**Account information** — name, email address, password (hashed), profile fields you fill in (affiliation, research field, avatar).",
          "**Organization data** — Organization name, description, billing contact, invited members and their roles.",
          "**Subscription and billing information** — payment card details are collected and stored by **Stripe** on our behalf; we receive only tokenized references and metadata (last four digits, brand, billing cycle).",
          "**Support communications** — emails and messages you send us.",
        ],
      },
      "**2.2 Your Content**",
      "The Services let you create and store research artifacts: Projects, documents (Markdown, LaTeX, FODT/Word, etc.), references, figures, datasets, tasks, comments, and chat threads with the AI agent. We process this content to provide the Services to you and the people you share it with. You retain all rights to Your Content (see [Terms of Service §3.1](/terms-of-service)).",
      "**2.3 AI Inputs and Outputs**",
      "When you use AI Features, we process the prompts, attached files, selected context, and other inputs you provide (\"Inputs\"), and the AI-generated responses returned to you (\"Outputs\"). Inputs and Outputs are part of Your Content.",
      "**2.4 Information collected automatically**",
      {
        ul: [
          "**Usage data** — pages visited, features used, tool invocations, agent run metadata, errors, performance timings, browser, device, operating system, approximate location derived from IP. Captured via PostHog and our application logs.",
          "**Cookies and local storage** — see Section 7.",
          "**IP address** — recorded for security, abuse prevention, and authentication.",
        ],
      },
      "**2.5 Information from third parties**",
      {
        ul: [
          "**OAuth providers.** If you sign in through a third-party OAuth provider, we receive your name, email, and profile picture from that provider.",
          "**Integrations.** When you connect Zotero or GitHub, we receive the data needed to perform the integration (library contents, repository metadata, OAuth tokens).",
          "**Public research databases.** When you query academic search tools, we receive results from providers such as Semantic Scholar, OpenAlex, arXiv, PubMed, bioRxiv, Crossref, protocols.io, and Grants.gov on your behalf.",
        ],
      },
    ],
  },
  {
    id: "3-how-we-use-information",
    title: "3. How We Use Information",
    content: [
      "We use the information we collect for these purposes:",
      {
        ul: [
          "**Operate and deliver the Services** — host, store, render, and process Your Content; route AI requests to model providers; deliver real-time collaboration; compile documents; manage Projects and Organizations.",
          "**Manage Accounts and access** — authenticate you, enforce row-level security, manage invitations and guest access, deliver service emails (account confirmation, password reset, invitations) via Resend.",
          "**Support and communications** — respond to your requests, send essential operational emails (security alerts, billing, downtime, terms updates).",
          "**Marketing** — send product updates and offers, only with your consent or where permitted by law. You can opt out at any time (Section 9).",
          "**Improve the Services** — analyze aggregated usage to debug, prioritize features, and measure adoption.",
          "**Process payments** — bill subscriptions, prevent fraudulent charges, comply with tax and accounting requirements (via Stripe).",
          "**Aggregate / de-identify** — derive non-identifying statistics (totals, distributions) for internal benchmarking and product reporting; we do not attempt to re-identify de-identified data.",
          "**Security and safety** — detect and prevent abuse, fraud, and policy violations; investigate incidents.",
          "**Legal compliance** — respond to lawful requests and enforce our terms.",
        ],
      },
    ],
  },
  {
    id: "4-ai-features",
    title: "4. AI Features: How We Handle Your Data",
    content: [
      "The Services include AI-assisted research tools. Enjamb does not operate a proprietary foundation model; we route requests to third-party model providers (see Section 5.2 for the current list).",
      "**4.1 No training on your private content.** We do not use Your Content (including AI Inputs and Outputs) to train Enjamb-owned AI models. Enjamb does not own foundation models. Our third-party model providers contractually commit, under the enterprise API tiers Enjamb uses, to not train their models on traffic sent through Enjamb's API access. If a provider's policy materially changes, we will update this Policy and notify active users.",
      "**4.2 Inference only.** Inputs are sent to model providers only to generate the response to your specific request. We retain transcripts of your AI conversations within your Project so you can revisit them; you can delete those transcripts at any time. Model providers may retain API logs for a limited period to enforce their own usage policies and detect abuse, per their published policies.",
      "**4.3 You are responsible for AI Outputs.** AI Outputs are probabilistic and may be incorrect or unsuitable. Verify them before relying on them, especially for medical, legal, financial, or safety-critical decisions.",
    ],
  },
  {
    id: "5-how-we-share-information",
    title: "5. How We Share Information",
    content: [
      "We share information only as described below. We do not sell your Personal Data and we do not share it for cross-context behavioral advertising.",
      "**5.1 With your collaborators.** Your Content in a Project is visible to other Account holders you invite to that Project, and (for Projects you mark workspace-visible) to members of the same Organization. Project owners control invitations.",
      "**5.2 With service providers (sub-processors).** We use trusted third parties to deliver the Services. Each is bound by contractual confidentiality and security obligations. The current list as of the Effective date:",
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
      "We may add or replace sub-processors. Material changes will be reflected in updates to this Policy.",
      "**5.3 Business transfers.** If Enjamb is involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any change in ownership or material change in how your data is handled.",
      "**5.4 Legal reasons.** We may disclose information when we believe in good faith it is required to comply with a law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Enjamb, our users, or others.",
      "**5.5 With your consent.** We may share information for purposes you explicitly direct.",
    ],
  },
  {
    id: "6-data-storage-security-and-transfers",
    title: "6. Data Storage, Security, and International Transfers",
    content: [
      "**6.1 Where data is stored.** Your Content and metadata are stored in our Supabase project hosted on AWS in **us-east-2** (US East, Ohio). We do not currently offer customer-selectable data regions.",
      "**6.2 Data Protection.** We use encryption (in transit and at rest), access controls, monitoring, backups, and strict internal access rules to protect your data. Our third-party partners are required to meet equivalent standards.",
      "No system is perfectly secure. We cannot guarantee the absolute security of your data.",
      "**6.3 International transfers.** Enjamb is based in the United States and our infrastructure is located in the United States. If you access the Services from outside the U.S., your information will be transferred to and processed in the U.S., which may have different data protection rules than your country. By using the Services you consent to that transfer.",
      "For users in the European Economic Area, United Kingdom, or Switzerland: when Personal Data is transferred from those regions to the U.S., we rely on Standard Contractual Clauses or equivalent valid transfer mechanisms.",
      "**6.4 Your responsibility.** Use a strong, unique password. Don't share credentials. Log out on shared devices. Notify us at help@enjamb.org if you suspect unauthorized access.",
    ],
  },
  {
    id: "7-cookies-and-tracking",
    title: "7. Cookies and Tracking",
    content: [
      "We use cookies and similar technologies (local storage, session storage) to operate the Services.",
      {
        ul: [
          "**Strictly necessary** — authentication tokens, CSRF tokens, session continuity. The Services don't work without these and they cannot be turned off.",
          "**Functional** — remembering your sidebar layout, active tabs, recent files, theme.",
          "**Analytics** — PostHog usage tracking. We use this to understand which features are used and to debug.",
        ],
      },
      "We do not use cookies for advertising and we do not allow third parties to drop advertising cookies through the Services. We do not honor \"Do Not Track\" signals at this time because we do not engage in cross-site tracking for advertising; if browser standards consolidate around a clear DNT semantic, we will adopt it.",
      "You can clear or block cookies via your browser settings. Doing so may break parts of the Services.",
    ],
  },
  {
    id: "8-data-retention",
    title: "8. Data Retention",
    content: [
      "We retain Your Content and Account data for as long as your Account is active or as needed to provide the Services.",
      {
        ul: [
          "**Active data** — kept until you delete it or close your Account.",
          "**Deleted content** — removed from active systems within a reasonable period after deletion. May persist in encrypted backups for up to 30 days before being overwritten.",
          "**Account closure** — when you close your Account, we delete or de-identify your Personal Data within a reasonable period, except where retention is required by law (for example, financial records for tax) or to resolve disputes and enforce our agreements.",
          "**Aggregated data** — non-identifying aggregates may be retained indefinitely.",
        ],
      },
      "You can delete individual Projects, individual files, or your entire Account from within the Services or by contacting us at privacy@enjamb.org.",
    ],
  },
  {
    id: "9-your-rights-and-choices",
    title: "9. Your Rights and Choices",
    content: [
      "Depending on your location, you may have rights including:",
      {
        ul: [
          "**Access** — request a copy of the Personal Data we hold about you",
          "**Rectification** — correct inaccurate Personal Data",
          "**Erasure** — request deletion (subject to legal retention requirements)",
          "**Restriction** — limit how we process your data",
          "**Portability** — receive a copy of your data in a portable format",
          "**Objection** — object to processing based on legitimate interests",
          "**Withdrawal of consent** — withdraw consent where we rely on it",
          "**Complaint** — file a complaint with your local data protection authority",
        ],
      },
      "To exercise any of these rights, contact privacy@enjamb.org. We may need to verify your identity before fulfilling the request. If you are in the EEA, UK, or Switzerland, you also have the right to lodge a complaint with your supervisory authority.",
      "**Marketing emails.** You can opt out of marketing emails via the unsubscribe link in any marketing message, or by contacting us. We will continue to send essential service emails (security, billing, terms updates) regardless of marketing preferences.",
    ],
  },
  {
    id: "10-legal-bases-for-processing",
    title: "10. Legal Bases for Processing (EEA / UK)",
    content: [
      "If you are in the European Economic Area, the United Kingdom, or Switzerland, our legal bases for processing your Personal Data are:",
      {
        ul: [
          "**Performance of a contract** — to provide the Services you signed up for.",
          "**Legitimate interests** — to improve, secure, and operate the Services, communicate with you about your Account, prevent fraud and abuse. We balance these interests against your rights.",
          "**Consent** — for marketing communications and certain optional integrations. You may withdraw consent at any time.",
          "**Legal obligation** — to comply with applicable laws and respond to legal requests.",
        ],
      },
    ],
  },
  {
    id: "11-childrens-privacy",
    title: "11. Children's Privacy",
    content: [
      "The Services are not directed to children under 16, and we do not knowingly collect Personal Data from anyone under 16. If you believe a child has provided us with Personal Data, contact privacy@enjamb.org and we will delete it.",
    ],
  },
  {
    id: "12-region-specific-disclosures",
    title: "12. Region-Specific Disclosures",
    content: [
      "**California (CCPA / CPRA).** California residents have the right to: know what Personal Information we collect, why, and with whom we share it; access, delete, and correct that information; opt out of \"sale\" or \"sharing\" of Personal Information for cross-context behavioral advertising; and not be discriminated against for exercising these rights. **Enjamb does not sell or share Personal Information for cross-context behavioral advertising.** To exercise your rights, contact privacy@enjamb.org.",
      "**Nevada.** Nevada residents may direct Enjamb not to sell their Personal Information. Enjamb does not sell Personal Information.",
      "**Colorado, Connecticut, Virginia, Utah, and other U.S. state privacy laws.** Where applicable, you have rights similar to those described above under the CCPA. Contact privacy@enjamb.org to exercise them.",
    ],
  },
  {
    id: "13-changes-to-this-policy",
    title: "13. Changes to This Policy",
    content: [
      "We may update this Policy. If we make material changes, we will notify you by email or in-product notice and update the Effective date above. Continued use of the Services after changes take effect constitutes acceptance.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "**Enjamb Labs, Inc.**",
      "2 Marina Blvd, San Francisco, CA",
      "privacy@enjamb.org",
      "help@enjamb.org",
      "Looking for terms? See [Terms of Service](/terms-of-service).",
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Enjamb",
  description:
    "How Enjamb Labs collects, uses, and shares information when you use enjamb.org, app.enjamb.org, and related services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Enjamb Privacy Policy"
      lastUpdated="2026-04-14"
      sections={sections}
    />
  );
}
