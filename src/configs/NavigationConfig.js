import {
  DashboardOutlined,
  MailOutlined,
  FundOutlined,
  ShoppingCartOutlined,
  FileUnknownOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const generalNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "Основные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "1",
        path: `${APP_PREFIX_PATH}/`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "2",
        path: `${APP_PREFIX_PATH}/`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: true,
        submenu: [
          {
            key: "2-1",
            path: `${APP_PREFIX_PATH}/`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "2-2",
            path: `${APP_PREFIX_PATH}/`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "2-3",
            path: `${APP_PREFIX_PATH}/`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "2-4",
            path: `${APP_PREFIX_PATH}/`,
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "3",
        path: `${APP_PREFIX_PATH}/`,
        title: "Заказы",
        icon: FundOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "users",
        path: `${APP_PREFIX_PATH}/users`,
        title: "Клиенты",
        icon: "",
        breadcrumb: true,
        submenu: [
          {
            key: "user-list",
            path: `${APP_PREFIX_PATH}/users/user-list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "project-scrumboard",
            path: `${APP_PREFIX_PATH}/project/scrumboard`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "3-1",
        path: `${APP_PREFIX_PATH}/`,
        title: "Баннеры",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "4",
        path: `${APP_PREFIX_PATH}/`,
        title: "Промокоды",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "5",
        path: `${APP_PREFIX_PATH}/`,
        title: "Оффлайн точки",
        icon: "",
        breadcrumb: false,
        submenu: [
          {
            key: "5-1",
            path: `${APP_PREFIX_PATH}/`,
            title: "Адреса",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "5-2",
            path: `${APP_PREFIX_PATH}/`,
            title: "Геозоны",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "6",
        path: `${APP_PREFIX_PATH}/`,
        title: "Сотрудники",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "7",
        path: `${APP_PREFIX_PATH}/`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [
  {
    key: "1",
    path: `${APP_PREFIX_PATH}/`,
    title: "Системные",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "1-1",
        path: `${APP_PREFIX_PATH}/`,
        title: "Настройки",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "1-2",
        path: `${APP_PREFIX_PATH}/`,
        title: "Мобильное приложение",
        icon: "",
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "1-3",
        path: `${APP_PREFIX_PATH}/`,
        title: "Логи",
        icon: FileUnknownOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...generalNavTree, ...systemNavTree];

export default navigationConfig;
