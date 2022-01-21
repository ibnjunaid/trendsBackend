import Trends from "./Trends.svg";
import Helmet from "react-helmet";

function AboutUs() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About alldaytrends.com</title>
        <meta
        name="description"
        content='About alldaytrends.com | Twitter trending hashtag and topics analysis.'
       />
       <meta name="twitter:title" content="About alldaytrends.com | Twitter trending hashtag and topics analysis." />
       <meta name="twitter:card" content="summary" />
       <meta property="og:site_name" content="alldaytrends" />
       <meta name="twitter:site" content="@alldaytrends1" />
       <meta name="theme-color" content="#017acd" />
       <meta property="og:type" content="website" />
      </Helmet> 
      <h1 className="title">ABOUT alldaytrends.</h1>
      <img
        src={Trends}
        rel="preload"
        alt="About"
        className="about-img"
        width={600}
        height={300}
      />
      <p className="tagLines">
        When you are looking for ways to increase your social media exposure,
        you need to know and keep up with topics that are trending on twitter all around
        the world. All Day Trends is exactly what you need for this.
      </p>
      <p className="tagLines">
        <b>All Day Trends</b> is a web-app where you can find trending topics of
        twitter from all over the world. With our website you can search for
        topics that were trending in the last 24 hours.
      </p>
      <p className="tagLines">
        We store and analyze <b>Twitter trends</b> to bring you insights on trending
        topics and help you keep up with the audience.
      </p>
      <p className="tagLines">
        Twitter reveals <b>trending topics</b> in its app. However, as those twitter trends are
        constantly changing it’s almost impossible to keep track of things, let
        alone monitor other locations. And that’s exactly where AllDayTrends
        shines offering you not only recent data but also historical twitter trending topics in
        major countries or cities worldwide.
      </p>
      <p className="tagLines">
        We provide <b>trending twitter hashtags</b> for over 400+ countries and cities.
      </p>
      <p className="tagLines">
        Available to everyone, even if you don't have any twitter account.
      </p>
    </div>
  );
}

export default AboutUs;
