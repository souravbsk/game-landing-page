import React from "react";

const Accordion = ({accBG}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 ">
      <div className="space-y-3">
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-[#000642] md:text-xl font-medium">
            01. What is TrustxGaming?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              TrustxGaming is an online gaming platform that allows users to
              play popular games like ludo, poker, rummy, and more, and earn
              crypto tokens in the form of TXG for their skills and
              achievements.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            02. How does TrustxGaming work?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              TrustxGaming operates on blockchain technology, which ensures that
              games are secure, transparent, and fair. Users can purchase TXG
              tokens using other cryptocurrencies or fiat, and use them to buy
              game coins to play games. As they win games, they can earn more
              TXG tokens, which can be traded or used for in-game purchases.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            03. What are TXG tokens?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              TXG tokens are the native crypto tokens of TrustxGaming. They
              serve as the in-game currency, which can be used to purchase game
              coins, in-game items, upgrades, and exclusive rewards. Users can
              also trade TXG tokens on external exchanges.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            04. How can I earn TXG tokens on TrustxGaming?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              Users can earn TXG tokens by winning games on TrustxGaming. The
              more games you win, the more TXG tokens you can earn. Users can
              also participate in special events, tournaments, and promotions to
              earn additional TXG tokens.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            05. Can I convert TXG tokens to other cryptocurrencies or fiat?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              Yes, users can trade TXG tokens on external exchanges for other
              cryptocurrencies or fiat, subject to the exchange`s terms and
              conditions.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            06. Is TrustxGaming safe and secure?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              Yes, TrustxGaming takes the security and integrity of its platform
              seriously. The use of blockchain technology ensures that games are
              secure and transparent. However, users are advised to take
              necessary precautions, such as securing their account credentials
              and following best security practices.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            07. What games are available on TrustxGaming?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              TrustxGaming offers a variety of popular games, including ludo,
              poker, rummy, and many more. The game library is continuously
              updated with new games to provide a diverse gaming experience for
              users.
            </p>
          </div>
        </div>
        <div className={`collapse collapse-arrow h-fit rounded-none text-white ${accBG ? "bg-[#F5F3FF]": "bg-[#F5F3FF]"}`}>
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title md:text-xl font-medium text-[#050505]">
            08. Can I play TrustxGaming games on mobile devices?
          </div>
          <div className="collapse-content text-[#050505]">
            <p>
              Yes, TrustxGaming is designed to be accessible on various devices,
              including desktop computers, tablets, and mobile phones. Users can
              enjoy gaming on the go with our mobile-friendly platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
