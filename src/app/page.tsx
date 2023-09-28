"use client"

import {Hero, Navbar, HowItWorks, AboutUs, Footer, Testimonials, Companies} from '@/components'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const navLi = document.querySelectorAll(".navigation ul li");
    window.onscroll = () => {
    var current:any = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id"); }
    });

    navLi.forEach((li) => {
        li.classList.remove("text-indigo-600");
        if (li.classList.contains(current)) {
        li.classList.add("text-indigo-600");
        }
    });
    };
})

  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  )
}
