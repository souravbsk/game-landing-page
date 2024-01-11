/* eslint-disable react/no-unescaped-entities */
"use client";
import PeraText from "@/components/PeraText/PeraText";
// import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Anchor } from "antd";
const TermsConditionContent = () => {
  const [clickLink, setClickLink] = useState(false);

  const handleClickPadding = () => {
    setClickLink(true)
  };

  return (
    <>
      <section className="py-16  md:py-32 text-[#000642]">
        <div className="container ">
          <div className="flex flex-col lg:flex-row gap-24 relative  text-[#000642]">
            <div className="flex-shrink-0">
              <ul className="text-[#000642] sticky top-48 flex flex-col gap-5">
                <Anchor
                  targetOffset="90"
                  affix={false}
                  onClick={handleClickPadding}
                  items={[
                    {
                      key: "introduction",
                      href: "#introduction",
                      title: "Introduction",
                    },
                    {
                      key: "consideration",
                      href: "#consideration",
                      title: "Consideration",
                    },
                    {
                      key: "use-of-material",
                      href: "#use-of-material",
                      title: "Restrictions on use of Material",
                    },
                    {
                      key: "submissions",
                      href: "#submissions",
                      title: "Submissions",
                    },
                    {
                      key: "information-Security",
                      href: "#information-Security",
                      title: "Registration Information and Security",
                    },
                    {
                      key: "communication",
                      href: "#communication",
                      title: "Public Forums and Communication",
                    },
                    {
                      key: "house-rule",
                      href: "#house-rule",
                      title: "House Rule",
                    },
                    {
                      key: "removal-rights",
                      href: "#removal-rights",
                      title: " Our Content Removal Rights",
                    },
                  ]}
                />
                {/* <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                  offset={0}
                  spy={true}
                    className={`w-full block cursor-pointer tabLink ${activeColor ? "text-[#FC9C5B]"  : ""}`}
                    smooth={true}
                    duration={1000}
                    to="introduction"
                  >
                    Introduction
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue} 
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="consideration"
                  >
                    Consideration
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="use-of-material"
                  >
                    Restrictions on use of Material
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="submissions"
                  >
                    Submissions
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="information-Security"
                  >
                    Registration Information and Security
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="communication"
                  >
                    Public Forums and Communication
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="house-rule"
                  >
                    House Rules
                  </Link>
                </li>
                <li  className="border-b pb-4">
                  <Link
                  onClick={handleClickValue}
                    offset={0}
                  spy={true}
                    className="w-full block cursor-pointer tabLink"
                    smooth={true}
                    duration={1000}
                    to="removal-rights"
                  >
                    Our Content Removal Rights
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="">
              <div className=" space-y-4 text-[#000642]">
                <div className={clickLink ? "pt-12" : ""} id="introduction">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Introduction
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    Trustx Gaming, a subsidiary of Trustx Gaming{" "}
                    <strong>(Nasdaq: GAMB)</strong>
                    <strong>(“GAMB”)</strong>, is the owner of the websites
                    operated by and on behalf of the Group. <br /> The terms
                    “Trustx Gaming”, “we”, “us”, or “our” refer collectively to
                    GAMB, and its current and future subsidiaries{" "}
                    <strong>(“Group Members”)</strong>. <br /> Trustx Gaming
                    Media Limited has licensed the operation of certain Trustx
                    Gamings websites in certain geographic locations to other
                    Group Members, including: <br />
                    <strong>(a)</strong> all Trustx Gaming websites operating in
                    the United States to Trustx Gaming America Inc., a GAMB
                    subsidiary; <br /> <strong>(b)</strong> certain Trustx
                    Gaming websites operating in the area of the United States
                    to Roto Sports, Inc., a GAMB subsidiary, under a sub-license
                    from Trustx Gaming America; and <br /> <strong>(c)</strong>{" "}
                    certain Trustx Gaming websites operating worldwide{" "}
                    <strong>(excluding the United States)</strong>, to NDC Media
                    Limited, a GAMB subsidiary. <br /> This Privacy and Cookies
                    Policy <strong>(“Policy”)</strong> describes the practices
                    of Trustx Gaming Media Limited, including the Group Members
                    involved in the operation of the Trustx Gaming’s websites in
                    different geographic locations and the rights and choices
                    available to individuals regarding personal data.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="consideration">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Consideration
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    You acknowledge that these terms of use are supported by
                    reasonable and valuable consideration, the receipt and
                    adequacy of which are hereby acknowledged. Without limiting
                    the foregoing, you acknowledge that such consideration
                    includes, without limitation, your use of the Trustx Gaming
                    Sites and receipt of data, materials and information
                    available at or through the Trustx Gaming Sites, the
                    possibility of our review, use or display of your
                    Submissions (as defined below in section 4 labeled
                    ``Submissions``), and the possibility of publicity and
                    promotion from our review, use or display of your
                    Submissions.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="use-of-material">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Restrictions on use of Material
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    All information, content and materials contained on Trustx
                    Gaming Sites are our copyrighted property or the copyrighted
                    property of our licensors or licensees. All trademarks,
                    service marks, trade names, and trade dress are proprietary
                    to us and/or our licensors or licensees. No information,
                    content or material from any Trustx Gaming Site or any
                    Internet site owned, operated, licensed, or controlled by us
                    may be copied, reproduced, republished, uploaded, posted,
                    transmitted or distributed in any way, except that you may
                    download one copy of the information, content or materials
                    on any single computer for your personal, noncommercial home
                    use only, provided that (a) you keep intact all copyright
                    and other proprietary notices, (b) you make no modifications
                    to the information, content or materials, (c) you do not use
                    the information, content or materials in a manner that
                    suggests an association with any of our products, services
                    or brands, and (d) you do not download information, content
                    or materials so as to avoid future downloads from any Trustx
                    Gaming Site. The use of any information, content or
                    materials on a Trustx Gaming Site on any other Web site or
                    computer environment is prohibited. <br />
                    The Trustx Gaming Sites are only for your personal use. You
                    may not use the Trustx Gaming Sites for commercial purposes
                    or in any way that is unlawful, or harms us or any other
                    person or entity, as determined in our sole discretion.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="submissions">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Submissions
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    If you intentionally or unintentionally send us unsolicited
                    submissions, or through features or activities on any Trustx
                    Gaming Site (including, without limitation, games,
                    sweepstakes, contests, promotions and Public Forums (defined
                    below in section 6 labeled "PUBLIC FORUMS AND
                    COMMUNICATION")), you submit, post or otherwise send us any
                    information, content or materials including, without
                    limitation, data, text, messages, files, images,
                    photographs, videos, audiovisual works, musical compositions
                    (including lyrics), sound recordings, postings, your and/or
                    other persons' names, likenesses, voices, usernames,
                    profiles, actions, appearances, performances and/or other
                    biographical information or material, and any other
                    materials, as well as links to data, text, files, images,
                    photographs, videos, audiovisual works, musical compositions
                    (including lyrics), sound recordings, postings, your and/or
                    other persons' names, likenesses, voices, usernames,
                    profiles, actions, appearances, performances and other
                    biographical information or material, web pages and any
                    other materials (collectively, "User-Generated Content")
                    through such features or activities (such User-Generated
                    Content, together with unsolicited submissions, the
                    "Submissions"), we (and our licensees, distributors, agents,
                    representatives and other authorized users)shall be entitled
                    to unrestricted use of such Submissions for any purpose
                    whatsoever, commercial or otherwise, without the requirement
                    of any permission from or payment to you or to any other
                    person or entity. If there exists any doubt or ambiguity
                    about whether any User-Generated Content constitutes a
                    Submission, such User-Generated Content shall be
                    conclusively deemed to be a Submission. No Submission shall
                    be subject to any obligation of confidentiality on our part
                    and we shall not be liable for any use or disclosure of any
                    Submission. Without limiting the foregoing, you hereby grant
                    us (and our licensees, distributors, agents, representatives
                    and other authorized users), without the requirement of any
                    permission from or payment to you or to any other person or
                    entity, a perpetual, non-exclusive, irrevocable, fully-paid,
                    royalty-free, sub-licensable and transferable worldwide
                    license to use, re-use, reproduce, transmit, print, publish,
                    display, exhibit, distribute, re-distribute, copy, host,
                    store, cache, archive, index, categorize, comment on,
                    broadcast, stream, edit, alter, modify, adapt, translate,
                    create derivative works based upon and publicly perform such
                    Submissions, in whole or in part, in all media formats and
                    channels now known or hereafter devised (including, without
                    limitation, on Trustx Gaming Sites and on third party web
                    sites) for any and all purposes including, without
                    limitation, news, advertising, promotional, marketing,
                    publicity, trade or commercial purposes, all without further
                    notice to you and with or without attribution (the
                    "Submissions License"). To the extent that any Submissions
                    submitted by you contain original songs or recordings, you
                    hereby represent that you are a member of ASCAP, BMI, SESAC
                    or any other applicable performing rights society and that
                    all musical compositions (including lyrics) contained in
                    such Submissions are available for licensing to us (and our
                    licensees, distributors, agents, representatives and other
                    authorized users) directly from such societies.
                    Notwithstanding the foregoing, regardless of whether you are
                    a member of any performing rights society, you hereby grant
                    us (and our licensees, distributors, agents, representatives
                    and other authorized users) a perpetual, non-exclusive and
                    irrevocable license to publicly perform each and every
                    musical composition (including lyrics) contained in such
                    Submissions. To the extent that we solicit Submissions
                    through features or activities on Trustx Gaming Sites
                    (including, without limitation, games, sweepstakes,
                    contests, promotions and Public Forums (defined below in
                    section 6 labeled "PUBLIC FORUMS AND COMMUNICATION")) that
                    require the use of our copyrighted works (in whole or in
                    part), we hereby grant you a non-exclusive license to create
                    a derivative work using our copyrighted works (in whole or
                    in part); provided however, that such license shall be
                    conditioned upon your assignment of all rights in the work
                    you create to us (and our licensees, distributors, agents,
                    representatives and other authorized users). If such rights
                    are not assigned to us (and our licensees, distributors,
                    agents, representatives and other authorized users), your
                    license to create material using our copyrighted works (in
                    whole or in part) shall be null and void. You agree to the
                    foregoing grant of rights, consents, agreements and
                    assignments whether or not your Submissions are used by us.
                    You hereby appoint us as your agent with full power to enter
                    into and execute any document and/or do any act we may
                    consider appropriate to confirm the grant of rights,
                    consents, agreements, assignments and waivers set forth in
                    these terms of use. You agree that any Submissions you make
                    are not being made in confidence or trust and that no
                    confidential or fiduciary relationship is intended or
                    created between you and us in any way. To the extent any
                    "moral rights," "ancillary rights," or similar rights in or
                    to the Submissions exist and are not exclusively owned by
                    us, you agree not to enforce any such rights as to us or our
                    licensees, distributors, agents, representatives and other
                    authorized users, and you shall procure the same agreement
                    not to enforce from any others who may possess such rights.
                    Without limiting the scope of the Submissions License or any
                    future grant of rights, consents, agreements, assignments
                    and waivers you may make with respect to Submissions, you
                    hereby ratify any prior grant of rights, consents,
                    agreements, assignments and waivers made by you with respect
                    to Submissions submitted by you to us.
                  </p>
                </div>
                <div
                  className={clickLink ? "pt-0" : ""}
                  id="information-Security"
                >
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Registration Information and Security
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    You agree to provide, maintain and update true, accurate,
                    current and complete information about yourself as prompted
                    by our registration processes (the "Registration Data"). If
                    you provide any information that does not satisfy this
                    provision, or we have reasonable grounds to suspect as much,
                    we have the right to suspend or terminate your account and
                    refuse any and all current or future use of any Trustx
                    Gaming Site (or any portion thereof). <br />
                    all current or future use of any Trustx Gaming Site (or any
                    portion thereof). You also agree (a) to promptly notify us
                    using the form located at the corporate pages of any
                    unauthorized use of your username, password, other account
                    information, or any other breach of security that you become
                    aware of involving or relating to any Trustx Gaming Site. In
                    addition, you agree to exit from your account at the end of
                    each session. We explicitly disclaim liability for any and
                    all losses and damages arising from your failure to comply
                    with this section.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="communication">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Public Forums and Communication
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    "Public Forum" means an area, site or feature offered as
                    part of any Trustx Gaming Site that enables users or
                    visitors of any Trustx Gaming Site (a) to submit, post,
                    display and/or view User-Generated Content and/or (b) to
                    communicate, share or exchange User-Generated Content with
                    other Trustx Gaming Site users, visitors and members of the
                    general public including, without limitation, a chat area,
                    message board, instant messaging, mobile messaging, social
                    community environment, profile page, conversation page,
                    e-mail function.
                    <br />
                    You acknowledge that anything you submit to a Trustx Gaming
                    Site by way of any Public Forum may be routed through our
                    servers, the servers of one or more third parties on our
                    behalf and the Internet, and may be viewed on the Internet
                    by the general public and that, therefore, you have no
                    expectation of privacy with regard to any such submission.
                    You acknowledge that Public Forums and features offered
                    therein are for public and not private communications. We
                    cannot guarantee the security of any information you
                    disclose through any of these media; you make such
                    disclosures at your own risk. You are and shall remain
                    solely responsible for the User-Generated Content submitted
                    and/or posted under your username or otherwise by you in any
                    Public Forum and for the consequences of submitting and
                    posting same. You acknowledge that the use of User-Generated
                    Content posted in any Public Forum is at your own risk. For
                    example, we are not responsible for, and we do not endorse,
                    the opinions, advice or recommendations posted or sent by
                    users in any Public Forum and we specifically disclaim any
                    and all liability in connection therewith.
                    <br />
                    We reserve the right to screen, refuse to post, remove or
                    edit User-Generated Content at any time and for any or no
                    reason in our absolute and sole discretion without prior
                    notice. If we elect to screen User-Generated Content, there
                    may be a delay in the posting of such content in a Public
                    Forum to allow for a review process. If we have questions
                    about your User-Generated Content including, without
                    limitation, the copyright, we may contact you for further
                    information including, for example, to verify that you own
                    the copyright or otherwise obtained permission to post the
                    material.
                    <br />
                    When participating in a Public Forum, never assume that
                    people are who they say they are, know what they say they
                    know, or are affiliated with whom they say they are
                    affiliated with. Information obtained in a Public Forum may
                    not be reliable, and it is not a good idea to take any
                    action, including to trade or make any investment decisions,
                    based solely or largely on information you cannot confirm.
                    We cannot be responsible for the accuracy of any
                    User-Generated Content contained in a Public Forum, and we
                    shall not be responsible for any trading, investment, or any
                    other decisions made or actions taken or not taken based on
                    such information or content.
                    <br />
                    Your ability to access and browse User-Generated Content
                    within a Public Forum and/or to submit and/or post
                    User-Generated Content within a Public Forum may be subject
                    to certain age restrictions and/or related procedures that
                    we may revise in our sole discretion at any time and for any
                    reason. Any such age restrictions and procedures will be
                    posted within the Public Forum, as applicable.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="house-rule">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    House Rules
                  </h2>

                  <ul className="space-y-3 md:text-lg font-medium text-[#201048]">
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not submit, post, upload, distribute, or
                        otherwise make available or transmit any User-Generated
                        Content that: (a) is defamatory, abusive, harassing,
                        insulting, threatening, or that could be deemed to be
                        stalking or constitute an invasion of a right of privacy
                        of another person; (b) is bigoted, hateful, or racially
                        or otherwise offensive; (c) is violent, vulgar, obscene,
                        pornographic or otherwise sexually explicit; (d) is
                        illegal or encourages or advocates illegal activity or
                        the discussion of illegal activities with the intent to
                        commit them; (e) infringes or violates any right of a
                        third party or any domestic or international law, rule
                        or regulation including, but not limited to: (i)
                        copyright, patent, trademark, trade secret or other
                        proprietary or contractual rights; (ii) right of privacy
                        (specifically, you must not distribute another person's
                        personal information of any kind without their express
                        permission) or publicity; or (iii) any confidentiality
                        obligation; or (f) does not comply with all terms and
                        conditions applicable to the Submissions License (set
                        forth above in section 4 labeled "SUBMISSIONS");
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You own or have the necessary rights, licenses,consents
                        and permissions, without the need for any permission
                        from or payment to any other person or entity, to use,
                        and to authorize us to use, distribute or otherwise
                        exploit in all manners permitted by these terms of use
                        (including, without limitation, the Submissions
                        License), all copyrights, trademarks, patents, trade
                        secrets, privacy and publicity rights (including,
                        without limitation, names, likenesses and voices) and/or
                        other proprietary rights contained in any User-Generated
                        Content that you submit, post, upload, distribute or
                        otherwise make available or transmit. As stated above
                        with respect to the Submissions License (set forth above
                        in section 4 labeled "SUBMISSIONS"), to the extent that
                        any Submissions submitted and/or posted by you contain
                        original songs or recordings, you hereby represent that
                        you are a member of ASCAP, BMI, SESAC or any other
                        applicable performing rights society and that all
                        musical compositions (including lyrics) contained in
                        such Submissions are available for licensing to us
                        directly from such societies. Notwithstanding the
                        foregoing, regardless of whether you are a member of any
                        performing rights society, you hereby grant us a
                        perpetual, non-exclusive and irrevocable license to
                        publicly perform each and every musical composition
                        (including lyrics) contained in such Submissions;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not (a) advertise or sell any products,
                        services or otherwise (whether or not for profit), or
                        solicit others (including, without limitation,
                        solicitations for contributions or donations) or use any
                        Public Forum for commercial purposes of any kind, or (b)
                        use any product or service available on any Trustx
                        Gaming Site (including, without limitation, electronic
                        greeting cards, e-mail functions (e.g., send-a-friend
                        e-mails) and RSS feeds or other similar type feeds) for
                        commercial purposes of any kind;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not submit, post, upload, distribute, or
                        otherwise make available or transmit any software or
                        other computer files that contain a virus or other
                        harmful component, or otherwise impair or damage the
                        Trustx Gaming Sites or any connected network, or
                        otherwise interfere with any person or entity's use or
                        enjoyment of the Trustx Gaming Sites;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not impersonate any person or entity or
                        misrepresent your identity or affiliation with any
                        person or entity including, without limitation, using
                        another person's username, password or other account
                        information, or another person's name, likeness, voice,
                        image or photograph;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not engage in antisocial, disruptive, or
                        destructive acts, including "flaming," "spamming,"
                        "flooding," "trolling," and "griefing" as those terms
                        are commonly understood and used on the Internet;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not delete any legal notices, disclaimers or
                        proprietary notices such as copyright or trademark
                        symbols, or modify any logos that you do not own or have
                        express permission to modify;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not submit, post, upload, distribute or
                        otherwise make available or transmit any User-Generated
                        Content or make statements in any Public Forum that do
                        not generally pertain to the designated topic or theme
                        of the Public Forum;
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not submit, post, upload, distribute or
                        otherwise make available or transmit (or attempt to
                        submit, post, upload, distribute or otherwise attempt to
                        make available or transmit) any User-Generated Content
                        in violation of a Public Forum's restrictions including,
                        but not limited to, its age restrictions, procedures
                        and/or these terms of use; and
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <MdKeyboardDoubleArrowRight className="text-xl flex-shrink-0 text-[#FF7A1F]"></MdKeyboardDoubleArrowRight>{" "}
                      <p>
                        You will not engage in (or attempt to engage in) any
                        criminal activity including, without limitation, child
                        pornography, stalking, sexual assault, fraud,
                        trafficking in obscene or stolen material, drug dealing,
                        harassment, theft, and conspiracy to commit any criminal
                        activity.
                      </p>
                    </li>
                  </ul>
                  <p className="mt-3 md:text-lg font-medium text-[#201048]">
                    We cannot and do not assure that other users are or will be
                    complying with the foregoing House Rules or any other
                    provisions of these terms of use, and, as between you and
                    us, you hereby assume all risk of harm or injury resulting
                    from any such lack of compliance.
                    <br />
                    To the extent that any feature on a Trustx Gaming Site
                    requires you to submit your e-mail address or mobile phone
                    number in order to send a card, e-mail or message, you must,
                    and you hereby agree to, furnish your actual e-mail address
                    or actual mobile phone number, as applicable. Any business
                    use, "re-mailing," or other high-volume application is
                    strictly prohibited. You are not permitted to send cards,
                    e-mails or messages using an automated program. Electronic
                    greeting cards, e-mails and mobile messages may not contain
                    inappropriate language or images or copyrighted material
                    (without the consent of the copyright holder) or encourage
                    illegal activity. We reserve the right not to deliver
                    electronic greeting cards, e-mails and mobile messages that
                    violate these guidelines.
                  </p>
                </div>
                <div className={clickLink ? "pt-12" : ""} id="removal-rights">
                  <h2 className=" mb-3 text-2xl font-semibold text-[#000642]">
                    Our Content Removal Rights
                  </h2>
                  <p className="md:text-lg font-medium text-[#201048]">
                    We reserve the right, but disclaim any obligation or
                    responsibility, to remove any User-Generated Content from
                    any Trustx Gaming Site (a) that violates these terms of use
                    (including, without limitation, the House Rules) and (b) to
                    comply with any subpoena, order or otherwise cooperate with
                    law enforcement officials regarding the identification of
                    any user alleged to be using a Trustx Gaming Site in
                    violation of the law. If we deem appropriate in our sole
                    discretion, we reserve the right to preserve a record of any
                    such User-Generated Content and turn all or a portion
                    thereof over to law enforcement officials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditionContent;
