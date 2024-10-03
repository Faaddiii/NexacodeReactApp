import React, { useEffect } from "react";
import IconCloud from "./IconCloud"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const slugs = [
    "csharp", "python", "angular", "dotnet", "microsoft", "apple", "amazon", "linux",
    "pycharm", "adobe", "typescript", "javascript", "dart", "java", "react", "flutter",
    "android", "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma", "amazonaws",
    "postgresql", "firebase", "nginx", "vercel", "testinglibrary", "jest", "cypress", "docker",
    "git", "jira", "github", "gitlab", "visualstudiocode", "androidstudio", "sonarqube", "figma",
    "graphql", "kubernetes", "swift", "scala", "redis", "flutterweb", "vuejs", "rust", "webassembly",
    "gcloud", "azure", "wordpress", "google", "bing", "yahoo", "whatsapp", "linkedin", "instagram",
    "facebook", "telegram", "youtube", "ios"
];

function IconCloudDemo() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div 
            className="bg-gradient-to-b from-transparent to-[#F8FAFC]" 
            data-aos="fade-up" // Apply AOS fade-up animation
        >
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default IconCloudDemo;
