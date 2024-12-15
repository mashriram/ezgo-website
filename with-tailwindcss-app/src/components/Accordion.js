import React from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ title, content }) => {
    return (
        <div className="mb-2 border rounded-md shadow-sm overflow-hidden">
            <div className="w-full text-left p-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors border-b">
                <span className="font-semibold text-gray-800">{title}</span>
            </div>
            <motion.div
                initial={true}
                animate={"open"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-4 text-gray-700"
            >
                <ul className="ml-4 list-disc space-y-2">
                    {Array.isArray(content) ?
                        content.map((point, index) => (
                            <li key={index} >{point}</li>
                        )) :
                        <li>{content}</li>
                    }
                </ul>
            </motion.div>
        </div>
    );
};

export default Accordion;