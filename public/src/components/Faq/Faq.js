import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className='faq'>
      <div className="faq-cont">
        <h1 className="faq-title">Description alldaytrends.</h1>
        <p>
          A one-stop website to end your search for <b>Top Twitter hashtags and
          trends</b>. Find trends for over 400+ countries and cities. Know what is
          trending without even logging into Twitter. Find hashtag analysis of
          your city, country or any other location all over the world. Your
          popular hashtag search ends here.{" "}
        </p>
        <h2 className="faq-title">FAQ</h2>
        <h3>Why alldaytrends?</h3>
        <p>
          Since <b>Twitter trends</b> are real-time, it's impossible to view most
          tweeted topics a few hours ago on the Twitter website. An easy
          solution to that is Alldaytrends. You will be able to find Twitter’s
          most popular hashtags that are trending currently as well as hours
          ago. When you want a Twitter hashtag seach, alldaytrends helps you in
          evry possible way; from displaying the top 20 hashtags to where and
          when those topics were seen.
        </p>
        <h3>What is Twitter trend?</h3>
        <p>
          Twitter is a social platform where people from all over the world like
          to express their thoughts and opinions. Sometimes, these thoughts and
          opinions (topics) gain rapid attention and popularity in certain
          areas. For example, during popular events like- the olymic games,
          Oscars, etc, people tweet their thoughts about them on twitter. As
          soon as a topic stops gaining attention from the people, it is no
          longer considered as a trend on Twitter. Therefore, trends on twitter
          keep changing and since Twitter trends are realtime, it's not possible
          to view topics that were trending a few hours ago on Twitter website.
        </p>
        <h3>Why can I not find data for my country or city at all?</h3>
        <p classname="faq-content">
          We completely <b>rely on Twitter</b> when retrieving and processing trends.
          We try to collect the data for as many locations as practically
          possible, but for some of them Twitter simply doesn't provide any
          information.
        </p>
        <h3>How do we determine the most tweeted hashtags?</h3>
        <p>
          We find out the <b>highest tweet volume</b> with the data provided by Twitter
          for every trend at all the times. It represents total number of tweets
          worldwide. We find out the highest number of tweets that Twitter
          provides for every trend every time we check. It represents total
          number of tweets worldwide over previous 24 hours.
        </p>
      </div>
    </div>
  );
}

export default Faq;
