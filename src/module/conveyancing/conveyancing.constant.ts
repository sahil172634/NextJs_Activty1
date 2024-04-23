import { IAccordian } from '@/src/shared/components/accordian/accordian.interface';
import { IFeedback } from './conveyancing.interface';

export const DESCRIPTIONS: string[] = [
  `<p>In partnership with resi.uatz.view.com.au,<a class='underline cursor-pointer hover:text-blue-500'> Settle Easy</a> is currently offering new customers a $220 conveyancing voucher on their trusted <a class='underline cursor-pointer hover:text-blue-500'> online conveyancing services </a> and a free contract review. You&apos;ll only pay $880 incl. GST plus disbursements on a standard conveyancing transaction.Redeem today and use within 12 months.`,
  '<p>Settle Easy provides reliable, secure, fast and hassle-free conveyancing services to help you buy or sell property.</p>',
  '<p>Think of Settle Easy as a legal expert in your corner. Someone to guide you through the process and to provide you with a seamless experience in the lead up to settlement.</p>',
  '<p>Alongside the $220 conveyancing voucher, you will also be eligible for a free contract review during your conveyancing transaction, knowing no surprises are waiting.</p>',
  '<p>Simply fill out the form and a member from the Settle Easy Success Specialist team will get in touch within 24 hours.</p>',
  '<p>This offer is eligible for customers transacting in Victoria, New South Wales and Queensland.</p>',
];
export const FEEDBACKS: IFeedback[] = [
  {
    timeAgo: '4 week ago',
    description:
      'Marie was excellent, very prompt, clear and friendly. Would recommend for first home buyers who want to be kept in the loop and shown all the steps.',
    reviewerName: 'Jake Curtis',
  },
  {
    timeAgo: '2 week ago',
    description: `We were fortunate enough to have Carley from Settle Easy help us with our first home purchase. We feel incredibly lucky that we had her to explain the different parts of the process and answer the many questions we had. We said to one another multiple times 'Thank god for Carley, she's incredible.' It meant a lot that she was so forward with getting details, and advocating for us with the sellers and always keeping us up to date with what was happening. We can't thank her enough for everything she did for us.`,
    reviewerName: 'Brendan Freeman',
  },
  {
    timeAgo: '2 week ago',
    description: `We are first time property buyers and were buying a block of land - Carley from Settle Easy was absolutely amazing from start to finish. She went above and beyond at every single stage of the process, keeping us in the loop the entire time, explaining what she was doing and why, making sure we understood what was happening. Buying a property is stressful enough, you don't need the extra worry of a Conveyancer that needs constant chasing. Incredible service!`,
    reviewerName: 'Emma Gerts',
  },
];
export const OPTIONS = ['Selction your state', 'VIC', 'NSW', 'QLD'];

export const FAQs: IAccordian[] = [
  {
    title: 'What is conveyancing?',
    subTitle: `<p class='mb-4'>Conveyancing is the process of moving the legal ownership of property or land from one person or entity to another.</p>`,
  },
  {
    title: 'What is a conveyancer?',
    subTitle: `<p class='mb-4'>A conveyancer is a property transfer specialist. They prepare the legal documents that form part of real estate transactions such as the purchase and sale of properties, settlements and title transfers.</p>`,
  },
  {
    title: 'How much does it cost?',
    subTitle: ` <p class='mb-4'>Whether you are buying or selling property, our services are set at a fixed price.</p>
      <p class='mb-4'>The only cost variable relates to disbursements.</p>
      <p class='mb-4'>We don't want you to be worried about the word 'disbursements' - it's just an everyday legal term used to describe out of pocket expenses and all property transactions in Australia will incur some of these.</p>
      <p class='mb-4'>We'll always be upfront about your conveyancing costs, so as soon as you ask us to help you, we can provide you with an estimate of how much your disbursements are likely to be.</p>
      <p class='mb-4'>These out of pocket costs all depend on the type of property you have bought or sold and where that property is located.</p>`,
  },
  {
    title: 'What types of conveyancing does Settle Easy do?',
    subTitle: `<p class='mb-4'>Our experienced team specialise in all types of conveyancing including:</p><ul class='pl-7 mb-4 list-disc'><li>residential properties.</li><li>large scale off the plan property developments</li><li>retirement village residences</li><li>commercial properties</li><li>properties within trust structures</li><li>properties for self-managed superannuation funds (SMSFs).</li></ul>`,
  },
  {
    title: `How will I know what's happening?`,
    subTitle: `<p class='mb-4'>At Settle Easy, we are committed to keeping you updated every step of the way.</p>
      <p>As a registered customer, you will be able to track each stage of your transaction and you will have a dedicated conveyancer to guide you through the process and answer any questions you may have.</p>`,
  },
];
