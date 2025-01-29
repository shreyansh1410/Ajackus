import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <motion.footer
      className="bg-white dark:bg-gray-800 shadow-md mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 User Management. All rights reserved.
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          asChild
        >
          <a
            href="https://github.com/shreyansh1410"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
    </motion.footer>
  );
}
