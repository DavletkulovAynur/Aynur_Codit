import React from "react";
import "./Social.scss";

import tg from "../../assets/img/social/tg.png";
import instagram from "../../assets/img/social/instagram.png";
import youtube from "../../assets/img/social/youtube.png";
import mail from "../../assets/img/social/mail.png";

const socialData = [
  {
    id: 1,
    socialImg: tg,
    href: "https://t.me/Davletkulov",
  },
  {
    id: 2,
    socialImg: instagram,
    href: "https://www.instagram.com/davletkulov/",
  },
  {
    id: 3,
    socialImg: youtube,
    href: "https://www.youtube.com/channel/UCKl6wSDQYfNdF3ENcdXB6vg",
  },
  {
    id: 4,
    socialImg: mail,
    href: "mailto:ainurikdav@gmail.com",
  },
];

export default function Social() {
  return (
    <div className="Social">
      {socialData.map((item) => {
        return (
          <a
            target="_blank"
            key={item.id}
            href={item.href}
            className="Social__item"
          >
            <img src={item.socialImg} />
          </a>
        );
      })}
    </div>
  );
}
