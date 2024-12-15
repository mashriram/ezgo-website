"use client";
import React from 'react';
import config from '../config';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import PricingCard from '../components/PricingCard';
import ListSection from '../components/ListSection';
import Timeline from '../components/Timeline';
import SwocAnalysis from '../components/SwocAnalysis';
import Footer from '../components/Footer';
import Table from '../components/Table';
import Card from '../components/Card';
import { motion } from 'framer-motion';

const fadeInVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        appName={config.app.name}
        navLinks={config.navLinks}
        logo={config.app.logo}
      />
      <Hero
        heading={config.hero.heading}
        description={config.hero.description}
        buttonText={config.hero.buttonText}
        logo={config.app.logo}
        backgroundImage="/ezgo-hero-bg.png"
      />
      <main className="container mx-auto py-12 px-4">
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.solution.heading}</h3>
          <p className="text-center mb-4">{config.solution.description}</p>
          <motion.ul
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="show"
            className="space-y-2"
          >
            {config.solution.features.map((feature, index) => (
              <motion.li key={index} variants={staggerItemVariants} className="ml-6 mb-2 text-gray-800 flex items-start">
                <span className="accent-color mr-2 inline-block mt-1 min-w-[10px] flex-none">•</span>
                <span className="flex-1" >{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12">
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.highlights.heading}</h3>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.highlights.cards.map((card, index) => (
              <motion.div key={index} variants={staggerItemVariants} className="flex-1">
                <FeatureCard  {...card} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12">
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show">
            <ListSection points={config.novelty.points} heading={config.novelty.heading} />
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12">
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show">
            <ListSection points={config.market.points} heading={config.market.heading} />
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.businessModel.heading}</h3>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={staggerItemVariants} className="flex-1">
              <Card>
                <h4 className="font-semibold mb-4 text-gray-700">Revenue Model</h4>
                <ul>
                  {config.businessModel.revenue.map((item, index) => (
                    <li key={index} className="ml-6 mb-2 text-gray-800 flex items-start">
                      <span className="accent-color mr-2 inline-block mt-1 min-w-[10px] flex-none">•</span>
                      <span className="flex-1" >{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div variants={staggerItemVariants} className="flex-1">
              <Card>
                <h4 className="font-semibold mb-4 text-gray-700">Sales Channels</h4>
                <ul>
                  {config.businessModel.salesChannels.map((item, index) => (
                    <li key={index} className="ml-6 mb-2 text-gray-800 flex items-start">
                      <span className="accent-color mr-2 inline-block mt-1 min-w-[10px] flex-none">•</span>
                      <span className="flex-1" >{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12" style={{ backgroundImage: `url('/ezgo-timeline-bg.png')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
          <Timeline {...config.timeline} />
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12" id="features">
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.features.heading}</h3>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.features.cards.map((card, index) => (
              <motion.div variants={staggerItemVariants} key={index} className="flex-1" >
                <FeatureCard  {...card} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12" id="pricing">
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.pricing.heading}</h3>
          <motion.div variants={staggerContainerVariants} initial="hidden" whileInView="show" className="flex flex-col md:flex-row gap-4 justify-center">
            {config.pricing.cards.map((card, index) => (
              <motion.div variants={staggerItemVariants} key={index} className="flex-1" >
                <PricingCard  {...card} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SwocAnalysis {...config.swoc} />
        </motion.section>
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-6 secondary-color text-center">{config.competition.heading}</h3>
          <Table {...config.competition.tableData} />
        </motion.section>
      </main>
      <Footer copyright={config.footer.copyright} />
    </div>
  );
};