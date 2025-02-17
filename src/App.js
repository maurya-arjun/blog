import BlogDetails from "./Components/BlogDetails";
import BlogList from "./Components/BlogList";
import blogImage1 from './Images/blog-1.jpg';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
                <Header menuLinks={menuLinks} />
            <div className="lg:w-[90%] mx-auto">
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

const menuLinks = [
    {id: 0, label: 'Home', href: '/', isActive: true},
    {id: 0, label: 'About', href: '/', isActive: false},
    {id: 0, label: 'Contact', href: '/', isActive: false}
];

const blogList = [
    {
        blogImage: blogImage1,
        blogTitle: 'What is Lorem Ipsum?',
        blogPublishDate: '2 Jaunary, 2025',
        blogTopic: 'Headless Commerce',
        blogCategory: 'eBooks',
        blogDescription: 'The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes ',
        publishBy: 'Person Name Person Name Person Name'
    },
    {
        blogImage: blogImage1,
        blogTitle: 'Why do we use it?',
        blogPublishDate: '3 Jaunary, 2025',
        blogTopic: 'Conversational AI',
        blogCategory: 'Webinar',
        blogDescription: 'The retail industry is undergoing a seismic transformation driven by technological advancements and changing consumer expectations. Autonomous stores, which eliminate the need for traditional checkout processes',
        publishBy: 'Person Name2'
    },
    {
        blogImage: blogImage1,
        blogTitle: 'Where does it come from?',
        blogPublishDate: '3 Jaunary, 2025',
        blogTopic: 'eCommerce Trends',
        blogCategory: 'Podcast',
        blogDescription: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        publishBy: 'Person Name2'
    }
]

export default App;
