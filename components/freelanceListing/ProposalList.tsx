import { motion } from "framer-motion";
// import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProposalsList = ({ proposals }: { proposals: any[] }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {proposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            className="border p-4 rounded-lg shadow-md mb-4 bg-white dark:bg-gray-800 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-2">
              <div className="mr-3">
                <div
                //   src="https://via.placeholder.com/50"
                //   alt={proposal.freelancer}
                  className="w-12 h-12 rounded-full bg-gray-300"
                //   width={50}
                //   height={50}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{proposal.freelancer}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {proposal.username} | ⭐ {proposal.rating} ({proposal.reviews} reviews)
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{proposal.description}</p>
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-blue-500">{proposal.price}</span>
              <span className="text-gray-500">{proposal.deliveryTime}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  };