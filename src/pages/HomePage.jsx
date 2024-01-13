import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          New and Brisk Culinary - Culinary Excellence and Innovation
        </title>
        <meta
          name="description"
          content="culinary school, cullinary schools in Abuja, cullinary school Abuja, cooking classes Abuja, Cooking Classes chef training, hands-on cooking Abuja, New and Brisk, newandbrisk, newandbriskcullinary, newandbrisk cullinary,"
        />
        <meta
          name="keywords"
          content="culinary school, cullinary schools in Abuja, cullinary school Abuja, cooking classes, chef training, hands-on cooking, gastronomy"
        />
        <meta property="og:title" content="New and Brisk Culinary" />
        <meta
          property="og:keywords"
          content="culinary school, cullinary schools in Abuja, cullinary school Abuja, cooking classes Abuja, Cooking Classes chef training, hands-on cooking Abuja, New and Brisk, newandbrisk, newandbriskcullinary, newandbrisk cullinary,"
        />
        <meta
          property="og:description"
          content="Discover culinary excellence at New and Brisk. Learn from seasoned chefs, enjoy hands-on cooking, and elevate your skills."
        />
        <meta
          property="og:image"
          content="https://newandbrisk.com/assets/logo1-e6iBOoYm.png"
        />
        <meta property="og:url" content="https://newandbrisk.com/" />
      </Helmet>
      <Hero />
      <AboutIntro />
      <Testimonials />
      <CTA />
    </>
  );
}
