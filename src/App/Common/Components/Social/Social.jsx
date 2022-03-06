import React from "react";
import "./Social.scss";
import tg from "../../assets/img/social/tg.svg";
import instagram from "../../assets/img/social/instagram.svg";
import youtube from "../../assets/img/social/youtube.svg";
import mail from "../../assets/img/social/mail.svg";

const socialData = [
  {
    id: 1,
    socialImg: tg,
    href: ''
  },
  {
    id: 2,
    socialImg: instagram,
    href: ''
  },
  {
    id: 3,
    socialImg: youtube,
    href: ''
  },
  {
    id: 4,
    socialImg: mail,
    href: ''
  }
]

export default function Social() {
  return (
    <div className="Social">
      {socialData.map((item) => {
        return (
        <a key={item.id} href={item.href} className="Social__item">
          <img src={item.socialImg} />
        </a>
        )
      })}
    </div>
  );
}
