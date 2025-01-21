import BlogDetails from "./Components/BlogDetails";
import BlogList from "./Components/BlogList";
import blogImage1 from './Images/blog-1.jpg';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
            <div className="lg:w-[90%] mx-auto">
                <Header />
                {/* <BlogList /> */}
                <Routes>
                    <Route path="/" element={<BlogList blogList={blogList} />} />
                    <Route path="/blogDetails" element={<BlogDetails />} />
                </Routes>
            </div>
        </Router>
    </>
  );
}

const blogList = [
    {
        blogImage: blogImage1,
        blogTitle: 'Real-Life Examples of Autonomous Retail Success Stories',
        blogPublishDate: '2 Jaunary, 2025',
        blogDescription: 'The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes ',
        publishBy: 'Person Name'
    },
    {
        blogImage: blogImage1,
        blogTitle: 'Real-Life Examples of Autonomous Retail Success Stories',
        blogPublishDate: '3 Jaunary, 2025',
        blogDescription: 'The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes',
        publishBy: 'Person Name2'
    }
]

export default App;
