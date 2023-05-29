import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container" value="author">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
