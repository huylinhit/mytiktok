import { HeaderOnly, ProfileLayout } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Profile from '~/pages/Profile';
import config from '~/config';

const publicRoutes = [
    { path: config.router.home, component: Home },
    { path: config.router.following, component: Following },
    { path: config.router.profile, component: Profile},
    { path: config.router.upload, component: Upload , layout: HeaderOnly},
    { path: config.router.search, component:  Search, layout: null},
]
const privateRoutes = {


} 
export {publicRoutes, privateRoutes}