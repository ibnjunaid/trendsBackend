import siteMapBuilder, {getSites} from 'react-router-sitemap-builder'
import router from '../App';

getSites(router);

siteMapBuilder(router, 'https://alldaytrends.com', sitemap.txt);