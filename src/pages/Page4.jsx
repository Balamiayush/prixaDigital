import React from "react";

const tagData = [
  {
    id: "kurac1",
    tags: [
      "Landing Pages", "AI Solutions", "Landing Pages", "AI Solutions",
      "AI Solutions", "AI Solutions", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages",
    ],
  },
  {
    id: "kurac2",
    tags: [
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "AI Solutions", "Landing Pages", "AI Solutions", "AI Solutions",
      "AI Solutions", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages",
    ],
  },
  {
    id: "kurac3",
    tags: [
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages", "Landing Pages", "Landing Pages", "Landing Pages",
      "AI Solutions", "Landing Pages", "AI Solutions", "AI Solutions",
      "AI Solutions", "Landing Pages", "Landing Pages", "Landing Pages",
      "Landing Pages",
    ],
  },
];

const TagGroup = ({ tags, reverse }) => {
  const marqueeClass = reverse ? "marquee-track reverse" : "marquee-track";

  return (
    <div className="marquee-wrapper">
      <div className={marqueeClass}>
        {[...tags, ...tags].map((tag, idx) => (
          <div className="single-tag" key={idx}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

const Page4 = () => {
  return (
    <section className="section services-section">
      <div className="padding-global">
        <div className="container-default enterise-title">
          <h2 className="statement1">Enterprise-Grade Technology</h2>
          <div className="paragraph center">
            At Prixa, we build scalable, secure, and efficient digital
            solutions that power the future of your business.
          </div>
        </div>

        <div className="bg-wrapper">
          <div className="circle-logo top">
            <img
              src="images/prixa-logo.png"
              loading="lazy"
              alt="Prixa logo"
              className="image-5"
            />
          </div>

          <div className="circle-logo" />

          <img
            src="images/bg-blur-enterprise.png"
            loading="lazy"
            sizes="(max-width: 2878px) 100vw, 2878px"
            srcSet="
              images/bg-blur-enterprise-p-500.png 500w,
              images/bg-blur-enterprise-p-800.png 800w,
              images/bg-blur-enterprise-p-1080.png 1080w,
              images/bg-blur-enterprise-p-1600.png 1600w,
              images/bg-blur-enterprise-p-2000.png 2000w,
              images/bg-blur-enterprise-p-2600.png 2600w,
              images/bg-blur-enterprise.png 2878w
            "
            alt="Enterprise blur background"
            className="bg-enterprise image-4"
          />

          <div className="tags-slider space-y-4 mt-10">
            {tagData.map((group, index) => (
              <TagGroup
                key={group.id}
                tags={group.tags}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;
