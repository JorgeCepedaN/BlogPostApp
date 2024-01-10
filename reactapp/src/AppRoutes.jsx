import { Home } from './components/home';
import { CreateBlog } from './components/blog/createBlog';
import { ViewBlog } from './components/blog/viewBlog';
import { EditBlog } from './components/blog/editBlog';


const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/createBlog',
        element: <CreateBlog/>
    },
    {
        path: '/viewBlog/:id',
        element: <ViewBlog/>
    },
    {
        path: '/editBlog/:id',
        element: <EditBlog/>
    }
];

export default AppRoutes;