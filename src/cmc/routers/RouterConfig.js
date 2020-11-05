import Login from "../pages/login/Login"
import PageNotFound from "../pages/other/PageNotFound";
import Index from "../pages/admin/model1/Index"
import List from "../pages/admin/model1/List"
import Edit from "../pages/admin/model1/Edit"

export const mainRoutes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: '/404',
        component: PageNotFound,
    },
];

export const adminRoutes = [
    {
        isShow: true,
        title: '看板',
        icon: 'iconjihuakanban',
        path: '/admin/model1/index',
        component: Index,
    },{
        isShow: true,
        title: '内容列表',
        icon: 'iconliebiao1',
        path: '/admin/model1/list',
        component: List,
    },{
        isShow: false,
        path: '/admin/model1/edit/:id?',
        component: Edit,
    },
];