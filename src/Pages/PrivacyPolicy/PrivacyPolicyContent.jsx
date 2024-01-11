"use client";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Anchor } from 'antd';
const PrivacyPolicyContent = () => {
  const [clickLink,setClickLink] = useState(false)

  const handleClickPadding = () => {
    setClickLink(true)
  };

  return (
    <section className="py-16 md:py-32 text-[#000642]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-24 relative  text-[#000642]">
          <div className="flex-shrink-0">
            <ul className="text-[#000642] md:sticky top-48 flex flex-col gap-5">

            <Anchor
            affix={false}
               targetOffset="90"
               onClick={handleClickPadding}
               
      
            items={[
              {
                key: 'overview',
                href: '#overview',
                title: 'Overview',
         
              },
              {
                key: 'this-policy',
                href: '#this-policy',
                title: 'Purpose Of This Policy',
              },
              {
                key: 'ThePersonalDataWeCollect',
                href: '#ThePersonalDataWeCollect',
                title: 'The Personal Data We Collect',
              },
              {
                key: 'collectionOfPersonalData',
                href: '#collectionOfPersonalData',
                title: 'Collection Of Personal Data',
              },
              {
                key: 'UseOfPersonalData',
                href: '#UseOfPersonalData',
                title: ' Use Of Personal Data',
              },
              {
                key: 'ToWhomDoWeProvidePersonalData',
                href: '#ToWhomDoWeProvidePersonalData',
                title: 'To Whom Do We Provide Personal Data',
              },
              {
                key: 'DataSecurityAndDataRetention',
                href: '#DataSecurityAndDataRetention',
                title: 'Data Security And Data Retention',
              },
              {
                key: 'Rights-Choices',
                href: '#Rights-Choices',
                title: 'Your Rights And Choices',
              },
              
            ]}
          />


              {/* <li className="border-b pb-4">
                <Link
        onClick={handleClickValue}
                 
                  className={`w-full block cursor-pointer tabLink ${activeColor ? "text-[#FC9C5B]"  : ""}`}
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="overview"
                >
                  Overview
                </Link>
              </li>
              <li className="border-b pb-4">
                 
                <Link
                onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="this-policy"
                >
                  Purpose Of This Policy
                </Link>
              </li>
              <li className="border-b pb-4">
                 
                <Link
                onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="ThePersonalDataWeCollect"
                >
                  The Personal Data We Collect
                </Link>
              </li>
              <li className="border-b pb-4">
                 
                <Link
                onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="collectionOfPersonalData"
                >
                  Collection Of Personal Data
                </Link>
              </li>
              <li className="border-b pb-4">
                 
                <Link
                onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="UseOfPersonalData"
                >
                  Use Of Personal Data
                </Link>
              </li>
              <li className="border-b pb-4">
                 
                <Link
                onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="ToWhomDoWeProvidePersonalData"
                >
                  To Whom Do We Provide Personal Data
                </Link>
              </li>
              <li className="border-b pb-4">
                <Link
                 onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="DataSecurityAndDataRetention"
                >
                  Data Security And Data Retention
                </Link>
              </li>
              <li className="border-b pb-4">
                <Link
                 onClick={handleClickValue}
                  className="w-full block cursor-pointer tabLink"
                  smooth={true}
                  duration={1000}
                  offset={0}
                  spy={true}
                  to="Rights-Choices"
                >
                  Your Rights And Choices
                </Link>
              </li> */}
            </ul>
          </div>
          <div> 
            <div className=" space-y-4 text-[#000642]">
              <div  className={clickLink ? "pt-12": ""} id="overview">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  Overview
                </h2>
                <p className="md:text-lg font-medium text-[#201048]">
                  Trustx Gaming, a subsidiary of Trustx Gaming (Nasdaq: GAMB)
                  (“GAMB”), is the owner of the websites operated by and on
                  behalf of the Group.
                  <br />
                  The terms “Trustx Gaming”, “we”, “us”, or “our” refer
                  collectively to GAMB, and its current and future subsidiaries
                  (“Group Members”).
                  <br />
                  Trustx Gaming Media Limited has licensed the operation of
                  certain Trustx Gaming’s websites in certain geographic
                  locations to other Group Members, including: <br />
                  (a) all Trustx Gaming websites operating in the United States
                  to Trustx Gaming America Inc., a GAMB subsidiary;
                  <br />
                  (b) certain Trustx Gaming websites operating in the area of
                  the United States to Roto Sports, Inc., a GAMB subsidiary,
                  under a sub-license from Trustx Gaming America; and
                  <br />
                  (c) certain Trustx Gaming websites operating worldwide
                  (excluding the United States), to NDC Media Limited, a GAMB
                  subsidiary.
                  <br />
                  This Privacy and Cookies Policy (“Policy”) describes the
                  practices of Trustx Gaming Media Limited, including the Group
                  Members involved in the operation of the Trustx Gaming’s
                  websites in different geographic locations and the rights and
                  choices available to individuals regarding personal data.
                </p>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="this-policy">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                Purpose Of This Policy
                </h2>
                <p className="md:text-lg font-medium text-[#201048]">
                  Trustx Gaming respects your privacy and is committed to
                  protecting your personal data. Personal data means any
                  information that relates to an identifiable individual. It
                  does not include data where the ability to identify an
                  individual has been removed (anonymous data).
                  <br />
                  This Policy describes the rights and choices regarding your
                  personal data. It is important that you read the Policy
                  carefully. If you have any questions about this Policy,
                  including any requests to exercise your legal rights, please
                  contact us using the details set out below.
                  <br />
                  We may alter this Policy as needed for certain services of
                  Trustx Gaming and to abide by local laws or regulations around
                  the world, such as by providing supplemental information in
                  certain countries. This Privacy Notice does not apply to
                  Trustx Gaming’s processing of the personal data of its
                  personnel, such as employees and contractors. We also provide
                  important additional information in paragraph 8 that is solely
                  applicable to individuals located within the Member States of
                  the European Union, countries in the European Economic Area,
                  the United Kingdom, and Switzerland (collectively, “Europe” or
                  “European”) and for individuals located in the State of
                  California, United States:
                </p>
                <ul className="space-y-3 md:text-lg font-medium text-[#201048]">
                  <li className="flex gap-2">
                    <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                    <p>
                      European users should read the important information
                      provided below about transfer of personal data outside of
                      Europe.
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                    <p>
                      California residents should read the important information
                      provided below regarding our handling of the personal
                      data. Our websites may include links to third-party
                      websites, plug-ins and applications. Clicking on those
                      links or enabling those connections may allow third
                      parties to collect, use or otherwise handle data about
                      you. We do not control these third-party websites and are
                      not responsible for their privacy statements. When you
                      leave any of our websites, we encourage you to read the
                      privacy policy of every website you visit.
                    </p>
                  </li>
                </ul>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="ThePersonalDataWeCollect">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  The Personal Data We Collect
                </h2>
                <div className="md:text-lg font-medium text-[#201048]">
                  <p>
                    We collect personal data about individuals from various
                    sources described below. Where applicable, we indicate
                    whether and why individuals must provide us with personal
                    data, as well as the consequences of failing to do so. We
                    may collect, use, store and transfer different kinds of
                    personal data about you (“<strong>Personal Data</strong>”)
                    which we have grouped as follows:
                  </p>
                  <p>
                    “<strong>Personal Information</strong>” includes any
                    information from which you can be personally identified,
                    including your name, surname, email address, telephone
                    number or mobile number.
                  </p>
                  <p>
                    “<strong>Profile Data</strong>” includes a username,
                    password and a profile image that an individual may
                    establish and upload on one of our websites or mobile
                    applications, along with any other information that an
                    individual enters into their account profile;
                  </p>
                  <p>
                    “<strong>Financial account data</strong>” includes payment
                    card details or bank account details;
                  </p>
                  <p>
                    “<strong>Recruitment Process Data</strong>” includes the CV
                    and any covering letter of a job applicant and notes taken
                    for the duration of your recruitment process relating to a
                    job application and interview of a job applicant; Other
                    information supplied by a job applicant, such as
                    professional credentials and skills, educational and work
                    history, and other information of the type included on a CV
                    or covering letter;
                  </p>
                  <p>
                    “<strong>Technical Data</strong>” includes internet protocol
                    (IP) address, browser type and version, time zone setting
                    and location, operating system and platform, and other
                    technology on the devices you use to access our websites;
                  </p>
                  <p>
                    “<strong>Usage Data</strong>” includes information about how
                    you use our websites.
                  </p>
                  <p>
                    We also may collect, use and share “Aggregated Data” such as
                    statistical or demographic data for any purpose. Aggregated
                    Data could be derived from your personal data but is not
                    considered personal data in law as this data will not
                    directly or indirectly reveal your identity.
                  </p>
                  <p>
                    We do not collect any information about your race,
                    ethnicity, religious or philosophical beliefs, sexual
                    orientation, political opinions, trade union membership,
                    information about your health, and genetic and biometric
                    data. However, if you are applying for a job with us, we
                    will collect information about criminal convictions and
                    offences.
                  </p>
                  <p>
                    We automatically collect Technical Data and Usage Data. If
                    you are using a mobile device, we collect data that
                    identifies your mobile device, device-specific settings and
                    characteristics, app crashes and other system activity.
                  </p>
                </div>
              </div>
              <div
              className={clickLink ? "pt-12": ""}
                id="collectionOfPersonalData"
              >
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  Collection Of Personal Data
                </h2>
                <div className="md:text-lg font-medium text-[#201048]">
                  <p>
                    We may use different methods to collect data from and about
                    you including the following:
                  </p>
                  <p>
                    · Via direct interactions. You may give us your Personal
                    Information and Recruitment Process Data by: a) filling in
                    any a job application form on our Career Page, b) providing
                    an email address to register with our websites and/or
                    receive our newsletter, or c) providing your contact details
                    via our registration and/or newsletters form.
                  </p>
                  <p>
                    · Automated technologies. As you interact with our websites,
                    we will automatically collect Technical Data about your
                    equipment, browsing actions and patterns. We collect this
                    data by using cookies, server logs and other similar
                    technologies.
                  </p>
                  <p>
                    · Third parties or publicly available sources. We may
                    partner with third parties (such as content providers and
                    analytics companies including Google Analytics,
                    OptInMonster, Hotjar, and Convert.com) to help us improve
                    the services of our website, including to provide you with
                    relevant and interesting content and to conduct analytics
                    and measurement to understand how our services are used.
                    These companies may collect information from you
                    automatically in connection with your visit.
                  </p>
                  <p>
                    Generally, our websites can be accessed and used without
                    registration and without having to provide us any Personal
                    Data (Personal Information, Profile Data, and/or Recruitment
                    Process Data). You may opt in to receive information about
                    promotions, bonuses, bets, tips and strategy by subscribing
                    to our mailing list by providing your email address. You may
                    any time opt out from receiving such communications by
                    writing to us or clicking the “unsubscribe” button in any of
                    our emails to you. In case you contact us, whether by email,
                    through contact forms, or in other writings, we may keep a
                    copy of that correspondence. We will not share your Personal
                    Data with third parties for marketing purposes unless you
                    have provided us with your express consent to do so.
                  </p>
                </div>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="UseOfPersonalData">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  Use Of Personal Data
                </h2>
                <div className="md:text-lg font-medium text-[#201048]">
                  <p>We may use your Personal Data for the purposes of:</p>
                  <p>
                    <strong>Providing our services, which may include:</strong>
                  </p>
                  <p>
                    · Operating, evaluating, maintaining, improving, and
                    providing the features and functionality of our services;
                  </p>
                  <p>· Fulfilling a payment transaction initiated by you;</p>
                  <p>
                    · Communicating with you regarding your account with us, if
                    you have one, including by sending you service-related
                    emails or messages (e.g., messages regarding account
                    verification, changes or updates to the functionality of our
                    services, technical and security notices and alerts, and
                    support messages)
                  </p>
                  <p>
                    · Personalizing the manner in which we provide our services;
                  </p>
                  <p>· Administering and protecting our business; and</p>
                  <p>
                    · Providing support and maintenance for our services,
                    including responding to your service-related requests,
                    questions, and feedback.
                  </p>
                  <p>
                    <strong>For research and development</strong>
                  </p>
                  <p>
                    We use the information we collect for our own research and
                    development purposes, which include:
                  </p>
                  <p>· Developing or improving our services; and</p>
                  <p>
                    · Developing and creating analytics and related reporting.
                  </p>
                  <p>
                    <strong>Marketing</strong>
                  </p>
                  <p>
                    We may use your Personal Data to form a view on what
                    services we think you may want or need or what may be of
                    interest to you.
                  </p>
                  <p>
                    We may contact you with marketing communications using the
                    Personal Data you have provided to us if you have actively
                    expressed your interest in availing of our services or have
                    availed of our services and, in any case, you have not opted
                    out of receiving that marketing, to the extent permitted by
                    applicable law.
                  </p>
                  <p>
                    You can ask us to stop sending you marketing messages at any
                    time by contacting us using the details below or clicking on
                    the opt-out link included in each marketing message.
                  </p>
                  <p>
                    Should you choose to opt out of receiving our marketing
                    messages, we will continue to conduct our other relevant
                    activities using your Personal Data, including sending
                    non-marketing messages.
                  </p>
                  <p>
                    <strong>
                      Managing our recruiting and processing employment
                      applications
                    </strong>
                  </p>
                  <p>
                    We process Personal Data, such as information submitted to
                    us in a job application, to facilitate our recruitment
                    activities and process employment applications, such as by
                    evaluating a job candidate for an employment activity, and
                    monitoring recruitment statistics.
                  </p>
                  <p>
                    <strong>Complying with law</strong>
                  </p>
                  <p>
                    We use your Personal Data as we believe necessary and
                    appropriate to comply with applicable laws, lawful requests
                    and legal process, such as to respond to subpoenas or
                    requests from government authorities.
                  </p>
                  <p>
                    <strong>Compliance, fraud prevention and safety</strong>
                  </p>
                  <p>
                    We use your Personal Data as we believe necessary or
                    appropriate to (a) enforce the terms and conditions that
                    govern our services; (b) protect our rights, privacy, safety
                    or property, and/or that of you or others; and (c) protect,
                    investigate and deter against fraudulent, harmful,
                    unauthorized, unethical or illegal activity.
                  </p>
                  <p>
                    <strong>With your consent</strong>
                  </p>
                  <p>
                    In some jurisdictions, applicable law may require us to
                    request your consent to use your Personal Data in certain
                    contexts, such as when we would like to send you certain
                    marketing messages. If we request your consent to use your
                    Personal Data, you have the right to withdraw your consent
                    any time in the manner indicated when we requested the
                    consent or by contacting us. If you have consented to
                    receive marketing communications from our third-party
                    partners, you may withdraw your consent by contacting those
                    partners directly.
                  </p>
                  <p>
                    <strong>To create anonymous data</strong>
                  </p>
                  <p>
                    We may create anonymous data from your Personal Data and
                    other individuals whose Personal Data we collect. We make
                    Personal Data into anonymous data by excluding information
                    that makes the data personally identifiable to you and use
                    that anonymous data for our lawful business purposes.
                  </p>
                </div>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="ToWhomDoWeProvidePersonalData">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  To Whom Do We Provide Personal Data
                </h2>
                <div className="md:text-lg font-medium text-[#201048]">
                  <p>
                    We may have to share your data to the following parties:
                  </p>
                  <p>
                    <strong>Group Members</strong>
                  </p>
                  <p>
                    We may disclose your Personal Data to other Group Members
                    for purposes consistent with this Policy.
                  </p>
                  <p>
                    <strong>Service providers</strong>
                  </p>
                  <p>
                    We may employ third parties to administer and provide
                    services on our behalf (such as third parties that provide
                    customer support, third parties that we engage to host,
                    manage, maintain, and develop our websites, mobile
                    applications, and IT systems, and third parties that help us
                    process payments). These third parties may use your
                    information only as directed by us and in a manner
                    consistent with this Policy. These third parties are
                    prohibited from using or disclosing your information for any
                    other purpose.
                  </p>
                  <p>
                    <strong>
                      Participants in the transaction processing chain
                    </strong>
                  </p>
                  <p>
                    We may share your Personal Data with companies in the
                    transaction processing chain in connection with processing a
                    payment transaction, such as merchants, banks or other card
                    issuers, card associations, debit network operators and
                    their members.
                  </p>
                  <p>
                    <strong>Professional advisors</strong>
                  </p>
                  <p>
                    We may disclose your Personal Data to professional advisors,
                    such as lawyers, bankers, auditors and insurers, where
                    necessary, in the course of the professional services that
                    they render to us.
                  </p>
                  <p>
                    <strong>
                      Compliance with Laws and Law Enforcement; Protection and
                      Safety
                    </strong>
                  </p>
                  <p>
                    Trustx Gaming may disclose information about you to
                    government or law enforcement officials or private parties
                    as required by law, and disclose and use such information as
                    we believe necessary or appropriate to (a) comply with
                    applicable laws and lawful requests and legal process, such
                    as to respond to subpoenas or requests from government
                    authorities; (b) enforce the terms and conditions that
                    govern our services; (c) protect our rights, privacy, safety
                    or property, and/or that of you or others; and (d) protect,
                    investigate and deter against fraudulent, harmful,
                    unauthorized, unethical or illegal activity.
                  </p>
                </div>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="DataSecurityAndDataRetention">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  Data Security And Data Retention
                </h2>
                <p className="mt-3 md:text-lg font-medium text-[#201048]">
                  We have put in place appropriate security measures to prevent
                  your Personal Data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed. In
                  addition, we limit access to your Personal Data to those
                  employees, agents, contractors, subsidiaries, affiliates and
                  other third parties who have a business need to know. They
                  will only process your Personal Data on our instructions, and
                  they are subject to a duty of confidentiality. We have put in
                  place commercially reasonable procedures to deal with any
                  suspected Personal Data breach and will notify you and any
                  applicable regulator of a breach where we are legally required
                  to do so.
                  <br />
                  We will process and store the relevant Personal Data for as
                  long as it is necessary or required in order to fulfil our
                  legal, contractual, or statutory obligations and/or for the
                  establishment, exercise or defence of legal claims.
                </p>
              </div>
              <div  className={clickLink ? "pt-12": ""} id="Rights-Choices">
                <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                  Your Rights And Choices
                </h2>
                <div className="md:text-lg font-medium text-[#201048]">
                  <p>
                    In this section, we describe the rights and choices
                    available to all users. Users who are located in Europe may
                    read additional information about their rights in paragraph
                    8 below.
                  </p>
                  <p>
                    <strong>Marketing communications</strong>
                  </p>
                  <p>
                    You can ask us to stop sending you marketing messages at any
                    time by contacting us or clicking on the opt-out link
                    included in each marketing message. You may continue to
                    receive service-related and other non-marketing messages.
                  </p>
                  <p>
                    <strong>Choosing not to provide your Personal Data</strong>
                  </p>
                  <p>
                    Where we request Personal Data directly from you, you do not
                    have to provide it to us. If you decide not to provide the
                    requested information, in some circumstances we may be
                    unable to provide services to you. For example, we may be
                    unable to process your transaction.
                  </p>
                  <p>
                    <strong>
                      Accessing, modifying or deleting your information
                    </strong>
                  </p>
                  <p>
                    In some jurisdictions, applicable law may provide a right
                    for individuals to access, modify, or delete their Personal
                    Data in some. You may contact Trustx Gaming directly to
                    request access to, modify or delete your information. We may
                    not be able to provide access to, modify, or delete your
                    information in all circumstances.
                  </p>
                  <p>
                    <strong>Complaints</strong>
                  </p>
                  <p>
                    If you have a complaint about our handling of your Personal
                    Data, you may contact our data protection officer using the
                    contact information below. We request that a complaint be
                    made in writing. Please provide details about your concern
                    or complaint so that we can investigate it. We will
                    determine whether to take action in response to your
                    complaint, which, if we do so, may include conducting
                    internal discussions with relevant business representatives.
                    We may contact you for additional details or clarification
                    about your concern or complaint. We will contact you to
                    inform you of our response to your complaint. You also may
                    have a right to file a complaint with a national or local
                    regulatory agency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyContent;
