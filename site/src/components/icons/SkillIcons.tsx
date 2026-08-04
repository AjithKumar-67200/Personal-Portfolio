import type { IconType } from "react-icons";
import {
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSpring,
  SiSpringboot,
  SiHibernate,
  SiLaravel,
  SiReact,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGit,
  SiApachemaven,
  SiPostman,
  SiSwagger,
  SiJsonwebtokens,
  SiDocker,
  SiOpenapiinitiative,
  SiClaude,
  SiCursor,
} from "react-icons/si";

/** Official Simple Icons brand marks for each skill. */
const skillIconMap: Record<string, IconType> = {
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  SQL: SiMysql,
  HTML: SiHtml5,
  CSS: SiCss,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpring,
  "Hibernate/JPA": SiHibernate,
  Laravel: SiLaravel,
  "React.js": SiReact,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Microservices: SiDocker,
  "REST APIs": SiOpenapiinitiative,
  JWT: SiJsonwebtokens,
  Git: SiGit,
  Maven: SiApachemaven,
  Postman: SiPostman,
  Swagger: SiSwagger,
  Cursor: SiCursor,
  Claude: SiClaude,
};

export function getSkillIcon(name: string): IconType {
  return skillIconMap[name] ?? SiGit;
}
