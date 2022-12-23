import dynamic from "next/dynamic";

const AboutView = dynamic(() => import("@views/about"), {
  ssr: false,
});

const AboutPage = () => {
  return <AboutView />;
};

export default AboutPage;
