import {
    Dashboard as DashboardPage
} from '../pages/Admin';

let routes = [
    {
        path: "/main",
        name: "Главная",
        title: "Главная",
        icon: "home-active-icon",
        component: DashboardPage,
        layout: "/admin",
        show: true
    }
];

export default routes;
