import React from "react";
import styles from "./IconText.module.css";

import { IconType } from "react-icons";
import { LuClock4, LuPhone, LuMail } from "react-icons/lu";

//Defining the shape of the props for DynamicIcon
interface DynamicIconProps {
  iconName: keyof typeof iconMap;
  color?: string;
  size?: string |number;
}
//Define the icon map
const iconMap: Record<string, IconType> = {
  LuClock4: LuClock4,
  LuPhone: LuPhone,
  LuMail: LuMail,
};

const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
}: {
  iconName: string;
}) => {
  const IconComponent = iconMap[iconName];
  const style = {
    color: "red",
  };
  return <IconComponent style={style} />;
};

interface IconTextProps {
  iconsrc: string;
  text: string;
}

function IconText({ iconsrc, text }: IconTextProps) {
  return (
    <div className={styles.info__wrapper}>
      <DynamicIcon iconName={iconsrc} color="red"></DynamicIcon>
      <div className={styles.info__text}>{text}</div>
    </div>
  );
}

export default IconText;
