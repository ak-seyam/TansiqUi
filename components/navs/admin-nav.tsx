import classes from "./styles.module.css";
import Link from "next/link";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";

import Home from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export enum AdminNavActivePage {
  HOME,
  CREATE_MAJOR,
  ADD_STUDENTS,
  ADD_ADMIN,
}

interface AdminNav {
  active: AdminNavActivePage;
}

interface NavItemProps {
  href: string;
  IconCmp: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  activeCondition: () => boolean;
  text: string;
  end?: boolean;
}

function NavItem({
  href,
  IconCmp,
  activeCondition,
  text,
  end = false,
}: NavItemProps) {
  return (
    <li
      className={`${classes["nav-item"]} ${
        classes[activeCondition() ? "nav-active" : "nav-inactive"]
      } ${end ? classes["end-icon"] : ""} 
	  `}
    >
      <Link href={href}>
        <div className={`${classes["icon-container"]} `}>
          <IconCmp fontSize="inherit" className={classes["icon"]} />
          <span className={classes["nav-text"]}>{text}</span>
        </div>
      </Link>
    </li>
  );
}

export default function AdminNav({ active }: AdminNav) {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["nav-container"]}>
        <NavItem
          IconCmp={Home}
          activeCondition={() => active === AdminNavActivePage.HOME}
          href="/admins"
          text="Home"
        />
        <NavItem
          IconCmp={LocationCityIcon}
          activeCondition={() => active === AdminNavActivePage.CREATE_MAJOR}
          href="/admins/createMajor"
          text="Create a major"
        />
        <NavItem
          IconCmp={GroupAddOutlinedIcon}
          activeCondition={() => active === AdminNavActivePage.CREATE_MAJOR}
          href="/admins/createStudents"
          text="Create student/s"
        />
        <NavItem
          IconCmp={PersonAddOutlinedIcon}
          activeCondition={() => active === AdminNavActivePage.CREATE_MAJOR}
          href="/admins/createAdmin"
          text="create admin"
        />
        <NavItem
          IconCmp={ExitToAppIcon}
          activeCondition={() => active === AdminNavActivePage.CREATE_MAJOR}
          href=""
          text="Logout"
          end
        />
      </ul>
    </nav>
  );
}
