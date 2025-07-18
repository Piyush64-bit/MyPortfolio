"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Coffee, Heart, Zap } from "lucide-react";
import Profile from "../assets/Profile.jpg";

const stats = [
	{ icon: Code, number: "50+", label: "Projects Completed" },
	{ icon: Coffee, number: "1000+", label: "Cups of Coffee" },
	{ icon: Heart, number: "3+", label: "Years in Tech" },
	{ icon: Zap, number: "∞", label: "Passion for Learning" },
];

const timeline = [
	{
		year: "2022",
		event: "Started Programming Journey (C/C++) @ Bodacious IT Hub",
	},
	{ year: "2023", event: "Core Java Internship @ Learn & Build" },
	{ year: "2024", event: "AI/ML Internship @ IIT Guwahati" },
	{ year: "2025", event: "Java Full Stack Intern @ Groot Software" },
];

const skills = [
	"React",
	"TypeScript",
	"Node.js",
	"MongoDB",
	"Next.js",
	"Tailwind CSS",
	"Framer Motion",
];

const fadeIn = (direction = "up", delay = 0) => ({
	hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const About: React.FC = () => {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

	return (
		<section
			id="about"
			className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-[#050505] dark:to-black text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-500"
		>
			{/* Background Animation */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
				<div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Heading */}
				<motion.div
					className="text-center mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeIn("up", 0.2)}
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">
						About{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">
							Me
						</span>
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Full-stack developer passionate about building clean, scalable web
						applications.
					</p>
				</motion.div>

				{/* Profile & Bio */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
					<motion.div
						className="space-y-6"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn("up", 0.3)}
					>
						<motion.ul
							className="space-y-6 px-4 py-6 sm:px-8 sm:py-8 backdrop-blur-md rounded-2xl shadow-lg text-[17px] sm:text-lg leading-relaxed text-gray-800 dark:text-gray-300"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.4 }}
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.6, staggerChildren: 0.15 },
								},
							}}
						>
							{[
								`👋 Hey there! I’m <strong class="text-cyan-600 dark:text-cyan-400">Piyush Soni</strong>, a <strong>21-year-old</strong> final-year CSE student at <strong>Global Institute of Technology, Jaipur</strong> 🏫`,

								`📍 Living in <strong class="hover:text-pink-500 transition-colors duration-300">Jaipur</strong>, Rajasthan — where culture meets code 💻`,

								`💼 Currently interning as a <strong class="text-green-600 dark:text-green-400">Java Full Stack Developer</strong> at <strong>Groot Software</strong> <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 animate-pulse dark:bg-green-800 dark:text-green-100">🟢 Live</span>`,

								`🧠 I love building fast, scalable & aesthetic full-stack web apps — powered by clean code and caffeine ☕`,

								`⚙️ My tech stack? <span class="hover:text-cyan-500 transition">React</span>, <span class="hover:text-violet-500 transition">TypeScript</span>, <span class="hover:text-emerald-500 transition">Node.js</span>, <span class="hover:text-pink-500 transition">MongoDB</span>, <span class="hover:text-blue-500 transition">Tailwind</span>, <span class="hover:text-purple-400 transition">Framer Motion</span> and more!`,

								`📚 Lifelong learner — from <strong>Java</strong> and <strong>DSA</strong> to <strong>AI/ML</strong>, and every hot topic in between 🧑‍💻`,
							].map((text, i) => (
								<motion.li
									key={i}
									className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-cyan-500 dark:before:bg-cyan-400"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: i * 0.15 }}
									dangerouslySetInnerHTML={{ __html: text }}
								/>
							))}
						</motion.ul>
					</motion.div>

					{/* Profile Card */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeIn("up", 0.4)}
						className="relative"
					>
						<motion.div
							className="aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[480px] bg-gradient-to-br from-cyan-700 to-purple-700 dark:from-cyan-500 dark:to-purple-500 rounded-xl p-1 lg:ml-20 mx-auto"
							whileHover={{ rotateY: 10, rotateX: 5 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-4">
								<div className="w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-25 rounded-full mb-3 overflow-hidden flex items-center justify-center border-[3px] border-cyan-600 dark:border-cyan-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
									<img
										src={Profile}
										className="w-full h-full object-cover"
										alt="ProfilePic"
									/>
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
									Piyush Soni
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm text-center">
									Full Stack Developer
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Skills */}
				<motion.div className="flex flex-wrap justify-center gap-4 mb-16">
					{skills.map((skill, index) => (
						<motion.span
							key={index}
							className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
						>
							{skill}
						</motion.span>
					))}
				</motion.div>

				{/* Stats */}
				<motion.div
					className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeIn("up", 0.5)}
				>
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							className="text-center group hover:scale-105 transition-transform duration-300"
							whileHover={{ rotate: 6 }}
						>
							<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-2xl mb-4">
								<stat.icon size={24} className="text-white" />
							</div>
							<div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
								{stat.number}
							</div>
							<div className="text-gray-600 dark:text-gray-400 text-sm">
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className="flex flex-col md:flex-row gap-8">
					{/* Timeline Section */}
					<div className="flex-1">
						{/* Timeline */}
						<div className="mt-7">
							<motion.div
								style={{ y }}
								className="border-l-4 border-cyan-600 dark:border-cyan-500 pl-6 space-y-10"
							>
								<h3 className="text-3xl font-bold mb-2">
									<span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
										📊 Timeline
									</span>
								</h3>

								{timeline.map((item, index) => (
									<motion.div
										key={index}
										className="relative"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.2 }}
										viewport={{ once: true }}
									>
										<div className="absolute w-3 h-3 bg-cyan-600 dark:bg-cyan-500 rounded-full -left-[1.6rem] top-1.5" />
										<p className="text-gray-900 dark:text-white font-semibold">
											{item.year}
										</p>
										<p className="text-gray-700 dark:text-gray-300">
											{item.event}
										</p>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>

					{/* GitHub Vibes Section */}
					<div className="flex-1">
						<motion.div
							className="text-center space-y-8"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<h3 className="text-3xl font-bold mb-2">
								<span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
									📊 GitHub Vibes
								</span>
							</h3>

							<div className="space-y-6">
								<img
									src="https://github-readme-stats.vercel.app/api?username=piyush64-bit&show_icons=true&theme=tokyonight"
									alt="GitHub Stats"
									className="rounded-lg mx-auto max-w-[90%]"
									loading="lazy"
								/>
								<img
									src="https://streak-stats.demolab.com/?user=piyush64-bit&theme=tokyonight&hide_border=true"
									alt="GitHub Streak"
									className="rounded-lg mx-auto max-w-[90%]"
									loading="lazy"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
