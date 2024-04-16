import { IAccordian } from './accordian.interface';

export const FAQs: IAccordian[] = [
  {
    question: 'What is conveyancing?',
    answer: [
      'Conveyancing is the process of moving the legal ownership of property or land from one person or entity to another.',
    ],
  },
  {
    question: 'What is a conveyancer?',
    answer: [
      'A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.',
    ],
  },
  {
    question: 'How much does it cost?',
    answer: [
      'Whether you are buying or selling property, our services are set at a fixed price.',
      'The only cost variable relates to disbursements.',
      `We don't want you to be worried about the word 'disbursements' - it's just an everyday legal term used to describe out of pocket expenses and all property transactions in Australia will incur some of these.`,
      `We'll always be upfront about your conveyancing costs, so as soon as you ask us to help you, we can provide you with an estimate of how much your disbursements are likely to be.`,
      'These out of pocket costs all depend on the type of property you have bought or sold and where that property is located.',
    ],
  },
  {
    question: 'What types of conveyancing does Settle Easy do?',
    answer: ['Our experienced team specialise in all types of conveyancing including:'],
    List: [
      'residential properties.',
      'large scale off the plan property developments',
      'retirement village residences',
      'commercial properties',
      'properties within trust structures',
      'properties for self-managed superannuation funds (SMSFs).',
    ],
    isRenderAsList: true,
  },
  {
    question: `How will I know what's happening?`,
    answer: [
      'At Settle Easy, we are committed to keeping you updated every step of the way.',
      'As a registered customer, you will be able to track each stage of your transaction and you will have a dedicated conveyancer to guide you through the process and answer any questions you may have.',
    ],
  },
];
